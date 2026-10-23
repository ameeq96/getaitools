import type { ToolId } from './catalog';
import type { ToolContent } from './tool-content';

function guide(overview: string, bestFor: string[], title: string, steps: string[], considerations: string[], officialUrl: string, sourceTitle: string, sourceUrl = officialUrl): ToolContent {
  return { overview, bestFor, exampleWorkflow: { title, steps }, considerations, officialUrl, sources: [{ title: sourceTitle, url: sourceUrl }], reviewedOn: '2026-10-22' };
}

export const technicalToolContent: Partial<Record<ToolId, ToolContent>> = {
  devin: guide(
    'Devin combines coding agents with development environments for carrying engineering tasks from a brief to proposed changes. Cognition describes cloud, desktop, and CLI workflows, with agents able to inspect code and test work in a browser. Devin Desktop is useful when you want to stay close to the implementation while delegating a bounded task. A clear reproduction case and a definition of done make its results easier to review.',
    ['Engineers delegating a well-defined repository issue', 'Teams reviewing agent changes before merge'],
    'Example: fix a reproducible settings-screen bug',
    ['Provide the repository, reproduction steps, expected behavior, and files that must stay unchanged.', 'Ask Devin to inspect the relevant flow, propose a fix, and run focused checks.', 'Review the diff and browser evidence, then approve the change through your normal pull-request process.'],
    ['Confirm whether access covers Desktop, Cloud, or both and how agent usage is metered.', 'Check repository permissions and environment isolation before allowing commands or external integrations.'],
    'https://devin.ai/', 'Devin development environments and workflows'
  ),
  replit: guide(
    'Replit brings an AI app builder, development workspace, and publishing services together. Its product includes agents, databases, integrations, and tools for turning an idea into an application or website. This suits projects where the builder wants to develop and run the result in one platform. The generated interface is only part of the job: specify the data, permissions, and user journeys that make the application useful.',
    ['Founders exploring an application idea', 'Operations teams prototyping a small internal tool'],
    'Example: prototype an equipment-request app',
    ['Describe request fields, employee and manager roles, and the approval states using sample data.', 'Build the screens and storage flow, then exercise approval, rejection, and missing-field cases.', 'Check access controls and deployment settings before introducing real employee information.'],
    ['Ask how agent work, hosting, databases, and connected services are charged within the exact offering.', 'Confirm source export, account ownership, and how production credentials are stored.'],
    'https://replit.com/', 'Replit app builder and platform overview'
  ),
  v0: guide(
    'v0 is Vercel\'s AI builder for web interfaces and full-stack applications. You can begin from a prompt or template, connect a GitHub repository, and publish the result. It is particularly relevant when a visual idea needs to become editable web code. Supply the content hierarchy and interaction states as well as a design reference; a polished default screen does not establish that its forms, permissions, or integrations work.',
    ['Product teams exploring web interface directions', 'Developers creating an editable application starting point'],
    'Example: develop a customer portal concept',
    ['Specify the portal navigation, sample account data, and loading, empty, and error states.', 'Generate an initial interface and refine one complete journey rather than several disconnected screens.', 'Inspect the code and test responsive behavior before syncing and deploying through the intended project.'],
    ['Clarify v0 usage allowances separately from hosting and third-party integration costs.', 'Verify repository access, deployment ownership, and backend authorization before using real customer data.'],
    'https://v0.app/', 'v0 app generation, integrations, and GitHub publishing'
  ),
  lovable: guide(
    'Lovable builds and refines applications through conversation, with infrastructure features covering areas such as hosting, authentication, and integrations. Its visual iteration flow makes it useful for turning a product brief into something people can try. Explain the business rules alongside the appearance. For a booking tool, for example, preventing conflicting reservations matters as much as arranging the calendar attractively.',
    ['Small teams shaping a usable product prototype', 'Business owners building a focused workflow application'],
    'Example: explore a room-booking application',
    ['Define rooms, booking duration, user roles, and how overlapping reservations should behave.', 'Create the flow with fictional users and ask for empty, unavailable, and confirmation states.', 'Test permissions and conflicting bookings, then review the published configuration before launch.'],
    ['Check which cloud services, connectors, and usage are included in the quoted access.', 'Discuss code ownership, export or Git workflows, backups, and authentication administration before committing.'],
    'https://lovable.dev/', 'Lovable app creation and infrastructure overview'
  ),
  bolt: guide(
    'Bolt.new is a conversational builder for websites, applications, and prototypes. Its starting points include templates and imports such as GitHub or Figma, allowing a team to build from an existing direction. It is helpful when you want a working browser experience to discuss rather than a static mockup. Give it a narrow first journey and test the generated behavior before expanding the project.',
    ['Designers turning a concept into an interactive prototype', 'Small businesses testing a simple web workflow'],
    'Example: create a service-estimate prototype',
    ['Describe service options, sample calculations, required fields, and the result the visitor should receive.', 'Build a complete estimate flow and refine it with clearly marked sample rates.', 'Check calculations, keyboard use, and mobile layout before connecting a real inquiry or payment service.'],
    ['Confirm generation limits, deployment options, and any external service charges.', 'Review imported code and integration permissions; a successful preview is not a production security review.'],
    'https://bolt.new/', 'Bolt app, website, and prototype builder'
  ),
  'claude-code': guide(
    'Claude Code is an agentic development tool that reads a codebase, edits files, runs commands, and connects to development tools. Anthropic documents terminal, IDE, desktop, and browser experiences, plus repository instructions and integrations. It fits work that crosses several files and needs verification. Explain both the requested outcome and the boundaries so the agent can follow the existing project rather than rebuilding nearby code unnecessarily.',
    ['Developers implementing scoped repository changes', 'Maintainers investigating failures with code and command output'],
    'Example: implement an accessible form improvement',
    ['Describe the form problem, expected keyboard behavior, and relevant project conventions.', 'Ask for a minimal patch and the focused checks needed to verify it.', 'Review changed files and actual behavior, including validation errors, before approving the commit.'],
    ['Clarify subscription-based access versus API billing and the environments included.', 'Review command approvals, connected-tool permissions, and repository instructions before autonomous execution.'],
    'https://code.claude.com/', 'Claude Code overview', 'https://code.claude.com/docs/en/overview'
  ),
  junie: guide(
    'Junie is JetBrains\' coding agent, with local and CLI workflows connected to development tooling. The official product describes model choice, IDE-powered code intelligence, and integrations with GitHub and GitLab. This makes it relevant for teams that want agent work to fit their established engineering environment. A useful evaluation checks how it follows your project structure and verifies a change, rather than judging only the first generated patch.',
    ['Teams working in JetBrains development environments', 'Engineers comparing model choices on the same coding task'],
    'Example: extend a small service method',
    ['Provide the required behavior, existing API contract, and a representative input and output.', 'Ask Junie to locate the implementation and propose a change using the project\'s established patterns.', 'Run the relevant checks and inspect failure handling before accepting the implementation.'],
    ['Confirm supported operating systems, IDE integration, and the selected model configuration.', 'Separate agent entitlement from any bring-your-own-key charges and check repository access for CI integrations.'],
    'https://junie.jetbrains.com/', 'Junie local, CLI, and development integrations'
  ),
  amp: guide(
    'Amp combines a coding agent with a development environment designed for continuing work across sessions and devices. Its official product describes agents with their own environments and workflows that can continue after you close a laptop. That is useful for a task with a clear handoff and reviewable result. Define the repository, verification steps, and stopping condition before handing over work that may run without you watching.',
    ['Engineers delegating longer development tasks', 'Teams sharing a reviewable agent session'],
    'Example: investigate an intermittent UI regression',
    ['Supply a short recording or reproduction, expected behavior, and the repository revision.', 'Ask the agent to investigate in an isolated environment and preserve its observations with the proposed patch.', 'Compare the result with the original issue and review verification evidence before merging.'],
    ['Ask which environments, continuation features, and usage allowances the plan provides.', 'Grant production or integration access only for a defined task and verify how sessions and credentials are retained.'],
    'https://ampcode.com/', 'Amp agent and development environment overview'
  ),
  cline: guide(
    'Cline is an open-source agent that can read files, write code, and run commands, with approval controls described in its documentation. Its runtime is available across editor, terminal, desktop, and other integrations. Model choice and tool access shape what it can do in a particular setup. It is useful for developers who want to inspect each stage of an agent-assisted change and retain control over the surrounding workflow.',
    ['Developers wanting an inspectable open agent', 'Teams using their chosen model provider with coding tools'],
    'Example: repair a failing local build',
    ['Share the failing command, relevant error output, and changes that preceded the failure.', 'Have Cline inspect the implicated files and request approval for the necessary commands.', 'Review the minimal fix and repeat the original build check before accepting the result.'],
    ['Confirm whether the arrangement supplies a model service or requires your own provider credentials.', 'Review approval settings, local file access, and any MCP tools before starting a session.'],
    'https://cline.bot/', 'Cline agent capabilities and approvals', 'https://docs.cline.bot/cline-overview'
  ),
  coderabbit: guide(
    'CodeRabbit reviews pull requests with AI and presents findings and suggested changes inside an engineering review workflow. Its platform also describes prioritization and controls for agent-generated development. It is useful as another reviewer that can draw attention to a risky change. The value comes from checking whether each finding is grounded in the code and product contract, not from accepting every automated comment.',
    ['Teams reviewing frequent pull requests', 'Maintainers checking proposed changes before human approval'],
    'Example: review a session-handling change',
    ['Connect a permitted repository and describe the expected session behavior and team review rules.', 'Run the review on a focused pull request and inspect the context behind each reported issue.', 'Reproduce material findings, reject incorrect suggestions, and retain human approval for the final merge.'],
    ['Check supported Git providers, repository scope, and review usage in the exact plan.', 'Verify source-code handling and how team instructions affect review behavior; automated findings are not guarantees.'],
    'https://www.coderabbit.ai/', 'CodeRabbit pull-request review and governance overview'
  ),
  kiro: guide(
    'Kiro is an agentic engineering environment that emphasizes turning requests into executable specifications. Its official product describes specifications, code validation, memory, and parallel agent work across codebases. It suits a team that wants to agree on requirements before implementation. Treat the generated specification as something to edit: ambiguous acceptance criteria can lead to a technically working feature that solves the wrong problem.',
    ['Teams developing from explicit requirements', 'Engineers breaking a feature into reviewable implementation tasks'],
    'Example: specify a notification preference feature',
    ['Describe user roles, channels, defaults, and cases where notifications must remain disabled.', 'Review the generated requirements and tasks, correcting assumptions before code changes begin.', 'Validate the resulting behavior against the agreed criteria and inspect the final diff.'],
    ['Confirm the IDE or CLI experience, supported integrations, and available agent capacity.', 'Check memory scope, repository permissions, and whether parallel work uses isolated environments.'],
    'https://kiro.dev/', 'Kiro specification and agentic engineering capabilities'
  ),
  codex: guide(
    'Codex is OpenAI\'s coding agent for writing, reviewing, and debugging software. Official documentation describes development interfaces including an IDE, CLI, web experiences, and SDK-driven workflows. It is useful when a task needs the agent to work with an existing codebase and produce changes you can inspect. A strong brief identifies the user-visible outcome, repository constraints, and the checks that will demonstrate the change works.',
    ['Maintainers investigating code and proposing focused fixes', 'Developers implementing a feature with reviewable verification'],
    'Example: improve a catalog search flow',
    ['State the search problem, expected URL behavior, and the existing components that should be preserved.', 'Ask Codex to inspect the flow, implement a narrow change, and exercise relevant cases.', 'Review the patch, verification output, and browser behavior before publishing the change.'],
    ['Confirm the exact Codex entitlement and interface; API usage and product access are different purchasing questions.', 'Review workspace permissions and approval controls before allowing tools to change files or external services.'],
    'https://developers.openai.com/learn/codex', 'Official OpenAI documentation: Codex and code generation', 'https://developers.openai.com/api/docs/guides/code-generation'
  ),
  framer: guide(
    'Framer AI works inside Framer\'s website editor to create and change editable pages, sections, copy, and visuals. You can refine through conversation or take over on the visual canvas, including responsive layout decisions. This makes it useful for a content-led marketing site where design editing and publishing belong in the same workflow. Review the actual project before publishing: generated copy, links, and small-screen layouts still need an owner\'s judgment.',
    ['Designers building editable marketing websites', 'Teams updating an existing Framer project'],
    'Example: build a focused product launch page',
    ['Provide approved product copy, brand assets, and the page\'s primary action.', 'Generate sections, then refine spacing, typography, and responsive breakpoints on the canvas.', 'Check forms, page metadata, links, and mobile layout before publishing the project.'],
    ['Ask which AI usage, site hosting, domain, CMS, and collaboration features are included.', 'Confirm whether Framer\'s publishing and project ownership model fits how you want to maintain the site.'],
    'https://www.framer.com/ai/', 'Framer AI website creation and canvas editing'
  ),
  zed: guide(
    'Zed is a collaborative code editor with agentic editing, inline AI assistance, and edit prediction. Its official product also supports connecting external agents through ACP and extending tools through MCP. This is relevant when you want AI work inside an editor while retaining a direct view of code changes. Compare the editing experience on your own language and repository, including how easily you can understand and reject a proposed change.',
    ['Developers who want agent work inside a code editor', 'Teams exploring different connected coding agents'],
    'Example: explain and revise a complex component',
    ['Open a relevant code section and ask for an explanation tied to its callers and state changes.', 'Select a bounded improvement and request an inline or agent-assisted edit.', 'Inspect the diff and run the project\'s relevant checks before accepting it.'],
    ['Confirm operating-system support and which models or external agents require separate accounts.', 'Review context sharing and permissions for every connected agent or MCP server.'],
    'https://zed.dev/', 'Zed agentic editing, inline assistance, and agent integrations'
  ),
  aider: guide(
    'Aider is a terminal-based AI pair-programming tool for starting projects or modifying an existing codebase. Its workflow pairs a language model with repository context so changes can be discussed and inspected in development. It is useful for an engineer who prefers shell and Git workflows over a separate app builder. Keep the working context focused and describe the behavior to preserve, particularly when a change touches several files.',
    ['Developers comfortable with a terminal workflow', 'Maintainers making changes in an existing Git repository'],
    'Example: improve a data-import validation message',
    ['Identify the importer, a failing sample, and the message a user should see.', 'Discuss the affected code and ask for a patch that preserves accepted input behavior.', 'Inspect the Git diff and verify both valid and invalid imports before committing.'],
    ['Check model support, API credentials, and provider costs separately from the open-source tool.', 'Understand how selected files and repository context are sent to your configured model.'],
    'https://aider.chat/', 'Aider terminal pair-programming overview'
  ),
  tabby: guide(
    'Tabby is an open-source, self-hosted AI coding assistant that can be configured for a team\'s development environment. Its product positions coding assistance alongside control over where the service runs, including cloud or on-premises setups. It is relevant when deployment ownership is part of the evaluation, rather than only the quality of a suggestion. Plan for the model-serving and maintenance work required by a self-hosted system.',
    ['Engineering teams evaluating self-hosted coding assistance', 'Organizations choosing their own deployment environment'],
    'Example: pilot assistance on an internal library',
    ['Choose a non-sensitive repository and define the supported editor and model setup.', 'Evaluate completions and code questions on tasks your developers already understand.', 'Record useful suggestions, incorrect answers, and operational requirements before expanding the rollout.'],
    ['Confirm hosting responsibility, model hardware needs, and administration features in the proposed setup.', 'Review code indexing, network access, and authentication; self-hosting alone does not configure these controls.'],
    'https://www.tabbyml.com/', 'Tabby open-source and self-hosted coding assistant'
  ),
  kilo: guide(
    'Kilo is an open-source coding agent offered across IDE, CLI, and other development environments. Its official product emphasizes model choice, including provider connections and bring-your-own-key configurations. It suits teams that want to compare coding models while keeping a consistent agent workflow. The useful comparison is the complete task: context gathering, patch quality, checks, and the effort needed to review the result.',
    ['Developers evaluating several model providers', 'Teams wanting one agent workflow across editor and terminal'],
    'Example: compare approaches to a bounded bug fix',
    ['Prepare the same reproduction, repository snapshot, and acceptance criteria for each run.', 'Have Kilo inspect and fix the issue using a selected model configuration.', 'Compare verified behavior and review effort, keeping generated patches isolated until a choice is made.'],
    ['Ask whether model usage is included, routed through Kilo, or charged to your own keys.', 'Verify environment availability and repository permissions for the specific IDE, CLI, or cloud offering.'],
    'https://kilo.ai/', 'Kilo open agent and model-choice overview'
  ),
  qodo: guide(
    'Qodo is an AI code-review and governance platform that uses codebase context and team standards to evaluate changes. Its official product describes review in Git workflows and validation in the IDE, with rules informed by repository patterns and review history. It is useful when a team needs consistent review expectations across many contributors. Rules still need accountable owners so an outdated convention does not become an automated requirement.',
    ['Engineering teams maintaining shared review standards', 'Organizations checking changes across connected repositories'],
    'Example: apply a team\'s error-handling convention',
    ['Document the approved convention and connect only repositories needed for the evaluation.', 'Review a small pull request and check whether Qodo identifies meaningful departures with supporting context.', 'Confirm useful rules with maintainers and review false positives before broader enforcement.'],
    ['Check Git provider, IDE, cross-repository context, and governance features in the exact plan.', 'Review what code and pull-request history are indexed, and who may modify review rules.'],
    'https://www.qodo.ai/', 'Qodo review, codebase context, and team rules'
  ),
  augment: guide(
    'Cosmos by Augment coordinates software-development agents using a context engine, shared organizational knowledge, integrations, and isolated execution environments. The official platform describes workflows such as review, testing, and ticket-to-pull-request work. It is relevant when the challenge is coordinating repeated engineering work across teams rather than completing one editor prompt. Start with a single loop whose trigger, quality gate, and accountable reviewer are easy to define.',
    ['Platform teams coordinating agent-assisted delivery', 'Organizations applying shared codebase knowledge across tasks'],
    'Example: pilot a ticket-to-patch workflow',
    ['Choose a narrow issue type and define required context, permitted repositories, and completion criteria.', 'Configure the agent workflow with isolated execution and a human review gate.', 'Inspect generated changes and failed runs before adding more triggers or teams.'],
    ['Confirm which Cosmos, CLI, infrastructure, and integration capabilities the arrangement includes.', 'Review context indexing, sandbox boundaries, and escalation ownership for agents that share organizational knowledge.'],
    'https://www.augmentcode.com/', 'Cosmos orchestration, context, and software delivery workflows'
  ),
  trae: guide(
    'TRAE is an AI development workspace for working with code through conversation and editor-based workflows. Its official product materials describe agents that plan, implement, and iterate on software tasks, with desktop and web experiences. It can help a builder move from a feature brief to a proposed implementation. Because product modes and names have evolved, confirm the exact current experience rather than assuming an older tutorial matches the access offered.',
    ['Developers exploring conversation-led implementation', 'Product teams reviewing a working feature prototype'],
    'Example: prototype a task-list interaction',
    ['Describe task creation, completion, and empty-state behavior with sample content.', 'Ask the agent to implement the flow and show how its changes relate to the existing code.', 'Exercise add, edit, and error cases, then inspect the patch before using real workspace data.'],
    ['Confirm the current desktop or web product, model access, and usage limits.', 'Review privacy mode, source sharing, and agent command permissions for the chosen experience.'],
    'https://www.trae.ai/', 'TRAE development lifecycle overview', 'https://www.trae.ai/ide'
  ),
  openhands: guide(
    'OpenHands is an open-source platform for software-development agents that can plan and apply code changes. It offers a foundation for running agents locally, self-hosting, or using managed environments, with tooling for broader engineering workflows. This suits teams that need to inspect or extend the agent system as well as its output. An evaluation should include environment setup and recovery from failed tasks, not only a successful demonstration.',
    ['Developers building on an open agent platform', 'Engineering teams comparing local and managed execution'],
    'Example: automate a small maintenance issue',
    ['Choose a well-scoped issue and provide the repository setup and expected checks.', 'Run the task in an isolated environment and retain the agent\'s patch and command output.', 'Reproduce the result independently and inspect any failures before introducing a recurring workflow.'],
    ['Clarify managed service access versus self-hosted deployment and separate model costs.', 'Check runtime isolation, repository credentials, and the operational work required to maintain the environment.'],
    'https://www.openhands.dev/', 'OpenHands open-source agent platform and deployment choices'
  ),
  opencode: guide(
    'OpenCode is an open-source coding agent that supports a choice of model providers and development interfaces. Its official product describes terminal, editor, and desktop workflows rather than tying the agent to a single model. It is useful for developers who want to change providers while keeping their task interface familiar. Compare how it handles your repository instructions, tool permissions, and review process before standardizing on a configuration.',
    ['Terminal-oriented developers choosing their own model', 'Teams evaluating an open coding-agent workflow'],
    'Example: explain and patch a routing issue',
    ['Provide the failing URL, expected route, and relevant project constraints.', 'Ask OpenCode to trace the route and propose a minimal correction using the selected provider.', 'Run the affected route checks and inspect the diff before accepting the patch.'],
    ['Confirm which model access is included and which requires a separate subscription or API key.', 'Review provider-specific data handling and the permissions available to agent tools.'],
    'https://opencode.ai/', 'OpenCode open coding agent and provider support'
  ),
  warp: guide(
    'Warp offers an agentic terminal, a coding-agent CLI, and infrastructure for coordinating development agents. Its product connects traditional command-line work with agents that can carry out software tasks. This is relevant when debugging and implementation already happen largely in the terminal. Provide the failing command and expected result, then check the actual commands and code changes rather than relying on a conversational explanation of success.',
    ['Engineers working through command-line development tasks', 'Teams exploring coordinated coding-agent workflows'],
    'Example: investigate a failing development command',
    ['Capture the command, error output, environment, and recent relevant changes.', 'Ask the agent to inspect the problem and propose the next diagnostic step before changing configuration.', 'Review executed commands and rerun the original failure case to verify the resolution.'],
    ['Distinguish Warp Terminal, Agent CLI, and Factories capabilities when requesting access.', 'Check supported platforms, model usage, and access boundaries for local and cloud environments.'],
    'https://www.warp.dev/', 'Warp terminal, agent CLI, and agent infrastructure'
  ),
  greptile: guide(
    'Greptile uses codebase context to review and test pull requests. Its official product includes review agents and runtime validation tooling, helping a team investigate how a change interacts with code beyond the immediate diff. It is useful for identifying issues a reviewer may overlook while reading a single file. Validate each finding against the intended behavior and retain normal testing and human approval as part of the merge process.',
    ['Teams reviewing changes in interconnected codebases', 'Maintainers investigating behavioral pull-request risks'],
    'Example: review a change to shared validation',
    ['Connect the appropriate repository and explain which callers rely on the validation contract.', 'Run a review and inspect the paths cited by any reported regression.', 'Reproduce significant findings with representative inputs before applying a suggested correction.'],
    ['Confirm Git integrations, code indexing scope, and whether runtime validation is included.', 'Check code retention and permissions; additional review context does not guarantee every defect will be found.'],
    'https://www.greptile.com/', 'Greptile codebase-aware pull-request review'
  ),
  codeant: guide(
    'CodeAnt AI focuses on agentic application security, using application context and threat-modeling workflows to investigate weaknesses. Its current product emphasizes testing whether a weakness can matter in the running system. This is relevant for authorized security teams who need evidence to prioritize remediation. A finding still needs review for scope, reproducibility, and business impact before it becomes a confirmed issue or a deployment decision.',
    ['Security teams evaluating authorized application risks', 'Engineering teams prioritizing evidence-backed remediation'],
    'Example: assess a permitted staging application',
    ['Define written scope, test accounts, allowed environments, and excluded data before connecting the tool.', 'Review reported weaknesses and the evidence connecting them to the application behavior.', 'Assign validated fixes to owners and verify remediation within the same authorized scope.'],
    ['Confirm the current security product, supported application access, and report capabilities.', 'Agree on test boundaries, credential handling, and evidence retention before any active testing.'],
    'https://codeant.ai/', 'CodeAnt AI application security platform'
  ),
  testsprite: guide(
    'TestSprite is an AI testing agent that writes and runs end-to-end checks against an application and reports what broke. Its product focuses on validating changes through actual user journeys, with CLI and development integrations. It is useful when a team wants evidence that a feature still works after editing code. Generated tests should reflect real requirements, including failure states, rather than merely confirming what the current implementation already does.',
    ['Developers verifying user journeys after a change', 'Teams building end-to-end coverage for a working app'],
    'Example: check a changed checkout flow',
    ['Provide a staging URL, test-only accounts, and expected cart, validation, and confirmation behavior.', 'Review the proposed test cases and run them with safe sample data.', 'Inspect failure evidence and verify important cases manually before deciding whether the change can ship.'],
    ['Check environment, browser, integration, and test-run support in the selected plan.', 'Use a controlled test environment and clarify whether runs can submit forms, create records, or trigger payments.'],
    'https://www.testsprite.com/', 'TestSprite end-to-end testing agent'
  ),
  base44: guide(
    'Base44 builds applications and websites from natural-language requests, with backend, storage, integrations, and hosting services in the platform. It is useful for a business process that needs more than a static page but does not begin with a full engineering setup. Describe what different users may see and change before asking for screens. A generated interface needs data and permission checks before it becomes a dependable business tool.',
    ['Business teams creating a focused internal application', 'Founders exploring an app with built-in platform services'],
    'Example: prototype a supplier request tracker',
    ['Define request fields, statuses, and the difference between submitter and administrator permissions.', 'Build the flow with sample records and test editing, filtering, and missing information.', 'Review data access, backups, and publication settings before introducing live supplier information.'],
    ['Confirm app usage, hosting, backend allowances, integrations, and custom-domain support.', 'Check export options, account ownership, and how to recover or move business data.'],
    'https://base44.com/', 'Base44 app builder and built-in platform services'
  ),
  emergent: guide(
    'Emergent turns a natural-language idea into web or mobile application work that can be refined and launched. Its product describes moving from a brief to screens, flows, and functional features through conversation. It suits early product exploration where trying a real flow is more informative than discussing a concept. Specify the smallest useful version first, and treat the generated result as an implementation to inspect and test.',
    ['Founders testing an initial product workflow', 'Teams iterating on an app concept with sample users'],
    'Example: build an appointment-request prototype',
    ['Explain the audience, required fields, confirmation behavior, and what should happen when a slot is unavailable.', 'Generate the first flow and refine it through concrete feedback on the running app.', 'Test error cases and data access before connecting live services or publishing for customers.'],
    ['Confirm the exact web or mobile workflow, deployment options, and agent usage allowances.', 'Check generated-code ownership and the costs and credentials of connected backend services.'],
    'https://emergent.sh/', 'Emergent describe, refine, and launch workflow'
  ),
  rork: guide(
    'Rork is an AI application builder with product options for mobile and web development. Its official site distinguishes iOS, Android, and web experiences and describes backend services for data, authentication, and storage. It is relevant when you want to explore an app through conversation. Choose the intended platform early: device behavior, store requirements, and publishing accounts affect the work beyond generating a convincing screen.',
    ['Creators prototyping a mobile application', 'Small teams comparing a native and web product direction'],
    'Example: create a simple habit-tracking app',
    ['Define the target device, daily habit flow, sample reminders, and how users review progress.', 'Build a prototype and test empty, completed, and missed-day states on the intended platform.', 'Check device permissions and publishing requirements before submitting through your own store account.'],
    ['Confirm which Rork platform and backend features are included in the requested access.', 'Ask about source access, store-account ownership, submission work, and ongoing hosting requirements.'],
    'https://rork.com/', 'Rork mobile, web, and backend product overview'
  ),
  dyad: guide(
    'Dyad is an open-source desktop app builder that creates web applications using AI models you choose. Its product emphasizes local project ownership and editable code, with the option to import an application. It suits builders who want a conversational starting point without putting every development decision into a hosted builder. Local project files do not automatically mean model requests stay local; that depends on the configured provider.',
    ['Builders wanting a desktop app-creation workflow', 'Developers who want to retain and inspect generated source'],
    'Example: build a lightweight reading-list app',
    ['Describe item fields, saved and finished states, and an initial sample library.', 'Generate the app with a chosen model and refine the actual interface and storage behavior.', 'Inspect source changes, run the app independently, and review deployment settings before sharing.'],
    ['Confirm supported desktop systems and whether model access uses your keys or an included service.', 'Check how data leaves the device for model requests and how the app will be hosted after creation.'],
    'https://www.dyad.sh/', 'Dyad desktop app builder and source ownership overview'
  ),
  dreamflow: guide(
    'Dreamflow combines AI prompts, a visual canvas, and synchronized code editing for building mobile applications. Its official product positions these as connected ways to work on the same project. This is useful when a team wants to generate a starting point and then make deliberate visual or code-level adjustments. Evaluate a real screen transition and data flow, because a good canvas preview is only one part of a working mobile experience.',
    ['Teams combining visual and code-based app development', 'Builders moving a mobile concept toward an editable project'],
    'Example: develop a field-service checklist screen',
    ['Describe checklist items, completion states, and the intended navigation on a phone.', 'Create the interface, then refine spacing visually and inspect the synchronized code.', 'Run the flow on the intended device environment and verify saving and validation before publication.'],
    ['Confirm platform targets, code access, local-run support, and deployment options.', 'Check backend integration ownership and store submission requirements independently of the design preview.'],
    'https://dreamflow.app/', 'Dreamflow synchronized AI, canvas, and code workflow'
  ),
  builder: guide(
    'Builder.io is a collaborative platform where product teams and AI agents build and update experiences in code. The official product emphasizes keeping work aligned with a brand and an existing codebase while designers, engineers, and content owners collaborate. It is relevant when the result needs to fit a real product rather than remain an isolated mockup. Give the agent approved components, content, and the review path for changes.',
    ['Product teams collaborating on an existing web experience', 'Designers and engineers translating changes into reviewable code'],
    'Example: update a product-page call to action',
    ['Identify the existing component, approved wording, and design-system rules for the page.', 'Ask for the focused change and review it with the people who own design and engineering.', 'Inspect the code diff and responsive behavior before following the normal release workflow.'],
    ['Confirm codebase connections, collaboration features, and the particular Builder product in the offer.', 'Review repository permissions and how design, content, and code changes are approved before publishing.'],
    'https://www.builder.io/', 'Builder.io team and agent collaboration in code'
  ),
  'magic-patterns': guide(
    'Magic Patterns is an AI design environment for exploring product interfaces and interactive prototypes. Its current product presents a shared canvas for inspiration, alternatives, and design decisions. It is useful when a team needs to compare several interaction directions before committing engineering time. Supply realistic content and constraints so the prototype answers a product question, rather than simply generating another attractive screen.',
    ['Product designers exploring alternative interface flows', 'Teams reviewing a prototype before implementation'],
    'Example: compare two onboarding directions',
    ['Define the user, required information, and the point at which onboarding counts as complete.', 'Create two focused flows on the canvas using the same realistic sample content.', 'Walk through both with reviewers, record unresolved states, and select a direction for engineering.'],
    ['Ask about collaboration, design-system context, export, and prototype sharing in the exact plan.', 'Check how generated code or designs transfer into your existing product workflow; do not assume production readiness.'],
    'https://www.magicpatterns.com/', 'Magic Patterns AI product design and shared canvas'
  ),
  'gemini-cli': guide(
    'Gemini CLI brings AI development assistance into the terminal. Google describes querying and editing codebases, generating applications from visual or document context, and automating workflows. It is useful for a developer who wants to work alongside existing command-line tools. Include the relevant repository instructions and a concrete target; the quality of a change depends on the context and verification available in the working environment.',
    ['Developers working primarily from a terminal', 'Teams using document or image references for a coding task'],
    'Example: implement a screen from an approved brief',
    ['Provide the brief, relevant design reference, and the components that should be reused.', 'Ask the agent to inspect the codebase and implement a small, defined portion of the screen.', 'Check the running UI and relevant tests, then review every changed file before publishing.'],
    ['Confirm authentication options, supported environment, model access, and usage allowances.', 'Review extension permissions and command approval settings before exposing credentials or connected services.'],
    'https://geminicli.com/', 'Gemini CLI terminal development capabilities'
  ),
  antigravity: guide(
    'Google Antigravity is an agentic development platform with app, IDE, and terminal-oriented experiences. Its official product describes an environment built around agents carrying out development work rather than only suggesting a line of code. It is relevant for a builder who wants to coordinate implementation and review in one workspace. Define what the agent may change and what evidence you need before accepting a completed task.',
    ['Developers exploring an agent-first project workflow', 'Teams coordinating implementation with human review'],
    'Example: develop a bounded dashboard improvement',
    ['Describe the user problem, existing project, and specific chart or filter behavior to improve.', 'Ask the agent to plan the change and keep work within the agreed components.', 'Inspect the implementation and exercise the dashboard with representative data before release.'],
    ['Clarify which Antigravity experience, model access, and collaboration features are provided.', 'Check supported systems, connected-account permissions, and controls over agent execution and publication.'],
    'https://antigravity.google/', 'Google Antigravity development platform overview'
  ),
  'docker-gordon': guide(
    'Gordon is Docker\'s AI assistant for container workflows. Docker documents help with Dockerfiles, container logs, concepts, and management tasks, with proposed actions requiring approval. This makes it useful when the immediate problem is how an application is packaged or running in Docker. A clear error and the intended environment help distinguish a container configuration problem from a defect in the application itself.',
    ['Developers diagnosing local container failures', 'Teams reviewing a Dockerfile or development setup'],
    'Example: investigate a container that exits on startup',
    ['Identify the affected container and provide the intended service behavior and relevant log output.', 'Review Gordon\'s proposed diagnostic commands and allow only those needed for the investigation.', 'Inspect any Dockerfile changes and rebuild in a safe environment to confirm the original failure is resolved.'],
    ['Check Docker Desktop compatibility, account requirements, and the specific Gordon access included.', 'Review every action affecting images, volumes, networks, or running services; retain needed data before changes.'],
    'https://docs.docker.com/ai/gordon/', 'Docker documentation: Gordon capabilities and permissions'
  ),
  bito: guide(
    'Bito combines AI model routing, codebase context, and development agents with tools for scoping, coding, and review. Its current product connects these services to coding environments rather than presenting only a standalone chat assistant. It is relevant when a team wants its agent work grounded in shared repository context. Evaluate whether the context and routing improve your specific workflow, including the reviewability of generated changes.',
    ['Engineering teams connecting agents to codebase knowledge', 'Developers comparing model routing and review workflows'],
    'Example: review a change to a shared service',
    ['Choose a small pull request and identify the service contract and dependent components.', 'Use the permitted codebase context to investigate the change and collect review findings.', 'Verify findings against actual callers and tests before accepting a recommendation or follow-up patch.'],
    ['Confirm whether the offer covers routing, context, agents, or code review and how usage is billed.', 'Check repository indexing scope, provider data handling, and integration permissions before connecting private code.'],
    'https://bito.ai/', 'Bito model routing, context engine, and development agents'
  ),
  n8n: guide(
    'n8n connects applications, data, and AI models in workflows whose individual steps can be inspected. Its visual approach is useful when a process combines ordinary rules with a model-based task, such as classifying a request before routing it. The important design choice is where a deterministic rule should replace an agent judgment. Map the trigger, data transformations, and failure path so the automation stays understandable after its first successful run.',
    ['Technical teams building connected business workflows', 'Operators combining AI classification with explicit routing rules'],
    'Example: triage incoming service requests',
    ['Define the incoming fields, allowed categories, and queue responsible for each category.', 'Build a workflow that classifies a sample request and records the reason before creating a draft ticket.', 'Test unknown categories, duplicate triggers, and connector failures before enabling the live trigger.'],
    ['Confirm cloud versus self-hosted access, execution allowances, and model-provider charges.', 'Check credential ownership, error recovery, and approval steps before enabling actions that change business records.'],
    'https://n8n.io/', 'n8n inspectable AI agents and workflow platform'
  ),
  make: guide(
    'Make is a visual automation platform for connecting applications, data sources, and AI models. Workflows can be created through a canvas or prompting, with integrations for both standard business steps and AI agents. It suits processes that need branching and transformations across several tools. Design the data passed between steps explicitly; a workflow can appear successful while sending an incomplete field to its destination.',
    ['Operations teams joining several business applications', 'Builders who prefer a visual automation canvas'],
    'Example: turn a form response into a reviewed project brief',
    ['Map each form field to the project brief and define which values are required.', 'Add an AI drafting step and route the result to a review queue rather than directly publishing it.', 'Test empty answers, repeated submissions, and destination errors before scheduling production runs.'],
    ['Check operation or credit metering, supported connectors, and scenario limits in the offered plan.', 'Review connection permissions and how retries avoid creating duplicate projects or messages.'],
    'https://www.make.com/', 'Make visual automation, integrations, and AI agents'
  ),
  zapier: guide(
    'Zapier connects applications through automated workflows and also offers agents, forms, tables, and tools for AI integrations. It is useful when a repetitive handoff occurs between systems a business already uses. Begin with a precise trigger and a predictable destination, then add AI only where interpretation is needed. Consider how the workflow should behave if a task runs twice or a connected account loses access.',
    ['Small businesses automating routine application handoffs', 'Teams adding AI interpretation to a structured process'],
    'Example: organize an inbound project inquiry',
    ['Define the inquiry fields and destination record, including a unique submission reference.', 'Build a workflow that summarizes the request and creates a reviewable CRM entry.', 'Test duplicates, missing fields, and disconnections before enabling automatic runs.'],
    ['Confirm which workflows, agents, tables, and task allowances are included rather than assuming all products share one entitlement.', 'Check access granted to each connected app and any AI-provider usage billed separately.'],
    'https://zapier.com/', 'Zapier workflow automation and AI platform'
  ),
  lindy: guide(
    'Lindy is an AI work assistant that connects to workplace tools and carries out tasks using skills, routines, and remembered context. Its product includes areas such as inbox work, meetings, research, and scheduled activity. It is useful when a recurring task needs both information gathering and an organized next step. Give it an explicit rule for when it should ask you before sending, booking, or changing a record.',
    ['Professionals coordinating information across workplace tools', 'Teams preparing recurring briefs and administrative follow-ups'],
    'Example: prepare a client-meeting brief',
    ['Connect only the relevant calendar and approved client information sources.', 'Ask for a brief containing recent decisions, open questions, and source references before the meeting.', 'Check the factual details and keep any outbound follow-up as a draft until reviewed.'],
    ['Confirm available integrations, routine usage, and whether meeting or phone features are included.', 'Review editable memory, connected-account permissions, and approval controls for actions on your behalf.'],
    'https://www.lindy.ai/', 'Lindy skills, routines, memory, and workplace integrations'
  ),
  gumloop: guide(
    'Gumloop is a platform for building, sharing, and managing AI agents connected to workplace applications. Its current product includes agent instructions, reusable skills, connectors, and visibility into usage. It is relevant when a team wants the same research or preparation workflow to be usable by several people. Define a shared output and the sources it may use so results can be compared and reviewed consistently.',
    ['Teams building reusable research or operations agents', 'Managers seeking visibility into shared agent activity'],
    'Example: prepare an account-research summary',
    ['Define required company facts, approved sources, and questions the summary must leave unresolved.', 'Build an agent that gathers the information and writes a structured draft with references.', 'Evaluate several accounts and review missing or incorrect claims before sharing the agent across the team.'],
    ['Check connector availability, credits, team administration, and sharing controls.', 'Confirm whether agent skills may write to connected systems and how those permissions are governed.'],
    'https://www.gumloop.com/', 'Gumloop shared agents, connectors, and management controls'
  ),
  bardeen: guide(
    'Bardeen focuses on lead research through web extraction, AI search, qualification, and contact enrichment. It can help assemble information from permitted sources into a structured prospecting workflow. This is useful when the first problem is inconsistent research data rather than writing more outreach. Define what qualifies a record and preserve its source so a salesperson can check the information before contacting anyone.',
    ['Sales teams researching a defined account segment', 'Operators turning permitted web information into structured records'],
    'Example: assemble a small prospect research sheet',
    ['Define target-account criteria and choose sources you are allowed to use.', 'Extract company fields and use AI to flag how each record meets or misses the criteria.', 'Check a sample against its source, remove duplicates, and approve records before any outreach workflow.'],
    ['Ask which extraction, enrichment, and AI credits are included and how failed lookups are treated.', 'Review source terms, contact-data permissions, and export destinations before collecting personal information.'],
    'https://www.bardeen.ai/', 'Bardeen web research, extraction, and enrichment'
  ),
  'browse-ai': guide(
    'Browse AI extracts structured information from websites and monitors pages for changes. Its current flow proposes columns from a page, which you review and customize before using the data. This is useful when information is available on a website but not in a convenient feed. A successful extraction still needs checks for missing rows, changing layouts, and the meaning of fields such as availability or update date.',
    ['Researchers monitoring permitted public information', 'Operators maintaining a structured website-data feed'],
    'Example: monitor a public event directory',
    ['Select an allowed source and define event name, date, location, and original URL columns.', 'Review extracted records against the page, including pagination and missing values.', 'Set a suitable monitor and investigate unexpected changes before updating a public listing.'],
    ['Confirm extraction credits, scheduling, pagination, and authenticated-site support for the intended source.', 'Respect source permissions and test for layout changes; monitoring is not a guarantee of complete or uninterrupted data.'],
    'https://www.browse.ai/', 'Browse AI extraction and website monitoring workflow'
  ),
  taskade: guide(
    'Taskade combines projects, AI agents, automation, and app building in one workspace. Its product treats workspace tasks and documents as part of the context agents and workflows can use. It is relevant when a team wants a shared operational system rather than a separate chatbot. Start by identifying the source of truth for a task or status so an automated update does not create a second, conflicting record.',
    ['Teams connecting project work with AI agents', 'Small businesses building a shared operational workspace'],
    'Example: organize a content-production workflow',
    ['Define brief, draft, review, and published stages with owners and approved source material.', 'Create a workspace workflow that prepares a draft task and routes it for review.', 'Check assignments, status changes, and duplicate runs before allowing the workflow to act on live projects.'],
    ['Clarify app, project, agent, automation, and integration limits in the exact plan.', 'Review workspace visibility and whether shared knowledge or connected tools expose information to unintended members.'],
    'https://www.taskade.com/', 'Taskade apps, agents, projects, and automation'
  ),
  manus: guide(
    'Manus is a general-purpose AI agent with documented products for research, slides, design, websites, and other deliverables. It is useful when a request needs a sequence of information gathering and creation steps rather than a short answer. The result should be assessed as a complete artifact: check the underlying facts, editable output, and whether it answers the original brief before sharing or publishing it.',
    ['Professionals preparing a researched work deliverable', 'Teams exploring a presentation or website concept'],
    'Example: draft a source-backed market overview',
    ['Specify the audience, research question, date range, and preferred primary sources.', 'Ask for a concise overview that separates documented facts, assumptions, and open questions.', 'Open the sources, verify important claims, and revise the final artifact before presenting it.'],
    ['Confirm the relevant research, slide, design, or app feature and its usage allowances.', 'Check export formats, connected-browser permissions, and approval requirements before external publication or account actions.'],
    'https://manus.im/', 'Manus research and deliverable creation products'
  ),
  chatbase: guide(
    'Chatbase creates customer-facing AI agents from business information and connected tools. Its product describes support, sales, and product-guidance roles across customer channels, with a lifecycle of building, testing, and improving the agent. It is relevant when recurring questions can be answered from approved material. The knowledge and escalation design matter as much as the conversational tone, especially when a customer asks about an exception.',
    ['Businesses adding an agent to customer conversations', 'Support teams maintaining a focused knowledge-based assistant'],
    'Example: answer pre-purchase product questions',
    ['Supply approved product facts and define questions that require a staff member.', 'Test ordinary questions, missing information, and requests that conflict with policy.', 'Review transcripts and correct the knowledge before opening the agent to visitors.'],
    ['Confirm supported channels, message usage, data sources, and action integrations.', 'Review handoff behavior and permissions before letting the agent access customer accounts or change records.'],
    'https://www.chatbase.co/', 'Chatbase customer experience agents and lifecycle'
  ),
  botpress: guide(
    'Botpress is an AI agent platform focused on customer support and connected business actions. Its current product describes agents that can work through account changes and multi-step support workflows. This suits a support process where retrieving an answer is only the first stage. Define the difference between explaining a policy and executing an action, and verify identity and escalation requirements before connecting a live service.',
    ['Support teams building multi-step service agents', 'Developers connecting conversational support to business systems'],
    'Example: prototype an order-status assistant',
    ['Provide approved support content and a test order system with safe sample records.', 'Build the lookup flow, defining which customer details must be verified first.', 'Test missing orders, unavailable systems, and human handoff before introducing live data.'],
    ['Ask about channel support, model usage, integrations, and agent capacity in the proposed plan.', 'Confirm action permissions, auditability, and fallback behavior rather than assuming the agent can resolve every case.'],
    'https://botpress.com/', 'Botpress support agent and workflow platform'
  ),
  'relevance-ai': guide(
    'Relevance AI helps teams design and operate specialist agents for recurring business work. Its product includes tools for identifying automation opportunities, building agents, and improving systems over time. It is relevant when subject-matter experts know the process but need a way to turn that expertise into a repeatable workflow. Start with a measurable handoff, such as a reviewed brief, instead of an unbounded instruction to run an entire department.',
    ['Operations teams formalizing a repeatable expert workflow', 'Teams coordinating several specialist business agents'],
    'Example: prepare a renewal-review packet',
    ['Define the sources, required account facts, and conditions that require human judgment.', 'Build an agent workflow that assembles a packet with references and unresolved questions.', 'Review several packets with the account owner and adjust the process before enabling recurring runs.'],
    ['Clarify available tools, integrations, agent usage, and deployment assistance.', 'Check responsibility for business decisions, data permissions, and escalation when an agent lacks required information.'],
    'https://relevanceai.com/', 'Relevance AI specialist agents and automation design'
  ),
  goose: guide(
    'goose is a general-purpose open-source agent that runs on your computer, with desktop, CLI, and API interfaces. Its documentation describes model-provider choice, MCP extensions, reusable recipes, and subagents. It can support coding, research, and local workflow tasks when the relevant tools are connected. A recipe is useful for making repeated instructions explicit, but the actions it permits still need to match the task and environment.',
    ['Developers building repeatable local agent workflows', 'Teams sharing task recipes with selected tools'],
    'Example: create a weekly project-status draft',
    ['Choose approved project sources and define a recipe that reads only the needed information.', 'Ask goose to assemble completed work, blockers, and source links into a draft.', 'Review the result and adjust the recipe before sharing it or adding a schedule.'],
    ['Confirm model credentials, provider charges, and operating-system support for the intended setup.', 'Review extension permissions and local command access; running locally does not prevent a configured cloud model from receiving context.'],
    'https://goose-docs.ai/', 'goose documentation: interfaces, extensions, and recipes'
  ),
  crewai: guide(
    'CrewAI provides tools for building and running AI agents with orchestration and governance around their work. Its offering includes an open-source foundation and enterprise runtime capabilities for business and technical teams. It is useful when several specialized steps must be coordinated toward one result. Divide responsibilities and define shared inputs clearly so multiple agents do not simply repeat the same work or pass unverified assumptions forward.',
    ['Developers orchestrating specialized agent workflows', 'Platform teams operating governed business agents'],
    'Example: assemble a reviewed competitor brief',
    ['Define separate research, synthesis, and verification tasks with approved source rules.', 'Run a small workflow that passes source references along with each intermediate result.', 'Review traceable claims and failure cases before scheduling or expanding the process.'],
    ['Separate open-source tooling, managed runtime, enterprise features, and model-provider usage when requesting a quote.', 'Review tool permissions, observability, and ownership of decisions made across agent handoffs.'],
    'https://crewai.com/', 'CrewAI agent build, orchestration, and runtime platform'
  ),
  activepieces: guide(
    'Activepieces brings agents, flows, tables, chat, and application connections into a shared automation workspace. Its product also describes approvals and governance controls for team use. It is relevant when business users need accessible automation while administrators need visibility into connections and runs. Model the exception path as carefully as the normal path so staff can recover a workflow without guessing what the agent already changed.',
    ['Teams sharing connected business automations', 'Administrators managing agent and application access'],
    'Example: route a purchase request for approval',
    ['Define required fields, approvers, and the system where an approved request should be recorded.', 'Create a flow that prepares a summary and pauses for the responsible person\'s decision.', 'Test rejection, missing information, and duplicate triggers before enabling the workflow.'],
    ['Confirm deployment options, connected-app support, run limits, and team governance features.', 'Check credential ownership and ensure retries or agent actions cannot bypass the defined approval step.'],
    'https://www.activepieces.com/', 'Activepieces agents, flows, tables, and enterprise controls'
  ),
  stackai: guide(
    'StackAI is an enterprise agent platform for building, deploying, and governing connected workflows. Its current product emphasizes IT teams coordinating AI across an organization, including data sources and operational controls. It is useful when a document or knowledge workflow must be delivered with administration and review around it. Start with a bounded set of approved documents and a specific audience instead of connecting every information source at once.',
    ['IT teams delivering an internal knowledge agent', 'Organizations governing connected enterprise workflows'],
    'Example: pilot an internal procedure assistant',
    ['Select current procedures and define who may access each document collection.', 'Build an assistant that cites the applicable procedure and escalates unsupported questions.', 'Test conflicting versions and access boundaries before extending the agent to more departments.'],
    ['Confirm the current product arrangement, connectors, deployment model, and administration features.', 'Review source permissions, retention, and integration changes following the vendor\'s announced Asana acquisition.'],
    'https://www.stackai.com/', 'StackAI enterprise agent platform and current company update'
  ),
  mindstudio: guide(
    'MindStudio offers a visual environment for building and deploying AI agents with model choices and application integrations. Its documented workflow capabilities include testable logic, API or webhook deployment, and code extension where needed. It suits a reusable intelligence step that another application can call. Define the input and output contract carefully so an attractive agent interface does not hide inconsistent results from downstream systems.',
    ['Business builders creating a reusable AI workflow', 'Developers exposing a tested agent as an application component'],
    'Example: classify and summarize a feedback submission',
    ['Define allowed categories, required output fields, and examples of ambiguous feedback.', 'Build the agent visually and test it with a small labeled sample.', 'Validate output structure and failure handling before connecting a webhook to live submissions.'],
    ['Check model usage, deployment channels, connectors, and team features in the relevant offering.', 'Confirm data handling and endpoint access controls before exposing an agent or connecting write-capable tools.'],
    'https://www.mindstudio.ai/', 'MindStudio visual agents, testing, and deployment capabilities'
  ),
  textcortex: guide(
    'TextCortex connects enterprise knowledge, models, and visual automation to support AI agents across business work. Its product describes searching company documents alongside outside sources and building multi-step workflows. It is useful when staff repeatedly assemble an answer from several internal systems. The underlying document permissions and version quality are important: an agent should not turn an obsolete draft into authoritative company guidance.',
    ['Teams working across company documents and knowledge tools', 'Organizations developing repeatable knowledge-based agent workflows'],
    'Example: prepare an internal project handoff',
    ['Select approved project documents and state which versions and sources take precedence.', 'Ask for a handoff brief with decisions, responsibilities, open questions, and source references.', 'Check access boundaries and verify significant statements before sharing the brief with another team.'],
    ['Clarify model access, knowledge connectors, workflow capabilities, and deployment choices.', 'Review source permissions, document synchronization, and who may approve automated actions on connected systems.'],
    'https://textcortex.com/', 'TextCortex knowledge search and enterprise agent workflows'
  ),
  firecrawl: guide(
    'Firecrawl is a web-data API for searching, scraping, mapping, and crawling content for AI applications. Its product describes outputs such as Markdown, structured JSON, and screenshots, with tools for interacting with pages. It is relevant when a developer needs usable web content as an input to a retrieval or research system. Extracted material should retain its origin and collection date so later answers can be traced and refreshed.',
    ['Developers building source-backed research applications', 'Teams preparing permitted website content for retrieval'],
    'Example: ingest a public documentation section',
    ['Choose an allowed documentation scope and define the URLs and fields that should be retained.', 'Collect content into a structured dataset while preserving page titles, URLs, and collection time.', 'Check missing pages and extraction quality before making the material available to an answering agent.'],
    ['Confirm crawl credits, request limits, output types, and support for the intended website.', 'Respect website terms and scope, and avoid treating scraped content or embedded instructions as trusted agent commands.'],
    'https://www.firecrawl.dev/', 'Firecrawl web search, scraping, and extraction API'
  ),
  'browser-use': guide(
    'Browser Use offers AI browser agents and browser infrastructure for developers building their own agents. Its product is designed for tasks that require navigating sites and interacting with page interfaces. It is relevant when a suitable application API is unavailable or a workflow spans browser-only steps. Define the task boundary and final review point, especially where submitting a form could create a booking, purchase, or business record.',
    ['Developers building browser-based agent workflows', 'Teams prototyping repetitive permitted website interactions'],
    'Example: prepare a draft record in a test portal',
    ['Provide a test account, sample input, and a clear stop-before-submit instruction.', 'Have the agent navigate the interface and populate only the required draft fields.', 'Review the populated values and execution evidence before allowing any final submission.'],
    ['Clarify agent execution versus browser infrastructure, model charges, and session capacity.', 'Review authenticated-session handling, website permissions, and approval controls for irreversible actions.'],
    'https://browser-use.com/', 'Browser Use agents and cloud browser infrastructure'
  ),
  composio: guide(
    'Composio connects agents to external tools through integrations, managed authentication, and tool execution infrastructure. Its current products include developer tooling, a CLI, and an MCP gateway. It is useful when an agent needs to work across real business applications without rebuilding each integration from scratch. The central design question is which actions an agent may perform for each user, not simply how many connectors are available.',
    ['Developers adding application tools to AI agents', 'Teams managing authentication across connected business services'],
    'Example: connect an agent to a project tracker',
    ['Define the read and write operations required and the user identity under which they should run.', 'Connect a test workspace and verify that the agent retrieves only the intended project information.', 'Test permission failures and require review before creating or updating live issues.'],
    ['Check connector coverage, authentication options, tool-call allowances, and gateway features.', 'Review OAuth scopes, token handling, per-user authorization, and audit requirements before connecting company systems.'],
    'https://composio.dev/', 'Composio integrations, authentication, and tool infrastructure'
  ),
  blackbox: guide(
    'Blackbox AI\'s current product is an enterprise inference platform for accessing frontier AI models, with secure inference and cloud deployment offerings. It is relevant for developers evaluating how model requests will be served and governed, rather than only a conversational coding interface. Match the current product to your needs because older descriptions of the brand may refer to different experiences. Test the proposed inference configuration with representative, non-sensitive requests.',
    ['Enterprise teams evaluating hosted model inference', 'Developers comparing controlled model deployment options'],
    'Example: evaluate an internal summarization endpoint',
    ['Define permitted input types, required output format, and the data-handling constraints.', 'Run a small sample through the proposed endpoint and record quality, errors, and observed response times.', 'Review deployment and access controls before connecting the service to internal documents.'],
    ['Confirm the exact current product, models, deployment environment, and usage arrangement.', 'Ask how encryption, logging, retention, and credentials work for the particular endpoint rather than assuming uniform controls.'],
    'https://www.blackbox.ai/', 'Blackbox enterprise inference and cloud platform'
  ),
  dify: guide(
    'Dify is an open-source platform for creating AI applications, agents, and workflows that use your data. Its documentation includes knowledge retrieval, model and tool integrations, publishing as a web app, and API integration. It suits a team that wants visual orchestration with an application it can test and operate. A useful pilot separates retrieval quality from answer quality so missing evidence is not mistaken for a prompting problem.',
    ['Teams building a knowledge-based AI application', 'Developers combining retrieval and agent workflow steps'],
    'Example: answer questions about an approved handbook',
    ['Load a current document set and define the audience and required source references.', 'Test retrieval on questions with known answers before tuning the conversational response.', 'Check unsupported questions, access boundaries, and logs before publishing the app.'],
    ['Clarify managed cloud versus self-hosting, model credentials, knowledge storage, and rate limits.', 'Review document synchronization and tool permissions before allowing agents to act on company systems.'],
    'https://dify.ai/', 'Dify documentation: application building and deployment', 'https://docs.dify.ai/en/home'
  ),
  langflow: guide(
    'Langflow is a visual, Python-based builder for agents, retrieval applications, and MCP servers. Its components connect models, vector stores, and tools, and custom Python can extend a flow. It is useful when a developer wants to inspect a sequence visually while retaining code-level flexibility. Keep the interfaces between components explicit so changes to a model or retrieval step do not silently alter the application\'s output contract.',
    ['Developers prototyping a visual AI pipeline', 'Teams combining reusable components with custom Python'],
    'Example: build a document-question flow',
    ['Choose sample documents and define the answer format and source information to return.', 'Connect retrieval, prompt, and model components, inspecting their intermediate outputs.', 'Test unrelated questions and component failures before exposing the flow through an API.'],
    ['Confirm self-hosted or cloud access, supported components, and separately billed model services.', 'Check endpoint authentication and secrets handling before sharing a flow that connects to private data.'],
    'https://www.langflow.org/', 'Langflow visual components, Python customization, and deployment'
  ),
  langsmith: guide(
    'LangSmith provides observability and evaluation tools for agents and language-model applications. Its product describes tracing across model calls and tools, monitoring usage and latency, and investigating failures with framework-independent integrations. It is useful when an application\'s final answer does not reveal which step failed. Define the events and quality criteria you need before collecting traces so the logs support decisions rather than becoming an unreviewed archive.',
    ['Developers diagnosing multi-step agent behavior', 'Teams comparing quality across application releases'],
    'Example: investigate unsupported retrieval answers',
    ['Trace a small set of known questions through retrieval, model calls, and the final response.', 'Inspect the failed examples to distinguish missing context from incorrect synthesis.', 'Turn representative failures into evaluations and compare a proposed fix before release.'],
    ['Confirm tracing, evaluation, retention, deployment region, and self-hosting features in the plan.', 'Redact sensitive prompts and tool results and review trace access before instrumenting a production application.'],
    'https://www.langchain.com/langsmith/observability', 'LangSmith agent tracing, monitoring, and evaluation'
  ),
  langfuse: guide(
    'Langfuse is an open-source AI engineering platform for tracing, prompt management, evaluations, and analytics. It helps teams inspect model calls and agent behavior while keeping prompt versions and quality observations connected. It is relevant when changes to prompts or models need measurable review. Choose a representative evaluation set and an accountable reviewer so a dashboard score does not replace understanding how the application behaves.',
    ['Teams tracking prompt and model changes', 'Developers evaluating an open observability platform'],
    'Example: compare two support-answer prompts',
    ['Create a small approved question set with expected evidence and unacceptable answers.', 'Record traces for each prompt version and attach human feedback to important failures.', 'Compare the outcomes and inspect individual examples before promoting a new prompt.'],
    ['Clarify cloud versus self-hosted deployment, observation volumes, and data-retention requirements.', 'Review prompt redaction, user access, and the operational work required for your hosting choice.'],
    'https://langfuse.com/', 'Langfuse tracing, prompt management, and evaluation'
  ),
  dataiku: guide(
    'Dataiku combines analytics, machine learning, agents, orchestration, and governance in an enterprise platform. Its product includes visual and code-based model workflows, deployment, and lifecycle controls. It is useful when work must move from an analyst\'s exploration into a maintained business system. Define the data lineage, validation criteria, and approval owner early so the project can be operated after the first experiment succeeds.',
    ['Organizations connecting data preparation and AI delivery', 'Teams governing model and agent lifecycles'],
    'Example: pilot an operational demand model',
    ['Select approved historical data and agree on the prediction target, time split, and baseline.', 'Prepare the data and compare models without using future information in training.', 'Review errors by segment and document deployment and monitoring responsibilities before operational use.'],
    ['Confirm platform modules, infrastructure compatibility, deployment rights, and governance features.', 'Check data permissions and lineage, and agree on validation and approval requirements for any automated decisions.'],
    'https://www.dataiku.com/', 'Dataiku enterprise analytics, ML, agents, and governance', 'https://www.dataiku.com/product'
  ),
  datarobot: guide(
    'DataRobot supports building, operating, and governing predictive, generative, and agentic AI applications. Its current platform brings AI development into connected business processes with observability and governance capabilities. It is relevant for an organization treating AI as an operational system rather than a one-off analysis. Evaluate how the platform handles model changes, monitoring, and accountability alongside the quality of a demonstration.',
    ['Enterprise teams operating predictive or agentic applications', 'Organizations evaluating AI governance and observability'],
    'Example: assess a service-demand forecasting pilot',
    ['Define the forecasting horizon, approved data, and an existing planning baseline.', 'Build a pilot and compare results on a held-out time period and important operating segments.', 'Document limitations, monitoring triggers, and the owner of planning decisions before deployment.'],
    ['Confirm the predictive, generative, agent, deployment, and monitoring capabilities in the proposed arrangement.', 'Review infrastructure integration, data handling, and model approval and rollback processes before production use.'],
    'https://www.datarobot.com/', 'DataRobot AI application platform and lifecycle controls'
  ),
  h2o: guide(
    'H2O.ai offers a platform spanning predictive, generative, and agentic AI with observability and orchestration. Its current product emphasizes sovereign deployment and bringing these capabilities together in a working enterprise system. It is useful when an organization needs to evaluate both the model workflow and the environment where it runs. Clarify the actual product and deployment scope because the brand covers several capabilities and operating arrangements.',
    ['Enterprises comparing self-managed AI deployment', 'Teams joining predictive and document-based AI workflows'],
    'Example: evaluate document analysis in a controlled environment',
    ['Select an approved document set and define the information the system should extract.', 'Run a pilot in the proposed environment and compare outputs against manually checked examples.', 'Review errors, access controls, and operational ownership before expanding the workload.'],
    ['Confirm which H2O products, infrastructure, model access, and support are included.', 'Check data residency and operating responsibilities for your exact setup; a platform description does not establish your configuration.'],
    'https://h2o.ai/', 'H2O.ai predictive, generative, agentic, and deployment platform'
  ),
  roboflow: guide(
    'Roboflow is a computer-vision platform for using images, video, and streams in practical applications. Its product includes annotation, visual workflows, deployment at the edge or in the cloud, and analysis of vision events. It suits a team that needs a complete path from visual data to an application behavior. Define the object or event precisely and test on representative conditions, including difficult lighting and partially obscured examples.',
    ['Teams building image or video recognition workflows', 'Developers connecting vision output to a business system'],
    'Example: count packaged items on a sample video',
    ['Define what counts as an item and prepare representative footage you have permission to use.', 'Build a vision workflow and compare its events with a manually checked sample.', 'Inspect missed and duplicate counts before connecting the result to a production reporting process.'],
    ['Confirm annotation, deployment, workflow, and inference allowances for the intended environment.', 'Review dataset visibility, camera privacy, and hardware requirements before processing real footage.'],
    'https://roboflow.com/', 'Roboflow vision annotation, workflows, deployment, and analysis'
  ),
  ollama: guide(
    'Ollama provides a way to work with open AI models locally and through cloud options. It is relevant for developers who want to choose a model and connect it to an application without building a model-serving stack from the beginning. The useful evaluation is tied to your hardware and workload: a model that can be downloaded may still be unsuitable for the latency, memory, or output requirements of a project.',
    ['Developers experimenting with open models', 'Teams comparing local inference with a hosted option'],
    'Example: evaluate a local text-classification task',
    ['Choose a supported model and a non-sensitive labeled set of representative inputs.', 'Run the same classification prompt across the set and record incorrect or malformed results.', 'Check hardware usage and application integration before deciding whether the setup fits your workload.'],
    ['Distinguish local model execution from cloud access and confirm any separate service charges.', 'Review the selected model\'s license, hardware needs, endpoint exposure, and data path for your configuration.'],
    'https://ollama.com/', 'Ollama local and cloud open-model platform'
  ),
  'lm-studio': guide(
    'LM Studio Bionic is an agent for open models, with local-first work on documents, coding, automation, and computer tasks. Its current product also describes local voice transcription. It is relevant when you want an agent working near files and applications on your own machine. Model choice, device resources, and tool permissions remain important; the ability to perform a computer action should be evaluated separately from the quality of a chat response.',
    ['Users experimenting with local open-model agents', 'Developers working with documents and code on their own machine'],
    'Example: draft a project handoff from local notes',
    ['Select an approved folder and identify the notes the agent may read.', 'Ask for an editable handoff document with decisions and unanswered questions kept distinct.', 'Compare the document with the originals and review file changes before sharing it.'],
    ['Confirm supported hardware, model requirements, and which Bionic features the offering covers.', 'Review computer-control and file permissions, and check whether any chosen model or integration sends data elsewhere.'],
    'https://lmstudio.ai/', 'LM Studio Bionic local agent and document capabilities'
  ),
  'open-webui': guide(
    'Open WebUI is a self-hosted AI interface that can connect to local or cloud models and be extended with code. Its product includes a shared home for conversations, tools, and model choices, with enterprise controls available for organizational setups. It is useful when an organization wants to operate its own interface rather than standardize on one provider\'s chat app. The configured model and connections determine where requests and context actually travel.',
    ['Teams operating a shared self-hosted AI interface', 'Developers combining local and hosted model choices'],
    'Example: pilot an internal model workspace',
    ['Choose a permitted model endpoint and define who can access the pilot workspace.', 'Test representative questions and any selected knowledge or tool integration using sample information.', 'Review authentication, conversation visibility, and outgoing requests before adding private material.'],
    ['Confirm hosting responsibility, model-provider billing, and which administration controls are included.', 'Check extension permissions, updates, and network access; self-hosting the interface does not make every model local.'],
    'https://openwebui.com/', 'Open WebUI self-hosted interface and model connections'
  ),
  anythingllm: guide(
    'AnythingLLM offers an on-device assistant with desktop, mobile, and cloud product options. Its current product describes document-based work, meeting assistance, and recurring background tasks. It is useful when your material lives in files and you want an assistant organized around that context. Distinguish the local product from a shared cloud setup and test whether answers preserve the meaning of the original documents.',
    ['Professionals working with a private document collection', 'Teams evaluating local and shared assistant workflows'],
    'Example: query a local project-document collection',
    ['Select current, approved documents and prepare questions whose answers can be checked.', 'Ask for a concise answer and inspect the supporting source context.', 'Test missing and conflicting information before relying on the assistant for recurring project work.'],
    ['Confirm the exact desktop, mobile, or cloud product and any model or workspace requirements.', 'Review document access, synchronization, and background-task permissions before allowing automated file or application actions.'],
    'https://anythingllm.com/', 'AnythingLLM on-device assistant and product options'
  ),
  librechat: guide(
    'LibreChat is an open-source AI platform that brings conversations and model choices into a customizable interface. Its documented features include agents, file handling, code interpretation, artifacts, web search, and MCP integrations. It is relevant when a team wants to manage an extensible conversation environment. Select only the features the workflow needs and define who can use each capability, particularly tools that execute code or act on other services.',
    ['Teams deploying a customizable AI conversation interface', 'Developers connecting several model providers and tools'],
    'Example: pilot a document-review workspace',
    ['Configure approved model providers and a restricted group of users.', 'Test document questions and generated artifacts with non-sensitive sample files.', 'Review permissions, conversation storage, and tool execution before adding company information.'],
    ['Clarify self-hosting, included services, separate model charges, and any managed support.', 'Check authentication, file storage, code-execution isolation, and MCP access for your selected configuration.'],
    'https://www.librechat.ai/', 'LibreChat open platform features and integrations'
  ),
  jan: guide(
    'Jan is an open-source personal AI interface for choosing open models or connecting to online model services. Its current site distinguishes desktop and agent documentation and shows features that may still be forthcoming. It is useful for someone who wants to experiment with model choice in a familiar desktop conversation workflow. Check the released behavior you need rather than assuming a roadmap item is already part of the available product.',
    ['Individuals exploring open models on a desktop', 'Developers comparing local and online assistant configurations'],
    'Example: compare models on a technical explanation',
    ['Choose a supported setup and prepare a short question with an answer you can verify.', 'Ask the same question of selected models while keeping the instructions consistent.', 'Compare factual errors and clarity, and inspect resource use before adopting a model for daily work.'],
    ['Confirm operating-system compatibility, model requirements, and which agent features are released.', 'Review whether requests remain local or use a configured online provider and its separate account or billing.'],
    'https://www.jan.ai/', 'Jan model choice, desktop, and agent product overview'
  ),
  'hugging-face': guide(
    'Hugging Face is a collaborative hub for models, datasets, and AI applications, with inference and deployment products alongside the community platform. It is useful for discovering an existing model and examining its documentation before building on it. The model card, license, data context, and task suitability matter more than a download count. Different repositories and hosted services have different operating and access requirements.',
    ['Developers researching open model options', 'Teams evaluating datasets and example AI applications'],
    'Example: shortlist a document-classification model',
    ['Define the language, labels, expected input length, and deployment environment.', 'Read candidate model cards and test a permitted sample through an appropriate local or hosted setup.', 'Inspect errors and licensing before choosing a model for application integration.'],
    ['Separate hub access, inference providers, dedicated endpoints, storage, and organization features when discussing costs.', 'Review repository licenses, gated-model requirements, and data handling for the actual model and hosting provider selected.'],
    'https://huggingface.co/', 'Hugging Face models, datasets, applications, and inference products'
  ),
  replicate: guide(
    'Replicate runs hosted AI models through APIs and provides options for fine-tuning and deploying custom models. Its catalog spans tasks such as image generation, speech, video, and language work. It is useful for a developer who wants to try a model without first managing its serving infrastructure. A useful prototype records the exact model version and parameters so differences can be investigated rather than attributed vaguely to AI variation.',
    ['Developers integrating a hosted media model', 'Teams comparing model outputs before building a feature'],
    'Example: evaluate product-background generation',
    ['Select a model and a small permitted input set with clear visual requirements.', 'Run consistent requests and record versions, parameters, outputs, and failures.', 'Review quality and usage terms before adding the model to a customer-facing workflow.'],
    ['Confirm model-specific billing, prediction limits, output handling, and custom deployment requirements.', 'Check each model\'s license and privacy terms, plus how your application handles asynchronous or failed predictions.'],
    'https://replicate.com/', 'Replicate hosted model APIs, fine-tuning, and deployment'
  ),
  openrouter: guide(
    'OpenRouter provides a unified interface to models from multiple providers, with API access, chat, routing, and provider fallback options. Its product also describes data-policy controls for selecting trusted routes. It is useful when an application needs model choice behind a common integration. Compare the specific model and provider route you intend to use, because availability, data policies, and behavior can differ even under one model name.',
    ['Developers comparing models through a common API', 'Teams managing provider routing for an AI application'],
    'Example: evaluate two models for structured extraction',
    ['Define a fixed schema and an approved sample of documents with known expected fields.', 'Run each model with comparable instructions and record the selected provider route.', 'Inspect schema errors and factual extraction mistakes before choosing a default and fallback.'],
    ['Confirm usage billing, model access, routing rules, and whether any provider restrictions apply.', 'Review data policies and logging for each allowed route, including fallbacks, before sending private context.'],
    'https://openrouter.ai/', 'OpenRouter unified models, routing, and data-policy controls'
  ),
  groq: guide(
    'GroqCloud provides developer inference endpoints and documentation for model-based application features. The platform documents text and speech tasks, structured outputs, tools, and integration patterns, with support depending on the chosen model. It is relevant when response latency and a straightforward serving interface are important to a project. Evaluate the actual workload under representative conditions rather than treating a platform speed claim as an application result.',
    ['Developers integrating hosted model inference', 'Teams evaluating an interactive text or speech application'],
    'Example: prototype a concise support-answer endpoint',
    ['Choose a supported model and define context, answer length, and expected failure behavior.', 'Run a representative test set and measure response time alongside factual quality.', 'Check limits and error handling before exposing the endpoint to live customer requests.'],
    ['Confirm supported models, rate limits, tool capabilities, and usage arrangements for your account.', 'Review data handling and compatibility details; a familiar API shape does not mean every feature behaves identically.'],
    'https://groq.com/', 'Groq developer documentation: inference features and integrations', 'https://console.groq.com/docs/overview'
  ),
  fireworks: guide(
    'Fireworks AI provides infrastructure for serving and customizing models, including inference and training workflows. Its current platform also describes model routing products for development workloads. It is useful when a team wants to move beyond a generic model toward a workload-specific configuration. Define a repeatable evaluation set and an operating target before deciding whether routing, fine-tuning, or a different base model is the appropriate next step.',
    ['Developers deploying or adapting AI models', 'Teams comparing inference and training configurations'],
    'Example: evaluate a domain-specific extraction model',
    ['Prepare permitted examples, a held-out evaluation set, and a clearly defined output schema.', 'Compare a baseline configuration with the proposed model or customization workflow.', 'Inspect extraction errors and deployment requirements before using the result in a live pipeline.'],
    ['Clarify inference, training, routing, and dedicated resource charges rather than treating them as one entitlement.', 'Review model licenses, training-data permissions, retention, and the process for promoting or rolling back a model.'],
    'https://fireworks.ai/', 'Fireworks inference, training, and model customization platform'
  ),
  deepinfra: guide(
    'DeepInfra provides hosted inference APIs across text, image, audio, and other model tasks, with additional compute products. It is useful for a developer selecting an endpoint without managing the full model-serving stack. Start from the exact task and model rather than assuming that all entries in a broad catalog support the same parameters or output formats. Version and error handling should be part of the first integration.',
    ['Developers integrating a hosted AI model', 'Teams comparing text, media, or embedding endpoints'],
    'Example: compare embeddings for a retrieval prototype',
    ['Choose representative documents and questions with known relevant passages.', 'Generate embeddings with a selected endpoint and evaluate retrieval on the same sample.', 'Review missed matches, input limits, and application errors before expanding the index.'],
    ['Confirm the selected model, API limits, usage billing, and any compute or dedicated deployment requirements.', 'Check licensing and data handling per endpoint, and plan how your application responds to provider failures or model changes.'],
    'https://deepinfra.com/', 'DeepInfra model catalog and inference infrastructure'
  ),
  fal: guide(
    'fal.ai is a developer platform for generative media models and managed GPU workloads. Its product offers image, video, audio, and other model APIs alongside serverless execution and compute options for custom work. It is useful when building a media feature whose model should be replaceable without rebuilding the entire infrastructure. Evaluate quality, input restrictions, and job completion behavior using the actual format your users will submit.',
    ['Developers adding image, video, or audio generation', 'Teams serving custom generative media workloads'],
    'Example: prototype an image-variation feature',
    ['Choose a model and a small set of images you have permission to process.', 'Submit consistent requests and inspect outputs, job status, and failed input handling.', 'Review usage rights and user-facing limits before integrating the workflow into a published product.'],
    ['Separate model API usage, serverless execution, fine-tuning, and compute arrangements when requesting pricing.', 'Check model-specific terms, content handling, and asynchronous job recovery; a catalog listing does not promise uniform capabilities.'],
    'https://fal.ai/', 'fal generative media APIs, serverless GPUs, and compute'
  ),
  braintrust: guide(
    'Braintrust is an agent observability and evaluation platform that connects production traces with tests for future changes. Its product includes inspecting prompts and tool calls, scoring outputs with code, models, or people, and identifying behavior patterns. It is useful when a team wants quality feedback to influence releases. Decide what a successful result means and inspect representative examples so evaluation scores remain tied to actual user needs.',
    ['Teams turning agent failures into regression evaluations', 'Developers comparing prompts, models, and application releases'],
    'Example: prevent a recurring support-answer regression',
    ['Collect approved examples of the failure and define the expected evidence and response.', 'Create evaluations from those cases and compare the proposed change with the current release.', 'Inspect disagreements between automated scoring and human review before setting a release gate.'],
    ['Confirm trace volumes, evaluation execution, retention, and team access in the intended plan.', 'Review sensitive prompt and tool-result logging, and validate the scorers before using them to approve changes.'],
    'https://www.braintrust.dev/', 'Braintrust agent tracing and evaluation workflow'
  ),
  promptfoo: guide(
    'Promptfoo provides tools for evaluating AI prompts, models, retrieval systems, and agents, with security testing and red-teaming capabilities. It is useful when a change needs repeatable evidence against defined expectations rather than a few favorable examples. Build tests around the application\'s intended use and authorized boundaries. A failed case should lead to investigation and a regression check, while passing cases do not establish that every risk has been eliminated.',
    ['Developers comparing AI configurations in a repeatable way', 'Authorized teams testing application-specific AI risks'],
    'Example: evaluate a retrieval assistant before release',
    ['Define normal questions, missing-evidence cases, and authorized misuse scenarios.', 'Run the same evaluation set against the current and proposed configurations.', 'Inspect failures and revise the application, then repeat the affected checks before release.'],
    ['Clarify open-source evaluation tooling versus enterprise security, guardrail, and governance products.', 'Confirm test authorization and provider costs, and avoid sending sensitive examples to unapproved model endpoints.'],
    'https://www.promptfoo.dev/', 'Promptfoo AI evaluations and security testing products'
  ),
  ragflow: guide(
    'RAGFlow is an open-source retrieval and agent platform for turning document collections into useful context. Its product includes ingestion, document processing, hybrid search, reranking, and visual agent workflows. It is relevant when an assistant must work from multi-format source material instead of general model knowledge. Inspect parsing and retrieval separately so a missing table or poorly split passage can be fixed before it produces an unsupported answer.',
    ['Developers building document-backed assistants', 'Teams evaluating retrieval over complex source collections'],
    'Example: answer questions across equipment manuals',
    ['Choose approved manuals and prepare questions with known page-level answers.', 'Inspect the parsed content and retrieved passages before reviewing generated answers.', 'Test ambiguous model numbers and missing instructions, requiring a clear unsupported-answer path.'],
    ['Confirm hosting, storage, parsing, model, and embedding requirements for the proposed setup.', 'Review document permissions, index refreshes, and source citation behavior before connecting confidential files.'],
    'https://ragflow.io/', 'RAGFlow document ingestion, hybrid retrieval, and agents'
  ),
  together: guide(
    'Together AI offers a cloud platform for running, serving, and adapting AI models, with inference, training, and GPU infrastructure products. It is relevant when a team needs a route from model experimentation to an operating application. Choose the specific service based on whether you need an existing model endpoint, a custom deployment, or training resources. Those choices carry different engineering and operational responsibilities.',
    ['Developers building with hosted open models', 'Teams comparing training and inference deployment paths'],
    'Example: evaluate a model for an internal assistant',
    ['Define the task, approved evaluation inputs, and output requirements before choosing a model.', 'Run a baseline through a supported inference setup and inspect quality and request failures.', 'Compare customization needs and deployment controls before moving the workload toward production.'],
    ['Confirm serverless or dedicated inference, training resources, GPU capacity, and separate usage charges.', 'Check model licenses, data permissions, service limits, and who owns monitoring and version changes.'],
    'https://www.together.ai/', 'Together AI inference, model shaping, and compute platform'
  ),
  baseten: guide(
    'Baseten provides production inference infrastructure for open, custom, and fine-tuned AI models. Its platform offers dedicated deployments and model APIs, with tooling intended to support serving workflows. It suits a team whose application needs an operating model endpoint rather than only a notebook experiment. Evaluate the actual request shape, concurrency, and failure behavior so infrastructure choices match the product you will run.',
    ['Teams deploying a custom model service', 'Developers evaluating dedicated or managed model inference'],
    'Example: prepare an image-processing model endpoint',
    ['Define the model artifact, input sizes, expected output, and representative traffic pattern.', 'Deploy a test configuration and check correctness, timeouts, and concurrent requests.', 'Review rollout, monitoring, and rollback procedures before routing customer traffic to the endpoint.'],
    ['Confirm model API versus dedicated deployment, resource sizing, scaling, and availability arrangements.', 'Check model licensing, data handling, and the engineering work needed to package and operate your workload.'],
    'https://www.baseten.co/', 'Baseten model APIs and dedicated inference deployment'
  ),
  'modal-ai': guide(
    'Modal provides managed infrastructure for AI inference, training, and isolated execution environments. Its product includes real-time or batch serving and sandboxes for agent or code workloads. It is relevant for developers who want to define a workload in code while the platform manages underlying compute. Match resource and lifecycle choices to the task, particularly whether a job is an occasional batch process or a continuously available service.',
    ['Developers running AI batch jobs or model services', 'Teams evaluating managed sandboxes for agent execution'],
    'Example: run a controlled document-processing batch',
    ['Define approved inputs, resource needs, output storage, and the behavior for a failed item.', 'Run a small batch and inspect outputs, logs, execution time, and retries.', 'Review secrets, retention, and resource limits before scheduling a larger production job.'],
    ['Confirm compute, storage, inference, and sandbox billing for the selected architecture.', 'Check environment isolation, network access, and persistent-data responsibilities rather than assuming all jobs share the same lifecycle.'],
    'https://modal.com/', 'Modal AI compute, inference, training, and sandboxes'
  ),
  runpod: guide(
    'Runpod is a cloud platform for AI experimentation, training, fine-tuning, and deployment. Its products include GPU Pods, Serverless, and Clusters, which fit different stages and traffic patterns. It is useful when a developer needs direct control over an AI compute environment or a scalable inference endpoint. Check software compatibility and data persistence before choosing an instance solely on its GPU name.',
    ['Developers experimenting on GPU compute', 'Teams moving a model from a pod to an inference endpoint'],
    'Example: validate a model-serving environment',
    ['Choose a compatible GPU and software template and prepare a small permitted test dataset.', 'Run the workload and verify its dependencies, output, and resource usage.', 'Confirm storage persistence, endpoint behavior, and shutdown procedures before expanding capacity.'],
    ['Clarify Pod, Serverless, Cluster, storage, and network costs for your intended workload.', 'Review regional capacity, container security, secrets, and what data remains when compute is stopped or removed.'],
    'https://www.runpod.io/', 'Runpod GPU pods, serverless endpoints, and clusters'
  ),
  helicone: guide(
    'Helicone provides an AI gateway and observability tools for routing, debugging, and analyzing model requests. Its interface includes request and session views, prompts, datasets, limits, and alerts. It is relevant when a team needs to understand usage and failures across an AI application. Define the identifiers and sensitive fields you will log before routing traffic so the resulting traces are both useful and appropriately restricted.',
    ['Developers tracing model requests and sessions', 'Teams monitoring usage across AI application features'],
    'Example: investigate a spike in model errors',
    ['Instrument a test environment with request and feature identifiers while redacting private inputs.', 'Compare failed and successful requests by model, endpoint, and session context.', 'Verify the suspected cause and test the change before adjusting live routing or limits.'],
    ['Confirm gateway features, observation retention, region, and the current service arrangement.', 'Review provider keys, logged prompt content, access controls, and failure behavior if the gateway becomes unavailable.'],
    'https://www.helicone.ai/', 'Helicone AI gateway and application observability'
  ),
  'prisma-ai-gateway': guide(
    'Prisma AIRS AI Gateway is the current identity of the gateway formerly known as Portkey. The official product describes governing and observing model traffic, with routing, guardrails, prompt management, and enterprise controls. It is relevant when several applications need a common policy layer for AI use. Map the policies to actual routes and users, including fallbacks, so a gateway becomes an enforced control rather than simply another endpoint.',
    ['Enterprises centralizing AI request governance', 'Platform teams routing and monitoring multiple model services'],
    'Example: pilot policy-controlled model access',
    ['Define permitted providers, application identities, logging requirements, and requests that should be blocked.', 'Route a test application through the gateway and exercise allowed, denied, and fallback cases.', 'Review audit evidence and application failure handling before moving production traffic.'],
    ['Confirm current Prisma AIRS product access, Portkey transition details, deployment choices, and included controls.', 'Review provider credentials, sensitive logging, and policy coverage across every configured route before relying on the gateway.'],
    'https://portkey.ai/', 'Prisma AIRS AI Gateway rebrand and governance capabilities'
  ),
  vectorshift: guide(
    'VectorShift\'s current product is a private-market intelligence workspace for investment firms. It describes document-grounded deal analysis, investment committee memos, portfolio monitoring, and reporting, with findings connected to source material. It is useful for organizing diligence evidence rather than replacing the investment team\'s judgment. Confirm the current product because older descriptions may focus on a general-purpose workflow builder that differs from this offering.',
    ['Private-market teams organizing diligence documents', 'Investment operations teams tracking documented portfolio information'],
    'Example: prepare a diligence question log',
    ['Select approved deal documents and define the questions and date cutoffs for the review.', 'Ask for findings tied to document pages, keeping missing evidence and conflicting figures visible.', 'Have the deal team verify sources and unresolved issues before using the packet in a decision process.'],
    ['Confirm supported document sources, access controls, and the private-market workflows actually provided.', 'Review confidentiality, data residency, retention, and source accuracy; generated analysis is not an investment recommendation.'],
    'https://www.vectorshift.ai/', 'VectorShift private-market intelligence and sourced document workflows'
  ),
  hex: guide(
    'Hex is an analytics workspace for people and agents, connecting business questions to data analysis and interactive applications. Its product supports natural-language exploration with paths for data practitioners to inspect deeper work in the same workflow. It is relevant when a team wants self-service questions and maintainable analysis to share context. Agree on metric definitions and data permissions before using a fluent answer as a business conclusion.',
    ['Data teams publishing reusable analyses and apps', 'Business users exploring questions against governed data'],
    'Example: investigate a change in account activity',
    ['Define an active account, the comparison periods, and the approved source tables.', 'Explore the result by segment and inspect the queries behind important figures.', 'Check joins, exclusions, and totals before sharing an interactive analysis with stakeholders.'],
    ['Confirm connectors, compute, collaboration, app publishing, and AI usage for the intended workspace.', 'Review semantic definitions and row-level access so self-service answers follow the same rules as formal reporting.'],
    'https://hex.tech/', 'Hex analytics, AI exploration, and data application platform'
  ),
  quadratic: guide(
    'Quadratic is an AI spreadsheet that combines connected data, formulas, Python, SQL, JavaScript, and charts. Its product supports files and live data sources in a shareable, code-based spreadsheet workflow. It is useful when a familiar grid needs to connect with more transparent calculations or data transformations. Inspect generated formulas and code, especially joins and date logic, rather than assuming that a plausible chart reflects a correct calculation.',
    ['Analysts combining spreadsheets with code and database data', 'Teams building a repeatable grid-based analysis'],
    'Example: reconcile an order export with a product table',
    ['Load approved sample sources and define the join key, currency, and reporting period.', 'Generate the transformation and inspect the code for duplicate or unmatched records.', 'Reconcile totals against the original files before creating charts or sharing the spreadsheet.'],
    ['Check supported connectors, file sizes, code execution, scheduled tasks, and collaboration features.', 'Review credential handling and refresh behavior, including what happens when source columns or schemas change.'],
    'https://www.quadratichq.com/', 'Quadratic AI spreadsheet, code, and data connections'
  ),
  bricks: guide(
    'Bricks turns spreadsheet data into AI-assisted dashboards, charts, reports, and presentation outputs. Its product also includes spreadsheet transformation and editing, making it relevant when a team starts with CSV or Excel exports and needs a readable deliverable. The most useful brief includes the audience and decision as well as desired charts. First verify the underlying rows and totals; presentation quality cannot establish that the dataset is complete.',
    ['Business teams preparing a report from spreadsheet exports', 'Operators turning recurring data into a visual dashboard'],
    'Example: prepare a monthly service-volume report',
    ['Upload an approved export and define ticket, resolution, and reporting-period rules.', 'Ask for a dashboard that separates volume, completion, and unresolved work.', 'Reconcile displayed totals with the source and review labels and missing data before sharing.'],
    ['Confirm upload, dashboard, report, presentation, and export capabilities in the chosen plan.', 'Check how refreshed files update results and how access to source data and shared outputs is controlled.'],
    'https://www.thebricks.com/', 'Bricks spreadsheet analysis, dashboards, reports, and presentations'
  ),
  akkio: guide(
    'Akkio is an AI workflow platform focused on media agencies and campaign work. Its current product spans strategy, audience analysis, propensity modeling, media planning, and performance measurement using connected data and knowledge. It is useful when campaign analysis needs to inform a repeatable agency workflow. Evaluate the definitions and evidence behind recommendations, keeping observed performance separate from a model\'s assumptions about what might happen next.',
    ['Media agencies connecting campaign data and planning', 'Analysts evaluating audience and measurement workflows'],
    'Example: compare campaign segments for a planning brief',
    ['Define the campaign objective, conversion measure, attribution window, and permitted audience data.', 'Analyze segment performance and mark small or incomplete samples explicitly.', 'Check source totals and assumptions with the client team before using findings in a media plan.'],
    ['Confirm data integrations, modeling workflows, audience activation options, and implementation scope.', 'Review audience-data permissions and distinguish modeled estimates from measured outcomes before making budget decisions.'],
    'https://www.akkio.com/', 'Akkio campaign strategy, audience, and measurement workflows'
  ),
  powerdrill: guide(
    'Powerdrill Bloom is an AI analysis workspace with memory for work across documents and databases. Its current product emphasizes answers connected to supporting pages, rows, and figures, with options for controlled deployment environments. It is relevant when repeated analysis should retain useful business context. Check that remembered definitions remain current and that a cited figure actually supports the claim being made in the answer.',
    ['Analysts asking questions across documents and databases', 'Teams reusing approved business context in recurring analysis'],
    'Example: prepare a repeatable shipment-status review',
    ['Define shipment states, the reporting cutoff, and the approved database or document sources.', 'Ask for a summary with references for totals and a separate list of unresolved records.', 'Reconcile important numbers and check remembered assumptions before scheduling the analysis.'],
    ['Confirm the exact Bloom features, data connections, memory controls, and deployment option.', 'Review source permissions, retained context, and deletion behavior before introducing confidential documents or database access.'],
    'https://powerdrill.ai/', 'Powerdrill Bloom analysis, sources, and workspace memory'
  ),
  deepnote: guide(
    'Deepnote is a collaborative data workspace with AI assistance, Python and SQL notebooks, integrations, and data applications. Its current product connects human and agent workflows while keeping analysis in an inspectable notebook environment. It is useful when a result needs both an explanation for business users and reproducible code for analysts. Keep the data query, transformations, and conclusions together so another person can follow how a finding was produced.',
    ['Data teams collaborating on Python and SQL analysis', 'Analysts publishing an inspectable dashboard or data app'],
    'Example: investigate a change in onboarding completion',
    ['Define the cohort and completion event and connect the approved source data.', 'Use AI to draft queries, then inspect joins, event ordering, and date boundaries in the notebook.', 'Reconcile counts and document limitations before publishing a chart or application.'],
    ['Confirm compute, connectors, collaboration, versioning, and app-sharing features.', 'Review secret storage, notebook permissions, and scheduled-run behavior before connecting production data or taking automated actions.'],
    'https://deepnote.com/', 'Deepnote notebooks, AI exploration, and data applications'
  ),
  polymer: guide(
    'Polymer provides AI-assisted embedded analytics for applications, with visualizations, templates, and self-service exploration. Its product describes API integration, branding, and programmatic user access. It is relevant when analytics needs to be part of a customer-facing product rather than a separate internal report. Data isolation is a central evaluation point: every user must see the records they are entitled to access, regardless of the chart or query they choose.',
    ['Product teams embedding analytics in an application', 'Developers adding branded self-service reporting'],
    'Example: prototype a customer activity dashboard',
    ['Define activity metrics and prepare separate sample datasets for two test customers.', 'Embed a small dashboard and configure access using the intended application identity.', 'Test cross-customer access and metric totals before offering exploratory views to real users.'],
    ['Confirm embedding, branding, API, data refresh, and end-user usage arrangements.', 'Review tenant isolation, authentication, and export permissions; dashboard filters alone should not be assumed to enforce access.'],
    'https://www.polymersearch.com/', 'Polymer embedded analytics, API, and access controls'
  ),
  'better-analyst': guide(
    'Better Analyst, formerly Formula Bot, covers data preparation, analysis, dashboards, reports, and recurring workflows in one analytics app. Its current product supports file and data connections, generated code transparency, reusable business context, and scheduled reporting. It is useful when a small team wants a path from raw data to a reviewable deliverable. Define business metrics before analysis so different requests do not quietly calculate the same label in different ways.',
    ['Teams analyzing connected business data and exports', 'Operators building a reusable reporting workflow'],
    'Example: build a repeatable sales-summary report',
    ['Provide an approved dataset and define revenue, refunds, currency, and the reporting cutoff.', 'Ask for an analysis and dashboard with the generated calculation logic available for review.', 'Reconcile totals and exceptions before saving the workflow or scheduling refreshed reports.'],
    ['Confirm connectors, upload limits, scheduled tasks, dashboards, and collaboration for the actual plan.', 'Review source permissions and generated code; verify the current Better Analyst product rather than relying on older Formula Bot tutorials.'],
    'https://betteranalyst.com/', 'Better Analyst analytics workflows and Formula Bot brand transition'
  ),
  numerous: guide(
    'Numerous.ai adds AI functions to Google Sheets and Excel, including text summarization, classification, extraction, rewriting, and cleanup. Its product uses a cell-based function workflow rather than requiring a separate application for every row. It is useful for turning a column of unstructured feedback into something an analyst can review. Define labels and missing-value rules first so a large sheet does not amplify inconsistent instructions.',
    ['Spreadsheet users classifying or cleaning text columns', 'Teams prototyping row-by-row AI transformations'],
    'Example: categorize a feedback spreadsheet',
    ['Create a small labeled sample and define allowed categories plus an unknown category.', 'Apply an AI function to sample rows and compare its output with the expected labels.', 'Review errors and usage implications before filling the transformation across the full sheet.'],
    ['Confirm Excel or Sheets compatibility, team access, and usage allowances for repeated calculations.', 'Check which cell contents are sent for processing and how recalculation or copied formulas affect usage and consistency.'],
    'https://numerous.ai/', 'Numerous.ai spreadsheet AI functions and text operations'
  ),
  thoughtspot: guide(
    'ThoughtSpot is an analytics platform with AI analyst, modeling, visualization, and code-oriented capabilities. Its product connects conversational questions with governed data and dashboards. It is relevant when business users need self-service exploration while the data team maintains common definitions. Check the semantic layer and permissions before evaluating conversational fluency, because a correct-looking answer can still use the wrong definition of a business metric.',
    ['Organizations expanding governed self-service analytics', 'Data teams connecting AI questions to approved metrics'],
    'Example: explore regional order performance',
    ['Define net orders, cancellations, regional mapping, and the reporting period in the approved model.', 'Ask a sequence of business questions and compare results with known reference queries.', 'Inspect ambiguous questions and permission boundaries before sharing the experience with more users.'],
    ['Confirm data connections, AI agent features, semantic modeling, and dashboard access in the proposal.', 'Review metric ownership, data freshness, and row-level permissions across both natural-language answers and exported results.'],
    'https://www.thoughtspot.com/', 'ThoughtSpot agentic analytics and governed data platform'
  ),
  knime: guide(
    'KNIME is a visual workflow platform for data preparation, analytics, machine learning, and data-aware agents. It uses connected processing steps to make a data workflow inspectable and repeatable. It is useful when analysts need to combine transformations and modeling without putting all logic into a single script. Preserve intermediate checks and clear column definitions so another person can understand the workflow after its original creator moves on.',
    ['Analysts creating repeatable visual data workflows', 'Teams combining data preparation and AI components'],
    'Example: standardize a recurring operations export',
    ['Define expected columns, valid values, duplicate rules, and the output table.', 'Build a workflow that cleans the data and records rejected or unmatched rows separately.', 'Reconcile row counts and totals before scheduling or sharing the pipeline.'],
    ['Clarify desktop platform, collaboration, deployment, automation, and commercial service requirements.', 'Check connector compatibility, execution resources, and who maintains credentials and schema-change handling.'],
    'https://www.knime.com/', 'KNIME visual data, analytics, ML, and agent workflows'
  ),
  fin: guide(
    'Fin is Intercom\'s customer agent for service, sales, ecommerce, and customer-success conversations. Its product describes using business knowledge and integrations across channels such as chat, email, and voice, including connections to existing helpdesks. It is useful when an organization wants a customer-facing agent within a defined support operation. Evaluate answer quality and escalation together so customers can reach a person when the available knowledge or permissions are insufficient.',
    ['Support teams deploying a customer-facing knowledge agent', 'Businesses connecting conversations to an existing helpdesk'],
    'Example: pilot answers for a narrow support topic',
    ['Provide current approved articles and define questions that must go to a human.', 'Test ordinary questions, policy exceptions, and requests that require identity checks.', 'Review transcripts and handoff outcomes before adding more topics or channels.'],
    ['Confirm the intended Fin role, helpdesk integration, channels, and usage arrangement.', 'Check knowledge updates, action permissions, and how an outcome or resolution is measured in the proposed plan.'],
    'https://fin.ai/', 'Fin customer agent roles, channels, and integrations'
  ),
  'zendesk-ai': guide(
    'Zendesk AI combines knowledge management, customer-facing agents, staff assistance, and service quality tools within its Resolution Platform. Its current product includes connected content, multi-step service workflows, and copilots for support teams. It is relevant when an organization wants AI to work within an established service operation. Distinguish agent assistance from autonomous action because each requires different permissions, success measures, and review practices.',
    ['Support teams already using a structured helpdesk', 'Organizations evaluating knowledge, agent, and service quality features'],
    'Example: assist staff with a recurring delivery question',
    ['Select approved shipping policies and define the customer facts staff must verify.', 'Pilot AI answer suggestions with agents while tracking incorrect or incomplete guidance.', 'Improve the source content and escalation rules before considering autonomous handling.'],
    ['Clarify which knowledge, agent, copilot, and quality products are included rather than treating Zendesk AI as one feature.', 'Review integration permissions and the evidence used to judge resolution quality and staff workload.'],
    'https://www.zendesk.com/service/ai/', 'Zendesk knowledge, AI agents, copilot, and quality capabilities'
  ),
  ada: guide(
    'Ada is an enterprise customer-service agent platform with messaging, voice, and email products. Its official offering includes connected tools, playbooks for business procedures, and tools for measuring, testing, and improving agents. It is useful when customer support requires a guided process rather than a single answer. Map policy exceptions and system actions explicitly so the agent knows when to gather more information or involve a staff member.',
    ['Enterprises designing connected customer-service agents', 'Support teams formalizing procedure-based service workflows'],
    'Example: prototype a membership-change request',
    ['Define the policy, identity checks, allowed changes, and cases requiring human approval.', 'Build a test playbook against sample account data and exercise normal and exceptional requests.', 'Review conversation evidence and system changes before expanding to a live customer channel.'],
    ['Confirm channels, integrations, playbooks, implementation services, and measurement features.', 'Check authentication and tool permissions, plus how a person can intervene when the workflow reaches an exception.'],
    'https://www.ada.cx/', 'Ada customer-service channels, playbooks, and agent management'
  ),
  lyro: guide(
    'Lyro AI is Tidio\'s customer-service agent built around business knowledge and guidance. Its product describes adding support content, monitoring conversations, setting handoff rules, and integrating with support systems. It is useful for recurring questions whose answers are already approved and maintained. Test what happens when the answer is absent or a customer requests an exception; the handoff is part of the experience, not a separate implementation detail.',
    ['Small support teams handling recurring website questions', 'Businesses building an agent from maintained support content'],
    'Example: answer product care and delivery questions',
    ['Provide current help articles and specify which requests require a staff member.', 'Test accurate, incomplete, and conflicting questions against the supplied content.', 'Review transcripts and escalation behavior before extending coverage or connecting account actions.'],
    ['Confirm conversation allowances, channels, integrations, and the relationship to other Tidio products.', 'Check how content is refreshed and how unsupported answers become human tickets rather than unsupported promises.'],
    'https://www.tidio.com/ai-agent/', 'Lyro knowledge, conversation monitoring, and human handoff'
  ),
  gong: guide(
    'Gong is a revenue platform that captures customer interactions, analyzes patterns, and helps teams coordinate follow-through. Its product includes sales engagement, pipeline insight, and agent-assisted revenue workflows. It is useful when account teams need a shared record of what buyers said and what should happen next. Separate a customer\'s actual statement from an AI interpretation, particularly when a summary influences an opportunity update or forecast discussion.',
    ['Revenue teams reviewing customer conversations', 'Sales managers coordinating account follow-through and coaching'],
    'Example: prepare a reviewed opportunity update',
    ['Use a permitted conversation and identify the customer questions and commitments to extract.', 'Create a summary that distinguishes quoted evidence, proposed next steps, and uncertain interpretation.', 'Have the account owner verify the summary before changing the opportunity or sending follow-up.'],
    ['Confirm conversation capture, engagement, forecast, integrations, and agent features in the selected arrangement.', 'Review participant notice, recording permissions, retention, and access to sensitive customer conversations.'],
    'https://www.gong.io/', 'Gong revenue conversation and follow-through platform'
  ),
  salesloft: guide(
    'Salesloft brings sales engagement, conversation intelligence, opportunity workflows, prioritization, and revenue analytics into a sales workspace. Its current platform includes AI agents and integrations with a wider revenue stack. It is useful when sellers need a coordinated next step across outreach and active opportunities. Define how signals should influence action and preserve the account owner\'s ability to review a recommendation before it changes a customer interaction.',
    ['Sales teams coordinating outreach and opportunity work', 'Revenue operations teams connecting signals to seller workflows'],
    'Example: organize a follow-up cadence after a demo',
    ['Define the buyer\'s stated questions, agreed timing, and the approved follow-up content.', 'Prepare a cadence that assigns the next steps without inventing customer commitments.', 'Review messages, ownership, and stop conditions before activating the sequence.'],
    ['Confirm which engagement, conversation, forecast, and agent products are included.', 'Check CRM synchronization, user permissions, recording rules, and how automated sequences stop after a reply or opt-out.'],
    'https://www.salesloft.com/', 'Salesloft sales engagement, conversation, and revenue workflows'
  ),
  lavender: guide(
    'Lavender provides sales-email coaching and assistance informed by email analysis. Its current site distinguishes the email coach from Ora, an AI sales agent, so the exact product matters when comparing an offer. It is useful for revising a message toward a clearer, more relevant communication. Treat writing feedback as a prompt to improve the message, not as proof that a recipient wants contact or that a response is guaranteed.',
    ['Sales representatives revising an email draft', 'Teams coaching clearer and more relevant prospect messages'],
    'Example: revise an overly long follow-up',
    ['Provide a permitted customer context and a draft that contains only verified facts.', 'Use the coach\'s feedback to simplify the message and make the requested next step clear.', 'Verify personalization and recipient permissions, then approve the final email before sending.'],
    ['Clarify whether access covers the Lavender coach, Ora, or a specific integration.', 'Review mailbox permissions, email-history handling, and whether any automation can send without individual review.'],
    'https://lavender.ai/', 'Lavender email coach and Ora product overview'
  ),
  apollo: guide(
    'Apollo combines business data, research, enrichment, and sales execution in a go-to-market workspace. Its current product describes AI assistants and agents, application integrations, and tools for organizing outreach activity. It is useful when a sales team needs a consistent path from account research to a reviewed next action. Check data provenance and freshness before using a contact record; the existence of a record is not permission to contact someone.',
    ['Sales teams researching a defined account segment', 'Revenue operations teams coordinating enrichment and outreach'],
    'Example: prepare a qualified account shortlist',
    ['Define the target profile, exclusions, and fields needed for a useful account brief.', 'Research and enrich a small permitted sample, retaining evidence for qualification decisions.', 'Review duplicate records and contact permissions before approving any outreach sequence.'],
    ['Confirm data access, enrichment credits, execution tools, integrations, and agent features in the plan.', 'Review data-use terms, CRM synchronization, opt-out handling, and the permissions granted to connected mailboxes.'],
    'https://www.apollo.io/', 'Apollo data, intelligence, and sales execution workspace'
  ),
  regie: guide(
    'Regie.ai is an AI sales assistant for prospect research, relevant messaging, call preparation, and outreach coordination. Its current product describes using a company\'s pitch and account context to help sellers plan and carry out prospecting work. It is useful when research and follow-through are fragmented across several steps. Preserve the distinction between a sourced account signal and a guessed reason to contact someone.',
    ['Sales representatives preparing account-specific outreach', 'Teams coordinating research, messaging, and call preparation'],
    'Example: prepare a researched account approach',
    ['Define a target account, approved research sources, and the business problem your offer can address.', 'Draft a short brief and message that reference only verified, relevant account facts.', 'Review the recipient, evidence, and stop conditions before allowing the outreach workflow to run.'],
    ['Clarify research, messaging, calling, and agent features and their usage arrangements.', 'Check data freshness, mailbox and CRM permissions, and human approval for messages generated in your company\'s voice.'],
    'https://regie.ai/', 'Regie.ai sales research, messaging, and outreach workflow'
  ),
  reply: guide(
    'Reply.io is a sales-outreach workspace with contact research, enrichment, conditional sequences, AI personalization, and a unified inbox. Its current product also includes an AI SDR agent and tools for connecting custom workflows. It is useful when a team needs to coordinate several outreach steps while keeping replies visible. Define who should enter a sequence and what must stop it before focusing on the wording of individual messages.',
    ['Sales teams coordinating reviewed multistep outreach', 'Operators managing sequence logic and reply handling'],
    'Example: create a limited event follow-up sequence',
    ['Use a permitted attendee list and define the specific context and exclusions for follow-up.', 'Prepare a short sequence with personalized fields that can be traced to verified information.', 'Test reply, unsubscribe, and missing-data behavior before enabling the sequence.'],
    ['Confirm AI SDR, sequence, contact-data, mailbox, and integration capabilities for the exact plan.', 'Review sending permissions, opt-outs, contact-data terms, and stop rules; tool access does not guarantee inbox placement.'],
    'https://reply.io/', 'Reply.io outreach, AI personalization, and sequence capabilities'
  ),
  'hubspot-agent-hub': guide(
    'HubSpot Agent Hub is a workspace for running, building, and managing agents that use customer context in HubSpot. Its current product includes ready-made and custom agents for marketing, sales, and service, with visibility into agent activity. It is relevant when the CRM is already a central source of business information. Check the quality and permissions of that information before assuming connected context will produce a correct action.',
    ['HubSpot teams adding agents to customer workflows', 'Administrators managing agent activity around CRM data'],
    'Example: prepare an account research brief in the CRM',
    ['Define the required company facts and which CRM records and documents are approved sources.', 'Configure or select an agent to prepare a brief with unresolved questions kept visible.', 'Have the account owner review the output before updating fields or starting a follow-up workflow.'],
    ['Confirm required HubSpot products, Agent Hub capabilities, credits, and administrator access.', 'Review CRM permissions and action controls; a connected agent should not gain broader customer-data access than its task needs.'],
    'https://www.hubspot.com/products/artificial-intelligence', 'HubSpot Agent Hub agents, customer context, and management'
  ),
  agentforce: guide(
    'Agentforce is Salesforce\'s platform for AI agents across customer service, sales, employee support, and other connected workflows. Its product describes agents that retrieve context, resolve cases, and take actions through business systems. It is useful when a service process already depends on structured customer records and defined permissions. Specify the permitted actions and human handoffs precisely before allowing an agent to change an account or transaction.',
    ['Salesforce teams designing connected service agents', 'Organizations extending agents into defined business workflows'],
    'Example: pilot a service-case routing assistant',
    ['Define case categories, record permissions, and the information needed before routing.', 'Test the agent with sample cases and require escalation when identity or policy evidence is missing.', 'Review records changed and handoff quality before connecting a live service channel.'],
    ['Confirm required Salesforce products, data connections, agent features, and usage allowances.', 'Review authorization, audit trails, and rollback or escalation for actions affecting customer records.'],
    'https://www.salesforce.com/agentforce/', 'Salesforce Agentforce roles and connected service workflows'
  ),
  sierra: guide(
    'Sierra is a conversational AI platform for creating customer agents across channels such as chat, email, messaging, and voice. Its current product describes agents that can support customers and connected business outcomes with or without direct engineering involvement. It is relevant when a company wants one service experience across channels. Test policy consistency and account context across those channels rather than evaluating each conversation as an isolated answer.',
    ['Enterprises designing a multi-channel customer agent', 'Customer-experience teams coordinating knowledge and actions'],
    'Example: pilot a reservation-change conversation',
    ['Define verified customer context, policy rules, allowed changes, and handoff conditions.', 'Test the same sample request through the intended channels using safe records.', 'Compare outcomes and review system actions before expanding the agent\'s authority.'],
    ['Confirm supported channels, integrations, implementation work, and how billable outcomes are defined.', 'Review identity verification, policy exceptions, recording and retention, and how a person takes over an unresolved conversation.'],
    'https://sierra.ai/', 'Sierra customer agents and channel deployment overview'
  ),
  decagon: guide(
    'Decagon is a customer-agent platform focused on building, testing, and improving conversational service experiences. Its current product describes an AI concierge that can work through customer requests with connected business context. It is useful for a team that wants to iterate on service behavior as a managed system. Define successful resolution from the customer\'s perspective and inspect exception handling so apparent automation does not hide an unresolved problem.',
    ['Customer-service teams building connected AI agents', 'Enterprises evaluating agent testing and improvement workflows'],
    'Example: evaluate a membership-support agent',
    ['Document supported requests, identity checks, and cases that require a specialist.', 'Run a sample set covering normal requests, ambiguity, and unavailable business systems.', 'Review conversations and resulting actions with support owners before deployment.'],
    ['Confirm channels, integrations, testing tools, implementation scope, and the usage arrangement.', 'Check how procedures are maintained, who approves agent changes, and how customers reach human support after a failed action.'],
    'https://decagon.ai/', 'Decagon customer concierge and agent lifecycle platform'
  ),
  askyourpdf: guide(
    'AskYourPDF offers website support agents grounded in approved site and document content, alongside document questions and PDF form-filling tools. Its current product also describes a support-ticket path when an agent cannot answer. It is useful for a business that already has clear documentation but wants visitors to find an answer conversationally. Choose the specific product workflow, since answering a question and filling a form require different review and data-handling steps.',
    ['Businesses building a document-backed website assistant', 'Teams extracting approved information into a PDF workflow'],
    'Example: pilot an agent for a service documentation site',
    ['Select current public articles and define the questions the agent may answer.', 'Test factual questions and unsupported requests, checking the cited source context.', 'Verify the support-ticket handoff before making the agent available to visitors.'],
    ['Clarify website agent, document chat, form-filling, API, and upload allowances in the offer.', 'Review file retention and visitor information capture, and approve form fields manually before using generated paperwork.'],
    'https://askyourpdf.com/', 'AskYourPDF website agents, support tickets, and PDF tools'
  ),
  'jotform-ai': guide(
    'Jotform AI Agents combines conversational assistance with forms, support information, and scheduling workflows. Its product provides multiple channel options, including website chat, voice, phone, and messaging integrations. It is relevant when a customer needs to provide structured information while receiving guidance. Design the underlying fields and validation first so a natural conversation still creates an accurate, complete record.',
    ['Teams turning forms into guided conversations', 'Businesses collecting service or appointment requests'],
    'Example: guide a visitor through a consultation request',
    ['Define required fields, approved service answers, and the scheduling rules for a sample request.', 'Train and test an agent with incomplete answers, corrections, and unsupported questions.', 'Review the captured form data and confirmation behavior before connecting a live customer channel.'],
    ['Confirm form submissions, agent conversations, channels, scheduling, and integrations in the plan.', 'Check personal-data handling and ensure the agent cannot promise an appointment or service that the underlying system has not confirmed.'],
    'https://www.jotform.com/ai/agents/', 'Jotform AI Agents conversational forms and service channels'
  ),
};
