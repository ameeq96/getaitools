import type { ToolId } from "./catalog";

export type ToolPlan = {
  id: string;
  name: string;
  priceUsd: number;
  duration: string;
  access: string;
  status: "On request" | "Details required" | "Unavailable";
  summaryEligible: boolean;
  note: string;
};

export const pricingUpdatedOn = "2026-10-24";

// Recorded PKR amounts × 1.25 ÷ 277.85 or official USD amounts × 1.25; EUR uses 1.1193 USD/EUR (ECB, 23 October 2026). Round once to USD cents.
const toolPlans: Partial<Record<ToolId, ToolPlan[]>> = {
  "chatgpt": [
    {"id":"chatgpt-1","name":"Plus","priceUsd":6.74,"duration":"30 days","access":"Shared; one device","status":"On request","summaryEligible":true,"note":""},
    {"id":"chatgpt-2","name":"Go","priceUsd":4.49,"duration":"30 days","access":"Shared; one device","status":"On request","summaryEligible":true,"note":""},
    {"id":"chatgpt-4","name":"Plus","priceUsd":6.75,"duration":"1 month","access":"Shared; one device","status":"On request","summaryEligible":true,"note":""},
    {"id":"chatgpt-6","name":"Plus","priceUsd":9,"duration":"45 days","access":"Shared; one device","status":"On request","summaryEligible":true,"note":""},
    {"id":"chatgpt-7","name":"Plus","priceUsd":22.04,"duration":"1 month","access":"Personal; own email","status":"On request","summaryEligible":true,"note":""},
    {"id":"chatgpt-8","name":"Plus","priceUsd":32.39,"duration":"45 days","access":"Personal; own email","status":"On request","summaryEligible":true,"note":""}
  ],
  "claude": [
    {"id":"claude-1","name":"Claude Pro","priceUsd":24.74,"duration":"1 month","access":"Private (seller claim)","status":"On request","summaryEligible":true,"note":"Private Claude Pro access. Confirm account ownership, activation, usage limits and support before payment."}
  ],
  "gemini": [
    {"id":"gemini-1","name":"Google AI Pro","priceUsd":25.19,"duration":"1 month","access":"Direct Google subscription; eligible account","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans. Confirm account eligibility and activation method; reseller access can differ from a direct Google plan."},
    {"id":"gemini-2","name":"Google AI Plus","priceUsd":6.3,"duration":"1 month","access":"Direct Google subscription; eligible account","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans. Confirm account eligibility and activation method; reseller access can differ from a direct Google plan."}
  ],
  "grok": [
    {"id":"grok-supergrok-weekly","name":"SuperGrok","priceUsd":7.65,"duration":"7 days","access":"Pre-made account","status":"On request","summaryEligible":true,"note":"Seven-day access with no automatic renewal. Confirm account restrictions, usage allowance and replacement terms before payment."},
    {"id":"grok-supergrok-shared-monthly","name":"SuperGrok","priceUsd":9.89,"duration":"30 days","access":"Shared account","status":"On request","summaryEligible":true,"note":"Shared monthly access. Confirm device restrictions, usage allowance and support terms before payment."},
    {"id":"grok-supergrok-monthly","name":"SuperGrok","priceUsd":35.99,"duration":"30 days","access":"Private account","status":"On request","summaryEligible":true,"note":"Private monthly access. Confirm account ownership, activation method, included limits and support terms before payment."}
  ],
  "fin": [
    {"id":"fin-outcome","name":"Fin usage per outcome","priceUsd":1.24,"duration":"1 outcome","access":"Your existing helpdesk integration","status":"On request","summaryEligible":true,"note":"Usage billing with a minimum of 50 outcomes per month. Helpdesk seats, implementation and additional services are separate; confirm the complete monthly quote."}
  ],
  "zendesk-ai": [
    {"id":"zendesk-ai-suite-team-monthly","name":"Suite Team — per agent","priceUsd":86.25,"duration":"1 month","access":"Own Zendesk workspace; one agent seat","status":"On request","summaryEligible":true,"note":"Monthly seat subscription. AI agents are included, but automated resolutions beyond the included allowance and optional add-ons cost extra. Confirm usage and total seat count before payment."}
  ],
  "lyro": [
    {"id":"lyro-core-monthly","name":"Lyro Core — 50 AI conversations","priceUsd":48.75,"duration":"1 month","access":"Own Tidio workspace; standalone Lyro quota","status":"On request","summaryEligible":true,"note":"Monthly allowance of 50 AI conversations. Higher conversation quotas and other Tidio products are separate; the provider's one-time free conversations are not a recurring paid allowance."}
  ],
  "regie": [
    {"id":"regie-pro-monthly","name":"RegieGO Pro","priceUsd":61.25,"duration":"1 month","access":"Own account; one person","status":"On request","summaryEligible":true,"note":"Monthly billing with 5,000 credits for research, enrichment, drafting and dialing. Additional usage and team seats require a separate quote."}
  ],
  "reply": [
    {"id":"reply-email-volume-monthly","name":"Email Volume — 1,000 active contacts","priceUsd":73.75,"duration":"1 month","access":"Own workspace; per user","status":"On request","summaryEligible":true,"note":"Monthly billing for 1,000 active contacts and 50 live-data credits. Mailbox fair-use limits apply. Jason AI SDR, LinkedIn, calls, SMS and extra credits are separate."},
    {"id":"reply-multichannel-monthly","name":"Multichannel — per user","priceUsd":123.75,"duration":"1 month","access":"Own workspace; one user","status":"On request","summaryEligible":true,"note":"Monthly billing with five mailboxes per user, unlimited active contacts under fair use, and 50 live-data credits. Calling/SMS usage, extra credits and Jason AI SDR are separate."}
  ],
  "hubspot-agent-hub": [
    {"id":"hubspot-agent-hub-capacity-pack","name":"HubSpot Credits capacity add-on","priceUsd":12.5,"duration":"1,000 credits","access":"Existing eligible HubSpot subscription required","status":"On request","summaryEligible":true,"note":"Adds monthly credit capacity for the remaining subscription commitment. Credits reset monthly without rollover; the base HubSpot subscription and additional usage are separate. Confirm the full commitment before payment."}
  ],
  "agentforce": [
    {"id":"agentforce-conversation","name":"Agentforce Conversations usage","priceUsd":2.5,"duration":"1 conversation","access":"Eligible Salesforce workspace","status":"On request","summaryEligible":true,"note":"Consumption charge per conversation, not a monthly subscription. Salesforce licensing, implementation and contract requirements are separate."},
    {"id":"agentforce-flex-credits","name":"Agentforce Flex Credits","priceUsd":625,"duration":"100,000 credits","access":"Eligible Salesforce workspace","status":"On request","summaryEligible":true,"note":"Consumption-based credits for Agentforce actions. Confirm the purchase model, contract term, credit validity and any base Salesforce licensing before payment."}
  ],
  "jotform-ai": [
    {"id":"jotform-ai-bronze-monthly","name":"Bronze","priceUsd":48.75,"duration":"1 month","access":"Own Jotform account","status":"On request","summaryEligible":true,"note":"Monthly subscription with up to 25 AI agents and 1,000 AI conversations under the provider's current limits. Phone/SMS, higher allowances and other optional services require confirmation."}
  ],
  "lavender": [
    {"id":"lavender-starter-monthly","name":"Starter","priceUsd":36.25,"duration":"1 month","access":"Individual Lavender email-coach account","status":"On request","summaryEligible":true,"note":"Monthly billing for email coaching, personalization and AI writing features. Confirm supported inboxes and integrations; team analytics and coaching are separate."},
    {"id":"lavender-pro-monthly","name":"Individual Pro","priceUsd":61.25,"duration":"1 month","access":"Individual account with integrations","status":"On request","summaryEligible":true,"note":"Monthly billing with Starter features, integrations and priority support. Team seats and the coaching dashboard are a separate offer."}
  ],
  "alpha3d": [
    {"id":"alpha3d-tester-monthly","name":"Tester","priceUsd":6.25,"duration":"1 month","access":"Own Alpha3D account","status":"On request","summaryEligible":true,"note":"Monthly plan with 90 3D credits and 1,000 agent tokens. Generation costs and available production tools depend on the selected plan."},
    {"id":"alpha3d-basic-monthly","name":"Basic","priceUsd":21.25,"duration":"1 month","access":"Own Alpha3D account","status":"On request","summaryEligible":true,"note":"Monthly plan with 1,000 3D credits and 3,500 agent tokens. Includes additional topology tools; model counts depend on generation settings."}
  ],
  "aiva": [
    {"id":"aiva-standard-annual","name":"Standard — annual","priceUsd":184.68,"duration":"1 year total","access":"Individual AIVA account","status":"On request","summaryEligible":true,"note":"Full annual payment, converted from EUR using the 23 October 2026 ECB reference rate; VAT is extra. Up to 15 downloads monthly; AIVA retains copyright and monetization is limited to the listed social platforms. Confirm the settlement quote."},
    {"id":"aiva-pro-annual","name":"Pro — annual","priceUsd":554.05,"duration":"1 year total","access":"Individual AIVA account","status":"On request","summaryEligible":true,"note":"Full annual payment, converted from EUR using the 23 October 2026 ECB reference rate; VAT is extra. Up to 300 downloads monthly with copyright ownership and monetization rights under the provider's terms. Confirm the settlement quote."}
  ],
  "midjourney": [
    {"id":"midjourney-1","name":"Standard","priceUsd":13.49,"duration":"1 month","access":"Shared account; direct Midjourney website login","status":"On request","summaryEligible":true,"note":"Shared monthly access; the listing states 30-day replacement coverage. Confirm usage limits, account restrictions and final support terms before payment."}
  ],
  "perplexity": [
    {"id":"perplexity-5","name":"Pro","priceUsd":33.74,"duration":"12 months","access":"Own email activation","status":"On request","summaryEligible":true,"note":""}
  ],
  "canva": [
    {"id":"canva-1","name":"Canva Pro team invitation","priceUsd":0.67,"duration":"1 month","access":"Team invitation to existing email","status":"On request","summaryEligible":true,"note":""},
    {"id":"canva-2","name":"Canva Pro team invitation","priceUsd":1.35,"duration":"12 months total","access":"Team invitation","status":"On request","summaryEligible":true,"note":""}
  ],
  "clipdrop": [
    {"id":"clipdrop-paid-1","name":"Pro","priceUsd":18.75,"duration":"1 month","access":"Own Clipdrop account","status":"On request","summaryEligible":true,"note":"Monthly Pro app subscription. API usage is billed separately; tool-specific daily limits and provider taxes apply."}
  ],
  "flair": [
    {"id":"flair-paid-1","name":"Pro","priceUsd":12.5,"duration":"1 month","access":"Own Flair account","status":"On request","summaryEligible":true,"note":"Monthly Pro billing rather than the discounted annual equivalent. Image and video allowances apply; additional model training or team features may require a higher plan."}
  ],
  "colossyan": [
    {"id":"colossyan-paid-1","name":"Professional — one editor","priceUsd":111.25,"duration":"1 month","access":"Own Colossyan workspace; one editor","status":"On request","summaryEligible":true,"note":"Monthly Professional billing for one editor. Additional editors, video minutes and enterprise features cost extra."}
  ],
  "aistudios": [
    {"id":"aistudios-paid-1","name":"Personal","priceUsd":36.25,"duration":"1 month","access":"Own AI Studios account","status":"On request","summaryEligible":true,"note":"Monthly Personal billing rather than the discounted annual equivalent. Includes 60 generative credits and 120 AI-dubbing minutes per month; video duration and model limits apply."}
  ],
  "vidnoz": [
    {"id":"vidnoz-paid-1","name":"Starter — 450 credits","priceUsd":33.74,"duration":"1 month","access":"Own Vidnoz account","status":"On request","summaryEligible":true,"note":"Monthly Starter subscription with 450 credits. Extra credit packs and higher tiers cost extra; no first-month promotion is included in this quote."}
  ],
  "loudly": [
    {"id":"loudly-paid-1","name":"Personal","priceUsd":12.5,"duration":"1 month","access":"Own Loudly account","status":"On request","summaryEligible":true,"note":"Monthly Personal subscription. Downloads and commercial-use permissions follow the selected licence; distribution revenue payouts require annual billing."}
  ],
  "soundful": [
    {"id":"soundful-paid-1","name":"Plus","priceUsd":12.49,"duration":"1 month","access":"Own Soundful account; one user","status":"On request","summaryEligible":true,"note":"Monthly Plus plan with 100 MP3/WAV downloads per month and a Music Creator licence. Standalone resale and copyright ownership are subject to the provider's licence."},
    {"id":"soundful-paid-2","name":"Pro","priceUsd":18.74,"duration":"1 month","access":"Own Soundful account; one user","status":"On request","summaryEligible":true,"note":"Monthly Pro plan with 400 MP3/WAV downloads and 20 STEM packs per month. Distribution and commercial use remain subject to the Music Creator licence."}
  ],
  "auphonic": [
    {"id":"auphonic-paid-1","name":"S — recurring credits","priceUsd":16.25,"duration":"1 month","access":"Own Auphonic account","status":"On request","summaryEligible":true,"note":"Nine processed audio hours per month; unused recurring credits do not accumulate. Provider taxes or VAT may apply."},
    {"id":"auphonic-paid-2","name":"One-time — 5 hours","priceUsd":15,"duration":"5 audio-processing hours","access":"Own Auphonic account","status":"On request","summaryEligible":true,"note":"One-time processing credits that do not expire. This is not a monthly subscription; optional automatic top-ups must be confirmed separately."}
  ],
  "scenario": [
    {"id":"scenario-paid-1","name":"Starter — 1,500 credits","priceUsd":18.75,"duration":"1 month","access":"Own Scenario account","status":"On request","summaryEligible":true,"note":"Monthly Starter subscription with 1,500 credits. Credits do not roll over; additional credits and team features cost extra."}
  ],
  "adobe-podcast": [
    {"id":"adobe-podcast-paid-1","name":"Podcast Premium via Firefly Pro","priceUsd":24.99,"duration":"1 month","access":"Own eligible Adobe account; Firefly Pro bundle","status":"On request","summaryEligible":true,"note":"Podcast Premium is included with eligible Firefly Pro access, rather than a standalone Podcast subscription. Enhance Speech limits, account eligibility and regional taxes apply."}
  ],
  "leonardo": [
    {"id":"leonardo-official","name":"Essential","priceUsd":15,"duration":"1 month","access":"Own Leonardo account","status":"On request","summaryEligible":true,"note":"8,500 fast tokens per month; private creations. Provider taxes may apply."}
  ],
  "ideogram": [
    {"id":"ideogram-official","name":"Plus","priceUsd":25,"duration":"1 month","access":"Own Ideogram account","status":"On request","summaryEligible":true,"note":"Monthly billing; priority-credit allowances and generation limits apply."}
  ],
  "recraft": [
    {"id":"recraft-official","name":"Basic — 1,000 credits","priceUsd":15,"duration":"1 month","access":"Own Recraft account","status":"On request","summaryEligible":true,"note":"Monthly credits reset without rollover. Private generations and commercial usage rights while subscribed."}
  ],
  "krea": [
    {"id":"krea-official","name":"Basic — 5,000 units","priceUsd":11.25,"duration":"1 month","access":"Own Krea account","status":"On request","summaryEligible":true,"note":"Monthly compute units reset each billing cycle; model access and generation costs vary."}
  ],
  "photoroom": [
    {"id":"photoroom-official","name":"Pro — annual plan","priceUsd":112.5,"duration":"12 months total","access":"Own Photoroom account","status":"On request","summaryEligible":true,"note":"Full annual Pro term; 8,000 AI credits and 1,000 exports each month. The displayed amount covers all 12 months, with no monthly-payment offer implied."}
  ],
  "remove-bg": [
    {"id":"remove-bg-official","name":"Subscription — 40 credits","priceUsd":11.25,"duration":"1 month","access":"Own remove.bg account","status":"On request","summaryEligible":true,"note":"Monthly subscription with 40 credits; additional credits and high-volume usage cost extra."}
  ],
  "topaz-photo": [
    {"id":"topaz-photo-official","name":"Topaz Photo Personal — first year","priceUsd":124.38,"duration":"12 months total","access":"Own Topaz account; desktop licence","status":"On request","summaryEligible":true,"note":"Introductory first-year annual offer. The following annual renewal would be $248.75 with the same 25% addition. Confirm promotion eligibility, renewal and taxes before payment."}
  ],
  "pixlr": [
    {"id":"pixlr-official","name":"Plus","priceUsd":3.11,"duration":"1 month","access":"Own Pixlr account","status":"On request","summaryEligible":true,"note":"Monthly Plus plan. Premium AI models, generation allowances and higher tiers are separate."}
  ],
  "lets-enhance": [
    {"id":"lets-enhance-official","name":"Starter — 100 credits","priceUsd":15,"duration":"1 month","access":"Own Let's Enhance account","status":"On request","summaryEligible":true,"note":"Monthly billing with 100 image-processing credits; output resolution and credit rollover limits apply."}
  ],
  "vanceai": [
    {"id":"vanceai-official","name":"Starter — annual plan","priceUsd":225,"duration":"12 months total","access":"Own VanceAI account","status":"On request","summaryEligible":true,"note":"Annual Starter term with 260 credits allocated monthly including the stated bonus. The displayed amount covers all 12 months; credit use and plan limits apply."}
  ],
  "headshotpro": [
    {"id":"headshotpro-official","name":"Basic headshot package","priceUsd":36.25,"duration":"1 headshot package","access":"Own HeadshotPro account; one person","status":"On request","summaryEligible":true,"note":"One-time package rather than a monthly subscription. Confirm the current photo allowance, output resolution and delivery window."}
  ],
  "aragon": [
    {"id":"aragon-official","name":"Basic headshot package","priceUsd":43.75,"duration":"1 headshot package","access":"Own Aragon account; one person","status":"On request","summaryEligible":true,"note":"One-time Basic package at the currently advertised price; 40 headshots. Promotions, upload requirements and turnaround need confirmation."}
  ],
  "looka": [
    {"id":"looka-official","name":"Basic Logo Package","priceUsd":25,"duration":"1 logo package","access":"Own Looka account","status":"On request","summaryEligible":true,"note":"One-time purchase of one PNG logo file. Vector files, extra variations and Brand Kit subscriptions require a different package."}
  ],
  "uizard": [
    {"id":"uizard-official","name":"Pro — one creator seat","priceUsd":23.75,"duration":"1 month","access":"Own Uizard workspace; one creator","status":"On request","summaryEligible":true,"note":"Monthly creator-seat billing. Additional creator seats cost extra; viewer seats and AI allowances follow the provider's plan limits."}
  ],
  "visily": [
    {"id":"visily-official","name":"Pro — one editor seat","priceUsd":17.5,"duration":"1 month","access":"Own Visily workspace; one editor","status":"On request","summaryEligible":true,"note":"Monthly editor-seat plan with 3,000 AI credits per editor. Additional editors and higher team plans cost extra."}
  ],
  "pebblely": [
    {"id":"pebblely-official","name":"Lite — 30 images","priceUsd":11.25,"duration":"1 month","access":"Own Pebblely account","status":"On request","summaryEligible":true,"note":"Monthly subscription with 30 images. Higher output allowances require a different plan."}
  ],
  "getimg": [
    {"id":"getimg-official","name":"Entry — annual plan","priceUsd":225,"duration":"12 months total","access":"Own getimg.ai account","status":"On request","summaryEligible":true,"note":"Annual Entry term with 8,000 credits per month. The displayed amount covers all 12 months; provider taxes and model-specific credit costs may apply."}
  ],
  "tensorart": [
    {"id":"tensorart-official","name":"Monthly Pro","priceUsd":12.38,"duration":"1 month","access":"Own Tensor.Art account","status":"On request","summaryEligible":true,"note":"Monthly Pro subscription with the listed 1,000-credit bonus; credit use and plan benefits follow the provider's terms."}
  ],
  "nightcafe": [
    {"id":"nightcafe-official","name":"AI Beginner","priceUsd":9.36,"duration":"1 month","access":"Own NightCafe account","status":"On request","summaryEligible":true,"note":"Standard monthly rate, excluding tax. This is not the expired annual promotional price; Fast Credit and model allowances need confirmation."}
  ],
  "artbreeder": [
    {"id":"artbreeder-official","name":"Starter — annual plan","priceUsd":112.35,"duration":"12 months total","access":"Own Artbreeder account","status":"On request","summaryEligible":true,"note":"Annual Starter term with 1,200 credits per year. The displayed amount covers all 12 months; higher tiers and top-ups are separate."}
  ],
  "novelai": [
    {"id":"novelai-official","name":"Tablet","priceUsd":12.5,"duration":"30 days","access":"Own NovelAI account","status":"On request","summaryEligible":true,"note":"Subscription renews every 30 days. Includes 1,000 subscription Image Anlas; text and image allowances follow the selected model's limits."}
  ],
  "figma": [
    {"id":"figma-official","name":"Professional — Full seat","priceUsd":25,"duration":"1 month","access":"Own Figma team; one Full seat","status":"On request","summaryEligible":true,"note":"Monthly Full seat with 3,000 AI credits per month. Extra seats and optional AI credit subscriptions cost extra; this is not the annual monthly equivalent."}
  ],
  "synthesia": [
    {"id":"synthesia-official","name":"Starter — 1,250 credits","priceUsd":36.25,"duration":"1 month","access":"Own Synthesia account","status":"On request","summaryEligible":true,"note":"Monthly billing with 1,250 credits. Additional learner seats, higher credit allocations and enterprise features cost extra."}
  ],
  "pika": [
    {"id":"pika-official","name":"Starter — 900 credits","priceUsd":12.5,"duration":"1 month","access":"Own Pika account","status":"On request","summaryEligible":true,"note":"Monthly Starter subscription with 900 credits. Credit consumption depends on model, duration and settings."}
  ],
  "luma": [
    {"id":"luma-official","name":"Plus — 10,000 credits","priceUsd":37.5,"duration":"1 month","access":"Own Luma account","status":"On request","summaryEligible":true,"note":"Monthly Plus plan with 10,000 credits; commercial use included under provider terms. Higher-credit plans are separate."}
  ],
  "invideo": [
    {"id":"invideo-official","name":"Basic — one seat","priceUsd":11.25,"duration":"1 month","access":"Own InVideo workspace; one seat","status":"On request","summaryEligible":true,"note":"Monthly Basic price rather than the discounted annual equivalent. Includes 190 credits per seat each month; no guest seats on Basic."}
  ],
  "opusclip": [
    {"id":"opusclip-official","name":"Starter — 150 credits","priceUsd":18.75,"duration":"1 month","access":"Own OpusClip account","status":"On request","summaryEligible":true,"note":"Starter is billed monthly and includes 150 credits. AI clipping and export limits follow the provider's plan."}
  ],
  "suno": [
    {"id":"suno-official","name":"Pro — annual plan","priceUsd":120,"duration":"12 months total","access":"Own Suno account","status":"On request","summaryEligible":true,"note":"Annual Pro term with 2,500 credits each month. The displayed amount covers all 12 months; download limits and commercial-use terms apply."}
  ],
  "murf": [
    {"id":"murf-official","name":"Creator — annual plan","priceUsd":285,"duration":"12 months total","access":"Own Murf workspace; one editor","status":"On request","summaryEligible":true,"note":"Annual Creator term with 24 hours of voice generation for the year. The displayed amount covers all 12 months; additional editors, usage and enterprise features are separate."}
  ],
  "pixverse": [
    {"id":"pixverse-official","name":"Standard","priceUsd":12.5,"duration":"1 month","access":"Own PixVerse account","status":"On request","summaryEligible":true,"note":"Monthly Standard price, not the discounted annual equivalent. Includes 1,200 membership credits per 30-day cycle plus the listed daily credits."}
  ],
  "higgsfield": [
    {"id":"higgsfield-official","name":"Plus — 1,200 credits","priceUsd":73.75,"duration":"1 month","access":"Own Higgsfield account","status":"On request","summaryEligible":true,"note":"Monthly Plus price, before provider taxes. Credits reset monthly; model-specific access and time-limited unlimited benefits must be confirmed."}
  ],
  "pictory": [
    {"id":"pictory-official","name":"Starter — 2,000 credits","priceUsd":36.25,"duration":"1 month","access":"Own Pictory account; one user","status":"On request","summaryEligible":true,"note":"Monthly Starter billing with 2,000 credits and up to 30 video minutes per month. This is not the discounted annual price."}
  ],
  "akool": [
    {"id":"akool-official","name":"Starter — annual plan","priceUsd":180,"duration":"12 months total","access":"Own AKOOL account; one seat","status":"On request","summaryEligible":true,"note":"Annual Starter term for one seat with 200 credits each month. The displayed amount covers all 12 months; personal-licence and concurrency limits apply."}
  ],
  "vyond": [
    {"id":"vyond-official","name":"Starter — single user","priceUsd":123.75,"duration":"1 month","access":"Own Vyond account; one user","status":"On request","summaryEligible":true,"note":"Monthly Starter price with 10,000 AI credits per user each month. Commercial-transfer rights and additional seats require confirmation."}
  ],
  "kapwing": [
    {"id":"kapwing-official","name":"Pro — annual plan","priceUsd":240,"duration":"12 months total","access":"Own Kapwing workspace; one member","status":"On request","summaryEligible":true,"note":"Annual Pro term for one member with 1,000 credits each month. The displayed amount covers all 12 months; additional members cost extra."}
  ],
  "klap": [
    {"id":"klap-official","name":"Basic — annual plan","priceUsd":210,"duration":"12 months total","access":"Own Klap account","status":"On request","summaryEligible":true,"note":"Annual Basic term with 100 clips per month. The displayed amount covers all 12 months; no monthly-payment offer is implied."}
  ],
  "submagic": [
    {"id":"submagic-official","name":"Starter — 45 credits","priceUsd":23.75,"duration":"1 month","access":"Own Submagic workspace; one member","status":"On request","summaryEligible":true,"note":"Monthly billing; 45 credits, up to 15 videos and a two-minute video-duration limit. Additional usage or members cost extra."}
  ],
  "rask": [
    {"id":"rask-official","name":"25-minute monthly plan","priceUsd":48.75,"duration":"1 month","access":"Own Rask account","status":"On request","summaryEligible":true,"note":"Monthly plan with 25 included localization minutes. Additional minutes, voice and lip-sync options follow the provider's limits."}
  ],
  "dubverse": [
    {"id":"dubverse-official","name":"Pro — six-month plan","priceUsd":135,"duration":"6 months total","access":"Own Dubverse account","status":"On request","summaryEligible":true,"note":"Six-month Pro term with 50 credits allocated each month. The displayed amount covers all six months; this is not monthly billing."}
  ],
  "kaiber": [
    {"id":"kaiber-official","name":"Starter — 500 credits","priceUsd":12.5,"duration":"1 month","access":"Own Kaiber account","status":"On request","summaryEligible":true,"note":"Monthly Starter plan with 500 credits. Premium models, Beat Sync and commercial-use features may require a higher plan."}
  ],
  "decohere": [
    {"id":"decohere-official","name":"Explorer — annual plan","priceUsd":119.85,"duration":"12 months total","access":"Own Decohere account","status":"On request","summaryEligible":true,"note":"Annual Explorer term with 600 credits per year. The displayed amount covers all 12 months; promotional eligibility and renewal terms require confirmation."}
  ],
  "mubert": [
    {"id":"mubert-official","name":"Creator — non-commercial","priceUsd":17.5,"duration":"1 month","access":"Own Mubert Render account","status":"On request","summaryEligible":true,"note":"Monthly Creator licence is non-commercial. Commercial projects require Pro or another suitable licence; standalone music redistribution is excluded."}
  ],
  "kits": [
    {"id":"kits-official","name":"Starter — 60 conversion minutes","priceUsd":12.5,"duration":"1 month","access":"Own Kits AI account","status":"On request","summaryEligible":true,"note":"Monthly billing with 60 conversion minutes and two voice slots. Model and export limits apply; higher tiers cost extra."}
  ],
  "audimee": [
    {"id":"audimee-official","name":"Starter — annual plan","priceUsd":135,"duration":"12 months total","access":"Own Audimee account","status":"On request","summaryEligible":true,"note":"Annual Starter term with one hour of conversions per month and one custom voice slot. The displayed amount covers all 12 months; commercial-use terms apply."}
  ],
  "lalal": [
    {"id":"lalal-official","name":"Lite — annual plan","priceUsd":112.5,"duration":"12 months total","access":"Own LALAL.AI account","status":"On request","summaryEligible":true,"note":"Annual Lite term with 90 Fast Queue minutes monthly and unlimited Relaxed Queue processing subject to plan terms. The displayed amount covers all 12 months."}
  ],
  "cleanvoice": [
    {"id":"cleanvoice-official","name":"Pay as you go — 5 hours","priceUsd":13.75,"duration":"5 audio-processing hours","access":"Own Cleanvoice account","status":"On request","summaryEligible":true,"note":"One-time credit pack; credits are valid for two years. This is not a recurring monthly subscription."}
  ],
  "krisp": [
    {"id":"krisp-official","name":"Core — one user","priceUsd":20,"duration":"1 month","access":"Own Krisp account; one user","status":"On request","summaryEligible":true,"note":"Monthly Core subscription. Unlimited features remain subject to the provider's fair-use rules; storage and accent-conversion limits apply."}
  ],
  "wellsaid": [
    {"id":"wellsaid-official","name":"Starter — annual plan","priceUsd":150,"duration":"12 months total","access":"Own WellSaid account","status":"On request","summaryEligible":true,"note":"Annual Starter term with 240 download minutes per year. The displayed amount covers all 12 months; extra minutes and higher sample-rate plans are separate."}
  ],
  "narakeet": [
    {"id":"narakeet-official","name":"Commercial — 30 minutes","priceUsd":7.5,"duration":"30 audio/video minutes","access":"Own Narakeet account","status":"On request","summaryEligible":true,"note":"One-time commercial capacity purchase; credits do not expire. Every completed full render consumes duration, including results you do not download."}
  ],
  "meshy": [
    {"id":"meshy-official","name":"Starter","priceUsd":12.5,"duration":"1 month","access":"Own Meshy account","status":"On request","summaryEligible":true,"note":"Standard monthly Starter subscription. Generation credits, exports and model access follow the plan; not the first-month Pro promotion."}
  ],
  "tripo": [
    {"id":"tripo-official","name":"Professional","priceUsd":25,"duration":"1 month","access":"Own Tripo Studio account","status":"On request","summaryEligible":true,"note":"Monthly Professional plan. Set generated models to private for the paid commercial-use and output-ownership terms; API credits are separate."}
  ],
  "rodin": [
    {"id":"rodin-official","name":"Creator","priceUsd":37.5,"duration":"1 month","access":"Own Hyper3D account","status":"On request","summaryEligible":true,"note":"Monthly Creator subscription. Credit costs depend on the output and confirmation step; top-ups and higher usage cost extra."}
  ],
  "sloyd": [
    {"id":"sloyd-official","name":"Sloyd Plus","priceUsd":18.75,"duration":"1 month","access":"Own Sloyd account","status":"On request","summaryEligible":true,"note":"Monthly Plus price, rather than the discounted annual equivalent. Generation and commercial-use rules follow the provider's plan."}
  ],
  "kaedim": [
    {"id":"kaedim-official","name":"Indie — 20 credits","priceUsd":500,"duration":"1 month","access":"Own Kaedim workspace","status":"On request","summaryEligible":true,"note":"Monthly Indie plan; up to 20 geometries or one complete asset with retopology, UVs and textures. This is not the auto-renewing seven-day trial."}
  ],
  "3daistudio": [
    {"id":"3daistudio-official","name":"One-Time — 2,000 credits","priceUsd":42.5,"duration":"2,000 credits","access":"Own 3D AI Studio account","status":"On request","summaryEligible":true,"note":"One-time credit purchase rather than a subscription. Generation cost varies by model; confirm credit validity and permitted exports before payment."}
  ],
  "rosebud": [
    {"id":"rosebud-official","name":"Indie Dev","priceUsd":18.75,"duration":"1 month","access":"Own Rosebud account","status":"On request","summaryEligible":true,"note":"Monthly Indie Dev subscription. Credits fund AI building and asset generation; private-project and export benefits depend on the selected plan."}
  ],
  "layer": [
    {"id":"layer-official","name":"Entry subscription — 300 Creative Units","priceUsd":12.5,"duration":"1 month","access":"Own Layer workspace","status":"On request","summaryEligible":true,"note":"Monthly entry subscription with 300 Creative Units. No per-seat fees; unused units expire and additional consumption costs extra."}
  ],
  "convai": [
    {"id":"convai-official","name":"Indie Dev","priceUsd":36.25,"duration":"1 month","access":"Own Convai workspace","status":"On request","summaryEligible":true,"note":"Monthly Indie Dev plan with 3,000 interactions and one character-session concurrency. Higher deployment needs and enterprise SLAs cost extra."}
  ],
  "photoshop": [
    {"id":"photoshop-1","name":"Creative Cloud Pro — redeem key","priceUsd":32.04,"duration":"1 month","access":"Own Adobe ID; redemption key","status":"On request","summaryEligible":true,"note":"Includes Photoshop within Creative Cloud Pro; Substance 3D is excluded. Leave billing and profile settings unchanged; confirm redemption eligibility."},
    {"id":"photoshop-2","name":"Creative Cloud Pro — prepaid login","priceUsd":42.3,"duration":"4 months total","access":"Supplied prepaid Adobe account","status":"On request","summaryEligible":true,"note":"Includes Photoshop within Creative Cloud Pro; Substance 3D is excluded. Keep billing, profile and primary email unchanged. Password and backup-email changes are allowed by the listing."}
  ],
  "adobe-express": [
    {"id":"adobe-express-1","name":"Express Premium — annual coupon","priceUsd":12.81,"duration":"12 months total","access":"Private redemption on own Adobe account","status":"On request","summaryEligible":true,"note":"Express Premium only; not Firefly Pro or Express for Teams. Generative credits follow the redeemed provider plan. Confirm account eligibility and renewal before payment."},
    {"id":"adobe-express-2","name":"Express Premium — new-account key","priceUsd":2.55,"duration":"4 months total","access":"Own Adobe account; eligible redemption key","status":"On request","summaryEligible":true,"note":"Only an Adobe account that has never had an Adobe plan is eligible. Confirm eligibility before payment; no card is needed for the advertised redemption."}
  ],
  "descript": [
    {"id":"descript-1","name":"Creator — monthly coupon","priceUsd":14.09,"duration":"1 month","access":"Private redemption on own Descript account","status":"On request","summaryEligible":true,"note":"Redeem against Creator on your own account. Credit and media-hour limits apply; confirm redemption eligibility and renewal before payment."},
    {"id":"descript-2","name":"Creator — annual coupon","priceUsd":38.45,"duration":"12 months total","access":"Private redemption on own Descript account","status":"On request","summaryEligible":true,"note":"Select Creator annual, not Hobbyist or Business. Provider listing states 30 media hours and 800 AI credits per month; confirm current allowance and coupon eligibility."}
  ],
  "speechify": [
    {"id":"speechify-1","name":"Premium — annual redeem link","priceUsd":17.94,"duration":"12 months total","access":"Private redemption on own Speechify account","status":"On request","summaryEligible":true,"note":"Speechify may require a payment card to activate the redeem link. Confirm eligibility and automatic-renewal settings before payment."}
  ],
  "magnific": [
    {"id":"magnific-official-annual-offer","name":"Magnific Premium — annual offer","priceUsd":108.75,"duration":"12 months total","access":"Own Magnific account; individual plan","status":"On request","summaryEligible":true,"note":"Full annual promotional payment; 240,000 credits for the year. Offer advertised through October 26, 2026. Confirm eligibility, renewal price and taxes before payment."}
  ],
  "stockimg": [
    {"id":"stockimg-official-monthly","name":"Stockimg Starter","priceUsd":15,"duration":"1 month","access":"Own Stockimg account; one user","status":"On request","summaryEligible":true,"note":"Monthly Starter subscription with 300 credits per month. Commercial usage is included; private generation requires a different tier."}
  ],
  "animaker": [
    {"id":"animaker-official-monthly","name":"Animaker Basic","priceUsd":33.75,"duration":"1 month","access":"Own Animaker account; web plan","status":"On request","summaryEligible":true,"note":"Monthly Basic web subscription. Video exports, AI-credit allowances and commercial licence conditions follow the selected plan."}
  ],
  "soundraw": [
    {"id":"soundraw-official-monthly","name":"SOUNDRAW Creator","priceUsd":12.49,"duration":"1 month","access":"Own SOUNDRAW account","status":"On request","summaryEligible":true,"note":"Creator licence for background music in content, with unlimited track downloads under plan terms. Artist song distribution and stem downloads require a different plan."}
  ],
  "runway": [
    {"id":"runway-1","name":"Pro","priceUsd":24.74,"duration":"1 month","access":"Private","status":"On request","summaryEligible":true,"note":"Confirm included monthly credits and export limits."}
  ],
  "elevenlabs": [
    {"id":"elevenlabs-1","name":"Creator","priceUsd":14.85,"duration":"1 month","access":"Private","status":"On request","summaryEligible":true,"note":"Credit allowances vary between options; confirm the exact allowance."},
    {"id":"elevenlabs-2","name":"Creator","priceUsd":105.72,"duration":"12 months total","access":"Personal account","status":"On request","summaryEligible":true,"note":"Credit allowances vary between options; confirm the exact allowance."}
  ],
  "github-copilot": [
    {"id":"github-copilot-provider-monthly","name":"Copilot Pro","priceUsd":12.5,"duration":"1 month","access":"Per user; own GitHub account","status":"On request","summaryEligible":true,"note":"Usage credits are limited; extra usage is charged separately."}
  ],
  "devin": [
    {"id":"devin-provider-monthly","name":"Devin Pro","priceUsd":25,"duration":"1 month","access":"Individual account","status":"On request","summaryEligible":true,"note":"Includes Devin Desktop and cloud-agent access subject to quotas."}
  ],
  "v0": [
    {"id":"v0-provider-monthly","name":"v0 Plus","priceUsd":37.5,"duration":"1 month","access":"Per user","status":"On request","summaryEligible":true,"note":"Includes $30 monthly credits per user; additional credits cost extra."}
  ],
  "claude-code": [
    {"id":"claude-code-provider-monthly","name":"Claude Pro — includes Claude Code","priceUsd":25,"duration":"1 month","access":"Personal Claude account","status":"On request","summaryEligible":true,"note":"Claude Pro bundle; usage limits apply. Anthropic API usage is billed separately."}
  ],
  "junie": [
    {"id":"junie-provider-monthly","name":"JetBrains AI Pro — includes Junie","priceUsd":12.5,"duration":"1 month","access":"Per user; individual license","status":"On request","summaryEligible":true,"note":"Includes 10 AI credits per 30 days; IDE licensing and top-ups may cost extra."}
  ],
  "amp": [
    {"id":"amp-provider-monthly","name":"Amp Megawatt","priceUsd":25,"duration":"1 month","access":"Individual account","status":"On request","summaryEligible":true,"note":"Includes at least $20 agent usage and 750 small-orb hours; additional usage costs extra."}
  ],
  "kiro": [
    {"id":"kiro-provider-monthly","name":"Kiro Pro","priceUsd":25,"duration":"1 month","access":"Per user","status":"On request","summaryEligible":true,"note":"Includes 1,000 credits; optional add-on credits cost extra."}
  ],
  "make": [
    {"id":"make-provider-monthly","name":"Make Core — 10k credits","priceUsd":15,"duration":"1 month","access":"Own workspace","status":"On request","summaryEligible":true,"note":"10,000 credits per month; extra usage and higher credit tiers cost extra."}
  ],
  "lindy": [
    {"id":"lindy-provider-monthly","name":"Lindy Team — 5,000 credits","priceUsd":62.49,"duration":"1 month","access":"Per active user","status":"On request","summaryEligible":true,"note":"5,000 credits per active user per month; pooled team credits and additional top-ups."}
  ],
  "bardeen": [
    {"id":"bardeen-provider-monthly","name":"Bardeen Basic","priceUsd":12.5,"duration":"1 month","access":"Own account","status":"On request","summaryEligible":true,"note":"Basic is billed monthly with 100 credits per month; unused credits expire."}
  ],
  "tabby": [
    {"id":"tabby-provider-monthly","name":"Tabby Team","priceUsd":23.75,"duration":"1 month","access":"Per seat; self-hosted deployment","status":"On request","summaryEligible":true,"note":"For teams up to 50 users; infrastructure/model hosting is separate."}
  ],
  "kilo": [
    {"id":"kilo-provider-monthly","name":"Kilo Pass Starter","priceUsd":23.75,"duration":"1 month","access":"Personal monthly AI credit subscription","status":"On request","summaryEligible":true,"note":"Inference credits with conditional bonus credits; cloud compute and team seats are separate."}
  ],
  "qodo": [
    {"id":"qodo-provider-monthly","name":"Qodo Pro Team — 2,500 credits","priceUsd":37.5,"duration":"1 month","access":"Workspace credit pool; up to 30 users","status":"On request","summaryEligible":true,"note":"2,500 pooled review credits monthly; higher packs and overages cost extra."}
  ],
  "augment": [
    {"id":"augment-provider-monthly","name":"Cosmos Standard","priceUsd":25,"duration":"1 month","access":"Team workspace; up to 50 seats","status":"On request","summaryEligible":true,"note":"Includes $20 usage across models, Context Engine and compute; top-ups cost extra."}
  ],
  "trae": [
    {"id":"trae-provider-monthly","name":"TRAE Pro","priceUsd":25,"duration":"1 month","access":"Own account","status":"On request","summaryEligible":true,"note":"Includes $20 monthly model usage; auto-renewing monthly plan."}
  ],
  "openhands": [
    {"id":"openhands-provider-monthly","name":"OpenHands Teams","priceUsd":623.75,"duration":"1 month","access":"Self-hosted; up to 10 users","status":"On request","summaryEligible":true,"note":"Additional seats are quoted separately; 5,000-session monthly cap; infrastructure and model usage are separate."}
  ],
  "opencode": [
    {"id":"opencode-provider-monthly","name":"OpenCode Go","priceUsd":12.5,"duration":"1 month","access":"Personal coding-model subscription","status":"On request","summaryEligible":true,"note":"Curated models and rolling usage limits; additional credits cost extra."}
  ],
  "testsprite": [
    {"id":"testsprite-provider-monthly","name":"TestSprite Starter","priceUsd":23.75,"duration":"1 month","access":"One environment","status":"On request","summaryEligible":true,"note":"Regular monthly rate after first-month promotion; 400 credits per month."}
  ],
  "dyad": [
    {"id":"dyad-provider-monthly","name":"Dyad Pro","priceUsd":25,"duration":"1 month","access":"Personal account","status":"On request","summaryEligible":true,"note":"Includes 200 AI credits per month; additional credits cost extra."}
  ],
  "dreamflow": [
    {"id":"dreamflow-provider-monthly","name":"Dreamflow Hobby","priceUsd":25,"duration":"1 month","access":"Personal account","status":"On request","summaryEligible":true,"note":"Includes 100 credits for creating and publishing a single app."}
  ],
  "builder": [
    {"id":"builder-provider-monthly","name":"Builder.io Code Pro","priceUsd":30,"duration":"1 month","access":"Per user","status":"On request","summaryEligible":true,"note":"500 monthly Agent Credits; additional usage costs extra."}
  ],
  "langsmith": [
    {"id":"langsmith-provider-monthly","name":"LangSmith Plus","priceUsd":48.75,"duration":"1 month","access":"Per seat","status":"On request","summaryEligible":true,"note":"Platform seat fee; tracing, deployment, evaluations and model usage may add charges."}
  ],
  "langfuse": [
    {"id":"langfuse-provider-monthly","name":"Langfuse Core","priceUsd":36.25,"duration":"1 month","access":"Cloud project; unlimited users","status":"On request","summaryEligible":true,"note":"100,000 units monthly and 90-day data access; additional units cost extra."}
  ],
  "activepieces": [
    {"id":"activepieces-provider-monthly","name":"Activepieces Plus","priceUsd":25,"duration":"1 month","access":"Flat workspace price; up to 5 users","status":"On request","summaryEligible":true,"note":"10,000 credits monthly; additional usage costs extra."}
  ],
  "mindstudio": [
    {"id":"mindstudio-provider-monthly","name":"MindStudio Individual","priceUsd":25,"duration":"1 month","access":"Own workspace","status":"On request","summaryEligible":true,"note":"Platform fee for unlimited agents and runs; AI model usage is billed separately."}
  ],
  "textcortex": [
    {"id":"textcortex-provider-monthly","name":"TextCortex Premium","priceUsd":37.49,"duration":"1 month","access":"Per user","status":"On request","summaryEligible":true,"note":"Monthly billing with included model usage subject to limits."}
  ],
  "firecrawl": [
    {"id":"firecrawl-provider-monthly","name":"Firecrawl Hobby","priceUsd":23.75,"duration":"1 month","access":"Own API account","status":"On request","summaryEligible":true,"note":"5,000 credits monthly; paid-plan top-ups and additional usage cost extra."}
  ],
  "bricks": [
    {"id":"bricks-provider-monthly","name":"Bricks Premium","priceUsd":31.25,"duration":"1 month","access":"Per user","status":"On request","summaryEligible":true,"note":"200 AI messages per month."}
  ],
  "polymer": [
    {"id":"polymer-provider-monthly","name":"Polymer Starter — individual","priceUsd":25,"duration":"1 month","access":"Individual license","status":"On request","summaryEligible":true,"note":"Manual syncing; individual subscription rather than team plan."}
  ],
  "better-analyst": [
    {"id":"better-analyst-provider-monthly","name":"Better Analyst Starter","priceUsd":25,"duration":"1 month","access":"Individual account","status":"On request","summaryEligible":true,"note":"Regular monthly rate after any introductory discount; 250 messages and 2,500 AI Actions."}
  ],
  "roboflow": [
    {"id":"roboflow-provider-monthly","name":"Roboflow Core — 20 credits","priceUsd":48.75,"duration":"1 month","access":"Own workspace","status":"On request","summaryEligible":true,"note":"Monthly billing; 10 included free-tier credits plus 10 paid credits. Additional usage costs extra."}
  ],
  "ollama": [
    {"id":"ollama-provider-monthly","name":"Ollama Pro","priceUsd":25,"duration":"1 month","access":"Personal account; cloud inference","status":"On request","summaryEligible":true,"note":"Includes $60 cloud usage credits monthly; local models remain free."}
  ],
  "lm-studio": [
    {"id":"lm-studio-provider-monthly","name":"LM Studio Bionic+","priceUsd":25,"duration":"1 month","access":"Personal account; optional cloud inference","status":"On request","summaryEligible":true,"note":"Monthly cloud plan; local model execution remains free. Additional cloud credits cost extra."}
  ],
  "anythingllm": [
    {"id":"anythingllm-provider-monthly","name":"AnythingLLM Cloud","priceUsd":62.5,"duration":"1 month","access":"Hosted private instance for small teams","status":"On request","summaryEligible":true,"note":"Bring an LLM API key; provider model usage is separate. Desktop/self-hosted versions remain free."}
  ],
  "hugging-face": [
    {"id":"hugging-face-provider-monthly","name":"Hugging Face PRO","priceUsd":11.25,"duration":"1 month","access":"Individual account","status":"On request","summaryEligible":true,"note":"Includes $2 monthly inference credits; compute and additional usage are billed separately."}
  ],
  "braintrust": [
    {"id":"braintrust-provider-monthly","name":"Braintrust Pro","priceUsd":311.25,"duration":"1 month","access":"Team workspace","status":"On request","summaryEligible":true,"note":"Includes $100 model credits, 5 GB processed data and 50k scores; additional usage/storage costs extra."}
  ],
  "modal-ai": [
    {"id":"modal-ai-provider-monthly","name":"Modal Team","priceUsd":312.5,"duration":"1 month","access":"Workspace; unlimited seats","status":"On request","summaryEligible":true,"note":"Platform fee plus compute; includes $100 monthly compute credits."}
  ],
  "helicone": [
    {"id":"helicone-provider-monthly","name":"Helicone Pro","priceUsd":98.75,"duration":"1 month","access":"Team workspace","status":"On request","summaryEligible":true,"note":"Subscription fee with usage-based request and storage charges in addition."}
  ],
  "prisma-ai-gateway": [
    {"id":"prisma-ai-gateway-provider-monthly","name":"Prisma AIRS AI Gateway Production","priceUsd":61.25,"duration":"1 month","access":"Own workspace","status":"On request","summaryEligible":true,"note":"100,000 recorded logs monthly; provider inference and log overages cost extra."}
  ],
  "coderabbit": [
    {"id":"coderabbit-provider-monthly","name":"CodeRabbit Essentials","priceUsd":37.5,"duration":"1 month","access":"Per contributing developer","status":"On request","summaryEligible":true,"note":"Monthly billing. Usage-based reviews, security scans and cloud agents are charged separately."}
  ],
  "zapier": [
    {"id":"zapier-provider-monthly","name":"Zapier Professional","priceUsd":37.49,"duration":"1 month","access":"Own workspace; entry task tier","status":"On request","summaryEligible":true,"note":"Monthly billing. Task limits and additional usage depend on the selected tier."}
  ],
  "browse-ai": [
    {"id":"browse-ai-provider-annual","name":"Browse AI Personal — annual","priceUsd":285,"duration":"1 year total","access":"Own workspace","status":"On request","summaryEligible":true,"note":"Full annual total, billed upfront; includes 12,000 annual credits upfront."}
  ],
  "codex": [
    {"id":"codex-provider-monthly","name":"ChatGPT Plus — includes Codex","priceUsd":25,"duration":"1 month","access":"Personal ChatGPT account","status":"On request","summaryEligible":true,"note":"Codex is included in the Plus bundle, subject to shared usage limits; additional credits cost extra."}
  ],
  "botpress": [
    {"id":"botpress-provider-annual","name":"Botpress Plus — annual","priceUsd":2250,"duration":"1 year total","access":"Own workspace","status":"On request","summaryEligible":true,"note":"Full annual total, billed upfront. Includes 250 conversations and $25 AI usage monthly; overages cost extra."}
  ],
  "codeant": [
    {"id":"codeant-provider-monthly","name":"CodeAnt AI Code Review","priceUsd":37.5,"duration":"1 month","access":"Per user","status":"On request","summaryEligible":true,"note":"Monthly code-review subscription. Security, quality, metrics and pentesting are separate products."}
  ],
  "base44": [
    {"id":"base44-provider-monthly","name":"Base44 Starter","priceUsd":25,"duration":"1 month","access":"Own account","status":"On request","summaryEligible":true,"note":"Monthly billing; credits are metered and do not roll over."}
  ],
  "emergent": [
    {"id":"emergent-provider-annual","name":"Emergent Standard — annual","priceUsd":300,"duration":"1 year total","access":"Own account","status":"On request","summaryEligible":true,"note":"Full annual total, billed upfront; 100 build credits monthly. Deployments consume credits."}
  ],
  "dify": [
    {"id":"dify-provider-annual","name":"Dify Professional — annual","priceUsd":737.5,"duration":"1 year total","access":"Per workspace","status":"On request","summaryEligible":true,"note":"Annual workspace total; includes 5,000 message credits monthly. Bring your own provider key after included usage."}
  ],
  "hex": [
    {"id":"hex-provider-monthly","name":"Hex Professional","priceUsd":45,"duration":"1 month","access":"Per editor","status":"On request","summaryEligible":true,"note":"Professional editor plan includes standard agent credits and medium compute; other usage may add charges."}
  ],
  "quadratic": [
    {"id":"quadratic-provider-annual","name":"Quadratic Pro — annual","priceUsd":270,"duration":"1 year total","access":"Per user; billed for the workspace team","status":"On request","summaryEligible":true,"note":"Full annual total, billed upfront per user; includes $20 AI credits per month."}
  ],
  "powerdrill": [
    {"id":"powerdrill-provider-annual","name":"Powerdrill Bloom Pro — annual","priceUsd":248.75,"duration":"1 year total","access":"Individual account","status":"On request","summaryEligible":true,"note":"Regular annual renewal total; first-year promotions may differ. Includes daily and monthly credits."}
  ],
  "deepnote": [
    {"id":"deepnote-provider-annual","name":"Deepnote Team — annual","priceUsd":585,"duration":"1 year total","access":"Per editor","status":"On request","summaryEligible":true,"note":"Full annual total, billed upfront per editor. Includes AI and compute allowances; additional usage costs extra."}
  ],
  "numerous": [
    {"id":"numerous-provider-annual","name":"Numerous Personal — annual","priceUsd":150,"duration":"1 year total","access":"Individual spreadsheet add-on subscription","status":"On request","summaryEligible":true,"note":"Full annual total, billed upfront. Entry allowance: 500,000 input/output characters and 500 formula generations."}
  ],
  "thoughtspot": [
    {"id":"thoughtspot-provider-annual","name":"ThoughtSpot Essentials — 5 seats annual","priceUsd":1875,"duration":"1 year total","access":"Minimum 5-user team","status":"On request","summaryEligible":true,"note":"Full annual minimum for 5 users, billed upfront. More users and deployment requirements change the total."}
  ],
  "ragflow": [
    {"id":"ragflow-provider-monthly","name":"RAGFlow Cloud Starter","priceUsd":36.25,"duration":"1 month","access":"Workspace; up to 5 team members","status":"On request","summaryEligible":true,"note":"Includes 5,000 credits monthly and 5 GB dataset storage. Provider listing shows promotional pricing; confirm renewal terms."}
  ],
  "docker-gordon": [
    {"id":"docker-gordon-provider-monthly","name":"Docker Gordon Pro","priceUsd":25,"duration":"1 month","access":"Per user","status":"On request","summaryEligible":true,"note":"Paid Gordon usage tier; base Gordon access is included free with Docker. Usage limits apply."}
  ],
  "bito": [
    {"id":"bito-provider-monthly","name":"Bito AI Code Reviews Team","priceUsd":18.75,"duration":"1 month","access":"Per seat; up to 25 seats","status":"On request","summaryEligible":true,"note":"5,000 reviewed lines per seat monthly; additional lines and other Bito products cost extra."}
  ],
  "chatbase": [
    {"id":"chatbase-local-offer","name":"Chatbase Pro — monthly coupon","priceUsd":70.51,"duration":"1 month","access":"Private coupon redemption on own account","status":"On request","summaryEligible":true,"note":"One-month Pro coupon; confirm eligibility and redemption requirements before payment."}
  ],
  "zed": [
    {"id":"zed-local-offer","name":"Zed Pro Education — supplied account","priceUsd":7.68,"duration":"1 year total","access":"Supplied GitHub login and education Pro account","status":"On request","summaryEligible":true,"note":"Education account with GitHub login supplied by seller. Confirm eligibility, ownership restrictions and support before payment."}
  ],
  "notion-ai": [
    {"id":"notion-ai-1","name":"Notion Business Personal Account","priceUsd":10.35,"duration":"3 months","access":"Seller claims personal account","status":"On request","summaryEligible":true,"note":"Confirm AI allowance, workspace ownership and support period; some longer offers have only a three-month warranty."},
    {"id":"notion-ai-4","name":"Notion Business","priceUsd":9.9,"duration":"3 months","access":"Invitation / team workspace","status":"On request","summaryEligible":true,"note":"Confirm AI allowance, workspace ownership and support period; some longer offers have only a three-month warranty."}
  ],
  "gemini-notebook": [
    {"id":"gemini-notebook-1","name":"Google AI Pro (includes Gemini Notebook)","priceUsd":25.19,"duration":"1 month","access":"Personal Google account","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans. Included in a Google AI bundle; this is not a standalone Notebook subscription."}
  ],
  "grammarly": [
    {"id":"grammarly-1","name":"Grammarly Premium","priceUsd":4.5,"duration":"1 month","access":"Seller claims private","status":"On request","summaryEligible":true,"note":""}
  ],
  "quillbot": [
    {"id":"quillbot-1","name":"QuillBot Premium","priceUsd":2.24,"duration":"30 days","access":"One device; subtype unspecified","status":"On request","summaryEligible":true,"note":"One-device Premium access; login details cannot be changed. Confirm ownership and usage limits before payment."}
  ],
  "gamma": [
    {"id":"gamma-1","name":"Gamma Pro","priceUsd":103.47,"duration":"1 year","access":"Seller claims private","status":"On request","summaryEligible":true,"note":""}
  ],
  "otter": [
    {"id":"otter-3","name":"Otter Pro (yearly)","priceUsd":112.02,"duration":"1 year","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"otter-4","name":"Otter Business (monthly)","priceUsd":35.54,"duration":"1 month","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"otter-5","name":"Otter Business (yearly)","priceUsd":269.48,"duration":"1 year","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "scispace": [
    {"id":"scispace-1","name":"Premium 1200 Credits","priceUsd":17.09,"duration":"1 month","access":"Private account","status":"On request","summaryEligible":true,"note":""}
  ],
  "semrush": [
    {"id":"semrush-1","name":"Semrush Pro","priceUsd":6.75,"duration":"1 month","access":"Seller claims private","status":"On request","summaryEligible":true,"note":""}
  ],
  "adobe-firefly": [
    {"id":"adobe-firefly-1","name":"Adobe Firefly Mobile Monthly","priceUsd":5.85,"duration":"1 month","access":"Apple ID / official mobile in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"adobe-firefly-2","name":"Adobe Firefly Mobile Yearly","priceUsd":58.03,"duration":"1 year total","access":"Apple ID / official mobile in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "heygen": [
    {"id":"heygen-2","name":"Creator","priceUsd":25.19,"duration":"1 month","access":"Private","status":"On request","summaryEligible":true,"note":"Confirm the exact plan and credits; some tier labels conflict."}
  ],
  "kling": [
    {"id":"kling-1","name":"Standard","priceUsd":8.32,"duration":"1 month","access":"Private account","status":"On request","summaryEligible":true,"note":"Private monthly access. The listing describes 25-day replacement coverage; confirm the final support window and credit allowance before payment."},
    {"id":"kling-pro-monthly","name":"Pro","priceUsd":31.49,"duration":"1 month","access":"Private account","status":"On request","summaryEligible":true,"note":"Private monthly access. The listing describes 25-day replacement coverage; confirm the final support window and credit allowance before payment."}
  ],
  "google-flow": [
    {"id":"google-flow-1","name":"Google AI Plus — includes Flow","priceUsd":6.3,"duration":"1 month","access":"Own Google account","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans. Included in a Google AI bundle; this is not a standalone Flow subscription."},
    {"id":"google-flow-2","name":"Google AI Pro — includes Flow","priceUsd":25.19,"duration":"1 month","access":"Own Google account","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans. Included in a Google AI bundle; this is not a standalone Flow subscription."}
  ],
  "capcut": [
    {"id":"capcut-1","name":"Pro Monthly Subscription","priceUsd":9.9,"duration":"1 month","access":"Official Pakistan in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans. Confirm app/platform compatibility, account ownership and the full support period."},
    {"id":"capcut-2","name":"Standard Monthly Subscription","priceUsd":5.4,"duration":"1 month","access":"Official Pakistan in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans. Confirm app/platform compatibility, account ownership and the full support period."},
    {"id":"capcut-3","name":"Standard Yearly Subscription","priceUsd":31.04,"duration":"12 months","access":"Official Pakistan in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans. Confirm app/platform compatibility, account ownership and the full support period."},
    {"id":"capcut-4","name":"Pro","priceUsd":5.4,"duration":"1 month","access":"Pre-made account","status":"On request","summaryEligible":true,"note":"Confirm app/platform compatibility, account ownership and the full support period."},
    {"id":"capcut-5","name":"Pro","priceUsd":31.49,"duration":"6 months","access":"Pre-made account","status":"On request","summaryEligible":true,"note":"Confirm app/platform compatibility, account ownership and the full support period."},
    {"id":"capcut-6","name":"Pro","priceUsd":58.48,"duration":"12 months","access":"Pre-made account","status":"On request","summaryEligible":true,"note":"Confirm app/platform compatibility, account ownership and the full support period."}
  ],
  "udio": [
    {"id":"udio-1","name":"Udio Standard Monthly","priceUsd":13.05,"duration":"1 month","access":"Apple ID / official mobile in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"udio-2","name":"Udio Standard Annual","priceUsd":112.02,"duration":"1 year total","access":"Apple ID / official mobile in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"udio-3","name":"Udio Pro Monthly","priceUsd":35.54,"duration":"1 month","access":"Apple ID / official mobile in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "hailuo": [
    {"id":"hailuo-2","name":"Hailuo Standard","priceUsd":11.25,"duration":"1 month","access":"Private account","status":"On request","summaryEligible":true,"note":"Private Standard access for one month. Confirm generation limits and the replacement/support period before payment."}
  ],
  "cursor": [
    {"id":"cursor-1","name":"Cursor Pro","priceUsd":177.7,"duration":"12 months","access":"Seller says own email; existing or new account","status":"On request","summaryEligible":true,"note":""}
  ],
  "replit": [
    {"id":"replit-1","name":"Replit Core","priceUsd":78.73,"duration":"12 months","access":"Existing or new account; sharing unspecified","status":"On request","summaryEligible":true,"note":"Annual Core access on an existing or new account. Confirm ownership and usage credits; the listed support window is three months and must be agreed before payment."}
  ],
  "lovable": [
    {"id":"lovable-2","name":"Lovable Pro — 100 credits","priceUsd":4.49,"duration":"1 month","access":"Full private, seller claim","status":"On request","summaryEligible":true,"note":"100-credit monthly private account. Confirm account ownership, renewal and replacement coverage before payment."}
  ],
  "bolt": [
    {"id":"bolt-1","name":"Bolt.new Pro annual coupon","priceUsd":38.45,"duration":"1 year","access":"Private redemption on own account","status":"On request","summaryEligible":true,"note":"Annual Pro coupon for your own account. Confirm eligibility, token allowance and redemption conditions before payment."}
  ],
  "n8n": [
    {"id":"n8n-2","name":"n8n Cloud Starter annual voucher","priceUsd":32.04,"duration":"1 year","access":"Own-account redemption","status":"On request","summaryEligible":true,"note":"Annual Cloud Starter voucher for your own account. Confirm redemption eligibility and execution limits; VPS hosting is not included."}
  ],
  "gumloop": [
    {"id":"gumloop-1","name":"Gumloop Pro 20k Credits annual coupon","priceUsd":57.68,"duration":"1 year","access":"Own-account redemption","status":"On request","summaryEligible":true,"note":"Annual Pro 20k-credit coupon for your own account. Confirm credit reset rules, eligibility and redemption conditions before payment."}
  ],
  "taskade": [
    {"id":"taskade-1","name":"Taskade Pro (Monthly)","priceUsd":22.04,"duration":"1 month","access":"Direct in-app subscription on Apple account","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "reclaim": [
    {"id":"reclaim-1","name":"Reclaim.ai Starter coupon","priceUsd":21.78,"duration":"1 year","access":"Own-account redemption per catalog","status":"On request","summaryEligible":true,"note":"Annual Starter coupon for your own account. Confirm eligibility, allowance and redemption conditions before payment."}
  ],
  "manus": [
    {"id":"manus-1","name":"Manus Basic - Monthly","priceUsd":22.04,"duration":"1 month","access":"Direct in-app subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"manus-2","name":"Manus Plus - Monthly","priceUsd":44.54,"duration":"1 month","access":"Direct in-app subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "genspark": [
    {"id":"genspark-1","name":"Plus Monthly 10K Credits","priceUsd":31.04,"duration":"1 month","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"genspark-2","name":"Pro Monthly 300K Credits","priceUsd":674.37,"duration":"1 month","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "monica": [
    {"id":"monica-1","name":"Monica Pro Monthly","priceUsd":13.05,"duration":"1 month","access":"Own app / Apple account","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"monica-2","name":"Monica Pro Yearly","priceUsd":112.02,"duration":"1 year","access":"Own app / Apple account","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"monica-3","name":"Monica Pro+ Monthly","priceUsd":22.04,"duration":"1 month","access":"Own app / Apple account","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"monica-4","name":"Monica Pro+ Yearly","priceUsd":224.49,"duration":"1 year","access":"Own app / Apple account","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"monica-5","name":"Unlimited Monthly","priceUsd":31.04,"duration":"1 month","access":"Own app / Apple account","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "merlin": [
    {"id":"merlin-1","name":"Monthly Merlin Unlimited","priceUsd":17.55,"duration":"1 month","access":"Own app / Apple account","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"merlin-2","name":"Yearly Merlin Unlimited","priceUsd":179.5,"duration":"1 year","access":"Own app / Apple account","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"merlin-3","name":"Yearly offer","priceUsd":112.02,"duration":"1 year","access":"Own app / Apple account","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"merlin-4","name":"TopUp - 3000 Queries, 30 Days","priceUsd":5.85,"duration":"30 days","access":"Own app / Apple account","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "sider": [
    {"id":"sider-1","name":"Sider Pocket Plan Yearly","priceUsd":58.03,"duration":"1 year","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"sider-2","name":"Sider Unlimited Plan Monthly","priceUsd":35.54,"duration":"1 month","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"sider-3","name":"Sider Plus Plan Monthly","priceUsd":44.54,"duration":"1 month","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"sider-4","name":"Sider Plus Plan Yearly","priceUsd":359.46,"duration":"1 year","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"sider-5","name":"Sider Pro Plan Monthly","priceUsd":80.53,"duration":"1 month","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"sider-6","name":"Sider Pro Plan Yearly","priceUsd":809.34,"duration":"1 year","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "kimi": [
    {"id":"kimi-3","name":"Moderato Annual Pass","priceUsd":224.49,"duration":"1 year","access":"Own app / Apple account","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"kimi-4","name":"Allegretto Annual Pass","priceUsd":449.43,"duration":"1 year","access":"Own app / Apple account","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "julius": [
    {"id":"julius-1","name":"Basic Monthly","priceUsd":22.04,"duration":"1 month","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"julius-2","name":"Basic Annually","priceUsd":224.49,"duration":"1 year","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "adcreative": [
    {"id":"adcreative-1","name":"Pro Access (1 month)","priceUsd":17.55,"duration":"1 month","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"adcreative-2","name":"Pro Access (1 week)","priceUsd":8.55,"duration":"1 week","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "framer": [
    {"id":"framer-1","name":"Framer Pro","priceUsd":32.39,"duration":"12 months","access":"Existing or new account; sharing unspecified","status":"On request","summaryEligible":true,"note":"Annual Pro access on an existing or new account. Confirm ownership and hosting limits; the listed support window is three months and must be agreed before payment."}
  ],
  "picsart": [
    {"id":"picsart-1","name":"Picsart Pro Monthly","priceUsd":3.15,"duration":"1 month","access":"Apple ID / official mobile in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"picsart-2","name":"Picsart Pro Annual","priceUsd":21.59,"duration":"1 year total","access":"Apple ID / official mobile in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "luminar": [
    {"id":"luminar-1","name":"Luminar Neo Perpetual Desktop","priceUsd":115.51,"duration":"Perpetual core desktop license","access":"Up to 2 Windows / macOS computers","status":"On request","summaryEligible":true,"note":"Perpetual core desktop licence for two computers; generative AI is included for 365 days only."}
  ],
  "remini": [
    {"id":"remini-2","name":"Remini Pro Weekly","priceUsd":13.05,"duration":"1 week","access":"Apple ID / official mobile in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"remini-3","name":"Remini Lite Yearly","priceUsd":44.54,"duration":"1 year total","access":"Apple ID / official mobile in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "dzine": [
    {"id":"dzine-1","name":"Master","priceUsd":22.49,"duration":"1 month","access":"Private","status":"On request","summaryEligible":true,"note":""}
  ],
  "openart": [
    {"id":"openart-advanced-monthly","name":"Advanced","priceUsd":24.74,"duration":"1 month","access":"Private account","status":"On request","summaryEligible":true,"note":"Monthly Advanced access; confirm included credits. The listing describes 25-day replacement coverage and no credit top-up; confirm support terms before payment."},
    {"id":"openart-infinite-monthly","name":"Infinite","priceUsd":49.48,"duration":"1 month","access":"Private account","status":"On request","summaryEligible":true,"note":"Monthly Infinite access; confirm included credits. The listing describes 25-day replacement coverage and no credit top-up; confirm support terms before payment."}
  ],
  "seaart": [
    {"id":"seaart-1","name":"Beginner Plan Monthly","priceUsd":5.85,"duration":"1 month","access":"Apple ID / official mobile in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"seaart-2","name":"Beginner Plan Yearly","priceUsd":44.54,"duration":"1 year total","access":"Apple ID / official mobile in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"seaart-3","name":"Standard Plan Monthly","priceUsd":15.75,"duration":"1 month","access":"Apple ID / official mobile in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "starryai": [
    {"id":"starryai-1","name":"1 Month Pro","priceUsd":9.45,"duration":"1 month","access":"Apple ID / official mobile in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"starryai-2","name":"1 Week Unlimited Pro","priceUsd":8.55,"duration":"1 week","access":"Apple ID / official mobile in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "d-id": [
    {"id":"d-id-1","name":"Lite Monthly Pack 1","priceUsd":6.75,"duration":"1 month","access":"Apple ID / official mobile in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"d-id-2","name":"Lite Yearly Tier 1","priceUsd":67.03,"duration":"1 year total","access":"Apple ID / official mobile in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"d-id-3","name":"Pro Monthly Pack 1","priceUsd":35.54,"duration":"1 month","access":"Apple ID / official mobile in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "steve": [
    {"id":"steve-1","name":"Mobile iStock Monthly","priceUsd":22.04,"duration":"1 month","access":"Apple ID / official in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"steve-2","name":"Mobile iStock Yearly","priceUsd":134.52,"duration":"1 year total","access":"Apple ID / official in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "filmora": [
    {"id":"filmora-1","name":"Annual Subscription","priceUsd":58.03,"duration":"1 year total","access":"Apple ID / official in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans. macOS in-app and portal offers differ; confirm version, AI allowance and upgrade rights."},
    {"id":"filmora-2","name":"Lifetime License","priceUsd":89.53,"duration":"Lifetime license as labeled","access":"Apple ID / official in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans. macOS in-app and portal offers differ; confirm version, AI allowance and upgrade rights."}
  ],
  "pollo": [
    {"id":"pollo-1","name":"Lite Monthly","priceUsd":17.55,"duration":"1 month","access":"Apple ID / official in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"pollo-2","name":"Lite Annual","priceUsd":134.52,"duration":"1 year total","access":"Apple ID / official in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"pollo-3","name":"Pro Monthly","priceUsd":35.54,"duration":"1 month","access":"Apple ID / official in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "moises": [
    {"id":"moises-2","name":"Premium Yearly","priceUsd":28.34,"duration":"1 year total","access":"Apple ID / official in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"moises-3","name":"Pro Monthly","priceUsd":20.24,"duration":"1 month","access":"Apple ID / official in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "naturalreader": [
    {"id":"naturalreader-1","name":"Premium Monthly","priceUsd":6.97,"duration":"1 month","access":"Apple ID / official in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans. Personal reading plan; commercial voiceover rights require separate confirmation."},
    {"id":"naturalreader-2","name":"Plus Monthly","priceUsd":26.54,"duration":"1 month","access":"Apple ID / official in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans. Personal reading plan; commercial voiceover rights require separate confirmation."},
    {"id":"naturalreader-3","name":"Premium Yearly","priceUsd":41.39,"duration":"1 year total","access":"Apple ID / official in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans. Personal reading plan; commercial voiceover rights require separate confirmation."}
  ],
  "warp": [
    {"id":"warp-1","name":"Warp Build annual voucher","priceUsd":32.04,"duration":"1 year","access":"Private redemption on own account","status":"On request","summaryEligible":true,"note":"Annual Build voucher for your own account. Confirm eligibility, monthly credits and redemption conditions before payment."}
  ],
  "magic-patterns": [
    {"id":"magic-patterns-1","name":"Magic Patterns Starter annual coupon","priceUsd":28.19,"duration":"1 year","access":"Private redemption on own account; card/VCC required","status":"On request","summaryEligible":true,"note":"Annual Starter/Hobby coupon for your own account, not Business. A card or virtual card is required; confirm redemption eligibility before payment."}
  ],
  "antigravity": [
    {"id":"antigravity-1","name":"Google AI Pro including Antigravity","priceUsd":25.19,"duration":"1 month","access":"Direct Google account subscription; rate limits apply","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans. Included in a Google AI bundle; usage limits apply."},
    {"id":"antigravity-2","name":"Google AI Ultra 5x including Antigravity","priceUsd":98.97,"duration":"1 month","access":"Direct Google account subscription; rate limits apply","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans. Included in a Google AI bundle; usage limits apply."},
    {"id":"antigravity-3","name":"Google AI Ultra 20x including Antigravity","priceUsd":251.48,"duration":"1 month","access":"Direct Google account subscription; rate limits apply","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans. Included in a Google AI bundle; usage limits apply."}
  ],
  "sudowrite": [
    {"id":"sudowrite-1","name":"Professional Monthly","priceUsd":44.54,"duration":"1 month","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "knowt": [
    {"id":"knowt-1","name":"Student Ultra Monthly","priceUsd":17.55,"duration":"1 month","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app Student Ultra subscription. Separate same-name offers differ by account; confirm checkout eligibility and the applicable plan before payment."},
    {"id":"knowt-2","name":"Student Ultra Monthly","priceUsd":22.04,"duration":"1 month","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app Student Ultra subscription. Separate same-name offers differ by account; confirm checkout eligibility and the applicable plan before payment."},
    {"id":"knowt-3","name":"Student Ultra Annual","priceUsd":58.03,"duration":"1 year","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app Student Ultra subscription. Separate same-name offers differ by account; confirm checkout eligibility and the applicable plan before payment."},
    {"id":"knowt-4","name":"Student Ultra Annual","priceUsd":112.02,"duration":"1 year","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app Student Ultra subscription. Separate same-name offers differ by account; confirm checkout eligibility and the applicable plan before payment."},
    {"id":"knowt-5","name":"Student Ultra Annual","priceUsd":134.52,"duration":"1 year","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app Student Ultra subscription. Separate same-name offers differ by account; confirm checkout eligibility and the applicable plan before payment."},
    {"id":"knowt-6","name":"Student Ultra Annual","priceUsd":179.5,"duration":"1 year","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app Student Ultra subscription. Separate same-name offers differ by account; confirm checkout eligibility and the applicable plan before payment."}
  ],
  "studyfetch": [
    {"id":"studyfetch-1","name":"StudyFetch Premium Monthly","priceUsd":22.04,"duration":"1 month","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"studyfetch-2","name":"StudyFetch Premium Quarterly","priceUsd":35.54,"duration":"3 months","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"studyfetch-3","name":"StudyFetch Premium Yearly","priceUsd":112.02,"duration":"1 year","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "turbo": [
    {"id":"turbo-1","name":"Turbolearn Unlimited (1 Month)","priceUsd":17.55,"duration":"1 month","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app Unlimited subscription. Separate same-name offers differ by account; confirm checkout eligibility and the applicable plan before payment."},
    {"id":"turbo-2","name":"Turbolearn Unlimited (1 Month)","priceUsd":22.04,"duration":"1 month","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app Unlimited subscription. Separate same-name offers differ by account; confirm checkout eligibility and the applicable plan before payment."},
    {"id":"turbo-4","name":"Turbolearn Unlimited (1 Year)","priceUsd":89.53,"duration":"1 year","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app Unlimited subscription. Separate same-name offers differ by account; confirm checkout eligibility and the applicable plan before payment."},
    {"id":"turbo-5","name":"Turbolearn Unlimited (1 Year)","priceUsd":112.02,"duration":"1 year","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app Unlimited subscription. Separate same-name offers differ by account; confirm checkout eligibility and the applicable plan before payment."},
    {"id":"turbo-6","name":"Turbolearn Unlimited (1 Year)","priceUsd":134.52,"duration":"1 year","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app Unlimited subscription. Separate same-name offers differ by account; confirm checkout eligibility and the applicable plan before payment."}
  ],
  "gauth": [
    {"id":"gauth-1","name":"Gauth PLUS - Monthly","priceUsd":2.25,"duration":"1 month","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"gauth-2","name":"Gauth PLUS - Quarterly","priceUsd":5.85,"duration":"3 months","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"gauth-3","name":"Gauth PLUS - Annual","priceUsd":15.75,"duration":"1 year","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "immersive-translate": [
    {"id":"immersive-translate-1","name":"Monthly Pro","priceUsd":13.05,"duration":"1 month","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"immersive-translate-2","name":"Annual Pro","priceUsd":89.53,"duration":"1 year","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"immersive-translate-3","name":"Max Monthly Membership","priceUsd":35.54,"duration":"1 month","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "granola": [
    {"id":"granola-1","name":"Granola Business coupon","priceUsd":14.09,"duration":"3 months","access":"Own-account redemption per catalog","status":"On request","summaryEligible":true,"note":"Business coupon for your own account. Confirm eligibility, allowance and redemption conditions before payment."},
    {"id":"granola-2","name":"Granola Business coupon","priceUsd":21.78,"duration":"1 year","access":"Own-account redemption per catalog","status":"On request","summaryEligible":true,"note":"Business coupon for your own account. Confirm eligibility, allowance and redemption conditions before payment."}
  ],
  "askyourpdf": [
    {"id":"askyourpdf-1","name":"Premium Monthly","priceUsd":13.05,"duration":"1 month","access":"Direct in-app subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"askyourpdf-2","name":"Pro Monthly","priceUsd":17.55,"duration":"1 month","access":"Direct in-app subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"askyourpdf-3","name":"Premium Annual","priceUsd":112.02,"duration":"1 year","access":"Direct in-app subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"askyourpdf-4","name":"Pro Annual","priceUsd":134.52,"duration":"1 year","access":"Direct in-app subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "speak": [
    {"id":"speak-1","name":"Monthly Premium","priceUsd":13.05,"duration":"1 month","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"speak-2","name":"Annual Premium","priceUsd":58.03,"duration":"1 year","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"speak-3","name":"Monthly Premium Plus","priceUsd":67.03,"duration":"1 month","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "microsoft-copilot": [
    {"id":"microsoft-copilot-current-1","name":"Microsoft 365 Premium — includes Copilot","priceUsd":24.99,"duration":"1 month","access":"Personal Microsoft account; AI benefits for subscription owner","status":"On request","summaryEligible":true,"note":"Includes Microsoft 365 apps and advanced Copilot; usage and regional eligibility apply."}
  ],
  "poe": [
    {"id":"poe-current-1","name":"Poe subscription — entry tier","priceUsd":6.24,"duration":"1 month","access":"Individual Poe account","status":"On request","summaryEligible":true,"note":"Entry subscription with compute points; confirm the selected point allowance and eligible models."}
  ],
  "mistral-vibe": [
    {"id":"mistral-vibe-current-1","name":"Pro","priceUsd":18.74,"duration":"1 month","access":"Individual Mistral account","status":"On request","summaryEligible":true,"note":"Vibe access across supported interfaces, subject to fair usage limits; taxes may apply."}
  ],
  "wordtune": [
    {"id":"wordtune-current-1","name":"Premium Monthly","priceUsd":31.04,"duration":"1 month","access":"Own Apple account; official Pakistan in-app subscription","status":"On request","summaryEligible":true,"note":"Pakistan iPhone subscription; confirm compatibility and whether the entitlement covers your intended platform."},
    {"id":"wordtune-current-2","name":"Premium Yearly","priceUsd":134.52,"duration":"1 year total","access":"Own Apple account; official Pakistan in-app subscription","status":"On request","summaryEligible":true,"note":"Full annual payment. Pakistan iPhone subscription; confirm compatibility and platform coverage."}
  ],
  "character-ai": [
    {"id":"character-ai-current-1","name":"(c.ai) lite","priceUsd":6.24,"duration":"1 month","access":"Individual Character.AI account","status":"On request","summaryEligible":true,"note":"Daily premium-style allowance; fewer ads and reduced slow mode. Regional pricing can vary."}
  ],
  "rytr": [
    {"id":"rytr-current-1","name":"Lite","priceUsd":11.25,"duration":"1 month","access":"Individual Rytr account","status":"On request","summaryEligible":true,"note":"Unlimited content characters; connected sources and other AI actions retain plan limits."}
  ],
  "novelcrafter": [
    {"id":"novelcrafter-current-1","name":"Hobbyist","priceUsd":10,"duration":"1 month","access":"Individual account; bring your own AI API key","status":"On request","summaryEligible":true,"note":"AI API/model charges are separate from the Novelcrafter subscription."}
  ],
  "hyperwrite": [
    {"id":"hyperwrite-current-1","name":"Premium","priceUsd":24.99,"duration":"1 month","access":"Individual HyperWrite account","status":"On request","summaryEligible":true,"note":"Includes 250 AI messages per month and three custom personas."}
  ],
  "prowritingaid": [
    {"id":"prowritingaid-current-1","name":"Premium","priceUsd":37.5,"duration":"1 month","access":"Individual ProWritingAid account","status":"On request","summaryEligible":true,"note":"Monthly Premium subscription; advanced analysis and other credit allowances remain plan-dependent."}
  ],
  "trinka": [
    {"id":"trinka-current-1","name":"Premium — annual offer","priceUsd":60,"duration":"1 year total","access":"Individual Trinka account","status":"On request","summaryEligible":true,"note":"Full annual payment for the published promotional offer; confirm promotion availability before payment. Plagiarism credits are separate."}
  ],
  "paperpal": [
    {"id":"paperpal-current-1","name":"Prime","priceUsd":31.25,"duration":"1 month","access":"Individual Paperpal account","status":"On request","summaryEligible":true,"note":"Prime research-writing subscription; Pro and institutional plans are separate."}
  ],
  "smodin": [
    {"id":"smodin-current-1","name":"Starter","priceUsd":150,"duration":"1 year total","access":"Individual Smodin account","status":"On request","summaryEligible":true,"note":"Full annual payment for all 12 months. Tool usage limits apply."}
  ],
  "yomu": [
    {"id":"yomu-current-1","name":"Pro","priceUsd":150,"duration":"1 year total","access":"Individual Yomu account","status":"On request","summaryEligible":true,"note":"Full annual payment; includes 1,000 AI actions per month. The annual monthly equivalent is not a monthly charge."}
  ],
  "originality-ai": [
    {"id":"originality-ai-current-1","name":"Pro","priceUsd":18.69,"duration":"1 month","access":"Individual account; small-team features subject to plan","status":"On request","summaryEligible":true,"note":"Includes 2,000 credits per month; one credit covers 100 words. Extra credits cost more."}
  ],
  "jasper": [
    {"id":"jasper-current-1","name":"Pro","priceUsd":86.25,"duration":"1 month","access":"One Jasper seat","status":"On request","summaryEligible":true,"note":"Monthly billing for one seat; includes two Brand Voices, five Knowledge assets and three Audiences."}
  ],
  "copy-ai": [
    {"id":"copy-ai-current-1","name":"Chat","priceUsd":36.25,"duration":"1 month","access":"Workspace plan; includes five seats","status":"On request","summaryEligible":true,"note":"Unlimited Chat words and projects; workflow-credit plans are separate."}
  ],
  "writesonic": [
    {"id":"writesonic-current-1","name":"Starter","priceUsd":123.75,"duration":"1 month","access":"One user; one project","status":"On request","summaryEligible":true,"note":"Monthly Starter plan for AI search visibility, articles and audits; plan quotas apply."}
  ],
  "surfer": [
    {"id":"surfer-current-1","name":"Discovery","priceUsd":735,"duration":"1 year total","access":"Individual / workspace subscription","status":"On request","summaryEligible":true,"note":"Full annual payment for all 12 months; includes 120 documents and ten tracked pages."}
  ],
  "frase": [
    {"id":"frase-current-1","name":"Starter","priceUsd":61.25,"duration":"1 month","access":"One seat; one site","status":"On request","summaryEligible":true,"note":"Includes ten articles and 50 audit pages per month."}
  ],
  "predis": [
    {"id":"predis-current-1","name":"Core","priceUsd":287.5,"duration":"1 year total","access":"One brand; ten connected social channels","status":"On request","summaryEligible":true,"note":"Full annual promotional payment; includes 1,300 credits per month. No automatic posting; confirm promotion before payment."}
  ],
  "anyword": [
    {"id":"anyword-current-1","name":"Starter","priceUsd":61.25,"duration":"1 month","access":"One seat","status":"On request","summaryEligible":true,"note":"Includes 50 performance predictions and unlimited copy generation; plan allowances apply."}
  ],
  "koala": [
    {"id":"koala-current-1","name":"Starter","priceUsd":31.25,"duration":"1 month","access":"Individual account; one brand","status":"On request","summaryEligible":true,"note":"Includes 45,000 KoalaWriter words and 500 credits per month."}
  ],
  "scalenut": [
    {"id":"scalenut-current-1","name":"Starter","priceUsd":73.75,"duration":"1 month","access":"One workspace; one domain","status":"On request","summaryEligible":true,"note":"Monthly plan for one workspace and one domain; includes ten tracked prompts and five GEO articles per month. Annual early-access pricing is separate."}
  ],
  "neuronwriter": [
    {"id":"neuronwriter-current-1","name":"Bronze","priceUsd":28.75,"duration":"1 month","access":"Account access; two projects","status":"On request","summaryEligible":true,"note":"Includes 25 documents and 15,000 AI credits per month, plus five AI-monitored questions."}
  ],
  "clearscope": [
    {"id":"clearscope-current-1","name":"Essentials","priceUsd":161.25,"duration":"1 month","access":"Workspace subscription","status":"On request","summaryEligible":true,"note":"Includes 50 tracked queries, 50 pages, 20 Discoveries and 20 Drafts per month."}
  ],
  "seowriting": [
    {"id":"seowriting-current-1","name":"Starter","priceUsd":23.75,"duration":"1 month","access":"Individual account","status":"On request","summaryEligible":true,"note":"Includes 50 credits; up to 50 articles subject to the selected generation workflow."}
  ],
  "seo-ai": [
    {"id":"seo-ai-current-1","name":"Single Site","priceUsd":186.25,"duration":"1 month","access":"One website; one language","status":"On request","summaryEligible":true,"note":"Single-site AI SEO subscription; included workflow and usage limits apply."}
  ],
  "hoppy-copy": [
    {"id":"hoppy-copy-current-1","name":"Start","priceUsd":148.75,"duration":"1 month","access":"Up to two users; one content idea feed","status":"On request","summaryEligible":true,"note":"Monthly base package for the first subscriber bracket; publishing subscribers and add-ons change the total."}
  ],
  "elicit": [
    {"id":"elicit-current-1","name":"Plus","priceUsd":165,"duration":"1 year total","access":"Per user; individual Elicit account","status":"On request","summaryEligible":true,"note":"Full annual payment; includes standard research-agent/report usage. Higher review limits require a higher plan."}
  ],
  "consensus": [
    {"id":"consensus-current-1","name":"Pro","priceUsd":25,"duration":"1 month","access":"Individual Consensus research account","status":"On request","summaryEligible":true,"note":"Includes unlimited Pro messages and 15 Deep reviews per month; the research product at consensus.app."}
  ],
  "scite": [
    {"id":"scite-current-1","name":"Basic","priceUsd":25,"duration":"1 month","access":"Individual Scite account","status":"On request","summaryEligible":true,"note":"Includes Assistant and Search, 250 MCP credits per month and collections up to 1,000 papers."}
  ],
  "researchrabbit": [
    {"id":"researchrabbit-current-1","name":"ResearchRabbit+","priceUsd":15.63,"duration":"1 month","access":"Individual researcher account","status":"On request","summaryEligible":true,"note":"Published monthly plan; country-based purchasing-power discounts may change the provider checkout price."}
  ],
  "litmaps": [
    {"id":"litmaps-current-1","name":"Pro — Education","priceUsd":150,"duration":"1 year total","access":"Individual academic account; academic email required","status":"On request","summaryEligible":true,"note":"Full annual payment. This education offer requires an academic email; commercial pricing is separate."}
  ],
  "humata": [
    {"id":"humata-current-1","name":"Expert","priceUsd":12.49,"duration":"1 month","access":"Up to three users","status":"On request","summaryEligible":true,"note":"Includes 500 pages monthly; additional pages are billed separately at the provider's rate."}
  ],
  "anara": [
    {"id":"anara-current-1","name":"Plus","priceUsd":12.5,"duration":"1 month","access":"Per seat; individual Anara account","status":"On request","summaryEligible":true,"note":"Extended AI usage; 100 MB or 600 pages per upload and five collaborators per folder."}
  ],
  "beautiful-ai": [
    {"id":"beautiful-ai-current-1","name":"Pro — monthly","priceUsd":56.25,"duration":"1 month","access":"Individual Beautiful.ai account","status":"On request","summaryEligible":true,"note":"Monthly option for ad hoc projects; includes Pro features. Team seats are a separate offer."}
  ],
  "fireflies": [
    {"id":"fireflies-current-1","name":"Pro","priceUsd":22.5,"duration":"1 month","access":"Per seat","status":"On request","summaryEligible":true,"note":"Unlimited transcription and AI summaries; storage and additional AI-credit limits apply."}
  ],
  "fathom": [
    {"id":"fathom-current-1","name":"Premium","priceUsd":25,"duration":"1 month","access":"Per user; individual Fathom account","status":"On request","summaryEligible":true,"note":"Individual monthly subscription; team plans have separate pricing and minimum-seat requirements."}
  ],
  "motion": [
    {"id":"motion-current-1","name":"Pro AI — Individual","priceUsd":61.25,"duration":"1 month","access":"One individual seat","status":"On request","summaryEligible":true,"note":"Includes 7,500 credits per month; team pricing differs and must not be treated as individual access."}
  ],
  "napkin": [
    {"id":"napkin-current-1","name":"Plus","priceUsd":15,"duration":"1 month","access":"Per person","status":"On request","summaryEligible":true,"note":"Monthly plan includes 10,000 AI credits, PPT/SVG exports and removal of Napkin branding."}
  ],
  "gitmind": [
    {"id":"gitmind-current-1","name":"iOS GitMind Pro Monthly","priceUsd":22.04,"duration":"1 month","access":"Own Apple account; official Pakistan in-app subscription","status":"On request","summaryEligible":true,"note":"Normal Pro tier; StudentBeans offers and additional credit packs are separate."},
    {"id":"gitmind-current-2","name":"iOS GitMind Pro Yearly","priceUsd":89.53,"duration":"1 year total","access":"Own Apple account; official Pakistan in-app subscription","status":"On request","summaryEligible":true,"note":"Full annual payment for normal Pro tier; platform entitlement and credit allowances require confirmation."}
  ],
  "read-ai": [
    {"id":"read-ai-current-1","name":"Pro","priceUsd":24.69,"duration":"1 month","access":"Per user","status":"On request","summaryEligible":true,"note":"Unlimited meeting reports and storage, with premium integrations; plan quotas still apply."}
  ],
  "saner": [
    {"id":"saner-current-1","name":"Starter","priceUsd":120,"duration":"1 year total","access":"Individual Saner account","status":"On request","summaryEligible":true,"note":"Full annual payment for all 12 months. Includes 30 AI messages per day and 1,000 notes."}
  ],
  "recall": [
    {"id":"recall-current-1","name":"Plus","priceUsd":150,"duration":"1 year total","access":"Individual Recall account","status":"On request","summaryEligible":true,"note":"Full annual payment for all 12 months. Includes unlimited AI summaries."}
  ],
  "fellow": [
    {"id":"fellow-current-1","name":"Team","priceUsd":13.75,"duration":"1 month","access":"Per user","status":"On request","summaryEligible":true,"note":"Includes ten AI meeting notes and recordings per user per month; Business unlimited usage is separate."}
  ],
  "avoma": [
    {"id":"avoma-current-1","name":"Startup","priceUsd":36.25,"duration":"1 month","access":"Per recorder seat; viewers free","status":"On request","summaryEligible":true,"note":"Monthly recorder subscription for teams with up to 25 paid seats; revenue-intelligence add-ons cost extra."}
  ],
  "meetgeek": [
    {"id":"meetgeek-current-1","name":"Pro","priceUsd":19.99,"duration":"1 month","access":"Per user","status":"On request","summaryEligible":true,"note":"Includes 20 hours of transcription per month, one year of transcript storage and six months of audio storage."}
  ],
  "khanmigo": [
    {"id":"khanmigo-current-1","name":"For you — learner plan","priceUsd":5,"duration":"1 month","access":"Eligible US resident adult; US billing address required","status":"On request","summaryEligible":true,"note":"US-only parent/learner subscription. Minors require parent enrollment. Teacher tools are a separate free offer."}
  ],
  "magicschool": [
    {"id":"magicschool-current-1","name":"Plus","priceUsd":16.24,"duration":"1 month","access":"Individual teacher account","status":"On request","summaryEligible":true,"note":"Monthly Plus plan; school and district Enterprise access is priced separately."}
  ],
  "eduaide": [
    {"id":"eduaide-current-1","name":"Pro","priceUsd":62.49,"duration":"1 year total","access":"Individual educator account","status":"On request","summaryEligible":true,"note":"Full annual payment; unlimited AI generations subject to service terms. Regional pricing may differ at checkout."}
  ],
  "diffit": [
    {"id":"diffit-current-1","name":"Individual Premium Access","priceUsd":18.74,"duration":"1 month","access":"One teacher account; individual license","status":"On request","summaryEligible":true,"note":"Purchased through the teacher's own account; school-wide and purchase-order plans are separate."}
  ],
  "photomath": [
    {"id":"photomath-current-1","name":"Photomath Plus","priceUsd":12.49,"duration":"1 month","access":"Individual app subscription","status":"On request","summaryEligible":true,"note":"Monthly Plus subscription; app-store regional pricing and supported billing may differ."}
  ],
  "synthesis-tutor": [
    {"id":"synthesis-tutor-current-1","name":"Tutor — Monthly","priceUsd":36.25,"duration":"1 month","access":"Family account; up to seven children","status":"On request","summaryEligible":true,"note":"Published monthly promotional family option; confirm current promotion and number of included children before payment."}
  ],
  "plus-ai": [
    {"id":"plus-ai-current-1","name":"Basic","priceUsd":18.75,"duration":"1 month","access":"Per user","status":"On request","summaryEligible":true,"note":"Includes 1,500 AI credits per month for Google Slides and PowerPoint workflows."}
  ],
  "slidesai": [
    {"id":"slidesai-current-1","name":"Pro","priceUsd":150,"duration":"1 year total","access":"Per user","status":"On request","summaryEligible":true,"note":"Full annual payment; includes 30,000 AI credits per year and up to 50,000 input characters per presentation."}
  ],
  "presentations-ai": [
    {"id":"presentations-ai-current-1","name":"Pro","priceUsd":300,"duration":"1 year total","access":"Individual account","status":"On request","summaryEligible":true,"note":"Full annual payment; includes 5,000 credits per annual billing cycle and PowerPoint export."}
  ],
  "decktopus": [
    {"id":"decktopus-current-1","name":"Pro","priceUsd":31.24,"duration":"1 month","access":"Individual account","status":"On request","summaryEligible":true,"note":"Month-to-month Pro subscription; annual and three-month totals are separate options."}
  ],
  "smartcat": [
    {"id":"smartcat-current-1","name":"Adapt","priceUsd":1500,"duration":"1 year total","access":"Workspace; unlimited users","status":"On request","summaryEligible":true,"note":"Full annual starting price; linear workflows and standard service terms. Content capacity and add-ons affect final scope."}
  ],
  "lokalise": [
    {"id":"lokalise-current-1","name":"Explorer","priceUsd":211.25,"duration":"1 month","access":"Workspace subscription","status":"On request","summaryEligible":true,"note":"Monthly billing; hosted words, AI translation and other capacity allowances depend on the selected package."}
  ],
  "phrase": [
    {"id":"phrase-current-1","name":"Freelancer","priceUsd":405,"duration":"1 year total","access":"One TMS seat; no Strings seats","status":"On request","summaryEligible":true,"note":"Full annual payment for all 12 months. Includes six Phrase products with basic capacities; confirm included AI translation allowance."}
  ],
  "chatsonic": [
    {"id":"chatsonic-current-1","name":"Individual","priceUsd":240,"duration":"1 year total","access":"Individual Chatsonic account","status":"On request","summaryEligible":true,"note":"Full annual payment for all 12 months; included marketing and model usage limits apply."}
  ],
  "gptzero": [
    {"id":"gptzero-current-1","name":"Premium","priceUsd":15.74,"duration":"1 month","access":"Individual GPTZero account","status":"On request","summaryEligible":true,"note":"Includes 300,000 words per month and a 50,000-character scan limit. Official Pakistan-currency subscription; checkout eligibility and taxes require confirmation."}
  ],
  "zerogpt": [
    {"id":"zerogpt-current-1","name":"PRO","priceUsd":18.74,"duration":"1 month","access":"Individual ZeroGPT account","status":"On request","summaryEligible":true,"note":"Active monthly PRO offer; includes up to 100,000 characters per AI scan and 50 files per batch. Additional usage has separate limits."}
  ],
  "languagetool": [
    {"id":"languagetool-current-1","name":"Individual Premium","priceUsd":27.84,"duration":"1 month","access":"Individual LanguageTool account","status":"On request","summaryEligible":true,"note":"USD conversion uses the ECB reference from 23 October 2026. Regional billing, VAT and final settlement require confirmation."}
  ],
  "deepl": [
    {"id":"deepl-current-1","name":"Individual","priceUsd":125.75,"duration":"1 year total","access":"Individual account; regional billing eligibility required","status":"On request","summaryEligible":true,"note":"Full annual payment using the published German EUR tariff and ECB reference from 23 October 2026. Includes three file translations and 300,000 characters per month; VAT and settlement require confirmation."}
  ],
  "pitch": [
    {"id":"pitch-current-1","name":"Plus","priceUsd":167.9,"duration":"1 year total","access":"One member; individual workspace","status":"On request","summaryEligible":true,"note":"Full annual payment converted using the ECB reference from 23 October 2026. Includes 500 AI credits per month and PowerPoint exports; regional billing, VAT and settlement require confirmation."}
  ],
  "tana": [
    {"id":"tana-current-1","name":"Pro — early bird","priceUsd":31.25,"duration":"1 month","access":"Per user; Tana meeting workspace","status":"On request","summaryEligible":true,"note":"Monthly early-bird subscription. Includes unlimited hosted meetings subject to plan terms; confirm promotional availability before payment."}
  ],
  "jenni": [
    {"id":"jenni-current-1","name":"Plus","priceUsd":37.5,"duration":"1 month","access":"Individual Jenni account","status":"On request","summaryEligible":true,"note":"Monthly billing; includes 5,000 autocompletes, 500 AI edits and 500 chat messages per month, plus ten reviews."}
  ],
  "tldv": [
    {"id":"tldv-current-1","name":"Pro","priceUsd":270,"duration":"1 year total","access":"Per seat","status":"On request","summaryEligible":true,"note":"Full annual payment for all 12 months. Includes unlimited uploads, AI notes and downloads; plan usage terms apply."}
  ],
  "elsa": [
    {"id":"elsa-1","name":"Monthly","priceUsd":4.27,"duration":"1 month","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"elsa-2","name":"3 months Elsa Pro","priceUsd":12.82,"duration":"3 months","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"elsa-3","name":"3 months Elsa Premium","priceUsd":29.24,"duration":"3 months","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"elsa-4","name":"1 Year Elsa Premium","priceUsd":87.28,"duration":"1 year","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ]
};

export type ToolPricingModel = {
  kind: "free" | "usage" | "quote" | "unverified";
  label: string;
  description: string;
  sourceUrl: string;
};

const toolPricingModels: Partial<Record<ToolId, ToolPricingModel>> = {
  // Sales and support pricing.
  "ada": {"kind":"quote","label":"Custom quote","description":"Ada prices enterprise AI agents through a tailored agreement, including conversation or resolution allowances. Request a USD quote for your channels, usage, implementation and support requirements.","sourceUrl":"https://www.ada.cx/platform/"},
  "gong": {"kind":"quote","label":"Custom quote","description":"Gong combines per-user licensing with a platform fee based on the number of users. Request a USD quote for your team size, selected products and implementation scope.","sourceUrl":"https://www.gong.io/pricing"},
  "salesloft": {"kind":"quote","label":"Custom quote","description":"Salesloft arranges a tailored sales proposal. Request a USD quote specifying users, required products, integrations and onboarding.","sourceUrl":"https://www.salesloft.com/see-it-live"},
  "sierra": {"kind":"usage","label":"Outcome-based quote","description":"Sierra uses outcome-based pricing agreed for your deployment. Costs depend on the outcomes, channels and contract scope; request a tailored USD quote rather than a fixed monthly seat price.","sourceUrl":"https://sierra.ai/product"},
  "decagon": {"kind":"quote","label":"Custom quote","description":"Decagon offers enterprise AI agents through a tailored proposal. Request a USD quote for your conversation volume, channels, integrations and deployment requirements.","sourceUrl":"https://decagon.ai/"},
  "apollo": {"kind":"free","label":"Free tier / paid quote","description":"Apollo provides a free Starter tier directly. Paid Basic, Professional and Custom plans have separate seat and credit allowances; request their current USD total for the billing cycle and team size you need.","sourceUrl":"https://www.apollo.io/pricing"},
  // Coding, automation and data pricing.
  "cline": {"kind":"free","label":"Free / usage-based","description":"The open-source client is free. AI inference is metered separately or uses your provider keys.","sourceUrl":"https://cline.bot/pricing"},
  "relevance-ai": {"kind":"quote","label":"Custom enterprise pricing","description":"The provider publishes a custom enterprise plan. Scope, actions and vendor credits require a tailored quote.","sourceUrl":"https://relevanceai.com/pricing"},
  "aider": {"kind":"free","label":"Free open-source client","description":"Run Aider locally with your own model API keys or local models. Provider inference and hardware costs are separate.","sourceUrl":"https://aider.chat/"},
  "goose": {"kind":"free","label":"Free open-source client","description":"Apache-licensed local agent. Connect your own model provider; inference and hardware costs are separate.","sourceUrl":"https://goose-docs.ai/"},
  "greptile": {"kind":"usage","label":"Usage-based pricing","description":"Starter includes 50 credits monthly for one developer. Pro is metered per shared review credit; review types consume different credits.","sourceUrl":"https://www.greptile.com/pricing"},
  "blackbox": {"kind":"usage","label":"Usage-based pricing","description":"The provider bills per model token under committed-spend contracts. There is no universal flat subscription price.","sourceUrl":"https://www.blackbox.ai/pricing"},
  "langflow": {"kind":"free","label":"Free open-source software","description":"Build and self-host Langflow. Model APIs and hosting can add separate costs.","sourceUrl":"https://www.langflow.org/"},
  "crewai": {"kind":"quote","label":"Free / enterprise quote","description":"Basic includes 50 workflow executions monthly. Enterprise deployment and governance use custom pricing.","sourceUrl":"https://crewai.com/pricing"},
  "stackai": {"kind":"quote","label":"Custom enterprise pricing","description":"The provider offers tailored enterprise plans. Confirm deployment, usage and support in a quote.","sourceUrl":"https://www.stackai.com/pricing"},
  "akkio": {"kind":"quote","label":"Custom enterprise pricing","description":"The provider sets pricing around each agency's analytics requirements and deployment scope.","sourceUrl":"https://www.akkio.com/pricing"},
  "h2o": {"kind":"quote","label":"Custom enterprise pricing","description":"Commercial H2O deployments require a provider quote. Open-source tools and education are separate offerings.","sourceUrl":"https://www.h2o.ai/company/contact-us"},
  "open-webui": {"kind":"free","label":"Free self-hosted software","description":"Run the community interface on your infrastructure. Model inference, hosting and enterprise support can cost extra.","sourceUrl":"https://openwebui.com/"},
  "librechat": {"kind":"free","label":"Free open-source software","description":"Self-host LibreChat with your model credentials. Infrastructure and external model usage are separate.","sourceUrl":"https://www.librechat.ai/"},
  "jan": {"kind":"free","label":"Free open-source software","description":"Run local models on your own device. Optional external model providers have their own charges.","sourceUrl":"https://www.jan.ai/"},
  "replicate": {"kind":"usage","label":"Usage-based pricing","description":"Charges vary by model, execution time, hardware or generated output. Confirm workload before requesting a quote.","sourceUrl":"https://replicate.com/pricing"},
  "openrouter": {"kind":"usage","label":"Usage-based pricing","description":"Standard and Business are pay-as-you-go. Model token rates and platform fees determine the total.","sourceUrl":"https://openrouter.ai/pricing"},
  "fireworks": {"kind":"usage","label":"Usage-based pricing","description":"Serverless inference is billed per token; dedicated deployments and training use separate metered rates.","sourceUrl":"https://fireworks.ai/pricing"},
  "deepinfra": {"kind":"usage","label":"Usage-based pricing","description":"Model tokens or inference execution time determine the bill. No universal monthly amount applies.","sourceUrl":"https://deepinfra.com/pricing"},
  "fal": {"kind":"usage","label":"Usage-based pricing","description":"Model APIs charge by output and custom compute charges by runtime. Rates vary by model and resolution.","sourceUrl":"https://fal.ai/pricing"},
  "promptfoo": {"kind":"free","label":"Free open-source community plan","description":"Community evaluation and self-hosting are free with red-team probe limits. Model usage and enterprise features cost extra.","sourceUrl":"https://www.promptfoo.dev/pricing/"},
  "browser-use": {"kind":"usage","label":"Usage-based pricing","description":"Cloud browsers, proxies and model tokens are metered separately. No mandatory monthly subscription.","sourceUrl":"https://browser-use.com/pricing"},
  "composio": {"kind":"usage","label":"Free / pay-as-you-go","description":"Includes 100,000 tool calls and 50,000 triggers monthly, then usage-based charges. Model or third-party service costs may be separate.","sourceUrl":"https://composio.dev/pricing"},
  "together": {"kind":"usage","label":"Usage-based pricing","description":"Serverless models bill per token. Dedicated compute, containers and training have workload-specific rates.","sourceUrl":"https://www.together.ai/pricing"},
  "baseten": {"kind":"usage","label":"Usage-based pricing","description":"Basic has no platform subscription fee. Hosted inference and dedicated hardware are billed by actual usage.","sourceUrl":"https://www.baseten.co/pricing/"},
  "runpod": {"kind":"usage","label":"Usage-based pricing","description":"GPU Pods, Serverless and Clusters use hardware and runtime pricing. Storage and other resources may add charges.","sourceUrl":"https://www.runpod.io/pricing"},
  "dataiku": {"kind":"quote","label":"Enterprise pricing by request","description":"Commercial deployment and team licensing require a provider conversation. A separate Free edition and trial are available.","sourceUrl":"https://www.dataiku.com/contact-us"},
  "datarobot": {"kind":"quote","label":"Enterprise pricing by request","description":"Request a deployment and licensing quote for your team and workloads. No universal public subscription amount is confirmed.","sourceUrl":"https://www.datarobot.com/contact-us/"},
  "knime": {"kind":"free","label":"Free desktop / paid cloud","description":"KNIME Analytics Platform is free and open source. Cloud Pro and team deployments have separate subscription and usage charges.","sourceUrl":"https://www.knime.com/knime-pro"},
  "groq": {"kind":"usage","label":"Usage-based pricing","description":"GroqCloud Developer bills for actual model-token usage. Free-tier limits and billing thresholds do not constitute a monthly subscription.","sourceUrl":"https://console.groq.com/docs/billing-faqs"},
  "gemini-cli": {"kind":"free","label":"Free / paid higher limits","description":"Individual Google sign-in includes a free request quota. Supported Google AI subscriptions or paid API billing can increase limits.","sourceUrl":"https://geminicli.com/docs/resources/quota-and-pricing/"},
  "rork": {"kind":"quote","label":"Paid plans from $31.25/month","description":"A free tier is available. Paid plans start from $31.25 per month, with Max options from $250 per month. These are starting budgets; confirm the exact tier, credits, model access and account-specific USD quote before ordering.","sourceUrl":"https://rork.com/faq"},
  "vectorshift": {"kind":"quote","label":"Custom enterprise pricing","description":"Private-market intelligence deployments use tailored enterprise terms, with usage scoped by members, deals and companies.","sourceUrl":"https://vectorshift.ai/"},
  // Image, video and 3D pricing.
  "flux": {"kind":"usage","label":"Usage-based pricing","description":"Black Forest Labs charges for generated output rather than a fixed seat subscription. Model, resolution, API usage and self-hosted licensing have different costs.","sourceUrl":"https://bfl.ai/pricing"},
  "fotor": {"kind":"free","label":"Free tier / paid plans by request","description":"The provider offers a free Basic plan. Higher-resolution downloads, advanced AI tools and extra credits require a paid-plan quote.","sourceUrl":"https://www.fotor.com/pricing/"},
  "microsoft-designer": {"kind":"free","label":"Free tier / paid higher limits","description":"Designer is free with a personal Microsoft account for personal, non-commercial use. Higher AI usage can require a Microsoft subscription.","sourceUrl":"https://support.microsoft.com/en-us/designer/frequently-asked-questions-about-microsoft-designer"},
  "claid": {"kind":"unverified","label":"Pricing by request","description":"Essentials, Pro and business options use monthly credits. A limited free trial is available; an exact paid-plan amount and billing term need confirmation.","sourceUrl":"https://claid.ai/pricing/"},
  "promeai": {"kind":"unverified","label":"Pricing by request","description":"Plans differ by monthly coins and eligible image or video benefits. Confirm the selected plan, billing total and promotion before ordering.","sourceUrl":"https://www.promeai.pro/member"},
  "craiyon": {"kind":"free","label":"Free tier / paid plans by request","description":"Limited free image generation is available with attribution requirements. Paid plans add editing credits, watermark removal and other benefits.","sourceUrl":"https://www.craiyon.com/en/pricing"},
  "veed": {"kind":"free","label":"Free tier / paid plans by request","description":"VEED offers free editing access. Paid editor plans, AI credits and mobile subscriptions have different allowances and require a matching quote.","sourceUrl":"https://www.veed.io/pricing"},
  "fliki": {"kind":"free","label":"Free tier / paid plans by request","description":"The free plan includes three credits monthly and watermarked 720p output. Standard and Premium increase credits, length limits and commercial features.","sourceUrl":"https://fliki.ai/pricing"},
  "vizard": {"kind":"free","label":"Free tier / paid plans by request","description":"The free plan includes 60 credits per month and three-day storage. Paid Creator and Business quotas, seats and billing require a matching quote.","sourceUrl":"https://vizard.ai/pricing"},
  "vidu": {"kind":"unverified","label":"Pricing by request","description":"Confirm the current subscription tier, included credits, generation settings and billing period before ordering.","sourceUrl":"https://www.vidu.com/pricing"},
  "beatoven": {"kind":"unverified","label":"Pricing by request","description":"Confirm the plan or downloaded-audio minutes, commercial licence and billing total. No fixed USD amount is published here without a verified matching offer.","sourceUrl":"https://www.beatoven.ai/"},
  "anythingworld": {"kind":"free","label":"Free access / paid plans by request","description":"Everything Universe advertises a free starting option for its 3D tools. Confirm animation, rigging, generation and commercial-use limits for a paid quote.","sourceUrl":"https://everythinguniver.se/"},
  "promethean": {"kind":"free","label":"Free individual / enterprise quote","description":"The free individual version includes asset management, palettes and limited AI functionality. Team and enterprise requirements need a tailored quote.","sourceUrl":"https://www.prometheanai.com/pricing"},
  "moonvalley": {"kind":"unverified","label":"Pricing by request","description":"Confirm the current Marey product, credit allowance, commercial licence and subscription or enterprise billing before ordering.","sourceUrl":"https://www.moonvalley.com/"},
  // Writing, research and business pricing.
  "deepseek": {"kind":"free","label":"Free provider access","description":"The official DeepSeek chat app is free to use. API access is a separate usage-billed service.","sourceUrl":"https://www.deepseek.com/en/download/"},
  "meta-ai": {"kind":"free","label":"Free provider access","description":"Everyday Meta AI access is free. Usage limits and optional paid upgrades may vary by feature and region.","sourceUrl":"https://ai.meta.com/genai/"},
  "qwen": {"kind":"free","label":"Free provider access","description":"Qwen Studio is free to use through the official service; third-party API gateways are separate products.","sourceUrl":"https://qwen.ai/qwenchat"},
  "writefull": {"kind":"free","label":"Free provider access","description":"Writefull offers a limited free quota for academic writing tools; unlimited Premium access is a separate subscription.","sourceUrl":"https://my.writefull.com/"},
  "marketmuse": {"kind":"free","label":"Free provider access","description":"The Free plan includes one user and ten queries per month. Paid optimization and research tiers are quoted separately.","sourceUrl":"https://www.marketmuse.com/pricing/"},
  "aided": {"kind":"unverified","label":"Pricing by request","description":"A consistent plan and billing price could not be verified from the provider's current public listing. Confirm the exact product and offer before ordering.","sourceUrl":"https://aided.com/pricing/"},
  "describely": {"kind":"usage","label":"Usage-based pricing","description":"Content generation is billed per product, with separate enrichment and image-processing credits. Confirm product count and a final USD quote; there is no fixed monthly subscription for this option.","sourceUrl":"https://describely.ai/pricing"},
  "chatpdf": {"kind":"free","label":"Free provider access","description":"The free plan allows analysis of two documents per day; Plus provides higher allowances under a separate subscription.","sourceUrl":"https://www.chatpdf.com/"},
  "semantic-scholar": {"kind":"free","label":"Free provider access","description":"Semantic Scholar is a free AI-powered research search and discovery service.","sourceUrl":"https://www.semanticscholar.org/faq"},
  "scholarcy": {"kind":"free","label":"Free provider access","description":"The Article Summarizer has a limited free allowance; unlimited summaries and the Scholarcy library require a paid plan.","sourceUrl":"https://www.scholarcy.com/pricing"},
  "openread": {"kind":"free","label":"Free provider access","description":"OpenRead lists free access alongside Pro; higher model and research allowances require the appropriate paid plan.","sourceUrl":"https://www.openread.academy/"},
  "chatdoc": {"kind":"free","label":"Free provider access","description":"ChatDOC offers limited free uploads and questions; its Pro allowance and paid term are separate.","sourceUrl":"https://chatdoc.com/"},
  "supernormal": {"kind":"free","label":"Free provider access","description":"Supernormal offers free meeting notes and a limited credit allowance; team credit purchases and business controls have separate terms.","sourceUrl":"https://www.supernormal.com/pricing"},
  "hix-ai": {"kind":"free","label":"Free provider access","description":"HIX AI Free includes 20 credits. Pro, Max and separate HIX products have their own paid allowances.","sourceUrl":"https://hix.ai/pricing"},
  "brisk": {"kind":"free","label":"Free provider access","description":"Brisk's teacher plan is free. Premium and Intelligence for schools and districts use custom pricing.","sourceUrl":"https://www.briskteaching.com/plans"},
  "schoolai": {"kind":"quote","label":"Custom quote","description":"SchoolAI lists Pro and Scale for school and district deployments; confirm organizational scope and a written quote. Its Free Trial is limited to five Space launches per year.","sourceUrl":"https://schoolai.com/pricing"},
  "curipod": {"kind":"free","label":"Free provider access","description":"Curipod has a free teacher plan. School, district and curriculum-alignment offerings use custom pricing.","sourceUrl":"https://curipod.com/pricing"},
  "snorkl": {"kind":"free","label":"Free provider access","description":"The free teacher plan includes limited activities and AI feedback. Schools and districts request a Premium quote.","sourceUrl":"https://www.snorkl.app/plans"},
  "quizlet": {"kind":"free","label":"Free provider access","description":"A free account supports flashcards and basic study activities. Plus and Plus Unlimited are separate monthly or annual subscriptions.","sourceUrl":"https://help.quizlet.com/hc/en-au/articles/360041181691-Subscribing-to-Quizlet"},
  "prezi": {"kind":"free","label":"Free provider access","description":"The Basic plan is free with 500 AI credits per month, and presentations are public. Privacy and higher AI usage require a paid plan.","sourceUrl":"https://prezi.com/blog/best-presentation-software-small-business-pricing-compared/"},
  "wordly": {"kind":"usage","label":"Usage-based pricing","description":"Wordly sells translation hours in packages valid for up to 12 months. Package size, event needs and service options determine the final quote.","sourceUrl":"https://www.wordly.ai/pricing"},
  "machine-translation": {"kind":"free","label":"Free provider access","description":"MachineTranslation.com has a free AI translator. Premium model access, documents and unlimited translation options have separate prices and terms.","sourceUrl":"https://www.machinetranslation.com/"},
};

export function getToolPricingModel(id: string): ToolPricingModel | undefined {
  return Object.prototype.hasOwnProperty.call(toolPricingModels, id) ? toolPricingModels[id as ToolId] : undefined;
}

export function getToolPlans(id: string): ToolPlan[] {
  return Object.prototype.hasOwnProperty.call(toolPlans, id) ? toolPlans[id as ToolId] || [] : [];
}

export function formatUsd(amount: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(amount);
}

export function getToolPriceLabel(id: string, preference?: string): string {
  const plans = getToolPlans(id);
  if (!plans.length) return getToolPricingModel(id)?.label || "Request pricing";
  let candidates = plans.filter((plan) => plan.summaryEligible && plan.status !== "Unavailable");
  if (preference === "Monthly" || preference === "Annual") {
    candidates = candidates.filter((plan) => preference === "Monthly" ? /^(1 month|30 days)$/.test(plan.duration) : /^(12 months|1 year)( total)?$/.test(plan.duration));
    if (!candidates.length) return `Request ${preference.toLowerCase()} pricing`;
  }
  if (!candidates.length) return plans.length ? "View USD plans" : "Request pricing";
  const lowest = candidates.reduce((best, plan) => plan.priceUsd < best.priceUsd ? plan : best);
  return `From ${formatUsd(lowest.priceUsd)} / ${lowest.duration.replace(/ total$/, "")}`;
}
