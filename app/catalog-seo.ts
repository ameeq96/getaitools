import { tools, type Category } from "./catalog";

type CategoryPage = {
  slug: string;
  name: Exclude<Category, "All tools">;
  title: string;
  description: string;
  intro: string;
  buyingGuide: string[];
};

export const categoryPages: CategoryPage[] = [
  {
    slug: "writing-chat", name: "Writing & chat", title: "AI Writing & Chat Tools",
    description: "Explore AI writing assistants and chat tools for drafting, editing and brainstorming. Compare workflows and request available plans in USD.",
    intro: "Start with the kind of writing you do: a first draft, a careful edit, a conversation about an idea, or a repeatable content workflow. Compare the tools below against a real sample of your work before choosing a plan.",
    buyingGuide: ["Check whether you need a general assistant or a focused writing workflow. Try the same brief in your shortlist and compare accuracy, tone and the amount of editing needed.", "Ask which model, file features and usage allowance are included in the specific plan. Product capabilities can differ between tiers.", "For work documents, confirm data handling and team access requirements. Review factual claims and sensitive material before using an output."]
  },
  {
    slug: "image-design", name: "Image & design", title: "AI Image & Design Tools",
    description: "Find AI image generators, photo editors and design tools. Compare editing needs, output requirements and available plans with GetAI Tools.",
    intro: "Generating a concept image, cleaning up a product photo and preparing a finished design are different jobs. Choose a shortlist around the output you need, then check how much control each workflow gives you.",
    buyingGuide: ["Decide whether you need image generation, background removal, retouching or a full design editor. Check whether your chosen workflow accepts reference images and revisions.", "Confirm export resolution, file formats, watermark rules and any generation credits for the exact plan you request.", "Read the provider's usage terms for your intended project, especially client work, commercial imagery and the use of uploaded assets."]
  },
  {
    slug: "research", name: "Research", title: "AI Research Tools",
    description: "Explore AI research assistants for source discovery, paper reading and document questions. Compare citation workflows and request plan details.",
    intro: "A useful research assistant should fit the evidence you work with. Compare tools for finding sources, reading papers, exploring documents and following a claim back to its original context.",
    buyingGuide: ["Choose your source type first: academic papers, web pages, internal documents or a mixture. Check which sources a tool can actually search or read.", "Inspect linked citations yourself. A plausible answer is not a substitute for checking the original source, its date and its limitations.", "Ask about document size limits, upload allowances, search credits and export options before selecting a plan for a large project."]
  },
  {
    slug: "video-audio", name: "Video & audio", title: "AI Video & Audio Tools",
    description: "Browse AI video generators, editors, voice and audio tools. Compare production workflows, output limits and available USD quotations.",
    intro: "Build your shortlist around the production step you want to improve: generating a clip, editing recorded footage, creating a voice track or preparing audio. A tool that fits one step may still need other software to finish the project.",
    buyingGuide: ["Confirm the output you need: clip length, aspect ratio, resolution, voice language or audio format. Test a short sample that resembles your final project.", "Check how credits are charged for generations, failed attempts, exports and revisions. Confirm watermark and download conditions for the requested tier.", "For voices, music and likenesses, check permissions and provider terms before publishing. Include human review of captions, pronunciation and the final edit."]
  },
  {
    slug: "productivity", name: "Productivity", title: "AI Productivity Tools",
    description: "Explore AI productivity tools for meetings, notes and everyday work. Compare integrations, team requirements and available plans.",
    intro: "Look for a specific recurring task rather than adding another app to your day. A meeting summary, organized notes or a reliable document workflow is easier to evaluate when you know what a useful result should look like.",
    buyingGuide: ["List the apps and devices you already use, then check whether the tool connects to them in the way your workflow needs.", "For meetings and shared documents, confirm participant consent, data handling, access controls and retention requirements.", "Compare seat allowances, meeting or upload limits, exports and cancellation arrangements for the exact plan before committing your team."]
  },
  {
    slug: "marketing-seo", name: "Marketing & SEO", title: "AI Marketing & SEO Tools",
    description: "Compare AI marketing and SEO tools for content planning, research and campaign work. Explore use cases and request current plan details.",
    intro: "Choose marketing tools around a measurable task: researching topics, improving a brief, reviewing a page or producing campaign drafts. Keep the editorial and business decisions with your team, and judge a tool against the work it helps you complete.",
    buyingGuide: ["Separate research and measurement from content generation. Check whether the tool provides the data source, geography and reporting you need.", "Review project, domain, keyword, credit and team limits. Confirm which integrations or exports are included in your requested plan.", "Treat suggestions as inputs to review. Check facts, brand claims and originality, and avoid choosing a tool because it promises guaranteed search rankings."]
  },
  {
    slug: "coding", name: "Coding", title: "AI Coding Tools",
    description: "Browse AI coding assistants, app builders and developer tools. Compare editor workflows, repository access and available plans in USD.",
    intro: "Coding assistants can support different parts of development: understanding a repository, suggesting changes, reviewing code or building an interface. Start with your existing stack and the level of access you are comfortable granting.",
    buyingGuide: ["Check language and framework fit, editor support and whether the workflow runs locally, in an editor or in a hosted environment.", "Review repository permissions, code retention, model access and usage limits for the specific tier. Confirm team and organization requirements where relevant.", "Test on a small task you can verify. Review the resulting diff and run relevant checks before accepting generated code or granting broader access."]
  },
  {
    slug: "automation", name: "Automation", title: "AI Automation Tools",
    description: "Find AI automation and workflow tools. Compare app connections, execution limits and approval controls before requesting a plan.",
    intro: "Map the trigger, inputs, actions and expected result before choosing an automation platform. Begin with a small workflow whose output you can inspect, then check what happens when a connection fails or an input is incomplete.",
    buyingGuide: ["Check the exact integrations and operations your workflow needs. An app appearing in a directory does not confirm every action is supported.", "Compare task or execution allowances, polling frequency, retries and any separate model or hosting costs for the plan you request.", "Use limited permissions and review steps for consequential actions. Confirm logging, failure alerts and how to pause or reverse a workflow."]
  },
  {
    slug: "education", name: "Education", title: "AI Education & Learning Tools",
    description: "Explore AI learning tools for study, practice and teaching preparation. Compare subject fit, learner needs and available access options.",
    intro: "The best starting point is a learning goal: understanding a concept, practicing a skill or preparing a lesson. Compare how a tool explains its reasoning and supports independent work rather than judging it only by the speed of its answers.",
    buyingGuide: ["Check subject coverage, language, level and accessibility against the learner's needs. Test an example whose correct answer you already understand.", "Review school policies, age requirements and data handling before sharing student information or using a tool in class.", "Confirm limits on practice, uploads, exports and teacher or learner seats. Keep human review for explanations, grading and factual content."]
  },
  {
    slug: "data-analytics", name: "Data & analytics", title: "AI Data & Analytics Tools",
    description: "Discover AI data analysis and analytics tools. Compare data connections, reproducibility and workspace requirements before choosing a plan.",
    intro: "Start with the data you have and the decision you need to make. A useful analytics workflow lets you inspect the source, understand the calculation and check the result, whether you work with spreadsheets, a database or a shared reporting workspace.",
    buyingGuide: ["Confirm supported file types, database connections, row or upload limits and whether your data can stay in the required environment.", "Ask how to inspect queries, formulas and transformations. Check a small result against a known calculation before relying on a larger analysis.", "Review permissions, retention, exports and collaboration options for your team. Remove sensitive data from sample uploads unless your requirements are satisfied."]
  },
  {
    slug: "sales-support", name: "Sales & support", title: "AI Sales & Customer Support Tools",
    description: "Compare AI sales assistants and customer support tools. Explore workflows, knowledge sources and handoff needs before requesting plans.",
    intro: "Choose a tool around the customer interaction you want to improve: preparing outreach, finding information or handling a support conversation. Plan the human handoff and the source of approved answers before introducing automation.",
    buyingGuide: ["Check CRM, help-desk and communication channel compatibility, including the specific read and write actions your process requires.", "Compare seats, contacts, conversations, resolutions and credit limits. Confirm what counts as a billable event for the exact plan.", "Test against real questions using approved information. Review consent, customer data access, escalation rules and how incorrect answers are corrected."]
  },
  {
    slug: "3d-games", name: "3D & games", title: "AI 3D & Game Creation Tools",
    description: "Explore AI tools for 3D assets and game creation. Compare output formats, asset quality and production requirements before requesting plans.",
    intro: "A visual concept, a usable 3D mesh and a game-ready asset have different requirements. Work backward from your engine or production pipeline and evaluate a sample in the software where it will actually be used.",
    buyingGuide: ["Confirm export formats, scale, topology, texture support and compatibility with your target engine or editor.", "Check what manual cleanup, retopology, rigging or optimization your project may still require. Inspect a representative exported asset.", "Review generation credits, download limits and commercial usage terms for the exact tier, including any conditions on uploaded reference assets."]
  },
  {
    slug: "presentations", name: "Presentations", title: "AI Presentation Tools",
    description: "Find AI presentation tools for slide drafts and visual storytelling. Compare editing, export and collaboration needs with GetAI Tools.",
    intro: "Start with the audience, the message and the file you need to deliver. Compare how easily a generated outline becomes an editable presentation that matches your brand and works in the software used by your team.",
    buyingGuide: ["Check export formats and whether text, charts and layouts remain editable after export. Open a sample in your destination presentation app.", "Compare brand controls, collaboration, slide or credit limits and access to templates for your requested plan.", "Review facts, citations, chart labels and image permissions before presenting. A polished layout still needs a clear narrative and accurate content."]
  },
  {
    slug: "translation", name: "Translation", title: "AI Translation Tools",
    description: "Explore AI translation tools for text and documents. Compare language pairs, terminology control and formatting requirements before choosing access.",
    intro: "Choose translation tools around the actual language pair and type of material you work with. A short message, a formatted document and specialist terminology need different checks, especially when the wording affects a customer decision.",
    buyingGuide: ["Test the source and target languages with a representative sample. Have a fluent reviewer check meaning, tone and terminology.", "Confirm document formats, layout preservation, glossary options and character or upload limits for the exact plan.", "Review confidentiality requirements before uploading documents. Use qualified human review where an inaccurate translation could have serious consequences."]
  },
  {
    slug: "ai-platforms", name: "AI platforms", title: "AI Platforms & Developer Services",
    description: "Browse AI platforms and developer services. Compare deployment needs, model access and usage arrangements before requesting information.",
    intro: "Platform selection starts with what you want to build and operate. Compare the service boundary carefully: model access, hosting, deployment tooling and application features may be separate products with separate usage charges.",
    buyingGuide: ["Identify the model, region, deployment and integration requirements of your project. Check whether the platform supports the exact workflow you need.", "Distinguish a website subscription from API or infrastructure usage. Confirm account ownership, quotas, metering and any separate provider charges.", "Review data handling, access management, operational limits and monitoring. Test a small integration before moving production workloads."]
  }
];

export function getCategorySlug(name: Category): string | undefined {
  return categoryPages.find((category) => category.name === name)?.slug;
}

export function getCatalogUrl({ page = 1, q = "", sort = "featured", category = "All tools" }: { page?: number; q?: string; sort?: string; category?: Category } = {}): string {
  const slug = getCategorySlug(category);
  const path = slug ? `/categories/${slug}` : "/";
  const query = new URLSearchParams();
  if (page > 1) query.set("page", String(page));
  if (q.trim()) query.set("q", q.trim());
  if (sort !== "featured") query.set("sort", sort);
  return `${path}${query.size ? `?${query.toString()}` : ""}`;
}

export function getCategoryPageCount(name: Category): number {
  return Math.ceil(tools.filter((tool) => tool.category === name).length / 10);
}
