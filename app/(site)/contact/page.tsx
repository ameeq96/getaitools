import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, HelpCircle, Layers3, MessageSquare } from "lucide-react";
import ContactDraft from "./contact-draft";

export const metadata: Metadata = {
  title: "Contact — GetAI Tools",
  description: "Prepare your questions about AI tools, plans, and pricing in USD. Find help choosing your next toolkit.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — GetAI Tools",
    description: "Prepare your questions about AI tools, plans, and pricing in USD.",
    url: "/contact",
    type: "website"
  }
};

export default function ContactPage() {
  return <main className="info-page">
    <section className="info-hero wrap" aria-labelledby="contact-title">
      <div className="eyebrow section-eyebrow"><span className="section-line" /> GOOD QUESTIONS. BETTER POSSIBILITIES.</div>
      <h1 className="info-title" id="contact-title">A little clarity.<br /><span>A better toolkit.</span></h1>
      <p className="info-lede">Questions about a plan, a tool, or where to start? Put your thoughts together and make your next step a little simpler.</p>
    </section>

    <section className="contact-grid wrap" aria-label="Contact information and message draft">
      <aside className="contact-help">
        <span className="contact-help-label">LET’S START WITH WHAT YOU NEED</span>
        <article className="contact-help-card"><Layers3 size={22} /><h2>Questions about a plan?</h2><p>Include the tools you are interested in and your preferred duration. Current plans, availability, and final pricing in USD need to be confirmed before payment.</p><Link className="text-link" href="/toolkit">Build your inquiry <ArrowUpRight size={15} /></Link></article>
        <article className="contact-help-card"><MessageSquare size={22} /><h2>Finding the right fit?</h2><p>Tell us what you want to create, what your day looks like, and which tools you already use. A little context goes a long way.</p><Link className="text-link" href="/#tools">Explore the collection <ArrowUpRight size={15} /></Link></article>
        <article className="contact-help-card"><HelpCircle size={22} /><h2>A quick answer might be here.</h2><p>Explore the FAQs for details about selecting tools, preparing an inquiry, and understanding the next step.</p><Link className="text-link" href="/faqs">Read the FAQs <ArrowRight size={15} /></Link></article>
      </aside>
      <div className="contact-panel"><ContactDraft /></div>
    </section>
  </main>;
}
