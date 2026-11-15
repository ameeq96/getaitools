import type { MetadataRoute } from "next";
import { tools, type ToolId } from "./catalog";
import { categoryPages, comparePairs, getCatalogUrl, getCategoryPageCount } from "./catalog-seo";
import { getToolPlans, pricingUpdatedOn } from "./sample-plans";
import { siteUrl } from "./seo";
import { toolContent } from "./tool-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/about", "/how-it-works", "/faqs", "/contact", "/delivery", "/privacy", "/terms", "/refunds", "/categories", "/compare/chatgpt-vs-claude", ...comparePairs.map((pair) => `/compare/${pair.join("-vs-")}`)];
  for (let page = 2; page <= Math.ceil(tools.length / 10); page += 1) pages.push(getCatalogUrl({ page }));
  for (const category of categoryPages) {
    for (let page = 1; page <= getCategoryPageCount(category.name); page += 1) pages.push(getCatalogUrl({ category: category.name, page }));
  }
  // Only dates the pages themselves show. Tools and pair comparisons: the review date and, where plans are listed, the pricing update date, whichever is later.
  const shownDates: Record<string, string> = { "/compare/chatgpt-vs-claude": "2026-10-22" };
  const lastModified = (path: string) => {
    const pair = comparePairs.find((item) => `/compare/${item.join("-vs-")}` === path);
    const ids: string[] = path.startsWith("/tools/") ? [path.slice(7)] : pair ?? [];
    return shownDates[path] ?? ids.flatMap((id) => [toolContent[id as ToolId]?.reviewedOn, getToolPlans(id).length > 0 ? pricingUpdatedOn : undefined]).filter(Boolean).sort().pop();
  };
  return [...pages, ...tools.map((tool) => `/tools/${tool.id}`)].map((path) => {
    const date = lastModified(path);
    return { url: `${siteUrl}${path}`, ...(date ? { lastModified: date } : {}) };
  });
}
