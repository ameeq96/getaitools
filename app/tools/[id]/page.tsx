import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronRight, Layers3, ShoppingBag, Sparkles } from "lucide-react";
import { tools, ToolLogo } from "../../catalog";
import ToolActions from "./tool-actions";

type ToolPageProps = { params: Promise<{ id: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return tools.map((tool) => ({ id: tool.id }));
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { id } = await params;
  const tool = tools.find((item) => item.id === id);
  if (!tool) notFound();
  return {
    title: `${tool.name} — Plans & Overview | GetAI Tools`,
    description: `${tool.description} Explore ${tool.name}, build your toolkit, and request current plans and pricing in USD.`,
    alternates: { canonical: `/tools/${tool.id}` },
    openGraph: {
      title: `${tool.name} — GetAI Tools`,
      description: tool.description,
      url: `/tools/${tool.id}`,
      siteName: "GetAI Tools",
      type: "website"
    }
  };
}

function Brand() {
  return <span className="brand"><span className="brand-mark" aria-hidden="true">g<span>✦</span></span><span>getai<span className="brand-tools">tools</span><span className="brand-dot">.</span></span></span>;
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { id } = await params;
  const tool = tools.find((item) => item.id === id);
  if (!tool) notFound();
  const relatedTools = tools.filter((item) => item.category === tool.category && item.id !== tool.id).slice(0, 3);

  return <>
    <div className="announcement"><span><Sparkles size={13} /> A little upgrade. A whole lot of possibility.</span><span>Curated AI tools. All in one place. <ArrowUpRight size={12} /></span></div>
    <header className="header wrap">
      <Link href="/" className="brand-link" aria-label="GetAI Tools home"><Brand /></Link>
      <nav className="tool-page-nav" aria-label="Main navigation"><Link href="/#tools">The collection</Link><Link href="/how-it-works">How it works</Link></nav>
      <div className="header-actions"><span className="currency">USD <span>$</span></span><span className="header-divider" /><Link className="toolkit-button" href="/toolkit"><ShoppingBag size={17} /><span>Your toolkit</span><ArrowUpRight size={13} /></Link></div>
    </header>

    <main className="tool-page" style={{ "--tool-accent": tool.accent } as CSSProperties}>
      <nav className="tool-breadcrumbs wrap" aria-label="Breadcrumb"><Link href="/#tools"><ArrowLeft size={13} /> The collection</Link><ChevronRight size={12} /><span aria-current="page">{tool.name}</span></nav>

      <section className="tool-hero wrap" aria-labelledby="tool-title">
        <div className="tool-intro">
          <div className="eyebrow section-eyebrow"><span className="section-line" /> YOUR NEXT ADVANTAGE</div>
          <div className="tool-identity"><span className="tool-icon"><ToolLogo id={tool.id} /></span><span className="tool-maker">{tool.category}<small>By {tool.maker}</small></span></div>
          <h1 className="tool-title" id="tool-title">Meet {tool.name}<span>.</span></h1>
          <p className="tool-lede">{tool.shortDescription}</p>
          <p className="tool-description">{tool.description}</p>
          <div className="tool-hero-actions"><a className="button button-primary" href="#tool-plan">Find your plan <ArrowUpRight size={18} /></a><Link className="text-link" href="/#tools">Keep exploring <ArrowRight size={16} /></Link></div>
        </div>
        <div className={`tool-art product-${tool.id}`} aria-hidden="true">
          <span className="tool-art-grid" /><span className="tool-art-orbit" /><span className="tool-art-orbit tool-art-orbit-second" />
          <div className="tool-art-top"><span className="mini-brand">g<span>✦</span></span><span>THE TOOL EDIT</span><ArrowUpRight size={19} /></div>
          <div className="tool-art-logo"><ToolLogo id={tool.id} /></div>
          <span className="tool-art-name">{tool.name}</span><span className="tool-art-caption">{tool.shortDescription}</span>
          <div className="tool-art-bottom"><span>{tool.tag}</span><span>MORE POSSIBLE. <Sparkles size={13} /></span></div>
        </div>
      </section>

      <div className="tool-facts wrap" aria-label="Tool overview"><div><Layers3 size={17} /><span>MADE FOR<strong>{tool.category}</strong></span></div><div><Sparkles size={17} /><span>DEVELOPED BY<strong>{tool.maker}</strong></span></div><div><ShoppingBag size={17} /><span>YOUR NEXT STEP<strong>Request a quote in USD</strong></span></div></div>

      <section className="tool-details-grid wrap" aria-label={`${tool.name} capabilities and plans`}>
        <div className="tool-features">
          <div className="tool-section-heading"><div className="eyebrow section-eyebrow"><span className="section-line" /> A LITTLE HELP GOES A LONG WAY</div><h2>Make room for<br /><span>more possibility.</span></h2><p>Explore what {tool.name} can bring to your toolkit.</p></div>
          <div className="tool-feature-grid">{tool.features.map((feature, index) => <article className="tool-feature" key={feature}><span className="tool-feature-number">0{index + 1}<Check size={16} /></span><h3>{feature}</h3><span className="tool-feature-line" /></article>)}</div>
          <div className="tool-use-note"><Sparkles size={21} /><div><h3>Your workflow. Your own mix.</h3><p>Add {tool.name} alongside the other tools you love. Build one toolkit and prepare a single inquiry for the plans you want to explore.</p></div></div>
        </div>

        <aside className="tool-plan" id="tool-plan" aria-labelledby="tool-plan-title">
          <span className="tool-plan-label"><span className="status-dot" /> YOUR PLAN, YOUR POSSIBILITIES</span>
          <h2 id="tool-plan-title">Good tools.<br /><span>The right fit.</span></h2>
          <div className="tool-plan-currency"><span>PRICING</span><strong>Quote in USD <span>$</span></strong></div>
          <p className="tool-plan-copy">Request current plans, availability, and access details for {tool.name} before you decide.</p>
          <ul className="tool-plan-steps"><li><Check size={15} /> Add this tool to your selection</li><li><Check size={15} /> Choose your preferred duration</li><li><Check size={15} /> Prepare your pricing inquiry</li></ul>
          <ToolActions id={tool.id} name={tool.name} />
          <p className="tool-plan-footnote">Explore first. Confirm your plan and final price before payment.</p>
        </aside>
      </section>

      {relatedTools.length > 0 && <section className="tool-related wrap" aria-labelledby="related-title"><div className="section-heading"><div><div className="eyebrow section-eyebrow"><span className="section-line" /> GOOD COMPANY FOR YOUR TOOLKIT</div><h2 id="related-title">Keep the ideas <span>coming.</span></h2></div><Link className="text-link" href="/#tools">Explore the collection <ArrowUpRight size={16} /></Link></div><div className="tool-related-grid">{relatedTools.map((related) => <Link className="tool-related-card" href={`/tools/${related.id}`} key={related.id} style={{ "--tool-accent": related.accent } as CSSProperties}><span className={`tool-related-icon product-${related.id}`}><ToolLogo id={related.id} /></span><span className="tool-related-copy"><span className="tool-related-category">{related.category}</span><h3>{related.name}</h3><p>{related.shortDescription}</p></span><ArrowUpRight size={18} /></Link>)}</div></section>}
    </main>

    <footer className="footer wrap"><div className="footer-main"><div><Link className="brand-link" href="/" aria-label="GetAI Tools home"><Brand /></Link><p>A little AI. A lot more possible.</p></div><div className="footer-links"><Link href="/#tools">The collection</Link><Link href="/about">About</Link><Link href="/how-it-works">How it works</Link><Link href="/faqs">FAQs</Link><Link href="/contact">Contact</Link><Link href="/toolkit">Your toolkit <ArrowUpRight size={13} /></Link></div><a className="back-top" href="#tool-title" aria-label="Back to tool overview"><ArrowUpRight size={21} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} GetAI Tools</span><span>Independent storefront. Product names and marks belong to their respective owners.</span><span>Made for what’s next. <Sparkles size={12} /></span></div></footer>
  </>;
}
