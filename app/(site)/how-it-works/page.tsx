import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Copy, Download, Plus, Search, ShoppingBag } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works — Build Your AI Toolkit | GetAI Tools",
  description: "Explore AI tools, save your favorites, and prepare a pricing inquiry in USD. Three simple steps to find your next AI advantage.",
  alternates: { canonical: "/how-it-works" },
  openGraph: { title: "How It Works — GetAI Tools", description: "From curious to creating. Find a tool, build a toolkit, and request your plan in USD.", url: "/how-it-works", type: "website" }
};

const steps = [
  { number: "01", icon: Search, title: "Find your spark.", copy: "Start with the thing you want to do. Explore the collection by category, search for a tool, or browse ten tools at a time.", points: ["Filter by the work you have in mind.", "Open a tool’s page to explore its capabilities.", "Follow related tools to find a useful combination."] },
  { number: "02", icon: Plus, title: "Make it your toolkit.", copy: "Add the tools that catch your eye. Mix a creative sidekick with a productivity companion and keep your selection together.", points: ["Use the + button or Add to your toolkit.", "Review or remove tools on your Toolkit page.", "Your selection stays saved in this browser when storage is available."] },
  { number: "03", icon: ArrowUpRight, title: "Find your perfect plan.", copy: "Choose a monthly or annual preference, then prepare a single inquiry for your selection. All requested pricing is in US dollars.", points: ["Open your inquiry on WhatsApp or in your email app.", "Review and send your message to GetAI Tools for a quote.", "Confirm the plan, final USD price, activation, renewal, support, and refund terms before payment."] }
];

export default function HowItWorksPage() {
  return <main className="info-page">
    <section className="info-hero wrap" aria-labelledby="how-title"><div className="info-hero-copy"><div className="eyebrow section-eyebrow"><span className="section-line" /> FROM CURIOUS TO CREATING</div><h1 className="info-title" id="how-title">Your next chapter.<br /><span>In three steps.</span></h1><p className="info-lede">Find your kind of useful. Build a toolkit of your own. Get clarity on the plan before you take the next step.</p><div className="info-actions"><Link className="button button-primary" href="/#tools">Start exploring <ArrowUpRight size={18} /></Link><Link className="text-link" href="/toolkit">Your toolkit <ShoppingBag size={16} /></Link></div></div><div className="info-art info-process-art" aria-hidden="true"><div className="info-art-label"><span className="mini-brand">g<span>✦</span></span><span>YOUR NEXT ADVANTAGE</span><ArrowUpRight size={18} /></div><div className="info-process-flow"><span><Search size={23} /><strong>Find your spark.</strong><small>01 / EXPLORE</small></span><span><Plus size={23} /><strong>Make it yours.</strong><small>02 / BUILD</small></span><span><ArrowUpRight size={23} /><strong>Find your plan.</strong><small>03 / INQUIRE</small></span></div><div className="info-art-caption">A FEW GOOD TOOLS.<br /><strong>A world of possibility.</strong></div></div></section>

    <section className="info-steps info-section wrap" aria-label="Build your toolkit in three steps">{steps.map(({ number, icon: Icon, title, copy, points }) => <article className="info-step" key={number}><div className="info-step-index"><span>{number}</span><Icon size={25} /></div><div className="info-step-body"><h2>{title}</h2><p>{copy}</p></div><ul>{points.map((point) => <li key={point}><Check size={15} /><span>{point}</span></li>)}</ul></article>)}</section>

    <section className="info-split info-section wrap" aria-labelledby="inquiry-title"><div className="info-section-heading"><div className="eyebrow section-eyebrow"><span className="section-line" /> ONE SELECTION. ONE CLEAR NEXT STEP.</div><h2 id="inquiry-title">A little inquiry.<br /><span>A lot more clarity.</span></h2><p>Your inquiry brings your chosen tools, preferred duration, and quote currency together. Open it in WhatsApp or email, then review and send it yourself. Copying or downloading remains available. Opening an inquiry does not place an order or take a payment.</p><Link className="text-link" href="/faqs">A few good answers <ArrowRight size={16} /></Link></div><aside className="info-example" aria-label="Example pricing inquiry"><div className="eyebrow"><ShoppingBag size={15} /> AN EXAMPLE INQUIRY</div><h3>Hi GetAI Tools!</h3><p>I’d like a quote for:</p><ol><li>ChatGPT</li><li>Canva</li></ol><dl><div><dt>Preferred duration</dt><dd>Monthly</dd></div><div><dt>Currency</dt><dd>USD</dd></div></dl><p>Please confirm available plans, pricing, access details, and support terms.</p><div className="info-example-footer"><span><Copy size={14} /> Copy</span><span><Download size={14} /> Download .txt</span></div></aside></section>

    <section className="info-cta wrap"><div><div className="eyebrow">YOUR NEXT CHAPTER STARTS WITH A LITTLE CURIOSITY.</div><h2>Let’s find your <span>first tool.</span></h2><p>Explore the collection. See what catches your imagination.</p></div><Link className="button button-primary" href="/#tools">Find your AI tool <ArrowUpRight size={18} /></Link></section>
  </main>;
}
