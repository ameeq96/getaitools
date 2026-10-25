import { createHmac } from "node:crypto";
import { tools } from "../catalog";
import { getToolPlans } from "../sample-plans";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const headers = { "Cache-Control": "private, no-store", "Referrer-Policy": "no-referrer", "X-Robots-Tag": "noindex, nofollow" };

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tool = tools.find((item) => item.id === searchParams.get("tool"));
  const plan = tool && getToolPlans(tool.id).find((item) => item.id === searchParams.get("plan"));
  if (!tool || !plan || plan.status === "Unavailable") return Response.json({ error: "This plan is not available for checkout." }, { status: 404, headers });
  const amountMinor = Math.round(plan.priceUsd * 100);
  if (!Number.isFinite(plan.priceUsd) || plan.priceUsd <= 0 || !Number.isSafeInteger(amountMinor) || amountMinor <= 0) return Response.json({ error: "This plan requires a quote." }, { status: 400, headers });

  const selectedPlan = {
    v: 1,
    source: "getaitools",
    tool_id: tool.id,
    tool_name: tool.name,
    plan_id: plan.id,
    plan_name: plan.name,
    amount_minor: amountMinor,
    currency: "USD",
    duration: plan.duration,
    access: plan.access,
    note: plan.note
  };
  if (searchParams.get("format") === "json") return Response.json(selectedPlan, { headers });

  const secret = process.env.GETAI_CHECKOUT_SECRET?.trim();
  if (!secret || secret.length < 32) return Response.json({ error: "Checkout is temporarily unavailable. Please request a quote." }, { status: 503, headers });
  const selection = Buffer.from(JSON.stringify({ ...selectedPlan, exp: Math.floor(Date.now() / 1000) + 600 })).toString("base64url");
  const signature = createHmac("sha256", secret).update(selection).digest("base64url");
  const checkoutUrl = new URL("https://opplexify.com/ai-checkout");
  checkoutUrl.searchParams.set("selection", selection);
  checkoutUrl.searchParams.set("signature", signature);
  return new Response(null, { status: 307, headers: { ...headers, Location: checkoutUrl.toString() } });
}
