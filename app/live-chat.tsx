"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle, X } from "lucide-react";

const privatePath = /^\/(?:checkout|streaming-plans|account|admin|api|ai-checkout)(?:\/|$)/i;
const privateKey = /^(?:selection|signature|token|public_token|resume|checkout_key|session|code|email|phone)$/i;
const chatUrl = "https://tawk.to/chat/6ac929cd7f1f3634beb0e4f6/1k4gsmj54";

function privateContext(value: string) {
  if (!value) return false;
  try {
    const url = new URL(value, window.location.origin);
    return privatePath.test(decodeURIComponent(url.pathname).replace(/\/+/g, "/"))
      || [...url.searchParams.keys(), ...new URLSearchParams(url.hash.slice(1)).keys()].some(key => privateKey.test(key));
  } catch { return true; }
}

export default function LiveChat() {
  const pathname = usePathname();
  const [allowed, setAllowed] = useState(false);
  const [open, setOpen] = useState(false);
  const launcher = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sync = () => {
      setOpen(false);
      setAllowed(!privateContext(window.location.href) && !privateContext(document.referrer));
    };
    sync();
    window.addEventListener("popstate", sync);
    window.addEventListener("hashchange", sync);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener("hashchange", sync);
    };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    closeButton.current?.focus();
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !event.defaultPrevented) {
        setOpen(false);
        launcher.current?.focus();
      }
    };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [open]);

  if (!allowed || privateContext(pathname)) return null;

  return <>
    <button ref={launcher} className="getai-live-chat-launcher" type="button" aria-label="Open live chat" aria-expanded={open} aria-controls="getai-live-chat" onClick={() => {
      if (privateContext(window.location.href) || privateContext(document.referrer)) return;
      setOpen(value => !value);
    }}><MessageCircle size={27} aria-hidden="true" /></button>
    {open && <section id="getai-live-chat" className="getai-live-chat-panel" aria-label="GetAI Tools live chat">
      <header><strong>Live chat</strong><button ref={closeButton} type="button" aria-label="Close live chat" onClick={() => { setOpen(false); launcher.current?.focus(); }}><X size={21} aria-hidden="true" /></button></header>
      <iframe title="GetAI Tools support chat" src={chatUrl} referrerPolicy="no-referrer" sandbox="allow-scripts allow-same-origin allow-forms allow-popups" />
      <a className="getai-live-chat-fallback" href="/contact">Other contact options</a>
    </section>}
  </>;
}
