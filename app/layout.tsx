import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { businessEmail, whatsappNumber } from "./business";
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
  }} />{children}<UsageMeasurement /></body></html>;
}
