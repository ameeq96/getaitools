import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { businessEmail, whatsappLabel, whatsappUrl, emailInquiryUrl } from "../../business";

export const metadata: Metadata = {
  title: "Privacy — Your Information | GetAI Tools",
  description: "How GetAI Tools uses browser storage, prepares inquiry drafts, and handles the information you choose to share by WhatsApp or email.",
  alternates: { canonical: "/privacy" },
  openGraph: { title: "Privacy — GetAI Tools", description: "Understand your toolkit storage and the information you choose to share with GetAI Tools.", url: "/privacy", type: "website" }
};

export default function PrivacyPage() {
  return <main className="info-page launch-policy">
    <section className="info-hero wrap" aria-labelledby="privacy-title"><div className="eyebrow section-eyebrow"><span className="section-line" /> YOUR INFORMATION</div><h1 className="info-title" id="privacy-title">A little clarity.<br /><span>About your privacy.</span></h1><p className="info-lede">Here is how information is used in the current GetAI Tools browsing and manual inquiry experience.</p><nav className="launch-policy-nav" aria-label="Related information"><Link href="/terms">Terms</Link><Link href="/refunds">Refunds &amp; cancellations</Link><Link href="/delivery">Delivery &amp; support</Link></nav></section>

    <div className="wrap">
      <section className="launch-policy-section" aria-labelledby="privacy-toolkit"><h2 id="privacy-toolkit">Your saved toolkit</h2><p>Your selected tools are saved in this browser using local storage, when browser storage is available. This keeps your selection available between visits in the same browser.</p><p>The selection stays there until you remove tools or clear the website’s browser storage. It does not automatically sync between browsers or devices. Your name, email address and message are not saved in this toolkit storage.</p></section>
      <section className="launch-policy-section" aria-labelledby="privacy-drafts"><h2 id="privacy-drafts">Messages you prepare</h2><p>The contact form prepares a message in your current browser session. Copying a draft uses your clipboard; downloading creates a text file on your device. These actions do not submit the message to GetAI Tools.</p><p>Choosing WhatsApp or email passes the prepared text to that service or application. You can review the message there before sending it. Your draft can include the details you entered, such as your name, email address, selected tools and question.</p></section>
      <section className="launch-policy-section" aria-labelledby="privacy-contact"><h2 id="privacy-contact">Information you send us</h2><p>When you send an inquiry by WhatsApp or email, we receive the message and the sender details that service provides. We use the information you share to discuss your request, confirm a quote and respond to support questions.</p><p>Send only the information needed for your inquiry. Do not include passwords, verification codes or full payment-card details. This website does not collect payments through an online checkout.</p></section>
      <section className="launch-policy-section" aria-labelledby="privacy-hosting"><h2 id="privacy-hosting">Website hosting and external services</h2><p>Website hosting can process technical access information, including an IP address, requested page, request time and browser information, to deliver the website and help investigate errors or misuse.</p><p>WhatsApp, your email application and their service providers handle information under their own privacy terms when you use them. A tool listed in the catalog is a separate product; using that product is subject to its provider’s own privacy practices.</p></section>
      <section className="launch-policy-section" aria-labelledby="privacy-retention"><h2 id="privacy-retention">Questions about your information</h2><p>For questions about information you have sent, how long it is kept, who handles it, or a request to update or remove it, contact us using the details below. Do not assume that clearing your browser toolkit also removes messages you previously sent by WhatsApp or email.</p><p>This notice describes the current website workflow. It does not promise a fixed retention period for correspondence or hosting logs.</p><div className="info-actions"><a className="button button-primary" href={emailInquiryUrl("Privacy question")}>Email {businessEmail} <ArrowUpRight size={16} /></a><a className="text-link" href={whatsappUrl("Hi GetAI Tools, I have a question about my information.")} target="_blank" rel="noopener noreferrer">WhatsApp {whatsappLabel} <ArrowUpRight size={16} /></a></div></section>
    </div>
  </main>;
}
