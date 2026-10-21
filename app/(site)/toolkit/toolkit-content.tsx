"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCheck, ChevronDown, ChevronRight, Copy, Download, Plus, ShoppingBag, Sparkles, X } from "lucide-react";
import { tools, ToolLogo, type ToolId } from "../../catalog";
import { emailInquiryUrl, whatsappUrl } from "../../business";

const toolkitKey = "getaitools-toolkit";
const toolIds = new Set<string>(tools.map((tool) => tool.id));

function readToolkit(): ToolId[] {
  const raw = localStorage.getItem(toolkitKey);
  let stored: unknown;
  try { stored = JSON.parse(raw || "[]"); } catch { return []; }
  return Array.isArray(stored) ? [...new Set(stored.filter((id): id is ToolId => typeof id === "string" && toolIds.has(id)))] : [];
}

export default function ToolkitContent() {
  const [selected, setSelected] = useState<ToolId[]>([]);
  const [restored, setRestored] = useState(false);
  const [storageError, setStorageError] = useState(false);
  const [duration, setDuration] = useState("Monthly");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    function restore() {
      try { setSelected(readToolkit()); setStorageError(false); }
      catch { setStorageError(true); }
      setCopied(false);
      setCopyError(false);
      setRestored(true);
    }
    function handleStorage(event: StorageEvent) {
      if (event.key === toolkitKey || event.key === null) restore();
    }
    restore();
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const selectedTools = tools.filter((tool) => selected.includes(tool.id));
  const inquiry = `Hi GetAI Tools! I'd like a quote for:\n\n${selectedTools.map((tool, index) => `${index + 1}. ${tool.name}`).join("\n")}\n\nPreferred duration: ${duration}\nCurrency: USD\n\nPlease confirm availability, the exact plan, final USD price, access method, activation estimate, renewal, support, and refund/cancellation terms before payment.\n\nFrom getaitools.shop`;

  function removeTool(id: ToolId, name: string) {
    let next = selected.filter((item) => item !== id);
    try {
      next = readToolkit().filter((item) => item !== id);
      localStorage.setItem(toolkitKey, JSON.stringify(next));
      setStorageError(false);
    } catch { setStorageError(true); }
    setSelected(next);
    setCopied(false);
    setCopyError(false);
    setMessage(`${name} removed from this toolkit.`);
  }

  async function copyInquiry() {
    try {
      await navigator.clipboard.writeText(inquiry);
      setCopied(true);
      setCopyError(false);
      setMessage("");
    } catch {
      setCopied(false);
      setCopyError(true);
    }
  }

  function downloadInquiry() {
    const url = URL.createObjectURL(new Blob([inquiry], { type: "text/plain;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "getaitools-inquiry.txt";
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setMessage("Your inquiry file is ready to download. It has not been sent.");
  }

  return <main className="kit-page wrap">
    <nav className="info-breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight size={12} /><span aria-current="page">Your toolkit</span></nav>

    <section className="kit-hero" aria-labelledby="toolkit-title">
      <div><div className="eyebrow section-eyebrow"><span className="section-line" /> YOUR WORKFLOW. YOUR OWN MIX.</div><h1 className="kit-title" id="toolkit-title">Your toolkit.<br /><span>More possibilities.</span></h1><p className="kit-lede">A creative sidekick. A research companion. A little more room to do your thing. Bring your favorites together, then find the right plan.</p></div>
      <div className="kit-count"><ShoppingBag size={23} /><strong>{restored ? selected.length.toString().padStart(2, "0") : "—"}</strong><span>{restored && selected.length === 1 ? "TOOL IN YOUR MIX" : "TOOLS IN YOUR MIX"}</span><span className="kit-count-spark" aria-hidden="true">✳</span></div>
    </section>

    {storageError && <p className="kit-storage-warning" role="alert">Browser storage is unavailable. Saved tools may not load, and changes here may not persist after this visit.</p>}
    <p className="kit-status" role="status" aria-live="polite">{message}</p>

    {!restored ? <div className="kit-loading" role="status"><ShoppingBag size={25} /><p>Getting your toolkit ready…</p></div> : selectedTools.length ? <div className="kit-layout">
      <section className="kit-selection" aria-labelledby="selection-title">
        <div className="kit-selection-heading"><div><span className="eyebrow">A FEW GOOD TOOLS</span><h2 id="selection-title">Good company for<br /><span>what comes next.</span></h2></div><Link className="text-link" href="/#tools">Add more <Plus size={16} /></Link></div>
        <div className="kit-items">{selectedTools.map((tool) => <article className="kit-item" key={tool.id} style={{ "--tool-accent": tool.accent } as CSSProperties}>
          <Link className={`kit-logo product-${tool.id}`} href={`/tools/${tool.id}`} aria-label={`Explore ${tool.name}`}><ToolLogo id={tool.id} /></Link>
          <div className="kit-item-copy"><span>{tool.category}</span><h3><Link href={`/tools/${tool.id}`}>{tool.name}</Link></h3><p>{tool.shortDescription}</p><Link className="kit-item-link" href={`/tools/${tool.id}`}>Tool details <ArrowUpRight size={13} /></Link></div>
          <span className="kit-item-price">Quote in USD</span><button className="kit-remove icon-button" aria-label={`Remove ${tool.name} from toolkit`} onClick={() => removeTool(tool.id, tool.name)}><X size={17} /></button>
        </article>)}</div>
        <div className="kit-selection-note"><Sparkles size={19} /><p>Your toolkit is a selection of tools you are interested in. Confirm each plan, availability, and access details before payment.</p></div>
      </section>

      <aside className="kit-inquiry" aria-labelledby="inquiry-title">
        <div className="kit-inquiry-top"><span className="eyebrow"><span className="status-dot" /> THE NEXT LITTLE STEP</span><h2 id="inquiry-title">Good tools.<br /><span>The right plan.</span></h2><p>Prepare one inquiry for your whole selection. A little clarity before you commit.</p></div>
        <div className="kit-currency"><span>YOUR QUOTE CURRENCY</span><strong>US dollars <span>USD $</span></strong></div>
        <div className="duration-field"><span>Preferred duration</span><div>{["Monthly", "Annual"].map((item) => <button key={item} aria-pressed={duration === item} className={duration === item ? "active" : ""} onClick={() => { setDuration(item); setCopied(false); setCopyError(false); }}>{item}</button>)}</div></div>
        <p className="kit-inquiry-copy">Ask about current plans, final pricing, access details, and support terms for all {selectedTools.length} {selectedTools.length === 1 ? "tool" : "tools"}.</p>
        <div className="launch-inquiry-actions"><a className="button button-primary inquiry-button" href={whatsappUrl(inquiry)} target="_blank" rel="noopener noreferrer">Continue on WhatsApp <ArrowUpRight size={17} /></a><a className="button launch-email-button" href={emailInquiryUrl("Toolkit plans & pricing inquiry", inquiry)}>Open email inquiry <ArrowUpRight size={17} /></a></div>
        <button className="download-button" onClick={copyInquiry}>{copied ? <><CheckCheck size={18} /> Inquiry copied</> : <><Copy size={17} /> Copy pricing inquiry</>}</button>
        {copied && <p className="copy-success" role="status">Ready to share. Your inquiry has not been sent.</p>}
        {copyError && <p className="copy-error" role="alert">Clipboard access is unavailable. Open the preview below to select and copy your inquiry, or download the file.</p>}
        <button className="download-button" onClick={downloadInquiry}><Download size={15} /> Download inquiry as .txt</button>
        <details className="kit-preview"><summary>Preview your inquiry <ChevronDown size={15} /></summary><label htmlFor="inquiry-preview">Your pricing inquiry</label><textarea id="inquiry-preview" readOnly rows={11} value={inquiry} /></details>
        <p className="basket-disclaimer">Review and send your message in WhatsApp or your email app. Opening an inquiry does not place an order or take payment. <Link href="/delivery">Delivery &amp; support</Link> · <Link href="/refunds">Refunds &amp; cancellations</Link></p>
      </aside>
    </div> : <section className="kit-empty" aria-labelledby="empty-title"><span className="kit-empty-icon"><ShoppingBag size={37} /><Sparkles size={19} /></span><div className="eyebrow section-eyebrow">START WITH A LITTLE CURIOSITY</div><h2 id="empty-title">Your next great idea<br /><span>deserves good company.</span></h2><p>Explore the collection and tap + to save your favorites. You can also add a tool from its detail page, then come back here to build your inquiry.</p><div className="kit-empty-actions"><Link className="button button-primary" href="/#tools">Find your first tool <ArrowUpRight size={18} /></Link><Link className="text-link" href="/how-it-works">See how it works <ArrowRight size={16} /></Link></div></section>}

    <section className="kit-help" aria-label="Toolkit help"><div><span className="eyebrow">A LITTLE HELP GOES A LONG WAY</span><h2>Finding your fit?</h2><p>Get a little clarity on choosing tools and preparing your inquiry.</p></div><div><Link className="text-link" href="/faqs">Read the FAQs <ArrowUpRight size={16} /></Link><Link className="text-link" href="/contact">Contact & inquiries <ArrowUpRight size={16} /></Link></div></section>
  </main>;
}
