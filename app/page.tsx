import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Home from "./home";
import { tools } from "./catalog";
import { getCatalogUrl } from "./catalog-seo";

type CatalogSearchParams = Promise<Record<string, string | string[] | undefined>>;

async function getCatalogState(searchParams: CatalogSearchParams) {
  const params = await searchParams;
  const pageValue = params.page;
  if (Array.isArray(pageValue) || (pageValue !== undefined && !/^[1-9]\d*$/.test(pageValue))) notFound();
  const page = Number(pageValue ?? "1");
  const q = (Array.isArray(params.q) ? params.q[0] : params.q)?.trim() ?? "";
  const sort = (Array.isArray(params.sort) ? params.sort[0] : params.sort) === "name" ? "name" : "featured";
  const count = tools.filter((tool) => `${tool.name} ${tool.maker} ${tool.description}`.toLowerCase().includes(q.toLowerCase())).length;
  if (!Number.isSafeInteger(page) || page > Math.max(1, Math.ceil(count / 10))) notFound();
  return { page, q, sort, hasFilters: params.q !== undefined || params.sort !== undefined };
}

export async function generateMetadata({ searchParams }: { searchParams: CatalogSearchParams }): Promise<Metadata> {
  const { page, hasFilters } = await getCatalogState(searchParams);
  const title = `AI Tools, Plans & USD Quotes${page > 1 ? ` — Page ${page}` : ""} | GetAI Tools`;
  const description = "Explore AI tools for writing, coding, design, research, video and more. Compare what each tool does and request current plans, availability and quotes in USD.";
  const canonical = getCatalogUrl({ page });
  return {
    title,
    description,
    alternates: { canonical },
    robots: hasFilters ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: { title, description, url: canonical, type: "website", siteName: "GetAI Tools" }
  };
}

export default async function Page({ searchParams }: { searchParams: CatalogSearchParams }) {
  const { page, q, sort } = await getCatalogState(searchParams);
  return <Home initialPage={page} initialSearch={q} initialSort={sort} />;
}
