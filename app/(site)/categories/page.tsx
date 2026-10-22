import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categoryPages } from "../../catalog-seo";
import { tools } from "../../catalog";
import { BreadcrumbJsonLd } from "../../seo";

export const metadata: Metadata = {
  title: "AI Tool Categories — Writing, Coding, Design & More | GetAI Tools",
  description: "Browse AI tools by category, from writing and coding to image generation, video and research. Compare workflows and request available plans in USD.",
  alternates: { canonical: "/categories" },
  openGraph: { title: "Explore AI Tool Categories | GetAI Tools", description: "Find AI tools for the work you want to do. Explore every category and compare the details before choosing a plan.", url: "/categories", type: "website" }
};

export default function CategoriesPage() {
  return <main className="info-page">
    <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "AI tool categories", path: "/categories" }]} />
    <section className="info-hero wrap" aria-labelledby="categories-title">
      <div className="eyebrow section-eyebrow"><span className="section-line" /> START WITH THE WORK</div>
      <h1 className="info-title" id="categories-title">AI tools.<br /><span>Find your category.</span></h1>
      <p className="info-lede">Explore {tools.length} tools across {categoryPages.length} categories. Start with a task, compare the workflows and check the details of the specific plan before requesting access.</p>
      <nav className="launch-policy-nav" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-current="page">AI tool categories</span></nav>
    </section>
    <section className="info-section wrap" aria-label="All AI tool categories"><div className="info-cards">
      {categoryPages.map((category) => <article className="info-card" key={category.slug}>
        <div className="info-card-number"><span>{tools.filter((tool) => tool.category === category.name).length} TOOLS</span><ArrowUpRight size={20} /></div>
        <h2><Link href={`/categories/${category.slug}`}>{category.title}</Link></h2><p>{category.description}</p>
        <div className="info-actions"><Link className="text-link" href={`/categories/${category.slug}`}>Explore {category.name.toLowerCase()} <ArrowUpRight size={15} /></Link></div>
      </article>)}
    </div></section>
    <section className="info-cta wrap"><div><div className="eyebrow">CHOOSE WITH THE DETAILS IN VIEW.</div><h2>Build your <span>shortlist.</span></h2><p>Tool information is a starting point. Confirm current availability, plan limits, access details and the final USD quote before payment.</p></div><Link className="button button-primary" href="/contact">Ask about a plan <ArrowUpRight size={18} /></Link></section>
  </main>;
}
