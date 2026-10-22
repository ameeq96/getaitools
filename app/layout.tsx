import type { Metadata } from "next";
import "@fontsource-variable/dm-sans";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";
import { businessEmail, whatsappNumber } from "./business";
import { JsonLd, siteUrl } from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL("https://getaitools.shop"),
  title: "AI Tools, Plans & USD Quotes | GetAI Tools",
  description: "Explore AI tools for writing, design, coding and research. Compare your options and ask GetAI Tools about available plans and quotes in USD.",
  openGraph: {
    title: "AI Tools, Plans & USD Quotes | GetAI Tools",
    description: "Find AI tools for your workflow and request available plans and USD quotes from GetAI Tools.",
    type: "website",
    url: "https://getaitools.shop",
    siteName: "GetAI Tools"
  },
  twitter: { card: "summary_large_image" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><JsonLd data={{
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "GetAI Tools", url: siteUrl, email: businessEmail, telephone: `+${whatsappNumber}`, contactPoint: { "@type": "ContactPoint", contactType: "sales and support", email: businessEmail, telephone: `+${whatsappNumber}`, availableLanguage: "English" } },
      { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "GetAI Tools", inLanguage: "en", publisher: { "@id": `${siteUrl}/#organization` } }
    ]
  }} />{children}</body></html>;
}
