import type { Metadata } from "next";
import "@fontsource-variable/dm-sans";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://getaitools.shop"),
  title: "GetAI Tools — A little AI. A lot more possible.",
  description: "Find your next AI advantage. Explore tools for writing, creating, coding, and getting more out of every day. All pricing in USD.",
  openGraph: {
    title: "GetAI Tools — Your next unfair advantage",
    description: "Good tools. Bigger possibilities. Discover your AI toolkit at getaitools.shop.",
    type: "website",
    url: "https://getaitools.shop",
    siteName: "GetAI Tools"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
