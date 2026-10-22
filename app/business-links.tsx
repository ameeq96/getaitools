import Link from "next/link";
import { businessEmail, whatsappUrl } from "./business";

export default function BusinessLinks() {
  return <nav className="launch-footer-links" aria-label="Support and policies">
    <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
    <a href={`mailto:${businessEmail}`}>{businessEmail}</a>
    <Link href="/categories">AI tool categories</Link>
    <Link href="/delivery">Delivery &amp; support</Link>
    <Link href="/privacy">Privacy</Link>
    <Link href="/terms">Terms</Link>
    <Link href="/refunds">Refunds &amp; cancellations</Link>
  </nav>;
}
