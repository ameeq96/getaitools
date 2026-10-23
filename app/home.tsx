"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, CheckCheck, ChevronDown, Copy, Download, Grid2X2, Layers3, Menu, Minus, Plus, Search, ShoppingBag, SlidersHorizontal, Sparkles, WandSparkles, X } from "lucide-react";
import { categories, tools, ToolLogo, type Category, type Tool, type ToolId } from "./catalog";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getCatalogUrl } from "./catalog-seo";
import { emailInquiryUrl, whatsappUrl } from "./business";
import BusinessLinks from "./business-links";
import { notifyInquiryPrepared } from "./inquiry-metrics";

function Brand({ light = false }: { light?: boolean }) {
  return <span className={`brand ${light ? "brand-light" : ""}`}><span className="brand-mark" aria-hidden="true">g<span>✦</span></span><span>getai<span className="brand-tools">tools</span><span className="brand-dot">.</span></span></span>;
}

function Modal({ open, title, onDismiss, className = "", children }: { open: boolean; title: string; onDismiss: () => void; className?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    if (open && !dialog?.open) dialog?.showModal();
    if (!open && dialog?.open) dialog.close();
  }, [open]);
  return <dialog ref={ref} className={`modal ${className}`} aria-label={title} onClose={onDismiss} onClick={(event) => {
    if (event.target !== ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onDismiss();
  }}>
    {children}
    <button className="icon-button modal-close" aria-label="Close dialog" onClick={onDismiss}><X size={20} /></button>
  </dialog>;
}

const faqs = [
  ["How do I find the right AI tool?", "Start with what you want to do. Use the categories to explore tools for writing, research, design, or video and audio. Open any tool to see what it can help you create."],
  ["How much do the tools cost?", "All pricing is quoted in US dollars (USD). Add the tools you are interested in to your toolkit and prepare an inquiry for current plans, availability, and pricing."],
  ["How does ordering work?", "Choose your tools, build your toolkit, and open your inquiry in WhatsApp or email. Review and send it to confirm the plan, duration, access details, and final USD price before payment."],
  ["Can I choose more than one tool?", "Absolutely. Your toolkit can include several different tools. Add everything you are interested in and prepare a single inquiry for the full selection."],
  ["Are these tools made by GetAI Tools?", "GetAI Tools is an independent storefront. The tools shown are developed by their respective companies. Product names and marks belong to their owners."]
];

