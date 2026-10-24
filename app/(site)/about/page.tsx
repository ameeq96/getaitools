import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Layers3, ShoppingBag, Sparkles, WandSparkles } from "lucide-react";
import { categories, tools, ToolLogo } from "../../catalog";
import { businessEmail, whatsappLabel, whatsappUrl } from "../../business";
import { socialMetadata } from "../../seo";

export const metadata: Metadata = {
  title: "Why GetAI? — About GetAI Tools",
  description: "A considered collection of AI tools for the way you think, work, and create. Discover GetAI Tools and build a toolkit of your own.",
  alternates: { canonical: "/about" },
  ...socialMetadata("Why GetAI? — GetAI Tools", "Less searching. More doing. Discover a little more possibility with GetAI Tools.", "/about")
};

const benefits = [
  { number: "01", icon: WandSparkles, title: "Good tools. Great company.", copy: "From your first idea to your final edit, explore tools for the things you want to make, learn, and do." },
  { number: "02", icon: Layers3, title: "Your workflow, your toolkit.", copy: "A writing partner. A design sidekick. A research companion. Put together the mix that makes sense for you." },
  { number: "03", icon: ShoppingBag, title: "Clarity before commitment.", copy: "Explore the tools, prepare an inquiry, and confirm available plans, access details, and USD pricing before payment." }
];

export default function AboutPage() {
  return <main className="info-page">
    <section className="info-hero wrap" aria-labelledby="about-title">
      <div className="info-hero-copy"><div className="eyebrow section-eyebrow"><span className="section-line" /> A BETTER KIND OF TOOLBOX</div><h1 className="info-title" id="about-title">Less searching.<br />More <span>doing.</span></h1><p className="info-lede">Big ideas deserve good company. We bring useful AI tools together, so you can find your next creative, productive, brilliant advantage.</p><div className="info-actions"><Link className="button button-primary" href="/#tools">Find your next tool <ArrowUpRight size={18} /></Link><Link className="text-link" href="/how-it-works">See how it works <ArrowRight size={16} /></Link></div></div>
      <div className="info-art" aria-hidden="true"><div className="info-art-label"><span className="mini-brand">g<span>✦</span></span><span>THE POSSIBILITY COLLECTION</span><ArrowUpRight size={18} /></div><span className="info-art-spark">✳</span><div className="info-art-tools">{tools.slice(0, 3).map((tool) => <div className="info-art-tool" key={tool.id}><ToolLogo id={tool.id} /><span>{tool.name}</span></div>)}</div><div className="info-art-caption">A LITTLE AI.<br /><strong>A lot more you.</strong></div></div>
    </section>

    <div className="info-stats wrap" aria-label="Our collection"><div><strong>{tools.length}</strong><span>TOOLS TO EXPLORE</span></div><div><strong>{categories.length - 1}</strong><span>WAYS TO FIND YOUR FIT</span></div><div><strong>USD</strong><span>CLEAR QUOTE CURRENCY</span></div></div>

    <section className="info-section wrap" aria-labelledby="about-benefits"><div className="info-section-heading"><div className="eyebrow section-eyebrow"><span className="section-line" /> MADE AROUND YOU</div><h2 id="about-benefits">A little less friction.<br /><span>A lot more possibility.</span></h2><p>Useful tools are only the beginning. The right combination is yours to choose.</p></div><div className="info-cards">{benefits.map(({ number, icon: Icon, title, copy }) => <article className="info-card" key={number}><div className="info-card-number"><span>{number}</span><Icon size={22} /></div><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

    <section className="info-split info-section wrap" aria-labelledby="about-approach"><div className="info-section-heading"><div className="eyebrow section-eyebrow"><span className="section-line" /> ROOM FOR YOUR NEXT CHAPTER</div><h2 id="about-approach">Your ideas.<br /><span>Your own mix.</span></h2><p>You do not have to choose a whole new workflow at once. Start with one thing you want to do better, then build from there.</p><Link className="text-link" href="/toolkit">Make it your toolkit <ArrowUpRight size={16} /></Link></div><div className="info-principles"><article><span>01</span><div><h3>Start with what you want to do.</h3><p>Explore categories for writing, research, coding, design, and the everyday tasks in between.</p></div></article><article><span>02</span><div><h3>Get to know each tool.</h3><p>Every tool has its own page with an overview, useful capabilities, and related tools to explore.</p></div></article><article><span>03</span><div><h3>Keep the next step clear.</h3><p>Save a selection and prepare one inquiry. Confirm the specific plan, duration, and access details before making a decision.</p></div></article></div></section>

    <section className="info-section wrap" aria-labelledby="about-categories"><div className="info-section-heading"><div className="eyebrow section-eyebrow"><span className="section-line" /> MANY WAYS TO MAKE MORE POSSIBLE</div><h2 id="about-categories">Whatever you’re into.<br /><span>There’s a place to start.</span></h2></div><div className="info-category-cloud">{categories.filter((category) => category !== "All tools").map((category) => <span key={category}><Sparkles size={13} />{category}</span>)}</div><p className="info-independent">GetAI Tools is an independent storefront. The tools in the collection are developed by their respective companies; product names and marks belong to their owners.</p></section>

    <section className="info-section wrap" aria-labelledby="about-editorial"><div className="info-section-heading"><div className="eyebrow section-eyebrow"><span className="section-line" /> HOW THE GUIDES ARE PREPARED</div><h2 id="about-editorial">Useful context.<br /><span>Clear sources.</span></h2><p>GetAI Tools is the independent storefront at getaitools.shop. Sales, corrections and support questions reach the business through <a href={"mailto:" + businessEmail}>{businessEmail}</a> or <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">{whatsappLabel} on WhatsApp</a>.</p></div><div className="info-principles"><article><span>01</span><div><h3>Start with the provider.</h3><p>Tool guides link to official product information or documentation and show when those sources were reviewed. Categories describe the task a tool can help with; inclusion in the catalog does not confirm a plan is currently available from us.</p></div></article><article><span>02</span><div><h3>Separate examples from testing.</h3><p>Workflow examples explain a practical way to evaluate a tool. They are illustrative, not reports of hands-on tests or promises about output quality. Drafting uses AI assistance with checks against the linked product sources. Provider capabilities and terms can change.</p></div></article><article><span>03</span><div><h3>Confirm the offer in writing.</h3><p>Listed plan prices are shown in USD. Request pricing where no plan is listed. Before payment, request the exact plan, account ownership, access method, limits, activation estimate, renewal, support and refund terms. <Link href="/delivery">Read how quotes and delivery work</Link>.</p></div></article></div></section>

    <section className="info-cta wrap"><div><div className="eyebrow">GOOD TOOLS CHANGE WHAT’S POSSIBLE.</div><h2>What’s your next <span>big thing?</span></h2><p>Find a little help for the ideas worth chasing.</p></div><Link className="button button-primary" href="/#tools">Explore the collection <ArrowUpRight size={18} /></Link></section>
  </main>;
}
