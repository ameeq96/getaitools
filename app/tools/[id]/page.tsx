import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronRight, Layers3, ShoppingBag, Sparkles } from "lucide-react";
import { tools, ToolLogo, type Tool } from "../../catalog";
import ToolActions from "./tool-actions";
import BusinessLinks from "../../business-links";
import { getCategorySlug } from "../../catalog-seo";
import { BreadcrumbJsonLd, JsonLd, siteUrl, socialMetadata } from "../../seo";
import { toolContent } from "../../tool-content";
import { formatUsd, getToolPlans, getToolPriceLabel, getToolPricingModel, pricingUpdatedOn } from "../../sample-plans";
import { whatsappUrl } from "../../business";

type ToolPageProps = { params: Promise<{ id: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return tools.map((tool) => ({ id: tool.id }));
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { id } = await params;
  const tool = tools.find((item) => item.id === id);
  if (!tool) notFound();
  const description = tool.description + " Request available plans and a USD quote.";
  return {
    title: `${tool.name} Features & USD Quotes | GetAI Tools`,
    description,
    alternates: { canonical: `/tools/${tool.id}` },
    ...socialMetadata(`${tool.name} Features & USD Quotes | GetAI Tools`, description, `/tools/${tool.id}`)
  };
}

function getRelatedTools(tool: Tool) {
  const peers = tools.filter((item) => item.category === tool.category);
  const index = peers.findIndex((item) => item.id === tool.id);
  const neighbors = [peers[(index + 1) % peers.length], peers[(index + peers.length - 1) % peers.length]].filter((item) => item.id !== tool.id);
  const ignored = new Set(["your", "with", "from", "into", "create", "explore", "ideas", "build", "develop", "generate", "through", "work", "tools", "content", "more", "using"]);
  const terms = new Set(tool.features.join(" ").toLowerCase().match(/[a-z]{3,}/g)?.filter((term) => !ignored.has(term)));
  const alternatives = peers.filter((item) => item.id !== tool.id && !neighbors.some((neighbor) => neighbor.id === item.id));
  const score = (item: Tool) => new Set(item.features.join(" ").toLowerCase().match(/[a-z]{3,}/g)?.filter((term) => terms.has(term))).size;
  alternatives.sort((a, b) => score(b) - score(a));
  return [...(alternatives[0] ? [alternatives[0]] : []), ...neighbors].filter((item, position, items) => items.findIndex((other) => other.id === item.id) === position).slice(0, 3);
}

function Brand() {
  return <span className="brand"><span className="brand-mark" aria-hidden="true">g<span>✦</span></span><span>getai<span className="brand-tools">tools</span><span className="brand-dot">.</span></span></span>;
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { id } = await params;
  const tool = tools.find((item) => item.id === id);
  if (!tool) notFound();
  const relatedTools = getRelatedTools(tool);
  const content = toolContent[tool.id];
  const categoryPath = `/categories/${getCategorySlug(tool.category)}`;
  const plans = getToolPlans(tool.id);
  const pricingModel = getToolPricingModel(tool.id);

  return <>
    <BreadcrumbJsonLd items={[{ name: "AI tools", path: "/" }, { name: tool.category, path: categoryPath }, { name: tool.name, path: `/tools/${tool.id}` }]} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "WebPage", "@id": `${siteUrl}/tools/${tool.id}#webpage`, url: `${siteUrl}/tools/${tool.id}`, name: `${tool.name} features and USD quotes`, description: tool.description, inLanguage: "en", isPartOf: { "@id": `${siteUrl}/#website` }, about: { "@type": "Thing", name: tool.name, ...(content ? { sameAs: content.officialUrl } : {}) }, ...(content ? { dateModified: content.reviewedOn } : {}) }} />
    <div className="announcement"><span><Sparkles size={13} /> A little upgrade. A whole lot of possibility.</span><span>Curated AI tools. All in one place. <ArrowUpRight size={12} /></span></div>
    <header className="header wrap">
      <Link href="/" className="brand-link"><Brand /></Link>
      <nav className="tool-page-nav" aria-label="Main navigation"><Link href="/#tools">The collection</Link><Link href="/how-it-works">How it works</Link></nav>
      <div className="header-actions"><span className="currency">USD <span>$</span></span><span className="header-divider" /><Link className="toolkit-button" href="/toolkit" aria-label="Your toolkit"><ShoppingBag size={17} /><span>Your toolkit</span><ArrowUpRight size={13} /></Link></div>
    </header>

    <main className="tool-page" style={{ "--tool-accent": tool.accent } as CSSProperties}>
      <nav className="tool-breadcrumbs wrap" aria-label="Breadcrumb"><Link href="/"><ArrowLeft size={13} /> AI tools</Link><ChevronRight size={12} /><Link href={categoryPath}>{tool.category}</Link><ChevronRight size={12} /><span aria-current="page">{tool.name}</span></nav>

      <section className="tool-hero wrap" aria-labelledby="tool-title">
        <div className="tool-intro">
          <div className="eyebrow section-eyebrow"><span className="section-line" /> YOUR NEXT ADVANTAGE</div>
          <div className="tool-identity"><span className="tool-icon"><ToolLogo id={tool.id} /></span><span className="tool-maker">{tool.category}<small>By {tool.maker}</small></span></div>
          <h1 className="tool-title" id="tool-title">{tool.name}<span>.</span></h1>
          <div className="tool-hero-price" aria-label={`${tool.name} pricing in USD`}><span>PRICING IN USD</span><strong>{getToolPriceLabel(tool.id)}</strong></div>
          <p className="tool-lede">{tool.shortDescription}</p>
          <p className="tool-description">{tool.description}</p>
          <div className="tool-hero-actions"><a className="button button-primary" href="#tool-pricing">{plans.length || pricingModel ? "View pricing" : "Request pricing"} <ArrowUpRight size={18} /></a><Link className="text-link" href="/#tools">Keep exploring <ArrowRight size={16} /></Link></div>
        </div>
        <div className={`tool-art product-${tool.id}`} aria-hidden="true">
          <span className="tool-art-grid" /><span className="tool-art-orbit" /><span className="tool-art-orbit tool-art-orbit-second" />
          <div className="tool-art-top"><span className="mini-brand">g<span>✦</span></span><span>THE TOOL EDIT</span><ArrowUpRight size={19} /></div>
          <div className="tool-art-logo"><ToolLogo id={tool.id} /></div>
          <span className="tool-art-name">{tool.name}</span><span className="tool-art-caption">{tool.shortDescription}</span>
          <div className="tool-art-bottom"><span>{tool.tag}</span><span>MORE POSSIBLE. <Sparkles size={13} /></span></div>
        </div>
      </section>

      <div className="tool-editorial tool-top-pricing wrap">
        <section className="tool-sample-plans tool-usd-plans" id="tool-pricing"><span className="eyebrow">PLANS &amp; PRICING</span><h2>{plans.length ? `${tool.name} plans in USD` : pricingModel ? `${tool.name} pricing` : "Request pricing"}</h2><p>{plans.length ? "Prices are USD totals for the duration shown. Confirm the exact plan, availability, account access and support terms before payment." : pricingModel?.description || `Contact us for available ${tool.name} plans, duration, access details and a USD quote.`}</p>{plans.length > 0 && <><p className="tool-editorial-note">Prices updated <time dateTime={pricingUpdatedOn}>{new Intl.DateTimeFormat("en", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${pricingUpdatedOn}T00:00:00Z`))}</time>.</p><div>{plans.map((plan) => <article key={plan.id}><span className="tool-price-status">Confirm availability</span><h3>{plan.name}</h3><strong>{formatUsd(plan.priceUsd)} <span>USD</span></strong><p className="tool-price-term">{plan.duration}</p><p>{plan.access}</p>{plan.note && <p>{plan.note}</p>}<a className="tool-price-inquiry" href={`/checkout?tool=${encodeURIComponent(tool.id)}&plan=${encodeURIComponent(plan.id)}`} target="_blank" rel="noopener noreferrer">Continue to checkout <ArrowUpRight size={14} /></a></article>)}</div></>}{!plans.length && <>{pricingModel && <p><a className="text-link" href={pricingModel.sourceUrl} target="_blank" rel="noopener noreferrer">View provider pricing <ArrowUpRight size={15} /></a></p>}<a className="text-link tool-price-request" href={whatsappUrl(pricingModel?.kind === "free" ? `Hi GetAI Tools! I'd like help setting up ${tool.name}. I understand provider access is free and hosting, API usage or setup services may cost extra.\n\nFrom https://getaitools.shop/tools/${tool.id}#tool-pricing` : `Hi GetAI Tools! Please send available ${tool.name} plans, duration, access details and current pricing in USD.\n\nFrom https://getaitools.shop/tools/${tool.id}#tool-pricing`)} target="_blank" rel="noopener noreferrer">{pricingModel?.kind === "free" ? "Ask about setup" : "Request a USD quote"} <ArrowUpRight size={15} /></a></>}</section>
      </div>

      <div className="tool-facts wrap" aria-label="Tool overview"><div><Layers3 size={17} /><span>MADE FOR<strong>{tool.category}</strong></span></div><div><Sparkles size={17} /><span>DEVELOPED BY<strong>{tool.maker}</strong></span></div><div><ShoppingBag size={17} /><span>YOUR NEXT STEP<strong>Request a quote in USD</strong></span></div></div>

      <section className="tool-details-grid wrap" aria-label={`${tool.name} capabilities and plans`}>
        <div className="tool-features">
          <div className="tool-section-heading"><div className="eyebrow section-eyebrow"><span className="section-line" /> FEATURES AND USE CASES</div><h2>Explore {tool.name}<br /><span>for your workflow.</span></h2><p>Explore what {tool.name} can bring to your toolkit.</p></div>
          <div className="tool-feature-grid">{tool.features.map((feature, index) => <article className="tool-feature" key={feature}><span className="tool-feature-number">0{index + 1}<Check size={16} /></span><h3>{feature}</h3><span className="tool-feature-line" /></article>)}</div>
          <div className="tool-use-note"><Sparkles size={21} /><div><h3>Your workflow. Your own mix.</h3><p>Add {tool.name} alongside the other tools you love. Build one toolkit and prepare a single inquiry for the plans you want to explore.</p></div></div>
          {content && <div className="tool-editorial">
            <section><h2>What is {tool.name} useful for?</h2><p>{content.overview}</p><h3>Who it can suit</h3><ul>{content.bestFor.map((item) => <li key={item}>{item}</li>)}</ul></section>
            <section><h2>{content.exampleWorkflow.title}</h2><p className="tool-editorial-note">An example workflow to help you evaluate the tool. Results depend on your inputs and the plan you use.</p><ol>{content.exampleWorkflow.steps.map((step) => <li key={step}>{step}</li>)}</ol></section>
            <section><h2>Before choosing a {tool.name} plan</h2><ul>{content.considerations.map((item) => <li key={item}>{item}</li>)}</ul><p>Ask for the exact plan, included limits, access method, activation estimate, renewal, support and refund terms before payment. <Link href="/delivery">Read delivery and support information</Link>.</p></section>
            <section className="tool-official-sources"><h2>Official information</h2><p>Product information reviewed on <time dateTime={content.reviewedOn}>{new Intl.DateTimeFormat("en", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${content.reviewedOn}T00:00:00Z`))}</time>. Features and plan details can change; check the provider’s current information.</p><ul>{content.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.title} <ArrowUpRight size={13} /></a></li>)}</ul>{(tool.id === "chatgpt" || tool.id === "claude") && <p><Link href="/compare/chatgpt-vs-claude">Compare ChatGPT and Claude for writing</Link></p>}</section>
          </div>}
        </div>

        <aside className="tool-plan" id="tool-plan" aria-labelledby="tool-plan-title">
          <span className="tool-plan-label"><span className="status-dot" /> YOUR PLAN, YOUR POSSIBILITIES</span>
          <h2 id="tool-plan-title">Good tools.<br /><span>The right fit.</span></h2>
          <div className="tool-plan-currency"><span>PRICING IN USD</span><strong className="tool-price-summary">{getToolPriceLabel(tool.id)}</strong></div>
          <p className="tool-plan-copy">Request current plans, availability, and access details for {tool.name} before you decide.</p>
          {plans.length > 0 && <a className="text-link tool-price-jump" href="#tool-pricing">View all USD plans <ArrowRight size={14} /></a>}
          <ul className="tool-plan-steps"><li><Check size={15} /> Request the exact plan and USD quote</li><li><Check size={15} /> Confirm access and activation</li><li><Check size={15} /> Review renewal, support and refund terms</li></ul>
          <ToolActions id={tool.id} name={tool.name} />
          <p className="tool-plan-footnote">Explore first. Confirm your plan and final price before payment.</p>
        </aside>
      </section>

      {relatedTools.length > 0 && <section className="tool-related wrap" aria-labelledby="related-title"><div className="section-heading"><div><div className="eyebrow section-eyebrow"><span className="section-line" /> GOOD COMPANY FOR YOUR TOOLKIT</div><h2 id="related-title">Keep the ideas <span>coming.</span></h2></div><Link className="text-link" href="/#tools">Explore the collection <ArrowUpRight size={16} /></Link></div><div className="tool-related-grid">{relatedTools.map((related) => <Link className="tool-related-card" href={`/tools/${related.id}`} key={related.id} style={{ "--tool-accent": related.accent } as CSSProperties}><span className={`tool-related-icon product-${related.id}`}><ToolLogo id={related.id} /></span><span className="tool-related-copy"><span className="tool-related-category">{related.category}</span><h3>{related.name}</h3><p>{related.shortDescription}</p></span><ArrowUpRight size={18} /></Link>)}</div></section>}
    </main>

    <footer className="footer wrap"><div className="footer-main"><div><Link className="brand-link" href="/"><Brand /></Link><p>A little AI. A lot more possible.</p></div><div className="footer-links"><Link href="/#tools">The collection</Link><Link href="/about">About</Link><Link href="/how-it-works">How it works</Link><Link href="/faqs">FAQs</Link><Link href="/contact">Contact</Link><Link href="/toolkit">Your toolkit <ArrowUpRight size={13} /></Link></div><a className="back-top" href="#tool-title" aria-label="Back to tool overview"><ArrowUpRight size={21} /></a></div><BusinessLinks /><div className="footer-bottom"><span>© {new Date().getFullYear()} GetAI Tools</span><span>Independent storefront. Product names and marks belong to their respective owners.</span><span>Made for what’s next. <Sparkles size={12} /></span></div></footer>
  </>;
}
