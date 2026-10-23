import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, HelpCircle, Layers3, MessageSquare } from "lucide-react";
import ContactDraft from "./contact-draft";
import { businessEmail, emailInquiryUrl, whatsappLabel, whatsappUrl } from "../../business";
import { socialMetadata } from "../../seo";

export const metadata: Metadata = {
  title: "Contact — GetAI Tools",
  description: "Contact GetAI Tools on WhatsApp or email about AI tools, available plans, and pricing in USD.",
  alternates: { canonical: "/contact" },
  ...socialMetadata("Contact — GetAI Tools", "Contact GetAI Tools on WhatsApp or email about AI tools, available plans, and pricing in USD.", "/contact")
};

export default function ContactPage() {
  return <main className="info-page">
    <section className="info-hero wrap" aria-labelledby="contact-title">
      <div className="eyebrow section-eyebrow"><span className="section-line" /> GOOD QUESTIONS. BETTER POSSIBILITIES.</div>
      <h1 className="info-title" id="contact-title">A little clarity.<br /><span>A better toolkit.</span></h1>
      <p className="info-lede">Questions about a plan, a tool, or an existing order? Reach us on WhatsApp or email, or prepare an inquiry below.</p>
    </section>

    <section className="contact-grid wrap" aria-label="Contact information and message draft">
      <aside className="contact-help">
        <span className="contact-help-label">LET’S START WITH WHAT YOU NEED</span>
        <article className="contact-help-card"><Layers3 size={22} /><h2>Questions about a plan?</h2><p>Include the tools you are interested in and your preferred duration. Current plans, availability, and final pricing in USD need to be confirmed before payment.</p><Link className="text-link" href="/toolkit">Build your inquiry <ArrowUpRight size={15} /></Link></article>
        <article className="contact-help-card"><MessageSquare size={22} /><h2>Talk to our team.</h2><p>For plan questions, activation, renewals, or support, include your tool name and any existing order reference.</p><p><a className="text-link" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp {whatsappLabel} <ArrowUpRight size={15} /></a></p><a className="text-link" href={emailInquiryUrl("GetAI Tools inquiry")}>{businessEmail} <ArrowUpRight size={15} /></a></article>
        <article className="contact-help-card"><HelpCircle size={22} /><h2>A quick answer might be here.</h2><p>Explore the FAQs for details about selecting tools, preparing an inquiry, and understanding the next step.</p><Link className="text-link" href="/faqs">Read the FAQs <ArrowRight size={15} /></Link></article>
      </aside>
      <div className="contact-panel"><ContactDraft /></div>
    </section>
  </main>;
}
