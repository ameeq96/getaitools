import type { Metadata } from "next";
import ToolkitContent from "./toolkit-content";

export const metadata: Metadata = {
  title: "Your Toolkit — GetAI Tools",
  description: "Bring your AI tools together, choose a preferred duration, and prepare a pricing inquiry in USD.",
  alternates: { canonical: "/toolkit" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Your Toolkit — GetAI Tools",
    description: "Your tools. Your possibilities. Build one toolkit and prepare your pricing inquiry in USD.",
    url: "/toolkit",
    siteName: "GetAI Tools",
    type: "website"
  }
};

export default function ToolkitPage() {
  return <ToolkitContent />;
}
