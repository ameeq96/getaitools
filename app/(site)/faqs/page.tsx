import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQs — A Little Clarity | GetAI Tools",
  description: "Find answers about exploring AI tools, saving your toolkit, monthly and annual preferences, and requesting current plans and pricing in USD.",
  alternates: { canonical: "/faqs" },
  openGraph: { title: "FAQs — GetAI Tools", description: "A little clarity. A lot less guesswork. Answers to your questions about GetAI Tools.", url: "/faqs", type: "website" }
};

const faqs = [
  ["How do I find the right AI tool?", "Start with what you want to do. Use the categories to explore writing, research, design, coding, and more, or search for a name. The collection shows ten tools per page. Open a tool’s page for its overview, capabilities, and related tools."],
  ["How much do the tools cost?", "All pricing is quoted in US dollars (USD). Add the tools you are interested in to your toolkit and prepare an inquiry for current plans, availability, and pricing. Confirm the final quote before payment."],
  ["How does ordering work?", "Choose your tools, build your toolkit, and copy or download your inquiry. Share it with GetAI Tools to confirm the plan, duration, access details, support terms, and final price before payment. Preparing an inquiry does not place an order."],
  ["Can I choose more than one tool?", "Yes. Your toolkit can include several different tools. Add everything you are interested in and prepare a single inquiry for the full selection. You can remove tools from your toolkit at any time."],
  ["Can I request monthly or annual plans?", "You can choose Monthly or Annual as your preferred duration when preparing your inquiry. This is a preference for the quote; the available plans and durations for each tool still need to be confirmed."],
  ["Where is my toolkit saved?", "Your selected tool names are saved in this browser using local storage when it is available. The selection is shared between the collection, tool detail pages, and your Toolkit page in the same browser. It does not sync to another browser or device. Clearing browser storage can remove it."],
  ["Does copying an inquiry send it automatically?", "No. Copying puts the inquiry text on your clipboard so you can share it yourself. Downloading creates a .txt file. Neither action sends a message, places an order, or takes a payment."],
  ["What if the copy button does not work?", "Your browser may restrict clipboard access. Use Download inquiry as .txt instead, then open the file to read or share your inquiry."],
  ["Are the tools made by GetAI Tools?", "GetAI Tools is an independent storefront. The tools shown are developed by their respective companies. Product names and marks belong to their owners."],
  ["What should I confirm before payment?", "Confirm the exact tool and plan, available features or usage limits, duration, access method, final USD price, and support terms. A catalog listing or a saved toolkit does not confirm a plan’s current availability."]
];

export default function FaqsPage() {
  return <main className="info-page">
    <section className="info-hero info-faq-hero wrap" aria-labelledby="faq-title"><div className="info-hero-copy"><div className="eyebrow section-eyebrow"><span className="section-line" /> GOOD QUESTIONS</div><h1 className="info-title" id="faq-title">A little clarity.<br /><span>A lot less guesswork.</span></h1><p className="info-lede">From finding your first tool to preparing your inquiry, here are the things that help make the next step feel simple.</p><div className="info-actions"><a className="button button-primary" href="#answers">Find your answer <ArrowRight size={17} /></a><Link className="text-link" href="/how-it-works">How it works <ArrowUpRight size={16} /></Link></div></div><div className="info-question-art" aria-hidden="true"><span>?</span><small>A LITTLE HELP GOES A LONG WAY.</small></div></section>

    <section className="info-faq-layout info-section wrap" id="answers" aria-labelledby="answers-title"><aside className="info-section-heading"><div className="eyebrow section-eyebrow"><span className="section-line" /> BEFORE YOUR NEXT BIG THING</div><h2 id="answers-title">Good to <span>know.</span></h2><p>Take a look around. Your next answer might be right here.</p><Link className="text-link" href="/contact">Get in touch <ArrowUpRight size={16} /></Link></aside><div className="info-faq-list">{faqs.map(([question, answer], index) => <details className="info-accordion" key={question} open={index === 0}><summary><span>{question}</span><Plus size={18} /></summary><p>{answer}</p></details>)}</div></section>

    <section className="info-cta wrap"><div><div className="eyebrow">READY WHEN YOU ARE.</div><h2>More clarity.<br /><span>More possibility.</span></h2><p>Explore the collection and put your own toolkit together.</p></div><Link className="button button-primary" href="/#tools">Explore the collection <ArrowUpRight size={18} /></Link></section>
  </main>;
}
