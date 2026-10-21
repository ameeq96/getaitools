import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { businessEmail, whatsappLabel, whatsappUrl, emailInquiryUrl } from "../../business";

export const metadata: Metadata = {
  title: "Terms — Inquiries & Orders | GetAI Tools",
  description: "Understand the GetAI Tools manual inquiry process, USD quotations, plan confirmation, and third-party tool information before payment.",
  alternates: { canonical: "/terms" },
  openGraph: { title: "Terms — GetAI Tools", description: "Clear information about browsing, inquiries and confirming your plan before payment.", url: "/terms", type: "website" }
};

export default function TermsPage() {
  return <main className="info-page launch-policy">
    <section className="info-hero wrap" aria-labelledby="terms-title"><div className="eyebrow section-eyebrow"><span className="section-line" /> BEFORE YOUR NEXT STEP</div><h1 className="info-title" id="terms-title">Clear terms.<br /><span>Better decisions.</span></h1><p className="info-lede">GetAI Tools is an independent storefront with a manual quotation process. Please confirm the details of your particular request before making a payment.</p><nav className="launch-policy-nav" aria-label="Related information"><Link href="/privacy">Privacy</Link><Link href="/refunds">Refunds &amp; cancellations</Link><Link href="/delivery">Delivery &amp; support</Link></nav></section>

    <div className="wrap">
      <section className="launch-policy-section" aria-labelledby="terms-inquiries"><h2 id="terms-inquiries">Browsing and inquiries</h2><p>Catalog pages help you explore tools. Saving a toolkit, preparing a message, or opening WhatsApp or email does not place an order, reserve a plan or authorize a payment. You review and send your own message in the chosen application.</p><p>The website does not provide an online checkout or automatically renew subscriptions. Any payment arrangement or renewal for a requested plan must be confirmed separately.</p></section>
      <section className="launch-policy-section" aria-labelledby="terms-quotes"><h2 id="terms-quotes">Confirm the complete offer</h2><p>Before payment, ask for written confirmation of the exact tool and plan, current availability, duration, included features and limits, access method, activation estimate, support arrangements, renewal terms and cancellation or refund terms.</p><p>Quotes are requested in US dollars (USD). Confirm the final amount, payment method, payment currency and any applicable conversion or transaction fees before paying. Monthly or Annual selections are preferences for a quote; they do not establish availability or a purchase price.</p><p>A catalog listing does not guarantee that a particular plan is available. These website terms do not replace the specific commercial details that must be agreed for your order.</p></section>
      <section className="launch-policy-section" aria-labelledby="terms-products"><h2 id="terms-products">Third-party tools</h2><p>The tools shown are developed by their respective providers. Product names and marks belong to their owners. A listing does not state that GetAI Tools is the tool’s developer or an official partner.</p><p>Provider features, usage limits and requirements can change. Confirm the current plan details and any provider terms relevant to the access being offered. Use tools in accordance with the terms that apply to them.</p></section>
      <section className="launch-policy-section" aria-labelledby="terms-support"><h2 id="terms-support">Questions and order-specific terms</h2><p>If any detail is unclear, ask before payment. For access, renewal or support questions, include the tool name and relevant inquiry or order reference. Do not send passwords, verification codes or full payment-card details.</p><p>Read our <Link href="/delivery">delivery and support information</Link>, <Link href="/refunds">refund and cancellation information</Link> and <Link href="/privacy">privacy notice</Link>. Nothing on these pages is intended to waive rights that cannot lawfully be excluded.</p><div className="info-actions"><a className="button button-primary" href={whatsappUrl("Hi GetAI Tools, I would like to confirm the terms for a plan before payment.")} target="_blank" rel="noopener noreferrer">WhatsApp {whatsappLabel} <ArrowUpRight size={16} /></a><a className="text-link" href={emailInquiryUrl("Plan and order terms")}>{businessEmail} <ArrowUpRight size={16} /></a></div></section>
    </div>
  </main>;
}
