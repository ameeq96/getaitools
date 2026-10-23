"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Plus } from "lucide-react";
import { tools, type ToolId } from "../../catalog";
import { emailInquiryUrl, whatsappUrl } from "../../business";

const toolkitKey = "getaitools-toolkit";
const toolIds = new Set<string>(tools.map((tool) => tool.id));

function readToolkit(): ToolId[] {
  const raw = localStorage.getItem(toolkitKey);
  let stored: unknown;
  try { stored = JSON.parse(raw || "[]"); } catch { return []; }
  return Array.isArray(stored) ? [...new Set(stored.filter((id): id is ToolId => typeof id === "string" && toolIds.has(id)))] : [];
}

export default function ToolActions({ id, name }: { id: ToolId; name: string }) {
  const [added, setAdded] = useState(false);
  const [restored, setRestored] = useState(false);
  const [message, setMessage] = useState("");
  const [storageError, setStorageError] = useState(false);
  const inquiry = `Hi GetAI Tools! I'm interested in ${name}. Please confirm available plans, duration, final pricing in USD, access method, activation estimate, renewal, support, and refund/cancellation terms before payment.\n\nFrom https://getaitools.shop/tools/${id}`;

  useEffect(() => {
    setMessage("");
    function restore() {
      try { setAdded(readToolkit().includes(id)); setStorageError(false); }
      catch { setStorageError(true); }
      setRestored(true);
    }
    function handleStorage(event: StorageEvent) {
      if (event.key === toolkitKey || event.key === null) restore();
    }
    restore();
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [id]);

  function addTool() {
    try {
      const selected = readToolkit();
      if (!selected.includes(id)) localStorage.setItem(toolkitKey, JSON.stringify([...selected, id]));
      setAdded(true);
      setStorageError(false);
      setMessage(`${name} is saved in your toolkit.`);
    } catch {
      setStorageError(true);
      setMessage("");
    }
  }

  return <div className="tool-actions">
    <a className="button button-primary" href={whatsappUrl(inquiry)} target="_blank" rel="noopener noreferrer">Ask on WhatsApp <ArrowRight size={17} /></a>
    <button className="button button-primary" onClick={addTool} disabled={!restored || added} aria-label={added ? `In your toolkit: ${name}` : `Add to your toolkit: ${name}`}>
      {added ? <><Check size={17} /> In your toolkit</> : <>Add to your toolkit <Plus size={17} /></>}
    </button>
    <Link className="detail-basket-link" href="/toolkit">View your toolkit <ArrowRight size={14} /></Link>
    <a className="detail-basket-link" href={emailInquiryUrl(`${name} plans & pricing inquiry`, inquiry)}>Ask by email <ArrowRight size={14} /></a>
    <p className="tool-actions-status" role="status" aria-live="polite">{message}</p>
    {storageError && <p className="tool-actions-error" role="alert">Browser storage is unavailable, so this tool could not be saved here. Open your toolkit in the catalog to continue.</p>}
  </div>;
}
