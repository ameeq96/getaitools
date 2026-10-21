import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { businessEmail, whatsappLabel, whatsappUrl, emailInquiryUrl } from "../../business";

export const metadata: Metadata = {
  title: "Refunds & Cancellations — GetAI Tools",
  description: "How to ask GetAI Tools about a cancellation, access problem or refund request, and which order-specific terms to confirm before payment.",
  alternates: { canonical: "/refunds" },
  openGraph: { title: "Refunds & Cancellations — GetAI Tools", description: "Get clarity on cancellation and refund terms before payment, or contact us about an existing order.", url: "/refunds", type: "website" }
};

export default function RefundsPage() {
  return <main className="info-page launch-policy">
    <section className="info-hero wrap" aria-labelledby="refunds-title"><div className="eyebrow section-eyebrow"><span className="section-line" /> A CLEAR WAY TO ASK</div><h1 className="info-title" id="refunds-title">Need a hand?<br /><span>Let’s start here.</span></h1><p className="info-lede">For a cancellation, an access problem or a refund question, contact GetAI Tools with the details of your particular request.</p><nav className="launch-policy-nav" aria-label="Related information"><Link href="/terms">Terms</Link><Link href="/delivery">Delivery &amp; support</Link><Link href="/privacy">Privacy</Link></nav></section>

    <div className="wrap">
      <section className="launch-policy-section" aria-labelledby="refunds-before"><h2 id="refunds-before">Confirm the terms before payment</h2><p>Ask for the cancellation and refund terms for your exact plan in writing before paying. Clarify eligibility, any applicable time limits, what happens if access cannot be activated, and how a qualifying refund would be handled.</p><p>This public page does not establish a universal refund window or guarantee that every request qualifies. A saved toolkit or pricing inquiry is not an order and does not take a payment.</p></section>
      <section className="launch-policy-section" aria-labelledby="refunds-request"><h2 id="refunds-request">Contact us about a request</h2><p>Send your tool and plan name, order or inquiry reference if you have one, approximate purchase date, and a short explanation of the issue. Include any relevant error message or screenshot with private details removed.</p><p>Do not send passwords, one-time verification codes or full payment-card details. Use the contact channels below so we can discuss the request and the terms agreed for that order.</p><div className="info-actions"><a className="button button-primary" href={whatsappUrl("Hi GetAI Tools, I need help with a cancellation, access issue or refund question.\n\nTool / plan:\nOrder or inquiry reference:\nPurchase date:\nIssue:")} target="_blank" rel="noopener noreferrer">WhatsApp {whatsappLabel} <ArrowUpRight size={16} /></a><a className="text-link" href={emailInquiryUrl("Cancellation or refund request", "Tool / plan:\nOrder or inquiry reference:\nPurchase date:\nIssue:\n")}>{businessEmail} <ArrowUpRight size={16} /></a></div></section>
      <section className="launch-policy-section" aria-labelledby="refunds-rights"><h2 id="refunds-rights">Your order and applicable rights</h2><p>Keep a copy of the quote, agreed terms, payment confirmation and relevant messages. This helps identify the arrangement and understand your request.</p><p>This page does not remove any rights you may have under applicable law. For activation or renewal questions, see <Link href="/delivery">delivery and support</Link>.</p></section>
    </div>
  </main>;
}
