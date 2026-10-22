import type { MetadataRoute } from "next";
import { tools } from "./catalog";
import { categoryPages, getCatalogUrl, getCategoryPageCount } from "./catalog-seo";
import { siteUrl } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/about", "/how-it-works", "/faqs", "/contact", "/delivery", "/privacy", "/terms", "/refunds", "/categories", "/compare/chatgpt-vs-claude"];
  for (let page = 2; page <= Math.ceil(tools.length / 10); page += 1) pages.push(getCatalogUrl({ page }));
  for (const category of categoryPages) {
    for (let page = 1; page <= getCategoryPageCount(category.name); page += 1) pages.push(getCatalogUrl({ category: category.name, page }));
  }
  return [...pages, ...tools.map((tool) => `/tools/${tool.id}`)].map((path) => ({ url: `${siteUrl}${path}` }));
}
