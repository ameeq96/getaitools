import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tools } from "../../../catalog";
import { categoryPages, comparePairs } from "../../../catalog-seo";
import { BreadcrumbJsonLd, JsonLd, siteUrl, socialMetadata } from "../../../seo";
import { toolContent } from "../../../tool-content";
import { getToolPlans } from "../../../sample-plans";

type ComparePageProps = { params: Promise<{ pair: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return comparePairs.map((pair) => ({ pair: pair.join("-vs-") }));
}

function getPair(slug: string) {
  const pair = comparePairs.find((item) => item.join("-vs-") === slug);
  if (!pair) notFound();
  return pair.map((id) => tools.find((tool) => tool.id === id)!);
}

function getPageText(slug: string) {
  const [first, second] = getPair(slug);
  return {
    title: `${first.name} vs ${second.name}: Side by Side | GetAI Tools`,
    description: `See ${first.name} and ${second.name} side by side: descriptions, makers, use cases, official links and the plans GetAI Tools lists in USD.`
  };
}

export async function generateMetadata({ params }: ComparePageProps): Promise<Metadata> {
  const { pair } = await params;
  const { title, description } = getPageText(pair);
  return { title, description, alternates: { canonical: `/compare/${pair}` }, ...socialMetadata(title, description, `/compare/${pair}`) };
}

export default async function ComparePage({ params }: ComparePageProps) {
  const { pair } = await params;
  const pairTools = getPair(pair);
  const [first, second] = pairTools;
  const { description } = getPageText(pair);
  const category = categoryPages.find((item) => item.name === first.category);
  const categoryPath = category ? `/categories/${category.slug}` : "/categories";
  const reviewedOn = (date: string) => <time dateTime={date}>{new Intl.DateTimeFormat("en", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`))}</time>;

  return <main className="info-page launch-policy">
    <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: first.category, path: categoryPath }, { name: `${first.name} vs ${second.name}`, path: `/compare/${pair}` }]} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "WebPage", "@id": `${siteUrl}/compare/${pair}#webpage`, url: `${siteUrl}/compare/${pair}`, name: `${first.name} vs ${second.name} side by side`, description, inLanguage: "en", isPartOf: { "@id": `${siteUrl}/#website` }, about: pairTools.map((tool) => ({ "@type": "Thing", name: tool.name, ...(toolContent[tool.id] ? { sameAs: toolContent[tool.id]!.officialUrl } : {}) })) }} />
    <section className="info-hero wrap" aria-labelledby="comparison-title">
      <div className="eyebrow section-eyebrow"><span className="section-line" /> CHOOSE FOR THE WORK YOU DO</div>
      <h1 className="info-title" id="comparison-title">{first.name} vs {second.name}<br /><span>side by side.</span></h1>
      <p className="info-lede">{first.name} and {second.name} are both listed under {first.category} on GetAI Tools. This page puts their catalogue details side by side so you can check each tool before choosing a plan.</p>
      <nav className="launch-policy-nav" aria-label="Explore the tools">{pairTools.map((tool) => <Link href={`/tools/${tool.id}`} key={tool.id}>Explore {tool.name}</Link>)}<Link href={categoryPath}>More {first.category.toLowerCase()} tools</Link></nav>
    </section>

    <div className="wrap">
      <section className="launch-policy-section" aria-labelledby="comparison-table-title">
        <h2 id="comparison-table-title">Catalogue details, side by side</h2>
        <div className="seo-comparison-scroll" tabIndex={0} role="region" aria-label={`Scrollable ${first.name} and ${second.name} comparison`}>
          <table className="seo-comparison-table">
            <caption>Details from each tool’s GetAI Tools listing</caption>
            <thead><tr><th scope="col">Detail</th>{pairTools.map((tool) => <th scope="col" key={tool.id}>{tool.name}</th>)}</tr></thead>
            <tbody>
              <tr><th scope="row">Description</th>{pairTools.map((tool) => <td key={tool.id}>{tool.description}</td>)}</tr>
              <tr><th scope="row">Developed by</th>{pairTools.map((tool) => <td key={tool.id}>{tool.maker}</td>)}</tr>
              <tr><th scope="row">Category</th>{pairTools.map((tool) => <td key={tool.id}>{tool.category}</td>)}</tr>
              <tr><th scope="row">Features and use cases</th>{pairTools.map((tool) => <td key={tool.id}>{tool.features.map((feature) => <span key={feature}>{feature}<br /></span>)}</td>)}</tr>
              <tr><th scope="row">Who it can suit</th>{pairTools.map((tool) => <td key={tool.id}>{toolContent[tool.id]?.bestFor.map((item) => <span key={item}>{item}<br /></span>)}</td>)}</tr>
              <tr><th scope="row">Plans listed in USD</th>{pairTools.map((tool) => { const plans = getToolPlans(tool.id).length; return <td key={tool.id}>{plans > 0 ? `${plans} ${plans === 1 ? "plan" : "plans"} to compare` : "Request pricing"}<br /><Link href={`/tools/${tool.id}#tool-pricing`}>{plans > 0 ? "View all USD plans" : "Request a USD quote"}</Link></td>; })}</tr>
              <tr><th scope="row">Official information</th>{pairTools.map((tool) => <td key={tool.id}>{toolContent[tool.id] && <a href={toolContent[tool.id]!.officialUrl} target="_blank" rel="noopener noreferrer">{tool.name} official site</a>}</td>)}</tr>
              <tr><th scope="row">Tool page</th>{pairTools.map((tool) => <td key={tool.id}><Link href={`/tools/${tool.id}`}>Explore {tool.name}</Link></td>)}</tr>
            </tbody>
          </table>
        </div>
        <p>These descriptions establish possible uses. They do not measure comparative quality or confirm which features a particular quotation includes.</p>
      </section>

      {category && <section className="launch-policy-section" aria-labelledby="comparison-guide">
        <h2 id="comparison-guide">How to compare {category.name.toLowerCase()} tools</h2>
        <p>Use these questions to narrow your shortlist and discuss the specific plan you need.</p>
        <ul>{category.buyingGuide.map((guide, index) => <li key={guide}><strong>{["Match your workflow", "Check the plan details", "Review before you commit"][index]}:</strong> {guide}</li>)}</ul>
      </section>}

      <section className="launch-policy-section" aria-labelledby="comparison-plans">
        <h2 id="comparison-plans">Confirm the offer before choosing</h2>
        <p>Check the exact plan, account ownership, access method, file and tool availability, usage allowances, data controls, final USD price, and support. GetAI Tools is an independent storefront. Product names and marks belong to their respective owners. <Link href="/contact">Contact us to confirm current access and terms</Link>.</p>
      </section>

      <section className="launch-policy-section" aria-labelledby="comparison-sources">
        <h2 id="comparison-sources">Official product sources</h2>
        {pairTools.map((tool) => { const content = toolContent[tool.id]; return content && <div key={tool.id}><h3>{tool.name}</h3><p>Product information reviewed on {reviewedOn(content.reviewedOn)}.</p><ul>{content.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.title}</a></li>)}</ul></div>; })}
        <p>Features and plan details can change; check the provider’s current information.</p>
      </section>
    </div>
  </main>;
}
