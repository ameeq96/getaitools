"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { inquiryPreparedEvent, measurementChoiceKey, type MeasurementEvent } from "./inquiry-metrics";

type Choice = "allowed" | "declined" | "pending";

export default function UsageMeasurement() {
  const pathname = usePathname();
  const [choice, setChoice] = useState<Choice>("pending");
  const [ready, setReady] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const lastView = useRef("");

  useEffect(() => {
    function readChoice() {
      try {
        const saved = localStorage.getItem(measurementChoiceKey);
        setChoice(saved === "allowed" || saved === "declined" ? saved : "pending");
      } catch { setChoice("pending"); }
      setReady(true);
    }
    readChoice();
    window.addEventListener("storage", readChoice);
    return () => window.removeEventListener("storage", readChoice);
  }, []);

  useEffect(() => {
    if (choice !== "allowed") { lastView.current = ""; return; }
    function record(event: MeasurementEvent) {
      const body = JSON.stringify({ event, page: pathname });
      try {
        if (navigator.sendBeacon?.("/api/analytics", new Blob([body], { type: "application/json" }))) return;
        void fetch("/api/analytics", { method: "POST", headers: { "Content-Type": "application/json" }, body, keepalive: true }).catch(() => {});
      } catch { /* Measurement never interrupts browsing or an inquiry. */ }
    }
    if (lastView.current !== pathname) {
      lastView.current = pathname;
      if (pathname.startsWith("/tools/")) record("tool_view");
    }
    function onClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(target instanceof HTMLAnchorElement)) return;
      if (target.protocol === "mailto:") record("email_click");
      else if (target.hostname === "wa.me") record("whatsapp_click");
    }
    const onPrepared = () => record("inquiry_prepared");
    document.addEventListener("click", onClick);
    window.addEventListener(inquiryPreparedEvent, onPrepared);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener(inquiryPreparedEvent, onPrepared);
    };
  }, [choice, pathname]);

  function choose(next: Exclude<Choice, "pending">) {
    try { localStorage.setItem(measurementChoiceKey, next); } catch { /* The choice still applies to this visit. */ }
    setChoice(next);
    setSettingsOpen(false);
  }

  if (!ready) return null;
  if (choice !== "pending" && !settingsOpen) return <button className="measurement-settings" onClick={() => setSettingsOpen(true)}>Privacy choices</button>;
  return <section className="measurement-notice" aria-labelledby="measurement-title">
    <div><h2 id="measurement-title">Help improve the collection?</h2><p>Allow anonymous counts of tool views and inquiry actions. Your messages and contact details are not included. <Link href="/privacy#privacy-measurement">How it works</Link></p></div>
    <div className="measurement-actions"><button className="button button-primary" onClick={() => choose("allowed")}>Allow counts</button><button className="download-button" onClick={() => choose("declined")}>No thanks</button></div>
  </section>;
}
