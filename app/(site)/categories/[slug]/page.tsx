import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Search } from "lucide-react";
import { tools, ToolLogo } from "../../../catalog";
import { categoryPages, getCatalogUrl } from "../../../catalog-seo";
import { BreadcrumbJsonLd, socialMetadata } from "../../../seo";

type CategoryPageProps = { params: Promise<{ slug: string }>; searchParams: Promise<Record<string, string | string[] | undefined>> };

export const dynamicParams = false;

export function generateStaticParams() {
  return categoryPages.map(({ slug }) => ({ slug }));
}

async function getCategoryView({ params, searchParams }: CategoryPageProps) {
  const { slug } = await params;
  const query = await searchParams;
  const category = categoryPages.find((item) => item.slug === slug);
  if (!category || Array.isArray(query.page) || Array.isArray(query.q) || Array.isArray(query.sort)) notFound();
  if (query.page !== undefined && !/^[1-9]\d*$/.test(query.page)) notFound();
  const page = Number(query.page ?? "1");
  if (!Number.isSafeInteger(page)) notFound();
  const q = query.q?.trim() ?? "";
  const sort = query.sort ?? "featured";
  if (sort !== "featured" && sort !== "name") notFound();
  const matchingTools = tools.filter((tool) => tool.category === category.name && `${tool.name} ${tool.maker} ${tool.description}`.toLowerCase().includes(q.toLowerCase())).sort((a, b) => sort === "name" ? a.name.localeCompare(b.name) : 0);
  const pageCount = Math.max(1, Math.ceil(matchingTools.length / 10));
  if (page > pageCount) notFound();
  return { category, page, q, sort, matchingTools, pageCount, filtered: query.q !== undefined || query.sort !== undefined };
}

export async function generateMetadata(props: CategoryPageProps): Promise<Metadata> {
  const { category, page, filtered } = await getCategoryView(props);
  const title = `${category.title}${page > 1 ? ` — Page ${page}` : ""} | GetAI Tools`;
  const description = page > 1 ? `Page ${page} of ${category.name.toLowerCase()} tools on GetAI Tools. Continue comparing tool overviews and request available plans and pricing in USD.` : category.description;
  const canonical = getCatalogUrl({ category: category.name, page });
  return { title, description, alternates: { canonical }, robots: filtered ? { index: false, follow: true } : undefined, ...socialMetadata(title, description, canonical) };
}