export default function Home({ initialCategory = "All tools", initialSearch = "", initialSort = "featured", initialPage = 1 }: { initialCategory?: Category; initialSearch?: string; initialSort?: string; initialPage?: number }) {
  const router = useRouter();
  const category = initialCategory;
  const sort = initialSort;
  const [search, setSearch] = useState(initialSearch);
  const page = search === initialSearch ? initialPage : 1;
  const [selected, setSelected] = useState<ToolId[]>([]);
  const [restored, setRestored] = useState(false);
  const [basketOpen, setBasketOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [duration, setDuration] = useState("Monthly");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [toast, setToast] = useState("");
  const toastTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { setSearch(initialSearch); }, [initialSearch]);

  useEffect(() => {
    try {
      const stored: unknown = JSON.parse(localStorage.getItem("getaitools-toolkit") || "[]");
      if (Array.isArray(stored)) setSelected([...new Set(stored.filter((id): id is ToolId => tools.some((tool) => tool.id === id)))]);
    } catch { /* A fresh toolkit is available if browser storage is unavailable. */ }
    if (new URLSearchParams(window.location.search).get("toolkit") === "open") setBasketOpen(true);
    setRestored(true);
    return () => { if (toastTimeout.current) clearTimeout(toastTimeout.current); };
  }, []);

  useEffect(() => {
    if (restored) {
      try { localStorage.setItem("getaitools-toolkit", JSON.stringify(selected)); } catch { /* Toolkit selection still works without storage. */ }
    }
  }, [selected, restored]);

  const filteredTools = tools.filter((tool) => (category === "All tools" || tool.category === category) && `${tool.name} ${tool.maker} ${tool.description}`.toLowerCase().includes(search.trim().toLowerCase())).sort((a, b) => sort === "name" ? a.name.localeCompare(b.name) : 0);
  const pageCount = Math.ceil(filteredTools.length / 10);
  const currentPage = Math.min(page, Math.max(pageCount, 1));
  const pageStart = (currentPage - 1) * 10;
  const visibleTools = filteredTools.slice(pageStart, pageStart + 10);
  const paginationPages = Array.from({ length: pageCount }, (_, index) => index + 1).filter((item) => item === 1 || item === pageCount || item % 5 === 0 || Math.abs(item - currentPage) <= 1);
  const selectedTools = tools.filter((tool) => selected.includes(tool.id));

  function notify(message: string) {
    setToast(message);
    if (toastTimeout.current) clearTimeout(toastTimeout.current);
    toastTimeout.current = setTimeout(() => setToast(""), 2800);
  }

  function addTool(tool: Tool) {
    if (selected.includes(tool.id)) { notify(`${tool.name} is already in your toolkit`); return; }
    setSelected((items) => [...items, tool.id]);
    setCopied(false);
    notify(`${tool.name} added to your toolkit`);
  }

  function updateSearch(nextSearch: string) {
    setSearch(nextSearch);
    router.replace(`${getCatalogUrl({ q: nextSearch, sort, category })}#tools`, { scroll: false });
  }
  function resetFilters() { setSearch(""); router.push("/#tools"); }
  function focusCatalog() {
    document.getElementById("catalog-heading")?.focus({ preventScroll: true });
  }
  function inquiryText() {
    return `Hi GetAI Tools! I'd like a quote for:\n\n${selectedTools.map((tool, i) => `${i + 1}. ${tool.name}`).join("\n")}\n\nPreferred duration: ${duration}\nCurrency: USD\n\nPlease confirm availability, the exact plan, final USD price, access method, activation estimate, renewal, support, and refund/cancellation terms before payment.\n\nFrom getaitools.shop`;
  }
  async function copyInquiry() {
    try { await navigator.clipboard.writeText(inquiryText()); notifyInquiryPrepared(); setCopied(true); setCopyError(false); }
    catch { setCopyError(true); }
  }
  function downloadInquiry() {
    const url = URL.createObjectURL(new Blob([inquiryText()], { type: "text/plain;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url; anchor.download = "getaitools-inquiry.txt"; anchor.click();
    notifyInquiryPrepared();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    notify("Your inquiry has been downloaded");
  }

  return <>
    <div className="announcement"><span><Sparkles size={13} /> A little upgrade. A whole lot of possibility.</span><span>Curated AI tools. All in one place. <ArrowUpRight size={12} /></span></div>
    <header className="header wrap">
      <a href="/" className="brand-link"><Brand /></a>
      <nav className={mobileMenu ? "nav nav-open" : "nav"} aria-label="Main navigation">
        <a href="#tools" onClick={() => setMobileMenu(false)}>Explore tools <ChevronDown size={13} /></a>
        <a href="/about" onClick={() => setMobileMenu(false)}>Why GetAI?</a>
        <a href="/how-it-works" onClick={() => setMobileMenu(false)}>How it works</a>
      </nav>
      <div className="header-actions"><span className="currency">USD <span>$</span></span><span className="header-divider" /><Link className="toolkit-button" aria-label={`Your toolkit, ${selected.length} ${selected.length === 1 ? "tool" : "tools"}`} href="/toolkit"><ShoppingBag size={17} /><span>Your toolkit</span><span className="basket-count">{selected.length}</span></Link><button className="menu-toggle icon-button" aria-label={mobileMenu ? "Close navigation" : "Open navigation"} aria-expanded={mobileMenu} onClick={() => setMobileMenu(!mobileMenu)}>{mobileMenu ? <X size={21} /> : <Menu size={21} />}</button></div>
    </header>

    <main>
      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> YOUR NEXT BIG THING STARTS HERE</div>
          <h1>Your AI tools.<br />A lot more<br /><span>possible.</span><svg className="headline-spark" viewBox="0 0 50 50" aria-hidden="true"><path d="M25 2v46M2 25h46M8.5 8.5l33 33M41.5 8.5l-33 33" /></svg></h1>
          <p>The tools you love. The possibilities you haven’t imagined.<br className="desktop-break" /> Find your next creative, productive, brilliant advantage.</p>
          <div className="hero-actions"><a className="button button-primary" href="#tools">Find your AI tool <ArrowUpRight size={18} /></a><a className="text-link" href="/how-it-works">See how it works <span className="small-circle"><ArrowDown size={15} /></span></a></div>
          <div className="hero-note"><span className="tiny-tool-stack"><span><ToolLogo id="chatgpt" /></span><span><ToolLogo id="claude" /></span><span><ToolLogo id="gemini" /></span></span><span>Big names. One thoughtfully curated collection.</span></div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <span className="art-coordinate coordinate-top">THE FUTURE LOOKS LIKE YOU.</span><span className="art-cross cross-one">+</span><span className="art-cross cross-two">+</span>
          <svg className="orbit-lines" viewBox="0 0 600 600"><defs><radialGradient id="orbitGlow"><stop offset="0" stopColor="#c4f587" stopOpacity=".1" /><stop offset="1" stopColor="#c4f587" stopOpacity="0" /></radialGradient></defs><circle cx="300" cy="300" r="280" fill="url(#orbitGlow)" />{[155, 185, 220, 255].map((r) => <ellipse key={r} cx="300" cy="300" rx={r} ry={r * .62} fill="none" stroke="#a7b69d" strokeOpacity=".14" transform="rotate(-35 300 300)" />)}<path d="M40 300h520M300 40v520" stroke="#a7b69d" strokeOpacity=".07" strokeDasharray="2 8" /></svg>
          <div className="main-art-card"><div className="art-card-top"><span className="mini-brand">g<span>✦</span></span><span>THE POSSIBILITIES PASS</span><ArrowUpRight size={18} /></div><div className="orb"><span className="orb-ring ring-one" /><span className="orb-ring ring-two" /><span className="orb-ring ring-three" /><span className="orb-ring ring-four" /><span className="orb-ring ring-five" /><span className="orb-core">✳</span></div><div className="art-card-bottom"><span>YOUR NEXT<br /><strong>unfair advantage.</strong></span><span className="art-chip"><span /><span /><span /></span></div></div>
          <div className="floating-tool floating-chatgpt"><ToolLogo id="chatgpt" /><span>ChatGPT<small>Think bigger.</small></span><ArrowUpRight size={14} /></div>
          <div className="floating-tool floating-claude"><ToolLogo id="claude" /><span>Claude<small>Make it meaningful.</small></span></div>
          <div className="floating-gemini"><ToolLogo id="gemini" /></div>
          <div className="art-prompt"><Sparkles size={15} /><span>What will you create today?</span><span className="prompt-arrow"><ArrowUpRight size={13} /></span></div>
          <span className="art-coordinate coordinate-bottom">A NEW WAY TO DO YOUR THING. ↗</span>
        </div>
      </section>

      <section className="brands-section wrap" aria-label="Featured AI tools"><p>THE BRILLIANT MINDS BEHIND YOUR NEXT BIG IDEA</p><div className="brand-row">{tools.slice(0, 5).map((tool) => <Link key={tool.id} href={`/tools/${tool.id}`}><ToolLogo id={tool.id} /><span>{tool.name}</span></Link>)}</div></section>

      <section id="tools" className="catalog-section wrap">
        <div className="section-heading"><div><div className="eyebrow section-eyebrow"><span className="section-line" /> THE TOOL EDIT</div><h2 id="catalog-heading" tabIndex={-1}>Meet your new toolkit<span>.</span></h2></div><p>For the ideas worth chasing.<br />And the everyday worth upgrading.</p></div>
        <div className="catalog-toolbar"><div className="category-list" aria-label="Tool categories">{categories.map((item) => <Link key={item} href={`${getCatalogUrl({ category: item, q: search, sort })}#tools`} className={category === item ? "category active" : "category"} aria-current={category === item ? "page" : undefined}>{item === "All tools" && <Grid2X2 size={13} />}{item}</Link>)}</div><label className="search-field"><Search size={16} /><input aria-label="Search tools" value={search} onChange={(event) => updateSearch(event.target.value)} placeholder="Find your next tool…" />{search && <button onClick={() => updateSearch("")} aria-label="Clear search"><X size={14} /></button>}</label></div>
        <div className="results-bar"><span aria-live="polite">{filteredTools.length ? `Showing ${pageStart + 1}–${Math.min(pageStart + 10, filteredTools.length)} of ${filteredTools.length} tools` : "0 tools found"}</span><label className="sort-control"><SlidersHorizontal size={13} /><select value={sort} onChange={(event) => router.push(`${getCatalogUrl({ q: search, sort: event.target.value, category })}#tools`, { scroll: false })} aria-label="Sort tools"><option value="featured">Curated for you</option><option value="name">Name: A–Z</option></select><ChevronDown size={12} /></label></div>
        <div id="catalog-grid" className="product-grid">{visibleTools.map((tool, index) => <article className={`product-card product-${tool.id}`} key={tool.id} style={{ "--tool-accent": tool.accent, "--card-delay": `${Math.min(index, 7) * 45}ms` } as React.CSSProperties}>
          <Link className="product-visual" href={`/tools/${tool.id}`}><span className="product-tag">{tool.tag}</span><span className="visual-grid" /><span className="visual-orbit orbit-a" /><span className="visual-orbit orbit-b" /><span className="visual-logo"><ToolLogo id={tool.id} /></span><span className="visual-caption">{tool.shortDescription}</span><span className="visual-index">{String(tools.indexOf(tool) + 1).padStart(2, "0")}</span></Link>
          <div className="product-content"><div className="product-category">{tool.category}</div><div className="product-title-row"><h3><Link href={`/tools/${tool.id}`}>{tool.name}</Link></h3><span className="maker">{tool.maker}</span></div><p>{tool.description}</p><div className="product-bottom"><Link className="details-link" href={`/tools/${tool.id}`}>Explore tool <ArrowUpRight size={14} /></Link><button className={selected.includes(tool.id) ? "add-tool added" : "add-tool"} aria-label={selected.includes(tool.id) ? `${tool.name} is in your toolkit` : `Add ${tool.name} to toolkit`} onClick={() => addTool(tool)}>{selected.includes(tool.id) ? <Check size={16} /> : <Plus size={17} />}</button></div></div>
        </article>)}</div>
        {!filteredTools.length && <div className="empty-search"><Search size={32} /><h3>No tools found. New possibilities ahead.</h3><p>Try another name or explore a different category.</p><button className="button button-primary" onClick={resetFilters}>Show all tools <ArrowRight size={16} /></button></div>}
        {pageCount > 1 && <nav className="pagination" aria-label="Catalog pagination">{currentPage === 1 ? <button className="pagination-previous" aria-label="Previous page" disabled><ArrowRight size={15} /><span>Previous</span></button> : <Link className="pagination-previous" aria-label="Previous page" aria-controls="catalog-grid" href={`${getCatalogUrl({ page: currentPage - 1, q: search, sort, category })}#tools`} onClick={focusCatalog}><ArrowRight size={15} /><span>Previous</span></Link>}<div className="pagination-pages">{paginationPages.map((item, index) => <span className="pagination-slot" key={item}>{index > 0 && item - paginationPages[index - 1] > 1 && <span className="pagination-gap" aria-hidden="true">…</span>}<Link aria-label={`Go to page ${item}`} aria-current={currentPage === item ? "page" : undefined} aria-controls="catalog-grid" href={`${getCatalogUrl({ page: item, q: search, sort, category })}#tools`} onClick={focusCatalog}>{item}</Link></span>)}</div>{currentPage === pageCount ? <button className="pagination-next" aria-label="Next page" disabled><span>Next</span><ArrowRight size={15} /></button> : <Link className="pagination-next" aria-label="Next page" aria-controls="catalog-grid" href={`${getCatalogUrl({ page: currentPage + 1, q: search, sort, category })}#tools`} onClick={focusCatalog}><span>Next</span><ArrowRight size={15} /></Link>}</nav>}
        <p className="catalog-footnote"><span className="status-dot" /> Pick your tools. Request your plan. All quotes in USD.</p>
      </section>

      <section id="why-getai" className="why-section wrap"><div className="why-intro"><div className="eyebrow">A BETTER KIND OF TOOLBOX</div><h2>Less searching.<br />More <span>doing.</span></h2><p>The AI world moves fast. We bring the useful stuff together, so you can get back to your next big thing.</p><a href="#tools" className="text-link">Find your advantage <ArrowUpRight size={17} /></a><span className="why-asterisk" aria-hidden="true">✳</span></div><div className="why-features"><div><span className="feature-icon"><WandSparkles size={22} /></span><div><h3>Good tools. Great company.</h3><p>A considered selection of AI tools for the way you think, work, and create.</p></div><span className="feature-number">01</span></div><div><span className="feature-icon"><Layers3 size={22} /></span><div><h3>Your workflow, your toolkit.</h3><p>A writing partner. A design sidekick. A research companion. Pick your own mix.</p></div><span className="feature-number">02</span></div><div><span className="feature-icon"><ShoppingBag size={21} /></span><div><h3>Clarity before commitment.</h3><p>Explore first. Request available plans and USD pricing. Choose what fits.</p></div><span className="feature-number">03</span></div></div></section>

      <section id="how-it-works" className="how-section wrap"><div className="section-heading"><div><div className="eyebrow section-eyebrow"><span className="section-line" /> FROM CURIOUS TO CREATING</div><h2>Your next chapter. <span>In three steps.</span></h2></div></div><div className="steps-grid"><div className="step"><span className="step-index">01 <span /><Search size={18} /></span><h3>Find your spark.</h3><p>Explore the collection and discover the tools that fit what you want to do.</p></div><div className="step"><span className="step-index">02 <span /><Plus size={18} /></span><h3>Make it your toolkit.</h3><p>Add your favorites. Mix a creative sidekick with a productivity powerhouse.</p></div><div className="step"><span className="step-index">03 <span /><ArrowUpRight size={19} /></span><h3>Find your perfect plan.</h3><p>Prepare an inquiry to confirm availability, access details, and pricing in USD.</p></div></div></section>

      <section className="faq-section wrap" id="faqs"><div className="faq-intro"><div className="eyebrow section-eyebrow"><span className="section-line" /> GOOD QUESTIONS</div><h2>A little clarity.<br /><span>A lot less guesswork.</span></h2><p>Everything you need to get started.</p><span className="faq-decoration" aria-hidden="true">?</span></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={openFaq === index ? "faq-item faq-open" : "faq-item"} key={question}><h3><button aria-expanded={openFaq === index} aria-controls={`faq-answer-${index}`} onClick={() => setOpenFaq(openFaq === index ? null : index)}>{question}{openFaq === index ? <Minus size={17} /> : <Plus size={17} />}</button></h3><div id={`faq-answer-${index}`} hidden={openFaq !== index}><p>{answer}</p></div></div>)}</div></section>

      <section className="cta-section wrap"><div><span className="eyebrow">GOOD TOOLS CHANGE WHAT’S POSSIBLE.</span><h2>What’s your next <span>big thing?</span></h2><p>There’s a tool for that. Let’s find yours.</p></div><a className="button button-dark" href="#tools">Explore the collection <ArrowUpRight size={19} /></a><span className="cta-spark" aria-hidden="true">✳</span></section>
    </main>

    <footer className="footer wrap"><div className="footer-main"><div><a className="brand-link" href="/"><Brand /></a><p>A little AI. A lot more possible.</p></div><div className="footer-links"><a href="#tools">The collection</a><Link href="/about">About</Link><Link href="/how-it-works">How it works</Link><Link href="/faqs">FAQs</Link><Link href="/contact">Contact</Link><Link href="/toolkit">Your toolkit <ArrowUpRight size={13} /></Link></div><a className="back-top" href="#" aria-label="Back to top"><ArrowUpRight size={21} /></a></div><BusinessLinks /><div className="footer-bottom"><span>© {new Date().getFullYear()} GetAI Tools</span><span>Independent storefront. Product names and marks belong to their respective owners.</span><span>Made for what’s next. <Sparkles size={12} /></span></div></footer>

    <Modal open={basketOpen} title="Your toolkit" onDismiss={() => setBasketOpen(false)} className="basket-modal"><div className="basket-header"><span className="eyebrow section-eyebrow">A FEW GOOD TOOLS. A WORLD OF POSSIBILITY.</span><h2>Your toolkit<span>.</span></h2><p>{selected.length ? `${selected.length} ${selected.length === 1 ? "tool" : "tools"} for whatever comes next.` : "Your next great idea deserves good company."}</p></div>{selected.length ? <><div className="basket-items">{selectedTools.map((tool) => <div key={tool.id} className="basket-item"><span className={`basket-logo product-${tool.id}`} style={{ "--tool-accent": tool.accent } as React.CSSProperties}><ToolLogo id={tool.id} /></span><div><h3>{tool.name}</h3><span>{tool.category}</span></div><span className="basket-price">Quote in USD</span><button className="icon-button" aria-label={`Remove ${tool.name} from toolkit`} onClick={() => { setSelected((items) => items.filter((id) => id !== tool.id)); setCopied(false); }}><X size={17} /></button></div>)}</div><div className="duration-field"><span>Preferred duration</span><div>{["Monthly", "Annual"].map((item) => <button key={item} aria-pressed={duration === item} className={duration === item ? "active" : ""} onClick={() => { setDuration(item); setCopied(false); }}>{item}</button>)}</div></div><div className="inquiry-info"><Sparkles size={19} /><p>A great toolkit starts with the right plan. Copy your inquiry and share it with GetAI Tools to confirm availability and final pricing.</p></div><div className="launch-inquiry-actions"><a className="button button-primary inquiry-button" href={whatsappUrl(inquiryText())} target="_blank" rel="noopener noreferrer">Continue on WhatsApp <ArrowUpRight size={17} /></a><a className="button launch-email-button" href={emailInquiryUrl("Toolkit plans & pricing inquiry", inquiryText())}>Open email inquiry <ArrowUpRight size={17} /></a></div><button className="download-button" onClick={copyInquiry}>{copied ? <><CheckCheck size={18} /> Inquiry copied</> : <><Copy size={17} /> Copy pricing inquiry <ArrowUpRight size={17} /></>}</button>{copyError && <p className="copy-error" role="alert">Clipboard access is unavailable. Download your inquiry instead.</p>}{copied && <p className="copy-success" role="status">Ready to share. Your inquiry has not been sent.</p>}<button className="download-button" onClick={downloadInquiry}><Download size={15} /> Download inquiry as .txt</button><p className="basket-disclaimer">Review and send your inquiry in WhatsApp or your email app. Opening a draft does not place an order or take payment.</p></> : <div className="empty-basket"><span><ShoppingBag size={36} /></span><h3>Let’s find your first tool.</h3><p>Browse the collection and tap + to start building.</p><a href="#tools" className="button button-primary" onClick={() => setBasketOpen(false)}>Explore tools <ArrowUpRight size={17} /></a></div>}</Modal>
    <div className={toast ? "toast toast-visible" : "toast"} role="status" aria-live="polite"><Check size={17} />{toast}</div>
  </>;
}
