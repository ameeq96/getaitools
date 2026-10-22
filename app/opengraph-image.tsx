import { ImageResponse } from "next/og";

export const alt = "GetAI Tools — Explore AI tools and request plans in USD";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: "65px 75px", background: "#0c0e0d", color: "#edf4e7", fontFamily: "sans-serif" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 34 }}><span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 62, height: 62, borderRadius: 16, background: "#c4f587", color: "#182111", fontSize: 52, fontWeight: 700 }}>g</span><span>getaitools.shop</span></div>
    <div style={{ display: "flex", flexDirection: "column", gap: 15 }}><span style={{ fontSize: 76, letterSpacing: -3, fontWeight: 700 }}>Find your next AI tool.</span><span style={{ fontSize: 34, color: "#c4f587" }}>Writing. Design. Coding. More possibilities.</span></div>
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#a6b799", borderTop: "1px solid #36432d", paddingTop: 25 }}><span>Explore the collection</span><span>Request plans &amp; quotes in USD</span></div>
  </div>, size);
}
