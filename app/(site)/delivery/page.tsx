import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { businessEmail, whatsappLabel, whatsappUrl, emailInquiryUrl } from "../../business";
import { socialMetadata } from "../../seo";

export const metadata: Metadata = {
  title: "Delivery, Renewal & Support — GetAI Tools",
  description: "Confirm AI tool access, activation estimates, renewal arrangements and support with GetAI Tools before payment. Contact us by WhatsApp or email.",
  alternates: { canonical: "/delivery" },
  ...socialMetadata("Delivery, Renewal & Support — GetAI Tools", "Know what to confirm about access, activation, renewal and support for your requested AI plan.", "/delivery")
};

export default function DeliveryPage() {
  return <main className="info-page launch-policy">
    <section className="info-hero wrap" aria-labelledby="delivery-title"><div className="eyebrow section-eyebrow"><span className="section-line" /> FROM INQUIRY TO ACCESS</div><h1 className="info-title" id="delivery-title">The next steps.<br /><span>Made clear.</span></h1><p className="info-lede">Plans are discussed manually through WhatsApp or email. Get the details of access, activation, renewal and support confirmed for your chosen plan before payment.</p><nav className="launch-policy-nav" aria-label="Related information"><Link href="/how-it-works">How it works</Link><Link href="/terms">Terms</Link><Link href="/refunds">Refunds &amp; cancellations</Link></nav></section>

    <div className="wrap">
      <section className="launch-policy-section" aria-labelledby="delivery-before"><h2 id="delivery-before">Before you pay</h2><p>Send the tools you are interested in and your preferred duration. Ask us to confirm current availability, the exact plan, included features and usage limits, access method, final USD price and payment arrangement.</p><p>A catalog entry is an invitation to inquire. It does not reserve stock, confirm availability or promise a particular access arrangement.</p></section>
      <section className="launch-policy-section" aria-labelledby="delivery-activation"><h2 id="delivery-activation">Activation and access</h2><p>The activation estimate, access method and any information needed to set up the plan must be confirmed in writing for your particular order before payment. This website does not promise instant delivery or a standard activation time for every tool.</p><p>If access has not arrived within the estimate agreed for your order, or you encounter an access problem, contact us with the relevant reference and a description of the issue. Do not send passwords or verification codes.</p></section>
      <section className="launch-policy-section" aria-labelledby="delivery-renewal"><h2 id="delivery-renewal">Duration and renewal</h2><p>Monthly and Annual options in your toolkit express a preference for your quotation. Confirm the actual start date, expiry date, renewal availability, renewal price and any action you need to take for your specific plan.</p><p>The website does not take recurring payments or automatically renew a subscription. Any arrangement with GetAI Tools or a separate tool provider needs to be understood before you agree to it.</p></section>
      <section className="launch-policy-section" aria-labelledby="delivery-support"><h2 id="delivery-support">Support for your plan</h2><p>Ask which support is included, how to request it and what response expectations apply to your plan before payment. No universal support hours or response time are stated on this page.</p><p>For help, include your tool and plan name, relevant inquiry or order reference, and a short description of the problem. Screenshots can help; remove sensitive details before sharing them. For cancellations or refund questions, read our <Link href="/refunds">refund information</Link>.</p><div className="info-actions"><a className="button button-primary" href={whatsappUrl("Hi GetAI Tools, I have a question about access, renewal or support.\n\nTool / plan:\nInquiry or order reference:\nQuestion:")} target="_blank" rel="noopener noreferrer">WhatsApp {whatsappLabel} <ArrowUpRight size={16} /></a><a className="text-link" href={emailInquiryUrl("Access, renewal or support question")}>{businessEmail} <ArrowUpRight size={16} /></a></div></section>
    </div>
  </main>;
}
