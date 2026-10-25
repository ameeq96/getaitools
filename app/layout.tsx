import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { businessEmail, whatsappNumber, whatsappUrl } from "./business";
import { JsonLd, siteUrl, socialMetadata } from "./seo";
import UsageMeasurement from "./usage-measurement";

const dmSans = localFont({
  src: "../node_modules/@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2",
  weight: "100 1000", style: "normal", display: "swap", preload: true, adjustFontFallback: false, variable: "--font-dm-sans",
  declarations: [
    { prop: "font-family", value: "DM Sans Variable" },
    { prop: "unicode-range", value: "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD" }
  ]
});
const instrumentSerif = localFont({
  src: "../node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2",
  weight: "400", style: "italic", display: "swap", preload: true, adjustFontFallback: false, variable: "--font-instrument-serif",
  declarations: [
    { prop: "font-family", value: "Instrument Serif" },
    { prop: "unicode-range", value: "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD" }
  ]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getaitools.shop"),
  title: "AI Tools, Plans & USD Quotes | GetAI Tools",
  description: "Explore AI tools for writing, design, coding and research. Compare your options and ask GetAI Tools about available plans and quotes in USD.",
  ...socialMetadata("AI Tools, Plans & USD Quotes | GetAI Tools", "Find AI tools for your workflow and request available plans and USD quotes from GetAI Tools.", "/")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${dmSans.variable} ${instrumentSerif.variable}`}><body><JsonLd data={{
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "GetAI Tools", url: siteUrl, email: businessEmail, telephone: `+${whatsappNumber}`, contactPoint: { "@type": "ContactPoint", contactType: "sales and support", email: businessEmail, telephone: `+${whatsappNumber}`, availableLanguage: "English" } },
      { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "GetAI Tools", inLanguage: "en", publisher: { "@id": `${siteUrl}/#organization` } }
    ]
  }} />{children}<a className="whatsapp-float" href={whatsappUrl("Hi GetAI Tools! I would like to ask about AI tool plans and pricing.")} target="_blank" rel="noopener noreferrer" aria-label="Chat with GetAI Tools on WhatsApp" title="Chat on WhatsApp"><svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor" aria-hidden="true" focusable="false"><path d="M16 3A13 13 0 0 0 4.8 22.6L3 29l6.6-1.7A13 13 0 1 0 16 3Zm0 23.7c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-3.9 1 1-3.8-.3-.4A10.7 10.7 0 1 1 16 26.7Z" /><path d="M22.1 19.1c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.2-.2-.3 0-.5.1-.7l.5-.5.3-.5c.1-.2 0-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.2.2 2.2 3.4 5.3 4.7.7.3 1.3.5 1.8.6.7.2 1.4.2 2 .1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.4Z" /></svg></a><UsageMeasurement /></body></html>;
}