export default async function CategoryPage(props: CategoryPageProps) {
  const { category, page, q, sort, matchingTools, pageCount } = await getCategoryView(props);
  const pageStart = (page - 1) * 10;
  const visibleTools = matchingTools.slice(pageStart, pageStart + 10);
  const paginationPages = Array.from({ length: pageCount }, (_, index) => index + 1);
  const categoryPath = `/categories/${category.slug}`;

  return <main className="info-page">
    <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "AI tool categories", path: "/categories" }, { name: category.name, path: getCatalogUrl({ category: category.name, page }) }]} />
    <section className="info-hero wrap" aria-labelledby="category-title">
      <div className="eyebrow section-eyebrow"><span className="section-line" /> THE TOOL EDIT{page > 1 ? ` / PAGE ${page}` : ""}</div>
      <h1 className="info-title" id="category-title">{category.title}<span>.</span>{page > 1 && <small> Page {page}</small>}</h1>
      <p className="info-lede">{page === 1 ? category.intro : `Continue exploring ${category.name.toLowerCase()} tools. Open a tool for its overview, capabilities and available plan inquiry options.`}</p>
      <nav className="launch-policy-nav" aria-label="Breadcrumb"><Link href="/">Home</Link><Link href="/categories">AI tool categories</Link><span aria-current="page">{category.name}{page > 1 ? ` — Page ${page}` : ""}</span></nav>
    </section>

    <section className="catalog-section wrap" id="tools" aria-label={category.title}>
      <div className="catalog-toolbar"><nav className="category-list" aria-label="Tool categories"><Link className="category" href="/#tools">All tools</Link>{categoryPages.map((item) => <Link className={item.slug === category.slug ? "category active" : "category"} aria-current={item.slug === category.slug ? "page" : undefined} key={item.slug} href={`/categories/${item.slug}`}>{item.name}</Link>)}</nav></div>
      <form action={categoryPath} method="get" className="catalog-toolbar" role="search"><label className="search-field"><Search size={16} /><input name="q" type="search" aria-label={`Search ${category.name.toLowerCase()} tools`} placeholder="Search this category…" defaultValue={q} /></label><label className="sort-control">Sort tools<select name="sort" aria-label="Sort tools" defaultValue={sort}><option value="featured">Curated for you</option><option value="name">Name: A–Z</option></select></label><button className="button button-primary" type="submit">Apply <ArrowRight size={15} /></button></form>
      <div className="results-bar"><span>{matchingTools.length ? `Showing ${pageStart + 1}–${Math.min(pageStart + 10, matchingTools.length)} of ${matchingTools.length} tools` : "0 tools found"}</span><Link className="text-link" href="/categories">All categories <ArrowUpRight size={14} /></Link></div>
      <div id="catalog-grid" className="product-grid">{visibleTools.map((tool, index) => <article className={`product-card product-${tool.id}`} key={tool.id} style={{ "--tool-accent": tool.accent, "--card-delay": `${Math.min(index, 7) * 45}ms` } as CSSProperties}>
        <Link className="product-visual" href={`/tools/${tool.id}`}><span className="product-tag">{tool.tag}</span><span className="visual-grid" /><span className="visual-orbit orbit-a" /><span className="visual-orbit orbit-b" /><span className="visual-logo"><ToolLogo id={tool.id} /></span><span className="visual-caption">{tool.shortDescription}</span><span className="visual-index">{String(pageStart + index + 1).padStart(2, "0")}</span></Link>
        <div className="product-content"><div className="product-category">{tool.category}</div><div className="product-title-row"><h2><Link href={`/tools/${tool.id}`}>{tool.name}</Link></h2><span className="maker">{tool.maker}</span></div><p>{tool.description}</p><div className="product-bottom"><Link className="details-link" href={`/tools/${tool.id}`}>Explore tool <ArrowUpRight size={14} /></Link></div></div>
      </article>)}</div>
      {!matchingTools.length && <div className="empty-search"><Search size={32} /><h2>No matching tools.</h2><p>Try a different name or clear the search to explore this category.</p><Link className="button button-primary" href={categoryPath}>Show category tools <ArrowRight size={16} /></Link></div>}
      {pageCount > 1 && <nav className="pagination" aria-label={`${category.name} pagination`}>{page > 1 ? <Link className="pagination-previous" rel="prev" href={`${getCatalogUrl({ category: category.name, page: page - 1, q, sort })}#tools`}><ArrowRight size={15} /><span>Previous</span></Link> : <span className="pagination-previous" aria-disabled="true">Previous</span>}<div className="pagination-pages">{paginationPages.map((item) => <Link key={item} aria-label={`Go to page ${item}`} aria-current={page === item ? "page" : undefined} href={`${getCatalogUrl({ category: category.name, page: item, q, sort })}#tools`}>{item}</Link>)}</div>{page < pageCount ? <Link className="pagination-next" rel="next" href={`${getCatalogUrl({ category: category.name, page: page + 1, q, sort })}#tools`}><span>Next</span><ArrowRight size={15} /></Link> : <span className="pagination-next" aria-disabled="true">Next</span>}</nav>}
      <p className="catalog-footnote"><span className="status-dot" /> Compare first. Confirm current availability, access and the final USD quote before payment.</p>
    </section>

    {page === 1 && !q && sort === "featured" && <section className="info-section wrap" aria-labelledby="category-guide"><div className="info-section-heading"><div className="eyebrow section-eyebrow"><span className="section-line" /> CHOOSE WITH A CLEAR BRIEF</div><h2 id="category-guide">How to compare<br /><span>{category.name.toLowerCase()} tools.</span></h2><p>Use these questions to narrow your shortlist and discuss the specific plan you need.</p></div><div className="info-cards">{category.buyingGuide.map((guide, index) => <article className="info-card" key={guide}><div className="info-card-number"><span>0{index + 1}</span><ArrowUpRight size={20} /></div><h3>{["Match your workflow", "Check the plan details", "Review before you commit"][index]}</h3><p>{guide}</p></article>)}</div></section>}
    <section className="info-cta wrap"><div><div className="eyebrow">A SHORTLIST IS A STARTING POINT.</div><h2>Ask about <span>your plan.</span></h2><p>Discuss current availability, access, duration, usage limits and USD pricing before payment.</p></div><Link className="button button-primary" href="/contact">Contact GetAI Tools <ArrowUpRight size={18} /></Link></section>
  </main>;
}
