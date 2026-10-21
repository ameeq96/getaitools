"use client";

import { useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCheck, Copy, Download, MessageSquare } from "lucide-react";
import { emailInquiryUrl, whatsappUrl } from "../../business";

export default function ContactDraft() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Plans & pricing");
  const [message, setMessage] = useState("");
  const [draft, setDraft] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState("");
  const messageInput = useRef<HTMLTextAreaElement>(null);

  function clearDraft() {
    setDraft("");
    setCopied(false);
    setError("");
    setFeedback("");
  }

  function prepareMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!message.trim()) {
      setError("Add a message so your question is ready to share.");
      messageInput.current?.focus();
      return;
    }
    setDraft([
      "GetAI Tools — Contact inquiry",
      `Subject: ${subject}`,
      ...(name.trim() ? [`Name: ${name.trim()}`] : []),
      ...(email.trim() ? [`Email: ${email.trim()}`] : []),
      "",
      message.trim()
    ].join("\n"));
    setCopied(false);
    setError("");
    setFeedback("Your draft is ready. Review it below, then open WhatsApp or your email app to send it.");
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopied(true);
      setError("");
      setFeedback("Message copied. Your inquiry has not been sent.");
    } catch {
      setError("Clipboard access is unavailable. Download your message or select the draft to copy it manually.");
    }
  }

  function downloadMessage() {
    const url = URL.createObjectURL(new Blob([draft], { type: "text/plain;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "getaitools-contact-inquiry.txt";
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setError("");
    setFeedback("Message downloaded. Your inquiry has not been sent.");
  }

  return <>
    <div className="contact-panel-heading"><span className="contact-panel-icon"><MessageSquare size={23} /></span><span className="eyebrow section-eyebrow">LET’S MAKE IT CLEAR</span><h2>Start with<br /><span>your question.</span></h2><p>A few useful details make a good starting point.</p></div>
    <form className="contact-form" onSubmit={prepareMessage}>
      <div className="contact-fields">
        <div className="contact-field"><label className="contact-field-label" htmlFor="contact-name">Your name <span className="contact-optional">Optional</span></label><input id="contact-name" name="name" autoComplete="name" maxLength={120} placeholder="What should we call you?" value={name} onChange={(event) => { setName(event.target.value); clearDraft(); }} /></div>
        <div className="contact-field"><label className="contact-field-label" htmlFor="contact-email">Email address <span className="contact-optional">Optional</span></label><input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} placeholder="you@example.com" value={email} onChange={(event) => { setEmail(event.target.value); clearDraft(); }} /></div>
      </div>
      <div className="contact-field"><label className="contact-field-label" htmlFor="contact-subject">What is it about?</label><select id="contact-subject" name="subject" value={subject} onChange={(event) => { setSubject(event.target.value); clearDraft(); }}><option>Plans &amp; pricing</option><option>An existing inquiry</option><option>Help choosing a tool</option></select></div>
      <div className="contact-field"><label className="contact-field-label" htmlFor="contact-message">Your message</label><textarea id="contact-message" name="message" ref={messageInput} required rows={6} maxLength={5000} placeholder="Tell us which tools you are considering, what you want to do, or the question on your mind…" value={message} onChange={(event) => { setMessage(event.target.value); clearDraft(); }} /></div>
      <button className="button button-primary" type="submit">Prepare message <ArrowUpRight size={17} /></button>
      <p className="contact-form-note">Prepare your message, then choose WhatsApp or email to review and send it in that app. You can also copy or download your draft.</p>
    </form>
    {draft && <section className="contact-draft" aria-labelledby="contact-draft-title"><div className="contact-draft-heading"><h3 id="contact-draft-title">Your message, ready to share.</h3><span>DRAFT</span></div><label className="contact-field-label" htmlFor="contact-draft-preview">Prepared message</label><textarea id="contact-draft-preview" readOnly value={draft} rows={10} /><div className="contact-draft-actions"><a className="button button-primary" href={whatsappUrl(draft)} target="_blank" rel="noopener noreferrer">Open WhatsApp <ArrowUpRight size={16} /></a><a className="download-button" href={emailInquiryUrl(`GetAI Tools — ${subject}`, draft)}>Open email <ArrowUpRight size={15} /></a><button className="download-button" onClick={copyMessage}>{copied ? <><CheckCheck size={16} /> Message copied</> : <><Copy size={16} /> Copy message</>}</button><button className="download-button" onClick={downloadMessage}><Download size={15} /> Download .txt</button></div></section>}
    {error && <p className="contact-feedback copy-error" role="alert">{error}</p>}
    {feedback && <p className="contact-feedback copy-success" role="status">{feedback}</p>}
  </>;
}
