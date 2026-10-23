import type { Metadata } from "next";

export const siteUrl = "https://getaitools.shop";

export function socialMetadata(title: string, description: string, path: string): Pick<Metadata, "openGraph" | "twitter"> {
  const image = { url: `${siteUrl}/opengraph-image`, width: 1200, height: 630, alt: "GetAI Tools — Explore AI tools and request plans in USD" };
  return {
    openGraph: { title, description, url: new URL(path, siteUrl).href, type: "website", siteName: "GetAI Tools", images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image] }
  };
}

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  return <JsonLd data={{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteUrl).href
    }))
  }} />;
}
