import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, ShoppingBag, Sparkles } from "lucide-react";

function Brand() {
  return <span className="brand"><span className="brand-mark" aria-hidden="true">g<span>✦</span></span><span>getai<span className="brand-tools">tools</span><span className="brand-dot">.</span></span></span>;
}

const navigation = [
  ["The collection", "/#tools"],
  ["Why GetAI?", "/about"],
  ["How it works", "/how-it-works"],
  ["FAQs", "/faqs"],
  ["Contact", "/contact"]
];

export default function SiteLayout({ children }: { children: ReactNode }) {
  return <>
    <div className="announcement"><span><Sparkles size={13} /> A little upgrade. A whole lot of possibility.</span><span>Curated AI tools. All in one place. <ArrowUpRight size={12} /></span></div>
    <header className="header wrap" id="top">
      <Link href="/" className="brand-link" aria-label="GetAI Tools home"><Brand /></Link>
      <nav className="site-page-nav" aria-label="Main navigation">{navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <div className="header-actions"><span className="currency">USD <span>$</span></span><span className="header-divider" /><Link className="toolkit-button" href="/toolkit"><ShoppingBag size={17} /><span>Your toolkit</span><ArrowUpRight size={13} /></Link><details className="site-menu"><summary aria-label="Navigation menu"><Menu size={21} /></summary><nav className="site-menu-links" aria-label="Mobile navigation">{navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}<a href="/toolkit">Your toolkit <ArrowUpRight size={14} /></a></nav></details></div>
    </header>
    {children}
    <footer className="footer wrap"><div className="footer-main"><div><Link className="brand-link" href="/" aria-label="GetAI Tools home"><Brand /></Link><p>A little AI. A lot more possible.</p></div><nav className="footer-links" aria-label="Footer navigation"><Link href="/#tools">The collection</Link><Link href="/about">Why GetAI?</Link><Link href="/how-it-works">How it works</Link><Link href="/faqs">FAQs</Link><Link href="/contact">Contact</Link><Link href="/toolkit">Your toolkit <ArrowUpRight size={13} /></Link></nav><a className="back-top" href="#top" aria-label="Back to top"><ArrowUpRight size={21} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} GetAI Tools</span><span>Independent storefront. Product names and marks belong to their respective owners.</span><span>Made for what’s next. <Sparkles size={12} /></span></div></footer>
  </>;
}
