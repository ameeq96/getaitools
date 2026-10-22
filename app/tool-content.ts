import type { ToolId } from './catalog';

export type ToolContent = {
  overview: string;
  bestFor: string[];
  exampleWorkflow: { title: string; steps: string[] };
  considerations: string[];
  officialUrl: string;
  sources: { title: string; url: string }[];
  reviewedOn: string;
};

export const toolContent: Partial<Record<ToolId, ToolContent>> = {
  chatgpt: {
    overview: 'ChatGPT brings conversational writing, learning, web research, image creation, and coding assistance into one product. It can help turn rough notes into a structured draft, explain unfamiliar concepts, or work through a technical problem with follow-up questions. Its work features also support creating and editing documents, spreadsheets, and presentations. A useful starting point is a specific task with your audience, source material, and desired output format, rather than an open-ended request for a perfect answer.',
    bestFor: ['Writers turning research notes into a first draft', 'Students exploring concepts through follow-up questions', 'Teams preparing documents and practical work deliverables'],
    exampleWorkflow: {
      title: 'Example: turn launch notes into a customer email',
      steps: ['Provide approved product facts, the customer audience, and the announcement goal.', 'Ask for a concise draft plus alternative subject lines; request that missing facts stay marked as questions.', 'Compare the draft with your source notes, edit the tone, and approve every claim before sending.'],
    },
    considerations: ['Confirm which ChatGPT plan and tools an offer includes; API usage is a separate product question.', 'Check account ownership, workspace access, usage allowances, and data controls before sharing business material.'],
    officialUrl: 'https://chatgpt.com/',
    sources: [{ title: 'ChatGPT product overview', url: 'https://chatgpt.com/overview/' }],
    reviewedOn: '2026-10-22',
  },
  claude: {
    overview: 'Claude is an AI assistant for writing, analysis, coding, and carrying tasks from an initial question toward an editable result. Anthropic describes workflows that bring information together, draft reports, and turn ideas into prototypes or presentations. The practical difference between a useful request and a vague one is context: tell Claude which documents matter, what decision the work should support, and what it must leave for human review. Connected tools and task features depend on the available product and account.',
    bestFor: ['Analysts organizing several documents into a coherent brief', 'Writers revising a draft against detailed instructions', 'Product teams explaining requirements and exploring prototypes'],
    exampleWorkflow: {
      title: 'Example: prepare a decision brief from approved notes',
      steps: ['Provide the decision, relevant notes, and a short list of questions the brief must answer.', 'Request an outline that separates established facts, assumptions, and unresolved questions.', 'Refine the draft, trace important statements back to the notes, and obtain the decision owner’s approval.'],
    },
    considerations: ['Ask whether the quoted access covers the Claude app, team features, or developer API usage.', 'Confirm permissions for any connected services and review outputs before taking business action.'],
    officialUrl: 'https://claude.com/',
    sources: [{ title: 'Claude product overview', url: 'https://claude.com/product/overview' }],
    reviewedOn: '2026-10-22',
  },
  gemini: {
    overview: 'Gemini is Google’s AI assistant for working with text, images, audio, and other information. Google describes uses such as summarizing uploaded research documents, helping with code, drafting emails, brainstorming, and explaining difficult topics. It can be a useful partner when a task involves both written instructions and visual context. Start with the material you want it to examine and explain the result you need. Google also notes that Gemini can produce inaccurate information, so important answers still need independent checking.',
    bestFor: ['Learners asking for step-by-step explanations', 'Creators planning written and visual content together', 'Professionals condensing source documents into a first brief'],
    exampleWorkflow: {
      title: 'Example: build a study guide from your own material',
      steps: ['Supply notes or an eligible document and identify the concepts you find difficult.', 'Ask for a plain-English explanation, a short glossary, and practice questions linked to the material.', 'Check the explanations against the original source and revise any question with an ambiguous answer.'],
    },
    considerations: ['Verify the exact consumer or Workspace offering, supported features, and account eligibility.', 'Ask about regional availability, file handling, and usage allowances before choosing a plan.'],
    officialUrl: 'https://gemini.google/',
    sources: [{ title: 'Gemini app overview and limitations', url: 'https://gemini.google/us/overview/?hl=en' }],
    reviewedOn: '2026-10-22',
  },
  midjourney: {
    overview: 'Midjourney creates visual concepts from prompts describing a subject, medium, environment, lighting, color, mood, and composition. Its documentation recommends clear, concise descriptions rather than long instruction lists. Image prompts and reference tools can guide a result’s content or style, while parameters control details such as aspect ratio. This makes it useful for exploring visual directions before committing to final artwork. References influence a new creation; they should not be treated as a guarantee of exact product reproduction or precise editing.',
    bestFor: ['Art directors exploring campaign mood and composition', 'Creators developing illustrative concepts and backgrounds', 'Designers comparing several visual directions before production'],
    exampleWorkflow: {
      title: 'Example: explore a campaign mood board',
      steps: ['Describe one subject, a visual medium, the intended mood, and the campaign’s color direction.', 'Generate variations, changing one important element at a time so the differences are meaningful.', 'Select a direction, inspect image details, and finish any precise layout or brand work in your design editor.'],
    },
    considerations: ['Confirm generation allowances, privacy settings, and the usage rights applicable to your plan.', 'Use reference images you have permission to upload and assess whether generated details meet your project requirements.'],
    officialUrl: 'https://www.midjourney.com/',
    sources: [{ title: 'Midjourney prompt basics', url: 'https://docs.midjourney.com/hc/en-us/articles/32023408776205-Prompt-Basics' }, { title: 'Midjourney image prompts', url: 'https://docs.midjourney.com/hc/en-us/articles/32040250122381-Image-Prompts' }],
    reviewedOn: '2026-10-22',
  },
  perplexity: {
    overview: 'Perplexity combines conversational questions with web research and answers that link to sources. It searches for relevant information, summarizes what it finds, and supports follow-up questions that retain the conversation’s context. This is helpful when you need an initial map of a topic and a route back to the underlying material. The citations are the useful starting point: open them, check their dates, and confirm that they support the specific claim. A cited answer still needs evaluation for completeness and accuracy.',
    bestFor: ['Researchers finding initial sources on an unfamiliar topic', 'Buyers comparing documented product capabilities', 'Writers building a source list before drafting an article'],
    exampleWorkflow: {
      title: 'Example: research software for a defined task',
      steps: ['Ask for tools that meet a specific workflow, budget context, and essential feature list.', 'Request a comparison grounded in official documentation, with dates and uncertainties identified.', 'Open the primary sources, verify the shortlist, and record which questions require a direct vendor answer.'],
    },
    considerations: ['Check which search, research, file, and model features the quoted plan includes.', 'Evaluate source quality rather than treating the presence of citations as proof of a correct conclusion.'],
    officialUrl: 'https://www.perplexity.ai/',
    sources: [{ title: 'How Perplexity works', url: 'https://www.perplexity.ai/help-center/en/articles/10352895-how-does-perplexity-work' }],
    reviewedOn: '2026-10-22',
  },
  canva: {
    overview: 'Canva combines a visual design editor with AI tools for generating and refining content. Magic Write helps draft captions, outlines, lists, and other text, while Canva’s AI image generator turns a description into a visual with a chosen style and aspect ratio. The useful workflow connects these outputs to editable designs for presentations, social posts, and other communication. Treat the first generated draft as raw material: the message, typography, brand assets, and final layout still benefit from deliberate editing.',
    bestFor: ['Small businesses creating coordinated social graphics', 'Presenters combining short copy with visual layouts', 'Content teams adapting an approved message into design assets'],
    exampleWorkflow: {
      title: 'Example: prepare a small social campaign',
      steps: ['Write the offer and audience in a brief, then use Magic Write to explore concise caption options.', 'Create supporting image concepts where appropriate and place the approved assets into a Canva design.', 'Edit the hierarchy and spacing, check mobile legibility, and verify every factual claim before exporting.'],
    },
    considerations: ['Ask which Canva account type, premium assets, AI tools, and collaboration permissions are included.', 'Review the licensing of uploaded, generated, and library assets for the intended commercial use.'],
    officialUrl: 'https://www.canva.com/',
    sources: [{ title: 'Canva Magic Write', url: 'https://www.canva.com/magic-write/' }, { title: 'Canva AI image generator', url: 'https://www.canva.com/ai-image-generator/' }],
    reviewedOn: '2026-10-22',
  },
  runway: {
    overview: 'Runway provides AI tools for generating and transforming video and images. Its creative platform brings generation, editing, visual effects, and model-based workflows into one place. You can use it to explore shot concepts, change the look of footage, or develop a storyboard before a larger production. Think in individual shots with a clear subject and intended motion, then evaluate the result in context. A convincing short clip does not automatically guarantee consistent characters, product details, or continuity across an entire sequence.',
    bestFor: ['Filmmakers exploring shot and storyboarding ideas', 'Creative teams testing visual treatments before a shoot', 'Marketers developing short video concepts from approved assets'],
    exampleWorkflow: {
      title: 'Example: prototype a short product-video concept',
      steps: ['Prepare a simple shot list and use reference assets you are permitted to upload.', 'Generate or transform one shot at a time, describing the subject, camera intention, and motion clearly.', 'Inspect continuity and product accuracy, choose usable takes, and assemble the final narrative in an editing workflow.'],
    },
    considerations: ['Confirm the included models, generation credits, output settings, and export conditions.', 'Budget for iteration and review the applicable commercial-use terms before publishing client work.'],
    officialUrl: 'https://runway.com/',
    sources: [{ title: 'Runway creative product', url: 'https://runway.com/product' }],
    reviewedOn: '2026-10-22',
  },
  elevenlabs: {
    overview: 'ElevenLabs turns written scripts into generated speech with selectable voices and controls for delivery. Its text-to-speech tools support uses such as narration, video voiceovers, character dialogue, and accessible audio versions of written content. Voice design and cloning are also part of its wider voice offering. The script is an important part of the result: punctuation, pronunciation, pacing, and the intended audience influence how a recording feels. Audition short passages before generating a complete production and listen to the exported audio.',
    bestFor: ['Video creators preparing a narrated explainer', 'Educators offering an audio version of learning material', 'Production teams exploring voice styles for an approved script'],
    exampleWorkflow: {
      title: 'Example: narrate a short educational video',
      steps: ['Finalize a concise script and identify names, abbreviations, and technical words requiring careful pronunciation.', 'Choose a suitable voice and generate a short sample to review delivery, pace, and emphasis.', 'Revise the script where needed, generate the remaining sections, and listen through the assembled recording before release.'],
    },
    considerations: ['Check voice access, generation allowances, commercial licensing, and the included export options.', 'Confirm appropriate permission for any voice cloning and avoid assuming every voice supports identical settings or languages.'],
    officialUrl: 'https://elevenlabs.io/',
    sources: [{ title: 'ElevenLabs text to speech', url: 'https://elevenlabs.io/text-to-speech' }],
    reviewedOn: '2026-10-22',
  },
  'microsoft-copilot': {
    overview: 'Microsoft Copilot helps with research, drafting, analysis, and everyday productivity, including experiences within Microsoft 365 apps. Microsoft describes preparing drafts in Word, analyzing data in Excel, building presentations in PowerPoint, and summarizing information in Outlook. The relevant question is which experience you need: general Copilot chat and Copilot inside a particular app are not interchangeable purchase descriptions. Start from the document, spreadsheet, or presentation you already work with, and specify the result and review criteria before asking for a change.',
    bestFor: ['Microsoft 365 users drafting structured documents', 'Teams preparing presentations from an approved brief', 'Professionals exploring a spreadsheet before reporting findings'],
    exampleWorkflow: {
      title: 'Example: outline a presentation from a project brief',
      steps: ['Prepare a brief with verified objectives, milestones, evidence, and the audience’s main questions.', 'In an eligible Copilot experience, ask for a presentation outline with a clear decision or next step.', 'Refine the story, check source numbers and charts, and review the final slides in PowerPoint.'],
    },
    considerations: ['Confirm the exact Microsoft subscription, eligible apps, account type, and feature availability.', 'Check organizational permissions and data handling before using work files or connecting business services.'],
    officialUrl: 'https://www.microsoft.com/en-us/copilot',
    sources: [{ title: 'Microsoft Copilot for individuals', url: 'https://www.microsoft.com/en-us/copilot/solutions/individuals' }],
    reviewedOn: '2026-10-22',
  },
  grok: {
    overview: 'Grok is a conversational AI product with chat and other experiences available through its website and apps. In its X experience, Grok can search public posts and the web to help answer a question with current context. Its wider product includes image and video generation features, with access and allowances depending on the account. For fast-moving topics, make the requested time period explicit and distinguish a public claim from a verified fact. Original posts can provide useful context, but popularity alone does not establish accuracy.',
    bestFor: ['Readers exploring questions about current public discussion', 'Creators brainstorming a topic from several perspectives', 'Researchers finding claims that need primary-source checking'],
    exampleWorkflow: {
      title: 'Example: prepare a briefing on a developing topic',
      steps: ['Specify the topic, relevant dates, and whether you want established facts or an overview of discussion.', 'Ask for sources and a clear separation between confirmed developments, opinions, and open questions.', 'Read the original announcements or documents and remove unsupported statements before sharing the briefing.'],
    },
    considerations: ['Confirm whether access is through Grok, X, or an API account and what the offer includes.', 'Check current usage allowances, privacy settings, and generation access for the intended platform.'],
    officialUrl: 'https://grok.com/',
    sources: [{ title: 'Grok website and app FAQ', url: 'https://docs.x.ai/grok/faq' }, { title: 'Grok on X', url: 'https://help.x.com/en/using-x/about-grok' }],
    reviewedOn: '2026-10-22',
  },
  deepseek: {
    overview: 'DeepSeek provides a conversational web application alongside a separate developer API and model ecosystem. Its API documentation describes chat requests, reasoning controls, and integration with coding and agent tools. For everyday work, a conversational assistant can help explore an explanation or outline a technical solution; developers can instead connect supported applications to the API. These are different ways to use the product, so establish which one an offer refers to. Generated reasoning and code should be checked against the original problem and actual execution results.',
    bestFor: ['Developers evaluating a model for an existing application', 'Technical learners exploring a problem through conversation', 'Teams comparing chat access with an API-based workflow'],
    exampleWorkflow: {
      title: 'Example: investigate a small coding problem',
      steps: ['Describe the intended behavior, a minimal code example, and the error you can reproduce.', 'Ask for an explanation of the likely cause and the smallest proposed change, with assumptions identified.', 'Review the suggestion, run relevant checks yourself, and compare the result with the expected behavior.'],
    },
    considerations: ['Clarify whether the quote concerns app access, API usage, or help with an integration.', 'Confirm account ownership, model access, usage billing, and data requirements before connecting production systems.'],
    officialUrl: 'https://www.deepseek.com/',
    sources: [{ title: 'DeepSeek official product links', url: 'https://www.deepseek.com/' }, { title: 'DeepSeek API introduction', url: 'https://api-docs.deepseek.com/' }],
    reviewedOn: '2026-10-22',
  },
  'notion-ai': {
    overview: 'Notion AI works within the Notion workspace, bringing AI assistance to documents, databases, search, and repetitive team tasks. Its product includes agents, connected search, and meeting-note capabilities. The value comes from relevant workspace context: clear project pages and well-maintained source material give an assistant something useful to work with. It can help organize a report or find information across permitted sources, while team permissions remain an important part of the workflow. Search results and generated summaries should lead back to the underlying records.',
    bestFor: ['Teams already maintaining project knowledge in Notion', 'Managers turning project notes into a status update', 'Operations teams evaluating repeatable workspace tasks'],
    exampleWorkflow: {
      title: 'Example: prepare a weekly project update',
      steps: ['Keep decisions, owners, milestones, and open questions in the project’s source pages.', 'Ask for a draft update separating completed work, upcoming milestones, and blockers with references.', 'Check the draft against current records, correct ownership and dates, and publish the approved update to the team.'],
    },
    considerations: ['Confirm workspace membership, included AI features, and any separate agent-credit requirements.', 'Check connected-app permissions and ensure confidential source pages are shared only with the intended audience.'],
    officialUrl: 'https://www.notion.com/product/ai',
    sources: [{ title: 'Notion AI product overview', url: 'https://www.notion.com/product/ai' }],
    reviewedOn: '2026-10-22',
  },
  grammarly: {
    overview: 'Grammarly is a writing assistant focused on clearer communication. Its tools identify grammar, punctuation, and spelling issues and offer rewriting help for the substance and style of a draft. It also provides AI-assisted writing experiences across supported environments. This makes it useful after you know what you want to say: review suggestions against your audience, intent, and preferred voice instead of accepting every change automatically. Editing assistance improves expression, but it does not independently establish that the facts, quotations, or business promises in a message are correct.',
    bestFor: ['Professionals refining important emails and documents', 'Writers improving clarity without changing their core argument', 'Teams checking the consistency of customer-facing communication'],
    exampleWorkflow: {
      title: 'Example: improve a customer-support reply',
      steps: ['Draft the reply using the approved resolution, relevant facts, and the customer’s actual question.', 'Review grammar and rewrite suggestions, keeping the intended tone and any precise policy wording.', 'Read the complete message for accuracy, confirm no new promise was introduced, and send the approved version.'],
    },
    considerations: ['Verify the plan, supported applications, writing features, and any organization-level settings.', 'Check privacy and workplace requirements before enabling assistance in tools that contain sensitive customer information.'],
    officialUrl: 'https://www.grammarly.com/',
    sources: [{ title: 'Grammarly writing features', url: 'https://www.grammarly.com/features' }, { title: 'AI at Grammarly', url: 'https://www.grammarly.com/ai' }],
    reviewedOn: '2026-10-22',
  },
  quillbot: {
    overview: 'QuillBot offers a writing toolkit that includes paraphrasing, grammar checking, summarization, translation, and citation tools. It can help you explore alternative phrasing or condense material before you write your own explanation. The important distinction is meaning: a fluent rewrite can still change an argument, omit a qualification, or weaken a technical term. Compare the result with the original rather than judging only how polished it sounds. Citation tools are a starting point for formatting references, not a substitute for reading and attributing the source.',
    bestFor: ['Writers comparing clearer ways to express an idea', 'Learners condensing source material into study notes', 'Editors checking grammar and consistency in a draft'],
    exampleWorkflow: {
      title: 'Example: simplify an explanation for a new audience',
      steps: ['Choose a paragraph you are permitted to use and identify the key meaning that must remain intact.', 'Explore a paraphrase, then compare terminology, qualifications, and factual statements with the original.', 'Edit the result in your own voice and retain the necessary attribution or citations.'],
    },
    considerations: ['Check the included tools, text allowances, export options, and supported languages.', 'Follow the applicable academic or workplace rules; rewriting does not remove the need to credit another person’s ideas.'],
    officialUrl: 'https://quillbot.com/',
    sources: [{ title: 'QuillBot tools overview', url: 'https://quillbot.com/' }],
    reviewedOn: '2026-10-22',
  },
  jasper: {
    overview: 'Jasper is an AI platform designed around marketing teams, brand context, and repeatable content workflows. Its product includes brand-voice controls, knowledge, agents, and structured content pipelines. A useful fit is a team that needs several assets to follow the same approved message and style. The quality of that context matters: supply accurate product information, an audience definition, and clear editorial rules before creating variations. Brand consistency and fast drafting are separate from factual accuracy, so campaign claims still need an accountable human reviewer.',
    bestFor: ['Marketing teams coordinating several campaign channels', 'Brands maintaining consistent language across content', 'Editors creating repeatable briefs and approval workflows'],
    exampleWorkflow: {
      title: 'Example: adapt one approved campaign brief',
      steps: ['Prepare the campaign goal, audience, product facts, and approved brand-voice guidance.', 'Generate channel-specific drafts such as an email introduction and short social copy from the same brief.', 'Check every variant against the approved offer, revise channel fit, and route the assets through editorial approval.'],
    },
    considerations: ['Confirm seats, brand controls, workflow features, and any usage or integration requirements.', 'Ask how approved knowledge is maintained so outdated product information does not spread through new drafts.'],
    officialUrl: 'https://www.jasper.ai/',
    sources: [{ title: 'Jasper marketing platform', url: 'https://www.jasper.ai/' }],
    reviewedOn: '2026-10-22',
  },
  'copy-ai': {
    overview: 'Copy.ai is positioned as a go-to-market AI platform for connected sales, marketing, and operations workflows. Its official product describes account research, content creation, inbound lead processing, localization, and other repeatable business tasks. This is broader than a simple headline generator: the useful question is which inputs, decisions, and outputs a team wants to connect. Begin with one defined process and a clear quality standard. Automated enrichment or generated outreach still requires checking that the underlying information is relevant, accurate, and appropriate to use.',
    bestFor: ['Sales teams preparing account research for human review', 'Marketing teams defining repeatable content workflows', 'Operations teams connecting steps in a go-to-market process'],
    exampleWorkflow: {
      title: 'Example: draft an account-research brief',
      steps: ['Define the target account, approved research sources, and the information a sales representative actually needs.', 'Create a brief that separates sourced company facts from suggested conversation topics.', 'Verify the facts, remove unsupported personalization, and let the representative approve any customer-facing message.'],
    },
    considerations: ['Check workflow capabilities, integrations, data permissions, and the usage model included in the quote.', 'Agree on review checkpoints before allowing a workflow to update records or trigger external communication.'],
    officialUrl: 'https://www.copy.ai/',
    sources: [{ title: 'Copy.ai GTM AI platform', url: 'https://www.copy.ai/' }],
    reviewedOn: '2026-10-22',
  },
  writesonic: {
    overview: 'Writesonic combines AI-search visibility tools with content and optimization workflows. Its current platform describes monitoring brand mentions and citations, finding content gaps, prioritizing actions, and measuring results; an AI article writer is also part of its offering. It can help a marketing team organize what to investigate and improve, rather than treating content volume as the entire strategy. Visibility observations depend on the prompts, markets, and sources being measured. No generated article or optimization tool can promise a particular search ranking or customer outcome.',
    bestFor: ['Marketers monitoring how a brand appears in AI answers', 'Content teams turning identified gaps into editorial briefs', 'Agencies comparing content changes with measurable outcomes'],
    exampleWorkflow: {
      title: 'Example: improve a weak product-information page',
      steps: ['Choose a product topic and record the questions customers need answered, alongside current source material.', 'Use research and content tools to draft improvements focused on missing explanations and verifiable information.', 'Have a subject expert review the page, publish the approved changes, and monitor relevant queries and qualified inquiries.'],
    },
    considerations: ['Confirm which visibility, article-writing, agent, and reporting features the plan includes.', 'Keep original evidence and editorial judgment central; do not publish unverified content or interpret visibility metrics as guaranteed revenue.'],
    officialUrl: 'https://writesonic.com/',
    sources: [{ title: 'Writesonic AI-search and content platform', url: 'https://writesonic.com/' }],
    reviewedOn: '2026-10-22',
  },
  gamma: {
    overview: 'Gamma is an AI-assisted platform for presentations, documents, websites, and other visual communication. Its workflow starts with an outline and supports conversational refinement alongside direct editing. Gamma also describes importing existing PowerPoint and PDF material and exporting work into common presentation and document formats. It can be useful when you have a message but need help shaping the story and visual structure. The strongest starting point is an audience, a clear objective, and verified evidence; generated layouts cannot supply missing business facts.',
    bestFor: ['Consultants turning a brief into a client presentation', 'Educators preparing a visually structured explanation', 'Teams organizing existing material into a clearer narrative'],
    exampleWorkflow: {
      title: 'Example: prepare a proposal presentation',
      steps: ['Provide the audience, problem, proposed approach, supporting evidence, and intended decision.', 'Review the outline before expanding it, then refine headings, layouts, and visual emphasis.', 'Replace any unsupported content, verify charts and figures, and check the exported file in the application your audience will use.'],
    },
    considerations: ['Confirm export formats, branding controls, collaboration access, and included AI usage.', 'Test an important import or export with your own layout requirements before relying on it for a client deadline.'],
    officialUrl: 'https://gamma.app/',
    sources: [{ title: 'Gamma visual communication platform', url: 'https://gamma.app/' }],
    reviewedOn: '2026-10-22',
  },
  cursor: {
    overview: 'Cursor is a coding product with agents that can inspect a codebase, edit files, and run terminal commands. Its agent workflow combines project instructions, tools, and a selected model to work through a development task. This is useful when a change depends on several files and existing project conventions, rather than one isolated code snippet. Give the agent a precise goal, relevant constraints, and a way to verify the result. Review the patch and execution results before accepting a change or releasing it to users.',
    bestFor: ['Developers making scoped changes in an existing repository', 'Teams exploring unfamiliar code with project context', 'Builders iterating on a prototype with reviewable changes'],
    exampleWorkflow: {
      title: 'Example: fix one reproducible application issue',
      steps: ['Describe the bug, reproduction steps, expected behavior, and files or behaviors that must remain unchanged.', 'Ask the agent to inspect the relevant code and propose a small implementation with an appropriate verification step.', 'Review the diff, run the relevant checks, and manually confirm the original problem is resolved.'],
    },
    considerations: ['Confirm the plan, model access, usage accounting, and desktop or cloud-agent requirements.', 'Review terminal permissions, data handling, and repository access before enabling an agent on sensitive projects.'],
    officialUrl: 'https://cursor.com/',
    sources: [{ title: 'Cursor Agent documentation', url: 'https://cursor.com/docs/agent/overview' }],
    reviewedOn: '2026-10-22',
  },
  'github-copilot': {
    overview: 'GitHub Copilot assists with writing, understanding, reviewing, and shipping software. Its documented capabilities include inline code suggestions, codebase questions, agent tasks, and pull-request review. Because it operates across development tools and GitHub workflows, it can support work from an issue description to a proposed change. Features depend on the plan, client, and organization settings. The practical goal is a reviewable implementation: give clear acceptance criteria, check what the agent changed, and use your normal testing and code-review process before merging.',
    bestFor: ['Developers asking questions while working in a supported editor', 'Maintainers turning well-defined issues into proposed patches', 'Teams adding AI assistance to established pull-request reviews'],
    exampleWorkflow: {
      title: 'Example: implement a well-scoped repository issue',
      steps: ['Write an issue with the expected behavior, a concrete example, and explicit acceptance criteria.', 'Use an eligible Copilot workflow to explore or implement the change while preserving repository conventions.', 'Inspect the resulting code, run the relevant checks, and have the pull request reviewed before merge.'],
    },
    considerations: ['Check supported clients, included models, agent usage, and organization policies for the exact plan.', 'Confirm repository permissions and review generated code for correctness, security, and suitability for your project.'],
    officialUrl: 'https://github.com/features/copilot',
    sources: [{ title: 'About GitHub Copilot', url: 'https://docs.github.com/en/copilot/get-started/about-github-copilot' }],
    reviewedOn: '2026-10-22',
  },
};
