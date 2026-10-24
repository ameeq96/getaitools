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

// Recorded PKR amounts × 1.25 ÷ 277.85, rounded once to USD cents (24 October 2026).
const toolPlans: Partial<Record<ToolId, ToolPlan[]>> = {
  "chatgpt": [
    {"id":"chatgpt-1","name":"Plus","priceUsd":6.74,"duration":"30 days","access":"Shared; one device","status":"On request","summaryEligible":true,"note":""},
    {"id":"chatgpt-2","name":"Go","priceUsd":4.49,"duration":"30 days","access":"Shared; one device","status":"On request","summaryEligible":true,"note":""},
    {"id":"chatgpt-4","name":"Plus","priceUsd":6.75,"duration":"1 month","access":"Shared; one device","status":"On request","summaryEligible":true,"note":""},
    {"id":"chatgpt-6","name":"Plus","priceUsd":9,"duration":"45 days","access":"Shared; one device","status":"On request","summaryEligible":true,"note":""},
    {"id":"chatgpt-7","name":"Plus","priceUsd":22.04,"duration":"1 month","access":"Personal; own email","status":"On request","summaryEligible":true,"note":""},
    {"id":"chatgpt-8","name":"Plus","priceUsd":32.39,"duration":"45 days","access":"Personal; own email","status":"On request","summaryEligible":true,"note":""},
  ],
  "gemini": [
    {"id":"gemini-1","name":"Google AI Pro","priceUsd":25.19,"duration":"1 month","access":"Direct Google subscription; eligible account","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans. Confirm account eligibility and activation method; reseller access can differ from a direct Google plan."},
    {"id":"gemini-2","name":"Google AI Plus","priceUsd":6.3,"duration":"1 month","access":"Direct Google subscription; eligible account","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans. Confirm account eligibility and activation method; reseller access can differ from a direct Google plan."},
  ],
  "perplexity": [
    {"id":"perplexity-5","name":"Pro","priceUsd":33.74,"duration":"12 months","access":"Own email activation","status":"On request","summaryEligible":true,"note":""}
  ],
  "canva": [
    {"id":"canva-1","name":"Canva Pro team invitation","priceUsd":0.67,"duration":"1 month","access":"Team invitation to existing email","status":"On request","summaryEligible":true,"note":""},
    {"id":"canva-2","name":"Canva Pro team invitation","priceUsd":1.35,"duration":"12 months total","access":"Team invitation","status":"On request","summaryEligible":true,"note":""},
  ],
  "runway": [
    {"id":"runway-1","name":"Pro","priceUsd":24.74,"duration":"1 month","access":"Private","status":"On request","summaryEligible":true,"note":"Confirm included monthly credits and export limits."},
  ],
  "elevenlabs": [
    {"id":"elevenlabs-1","name":"Creator","priceUsd":14.85,"duration":"1 month","access":"Private","status":"On request","summaryEligible":true,"note":"Credit allowances vary between options; confirm the exact allowance."},
    {"id":"elevenlabs-2","name":"Creator","priceUsd":105.72,"duration":"12 months total","access":"Personal account","status":"On request","summaryEligible":true,"note":"Credit allowances vary between options; confirm the exact allowance."},
  ],
  "notion-ai": [
    {"id":"notion-ai-1","name":"Notion Business Personal Account","priceUsd":10.35,"duration":"3 months","access":"Seller claims personal account","status":"On request","summaryEligible":true,"note":"Confirm AI allowance, workspace ownership and support period; some longer offers have only a three-month warranty."},
    {"id":"notion-ai-4","name":"Notion Business","priceUsd":9.9,"duration":"3 months","access":"Invitation / team workspace","status":"On request","summaryEligible":true,"note":"Confirm AI allowance, workspace ownership and support period; some longer offers have only a three-month warranty."}
  ],
  "gemini-notebook": [
    {"id":"gemini-notebook-1","name":"Google AI Pro (includes Gemini Notebook)","priceUsd":25.19,"duration":"1 month","access":"Personal Google account","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans. Included in a Google AI bundle; this is not a standalone Notebook subscription."}
  ],
  "grammarly": [
    {"id":"grammarly-1","name":"Grammarly Premium","priceUsd":4.5,"duration":"1 month","access":"Seller claims private","status":"On request","summaryEligible":true,"note":""},
  ],
  "gamma": [
    {"id":"gamma-1","name":"Gamma Pro","priceUsd":103.47,"duration":"1 year","access":"Seller claims private","status":"On request","summaryEligible":true,"note":""},
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
    {"id":"semrush-1","name":"Semrush Pro","priceUsd":6.75,"duration":"1 month","access":"Seller claims private","status":"On request","summaryEligible":true,"note":""},
  ],
  "adobe-firefly": [
    {"id":"adobe-firefly-1","name":"Adobe Firefly Mobile Monthly","priceUsd":5.85,"duration":"1 month","access":"Apple ID / official mobile in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"adobe-firefly-2","name":"Adobe Firefly Mobile Yearly","priceUsd":58.03,"duration":"1 year total","access":"Apple ID / official mobile in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "heygen": [
    {"id":"heygen-2","name":"Creator","priceUsd":25.19,"duration":"1 month","access":"Private","status":"On request","summaryEligible":true,"note":"Confirm the exact plan and credits; some tier labels conflict."}
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
    {"id":"capcut-6","name":"Pro","priceUsd":58.48,"duration":"12 months","access":"Pre-made account","status":"On request","summaryEligible":true,"note":"Confirm app/platform compatibility, account ownership and the full support period."},
  ],
  "udio": [
    {"id":"udio-1","name":"Udio Standard Monthly","priceUsd":13.05,"duration":"1 month","access":"Apple ID / official mobile in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"udio-2","name":"Udio Standard Annual","priceUsd":112.02,"duration":"1 year total","access":"Apple ID / official mobile in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"udio-3","name":"Udio Pro Monthly","priceUsd":35.54,"duration":"1 month","access":"Apple ID / official mobile in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "cursor": [
    {"id":"cursor-1","name":"Cursor Pro","priceUsd":177.7,"duration":"12 months","access":"Seller says own email; existing or new account","status":"On request","summaryEligible":true,"note":""},
  ],
  "taskade": [
    {"id":"taskade-1","name":"Taskade Pro (Monthly)","priceUsd":22.04,"duration":"1 month","access":"Direct in-app subscription on Apple account","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "manus": [
    {"id":"manus-1","name":"Manus Basic - Monthly","priceUsd":22.04,"duration":"1 month","access":"Direct in-app subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"manus-2","name":"Manus Plus - Monthly","priceUsd":44.54,"duration":"1 month","access":"Direct in-app subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "genspark": [
    {"id":"genspark-1","name":"Plus Monthly 10K Credits","priceUsd":31.04,"duration":"1 month","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"genspark-2","name":"Pro Monthly 300K Credits","priceUsd":674.37,"duration":"1 month","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
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
    {"id":"julius-2","name":"Basic Annually","priceUsd":224.49,"duration":"1 year","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
  ],
  "adcreative": [
    {"id":"adcreative-1","name":"Pro Access (1 month)","priceUsd":17.55,"duration":"1 month","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"adcreative-2","name":"Pro Access (1 week)","priceUsd":8.55,"duration":"1 week","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
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
    {"id":"filmora-2","name":"Lifetime License","priceUsd":89.53,"duration":"Lifetime license as labeled","access":"Apple ID / official in-app purchase","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans. macOS in-app and portal offers differ; confirm version, AI allowance and upgrade rights."},
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
  "antigravity": [
    {"id":"antigravity-1","name":"Google AI Pro including Antigravity","priceUsd":25.19,"duration":"1 month","access":"Direct Google account subscription; rate limits apply","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans. Included in a Google AI bundle; usage limits apply."},
    {"id":"antigravity-2","name":"Google AI Ultra 5x including Antigravity","priceUsd":98.97,"duration":"1 month","access":"Direct Google account subscription; rate limits apply","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans. Included in a Google AI bundle; usage limits apply."},
    {"id":"antigravity-3","name":"Google AI Ultra 20x including Antigravity","priceUsd":251.48,"duration":"1 month","access":"Direct Google account subscription; rate limits apply","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans. Included in a Google AI bundle; usage limits apply."}
  ],
  "sudowrite": [
    {"id":"sudowrite-1","name":"Professional Monthly","priceUsd":44.54,"duration":"1 month","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
  ],
  "studyfetch": [
    {"id":"studyfetch-1","name":"StudyFetch Premium Monthly","priceUsd":22.04,"duration":"1 month","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"studyfetch-2","name":"StudyFetch Premium Quarterly","priceUsd":35.54,"duration":"3 months","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"studyfetch-3","name":"StudyFetch Premium Yearly","priceUsd":112.02,"duration":"1 year","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "gauth": [
    {"id":"gauth-1","name":"Gauth PLUS - Monthly","priceUsd":2.25,"duration":"1 month","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"gauth-2","name":"Gauth PLUS - Quarterly","priceUsd":5.85,"duration":"3 months","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"gauth-3","name":"Gauth PLUS - Annual","priceUsd":15.75,"duration":"1 year","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ],
  "immersive-translate": [
    {"id":"immersive-translate-1","name":"Monthly Pro","priceUsd":13.05,"duration":"1 month","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"immersive-translate-2","name":"Annual Pro","priceUsd":89.53,"duration":"1 year","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"immersive-translate-3","name":"Max Monthly Membership","priceUsd":35.54,"duration":"1 month","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
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
    {"id":"speak-3","name":"Monthly Premium Plus","priceUsd":67.03,"duration":"1 month","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
  ],
  "elsa": [
    {"id":"elsa-1","name":"Monthly","priceUsd":4.27,"duration":"1 month","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"elsa-2","name":"3 months Elsa Pro","priceUsd":12.82,"duration":"3 months","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"elsa-3","name":"3 months Elsa Premium","priceUsd":29.24,"duration":"3 months","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."},
    {"id":"elsa-4","name":"1 Year Elsa Premium","priceUsd":87.28,"duration":"1 year","access":"Own app / Apple account subscription","status":"On request","summaryEligible":true,"note":"Pakistan in-app or provider plan; eligibility may differ from web plans."}
  ]
};

export function getToolPlans(id: string): ToolPlan[] {
  return Object.prototype.hasOwnProperty.call(toolPlans, id) ? toolPlans[id as ToolId] || [] : [];
}

export function formatUsd(amount: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(amount);
}

export function getToolPriceLabel(id: string, preference?: string): string {
  const plans = getToolPlans(id);
  let candidates = plans.filter((plan) => plan.summaryEligible && plan.status !== "Unavailable");
  if (preference === "Monthly" || preference === "Annual") {
    candidates = candidates.filter((plan) => preference === "Monthly" ? /^(1 month|30 days)$/.test(plan.duration) : /^(12 months|1 year)( total)?$/.test(plan.duration));
    if (!candidates.length) return `Request ${preference.toLowerCase()} pricing`;
  }
  if (!candidates.length) return plans.length ? "View USD plans" : "Request pricing";
  const lowest = candidates.reduce((best, plan) => plan.priceUsd < best.priceUsd ? plan : best);
  return `From ${formatUsd(lowest.priceUsd)} / ${lowest.duration.replace(/ total$/, "")}`;
}
