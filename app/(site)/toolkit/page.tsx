import type { Metadata } from "next";
import ToolkitContent from "./toolkit-content";
import { socialMetadata } from "../../seo";

export const metadata: Metadata = {
  title: "Your Toolkit — GetAI Tools",
  description: "Bring your AI tools together, choose a preferred duration, and prepare a pricing inquiry in USD.",
  alternates: { canonical: "/toolkit" },
  robots: { index: false, follow: true },
  ...socialMetadata("Your Toolkit — GetAI Tools", "Your tools. Your possibilities. Build one toolkit and prepare your pricing inquiry in USD.", "/toolkit")
};

export default function ToolkitPage() {
  return <ToolkitContent />;
}
