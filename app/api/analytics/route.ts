import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { tools } from "../../catalog";
import { categoryPages } from "../../catalog-seo";
import { measurementEvents, type MeasurementEvent } from "../../inquiry-metrics";

export const runtime = "nodejs";

const knownPages = new Set([
  "/", "/about", "/contact", "/toolkit", "/how-it-works", "/faqs", "/delivery", "/privacy", "/terms", "/refunds", "/categories", "/compare/chatgpt-vs-claude",
  ...tools.map((tool) => "/tools/" + tool.id),
  ...categoryPages.map((category) => "/categories/" + category.slug)
]);
const directory = process.env.GETAI_ANALYTICS_DIR || (process.platform === "linux" && process.env.NODE_ENV === "production" ? "/var/lib/getaitools/analytics" : path.join(tmpdir(), "getaitools-analytics"));
let writes: Promise<void> = Promise.resolve();
let minute = 0;
let requests = 0;

type DailyCounts = { version: 1; date: string; counts: Partial<Record<MeasurementEvent, Record<string, number>>> };

function response(status: number) {
  return new Response(null, { status, headers: { "Cache-Control": "no-store" } });
}

async function limitedBody(request: Request) {
  if (!request.body) throw new Error("Missing body");
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > 512) { await reader.cancel(); throw new Error("Body too large"); }
    chunks.push(value);
  }
  return JSON.parse(Buffer.concat(chunks).toString("utf8")) as unknown;
}

async function increment(event: MeasurementEvent, page: string) {
  const date = new Date().toISOString().slice(0, 10);
  const filename = path.join(directory, date + ".json");
  await mkdir(directory, { recursive: true, mode: 0o700 });
  let daily: DailyCounts;
  try {
    daily = JSON.parse(await readFile(filename, "utf8")) as DailyCounts;
    if (daily.version !== 1 || daily.date !== date || !daily.counts || typeof daily.counts !== "object") throw new Error("Invalid aggregate");
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error;
    daily = { version: 1, date, counts: {} };
  }
  const counts = daily.counts[event] ?? (daily.counts[event] = {});
  counts[page] = (counts[page] || 0) + 1;
  const temporary = filename + ".tmp";
  await writeFile(temporary, JSON.stringify(daily), { mode: 0o600 });
  await rename(temporary, filename);
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const ownOrigin = new URL(request.url).origin;
  const localOrigin = !!origin && /^http:\/\/(?:127\.0\.0\.1|localhost):[0-9]+$/.test(origin) && new URL(origin).host === request.headers.get("host");
  if (!origin || (origin !== ownOrigin && origin !== "https://getaitools.shop" && !localOrigin)) return response(403);
  const fetchSite = request.headers.get("sec-fetch-site");
  if (fetchSite && fetchSite !== "same-origin" && fetchSite !== "none") return response(403);
  if (!request.headers.get("content-type")?.startsWith("application/json")) return response(415);
  const currentMinute = Math.floor(Date.now() / 60000);
  if (currentMinute !== minute) { minute = currentMinute; requests = 0; }
  if (++requests > 240) return response(429);

  let event: MeasurementEvent;
  let page: string;
  try {
    const body = await limitedBody(request);
    if (!body || typeof body !== "object" || Array.isArray(body)) return response(400);
    const payload = body as Record<string, unknown>;
    if (Object.keys(payload).length !== 2 || typeof payload.event !== "string" || typeof payload.page !== "string") return response(400);
    if (!measurementEvents.includes(payload.event as MeasurementEvent) || !knownPages.has(payload.page)) return response(400);
    event = payload.event as MeasurementEvent;
    page = payload.page;
    if (event === "tool_view" && !page.startsWith("/tools/")) return response(400);
    if (event === "inquiry_prepared" && !["/", "/contact", "/toolkit"].includes(page)) return response(400);
  } catch { return response(400); }

  const write = writes.then(() => increment(event, page));
  writes = write.catch(() => {});
  try { await write; return response(204); } catch { return response(503); }
}
