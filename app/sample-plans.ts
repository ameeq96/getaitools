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

export const pricingUpdatedOn = "2026-10-25";

// Clear local offers from the 25 October 2026 research: PKR × 1.25 ÷ 277.85, or local-seller USD × 1.25. Round once to USD cents.
const toolPlans: Partial<Record<ToolId, ToolPlan[]>> = {
  "chatgpt": [
    {"id":"chatgpt-local-pk-0001","name":"Plus shared","priceUsd":6.75,"duration":"1 month","access":"Shared; one device","status":"On request","summaryEligible":true,"note":"Business and Plus are different tiers."},
    {"id":"chatgpt-local-pk-0003","name":"Plus shared","priceUsd":9,"duration":"45 days","access":"Shared; one device","status":"On request","summaryEligible":true,"note":"Business and Plus are different tiers."},
    {"id":"chatgpt-local-pk-0004","name":"Plus personal","priceUsd":22.04,"duration":"1 month","access":"Personal; buyer email; no device limit","status":"On request","summaryEligible":true,"note":"Business and Plus are different tiers."},
    {"id":"chatgpt-local-pk-0005","name":"Plus personal","priceUsd":32.39,"duration":"45 days","access":"Personal; buyer email; no device limit","status":"On request","summaryEligible":true,"note":"Business and Plus are different tiers."},
    {"id":"chatgpt-local-pk-0006","name":"Business","priceUsd":29.24,"duration":"1 month","access":"Personal access on buyer email","status":"On request","summaryEligible":true,"note":"Business and Plus are different tiers."},
    {"id":"chatgpt-local-pk-0009","name":"Chat GPT Plus Shared","priceUsd":5.4,"duration":"28 days","access":"Shared; one ISP/IP; no VPN/RDP","status":"On request","summaryEligible":true,"note":"ToolsFix says Pakistan only. One ISP/IP; VPNs and RDPs prohibited. Account limits and downtime can apply."},
    {"id":"chatgpt-local-pk-0010","name":"Plus shared","priceUsd":2.92,"duration":"1 month","access":"Shared with six other users; one device; extension on desktop","status":"On request","summaryEligible":true,"note":"Shared offer excludes Codex, ChatGPT Work and voice."},
    {"id":"chatgpt-local-pk-0011","name":"Plus shared","priceUsd":5.42,"duration":"2 months total","access":"Shared with six other users; one device; extension on desktop","status":"On request","summaryEligible":true,"note":"Shared offer excludes Codex, ChatGPT Work and voice."},
    {"id":"chatgpt-local-pk-0012","name":"Plus shared","priceUsd":7.83,"duration":"3 months total","access":"Shared with six other users; one device; extension on desktop","status":"On request","summaryEligible":true,"note":"Shared offer excludes Codex, ChatGPT Work and voice."},
    {"id":"chatgpt-local-pk-0013","name":"Starter multi-model portal","priceUsd":4.05,"duration":"1 month","access":"JKDigital portal; 2 concurrent devices; shared credit pool across models","status":"On request","summaryEligible":false,"note":"600 platform credits/month across all included models. This is model access inside JKDigital, not the provider's native paid account. Credit multipliers vary by model."},
    {"id":"chatgpt-local-pk-0014","name":"Pro multi-model portal","priceUsd":11.25,"duration":"1 month","access":"JKDigital portal; 5 concurrent devices; shared credit pool across models","status":"On request","summaryEligible":false,"note":"2000 platform credits/month across all included models. This is model access inside JKDigital, not the provider's native paid account. Credit multipliers vary by model."},
    {"id":"chatgpt-local-pk-0015","name":"Business multi-model portal","priceUsd":31.49,"duration":"1 month","access":"JKDigital portal; 10 concurrent devices; shared credit pool across models","status":"On request","summaryEligible":false,"note":"8000 platform credits/month across all included models. This is model access inside JKDigital, not the provider's native paid account. Credit multipliers vary by model."},
    {"id":"chatgpt-local-pk-0019","name":"Chatgpt Plus 1M Shared Via Extension (NW) — No warranty","priceUsd":4.49,"duration":"1 month","access":"Shared (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: No warranty."},
    {"id":"chatgpt-local-pk-0020","name":"Chatgpt Plus 1M (No Warranty) — No warranty","priceUsd":8.99,"duration":"1 month","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: No warranty."},
    {"id":"chatgpt-local-pk-0021","name":"CHAT GPT PLUS 1 MONTH WARRANTY 5H — 5 hours warranty","priceUsd":10.34,"duration":"1 month","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: 5 hours warranty."},
    {"id":"chatgpt-local-pk-0022","name":"Chat GPT Plus UPI 1M NW — No warranty","priceUsd":8.99,"duration":"1 month","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: No warranty."},
    {"id":"chatgpt-local-pk-0023","name":"CHAT GPT PLUS 1 MONTH WARRANTY 12H — 12 hours warranty","priceUsd":13.04,"duration":"1 month","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: 12 hours warranty."},
    {"id":"chatgpt-local-pk-0024","name":"ChatGPT Plus GGPay 30D 24H warranty — 24 hours warranty","priceUsd":15.16,"duration":"30 days","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: 24 hours warranty."},
    {"id":"chatgpt-local-pk-0025","name":"CHAT GPT PLUS UPI 1 month - 24H warranty — 24 hours warranty","priceUsd":12.35,"duration":"1 month","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: 24 hours warranty."},
    {"id":"chatgpt-local-pk-0026","name":"ChatGPT - ChatGPT Plus Pix 30D (W5H) — 5 hours warranty","priceUsd":10.34,"duration":"30 days","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: 5 hours warranty."},
    {"id":"chatgpt-local-pk-0027","name":"ChatGPT - ACC GPT APPLE PAY 1M (NW) — No warranty","priceUsd":12.59,"duration":"1 month","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: No warranty."},
    {"id":"chatgpt-local-pk-0028","name":"ChatGPT Plus 1 Month GG Pay (24-hour warranty) — 24 hours warranty","priceUsd":13.91,"duration":"1 month","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: 24 hours warranty."},
    {"id":"chatgpt-local-pk-0029","name":"ChatGPT Plus GGPay 1 Month (20-Day Warranty) — 20 days warranty","priceUsd":15.74,"duration":"1 month","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: 20 days warranty."},
    {"id":"chatgpt-local-pk-0030","name":"CHAT GPT PLUS 1 MONTH FULL WARRANTY — Full warranty (1 month)","priceUsd":17.99,"duration":"1 month","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: Full warranty (1 month)."},
    {"id":"chatgpt-local-pk-0031","name":"ChatGPT Plus VIP 1 month full warranty — Full warranty (1 month)","priceUsd":17.99,"duration":"1 month","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: Full warranty (1 month)."},
    {"id":"chatgpt-local-pk-0032","name":"So Beautiful) CHATGPT PLUS GGPAY 30 DAYS BH20D — No warranty","priceUsd":17.99,"duration":"30 days","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: No warranty."},
    {"id":"chatgpt-local-pk-0033","name":"ChatGPT Plus Apple Pay 1 Month (28-Day Warranty) — 28 days warranty","priceUsd":20.24,"duration":"1 month","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: 28 days warranty."},
    {"id":"chatgpt-local-pk-0034","name":"So Beautiful) Chatgpt Plus Apple Pay 1 month full warranty — Full warranty (1 month)","priceUsd":19.34,"duration":"1 month","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: Full warranty (1 month)."},
    {"id":"chatgpt-local-pk-0035","name":"ChatGPT Plus Pay Real Money 1 month full warranty — Full warranty (1 month)","priceUsd":17.99,"duration":"1 month","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: Full warranty (1 month)."},
    {"id":"chatgpt-local-pk-0036","name":"ChatGPT - CDK PLUS Android 1M (FW) — Full warranty (1 Months)","priceUsd":24.74,"duration":"1 month","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: Full warranty (1 Months)."},
    {"id":"chatgpt-local-pk-0037","name":"Plus private ready-made","priceUsd":15.07,"duration":"1 month","access":"Private ready-made email; login information must not be changed","status":"On request","summaryEligible":true,"note":"25-day warranty. Codex excluded."}
  ],
  "claude": [
    {"id":"claude-local-pk-0041","name":"Pro","priceUsd":24.74,"duration":"1 month","access":"Private access","status":"On request","summaryEligible":true,"note":""},
    {"id":"claude-local-pk-0042","name":"Pro personal","priceUsd":28.77,"duration":"1 month","access":"Personal; delivered to buyer email","status":"On request","summaryEligible":true,"note":"25-day warranty on one-month offer; account suspension excluded."},
    {"id":"claude-local-pk-0043","name":"Starter multi-model portal","priceUsd":4.05,"duration":"1 month","access":"JKDigital portal; 2 concurrent devices; shared credit pool across models","status":"On request","summaryEligible":false,"note":"600 platform credits/month across all included models. This is model access inside JKDigital, not the provider's native paid account. Credit multipliers vary by model."},
    {"id":"claude-local-pk-0044","name":"Pro multi-model portal","priceUsd":11.25,"duration":"1 month","access":"JKDigital portal; 5 concurrent devices; shared credit pool across models","status":"On request","summaryEligible":false,"note":"2000 platform credits/month across all included models. This is model access inside JKDigital, not the provider's native paid account. Credit multipliers vary by model."},
    {"id":"claude-local-pk-0045","name":"Business multi-model portal","priceUsd":31.49,"duration":"1 month","access":"JKDigital portal; 10 concurrent devices; shared credit pool across models","status":"On request","summaryEligible":false,"note":"8000 platform credits/month across all included models. This is model access inside JKDigital, not the provider's native paid account. Credit multipliers vary by model."}
  ],
  "gemini": [
    {"id":"gemini-local-pk-0049","name":"Starter multi-model portal","priceUsd":4.05,"duration":"1 month","access":"JKDigital portal; 2 concurrent devices; shared credit pool across models","status":"On request","summaryEligible":false,"note":"600 platform credits/month across all included models. This is model access inside JKDigital, not the provider's native paid account. Credit multipliers vary by model."},
    {"id":"gemini-local-pk-0050","name":"Pro multi-model portal","priceUsd":11.25,"duration":"1 month","access":"JKDigital portal; 5 concurrent devices; shared credit pool across models","status":"On request","summaryEligible":false,"note":"2000 platform credits/month across all included models. This is model access inside JKDigital, not the provider's native paid account. Credit multipliers vary by model."},
    {"id":"gemini-local-pk-0051","name":"Business multi-model portal","priceUsd":31.49,"duration":"1 month","access":"JKDigital portal; 10 concurrent devices; shared credit pool across models","status":"On request","summaryEligible":false,"note":"8000 platform credits/month across all included models. This is model access inside JKDigital, not the provider's native paid account. Credit multipliers vary by model."},
    {"id":"gemini-local-pk-0052","name":"SLOT GEMINI ULTRA X20 15 days warranty 10 days — 10 days warranty","priceUsd":13.49,"duration":"15 days","access":"Shared (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: 10 days warranty."},
    {"id":"gemini-local-pk-0053","name":"Gemini - Gemini Pro 400GB 12M (FW) — Full warranty (12 Months)","priceUsd":8.99,"duration":"12 months total","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: Full warranty (12 Months)."},
    {"id":"gemini-local-pk-0054","name":"Gemini - Gemini Pro 2TB 12M (FW) — Full warranty (12 Months)","priceUsd":13.49,"duration":"12 months total","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: Full warranty (12 Months)."},
    {"id":"gemini-local-pk-0055","name":"Gemini - Gemini Pro 5TB 12M (FW) — Full warranty (12 Months)","priceUsd":31.49,"duration":"12 months total","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: Full warranty (12 Months)."},
    {"id":"gemini-local-pk-0056","name":"SLOT Gemini Pro Official Owner +GG 5TB 1 YEAR 1 year full warranty — Full warranty (1 year)","priceUsd":13.49,"duration":"1 year total","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: Full warranty (1 year)."},
    {"id":"gemini-local-pk-0057","name":"Gemini AI Pro 18 Month — No warranty","priceUsd":4.49,"duration":"18 months total","access":"Shared (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: No warranty."},
    {"id":"gemini-local-pk-0058","name":"GEMINI AI PRO LINK 18 Months Warranty 24H — 24 hours warranty","priceUsd":2.72,"duration":"18 months total","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: 24 hours warranty. Activation link with account/region eligibility. Short activation/warranty window may apply; not an unrestricted retail subscription."},
    {"id":"gemini-local-pk-0059","name":"Gemini - Link Gemini Pro 18M (New)","priceUsd":4.49,"duration":"18 months total","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: Warranty not specified — confirm before purchase. Activation link with account/region eligibility. Short activation/warranty window may apply; not an unrestricted retail subscription."},
    {"id":"gemini-local-pk-0060","name":"LINK GEMINI PRO + GOOGLE ONE 5TB 18 MONTHS 24H WARRANTY — 24 hours warranty","priceUsd":2.72,"duration":"18 months total","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: 24 hours warranty. Activation link with account/region eligibility. Short activation/warranty window may apply; not an unrestricted retail subscription."},
    {"id":"gemini-local-pk-0061","name":"UPGRADE GEMINI PRO + GOOGLE ONE 5TB 18 MONTHS WARRANTY 1 MONTH — 1 month warranty","priceUsd":4.49,"duration":"18 months total","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: 1 month warranty."},
    {"id":"gemini-local-pk-0062","name":"Pro","priceUsd":4.05,"duration":"18 months total","access":"Private access","status":"On request","summaryEligible":true,"note":"Eligibility/activation requirements and current quote require confirmation."},
    {"id":"gemini-local-pk-0063","name":"Google AI Pro activation link","priceUsd":2.25,"duration":"18 months total","access":"Private on own Google account; redeem link","status":"On request","summaryEligible":true,"note":"One-hour activation/warranty window. Seller FAQ identifies Jio offer. Confirm region/account eligibility and offered storage before payment."}
  ],
  "midjourney": [
    {"id":"midjourney-local-pk-0064","name":"Standard","priceUsd":13.49,"duration":"1 month","access":"Shared account; direct Midjourney website login","status":"On request","summaryEligible":true,"note":"30-day warranty advertised. Not a private personal subscription."}
  ],
  "perplexity": [
    {"id":"perplexity-local-pk-0069","name":"Perplexity AI Pro (listing says yearly, actual term 10 months)","priceUsd":26.99,"duration":"10 months total","access":"Private account on customer email","status":"On request","summaryEligible":true,"note":"Pakistan-only service. One ISP/IP rule and shared resource limits apply to portal services. The Perplexity numeric offer explicitly says 10 months despite the yearly label."},
    {"id":"perplexity-local-pk-0071","name":"Pro","priceUsd":33.74,"duration":"12 months total","access":"Activation on own email","status":"On request","summaryEligible":true,"note":"Full replacement warranty advertised. Full 12-month total, not monthly amount."},
    {"id":"perplexity-local-pk-0072","name":"Perplexity Pro","priceUsd":6.3,"duration":"1 month","access":"Private account","status":"On request","summaryEligible":true,"note":"7-day replacement warranty. Exact model/usage claims require confirmation."},
    {"id":"perplexity-local-pk-0076","name":"Perplexity Pro activation key","priceUsd":17.94,"duration":"1 month","access":"Activation on own account","status":"On request","summaryEligible":true,"note":"Own-account activation key. No bonus compute credits."},
    {"id":"perplexity-local-pk-0077","name":"Perplexity Pro activation key","priceUsd":48.71,"duration":"1 year total","access":"Activation on own account","status":"On request","summaryEligible":true,"note":"Only new or never-Pro accounts. No API credit bonus."}
  ],
  "canva": [
    {"id":"canva-local-pk-0078","name":"Canva Pro team invitation","priceUsd":0.67,"duration":"1 month","access":"Team invitation to existing email","status":"On request","summaryEligible":true,"note":"Team access, not an individual Canva Pro retail license."},
    {"id":"canva-local-pk-0079","name":"Canva Pro team invitation","priceUsd":1.12,"duration":"6 months total","access":"Team invitation to existing email","status":"On request","summaryEligible":true,"note":"Team access, not an individual Canva Pro retail license."},
    {"id":"canva-local-pk-0080","name":"Canva Pro team invitation","priceUsd":1.35,"duration":"12 months total","access":"Team invitation to existing email","status":"On request","summaryEligible":true,"note":"Team access, not an individual Canva Pro retail license."},
    {"id":"canva-local-pk-0081","name":"Canva Pro Edu","priceUsd":1.12,"duration":"1 month","access":"Own email; education plan","status":"On request","summaryEligible":true,"note":"Education eligibility and workspace ownership must be confirmed."},
    {"id":"canva-local-pk-0082","name":"Canva Pro Edu","priceUsd":3.37,"duration":"3 months total","access":"Own email; education plan","status":"On request","summaryEligible":true,"note":"Education eligibility and workspace ownership must be confirmed."},
    {"id":"canva-local-pk-0088","name":"Canva Pro","priceUsd":1.57,"duration":"30 days","access":"Managed access portal","status":"On request","summaryEligible":true,"note":"Pakistan-only managed access. One ISP/IP per user; shared resources can reach usage limits."},
    {"id":"canva-local-pk-0094","name":"LINK - Canva Pro 1 Month (full warranty) — Full warranty (1 Months)","priceUsd":1.35,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: Full warranty (1 Months). Slot, team/admin and education offers are not individual Pro licenses; confirm eligibility and workspace control."},
    {"id":"canva-local-pk-0095","name":"CANVA PRO SLOT 1 MONTH full warranty — Full warranty (1 month)","priceUsd":3.14,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: Full warranty (1 month). Slot, team/admin and education offers are not individual Pro licenses; confirm eligibility and workspace control."},
    {"id":"canva-local-pk-0096","name":"Canva Pro Admin Business 100 Slots 1 Month full warranty — Full warranty (1 month)","priceUsd":4.49,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: Full warranty (1 month). Slot, team/admin and education offers are not individual Pro licenses; confirm eligibility and workspace control."},
    {"id":"canva-local-pk-0097","name":"Canva Pro Business Slot Invite for 99 Slots for 1 Month - full warranty — Full warranty (1 month)","priceUsd":4.49,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: Full warranty (1 month). Slot, team/admin and education offers are not individual Pro licenses; confirm eligibility and workspace control."},
    {"id":"canva-local-pk-0098","name":"CANVA PRO SLOT 1 YEAR (full warranty) — Full warranty (1 Years)","priceUsd":7.19,"duration":"1 year total","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: Full warranty (1 Years). Slot, team/admin and education offers are not individual Pro licenses; confirm eligibility and workspace control."},
    {"id":"canva-local-pk-0099","name":"CANVA PRO ADMIN 1 YEAR 50 SLOTS full warranty — Full warranty (1 Years)","priceUsd":202.44,"duration":"1 year total","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: Full warranty (1 Years). Slot, team/admin and education offers are not individual Pro licenses; confirm eligibility and workspace control."},
    {"id":"canva-local-pk-0100","name":"Canva Admin 3Year (2MW) — 2 months warranty","priceUsd":8.99,"duration":"3 years total","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 2 months warranty. Slot, team/admin and education offers are not individual Pro licenses; confirm eligibility and workspace control."}
  ],
  "runway": [
    {"id":"runway-local-pk-0101","name":"Pro; 2250 credits","priceUsd":24.74,"duration":"1 month","access":"Private","status":"On request","summaryEligible":true,"note":"Page still advertises this amount; seller last price-verification text is 24 August 2026."},
    {"id":"runway-local-pk-0102","name":"Max; 9500 credits","priceUsd":62.98,"duration":"1 month","access":"Private","status":"On request","summaryEligible":true,"note":"Catalog offer, native plan and actual credit allocation must be confirmed."},
    {"id":"runway-local-pk-0104","name":"Runway ML Unlimited","priceUsd":15.75,"duration":"30 days","access":"Shared managed access","status":"On request","summaryEligible":true,"note":"Pakistan-only service. Advertised lifetime packages actually specify3/6 months replacement coverage. One ISP/IP per user; shared resources can hit usage limits."}
  ],
  "elevenlabs": [
    {"id":"elevenlabs-local-pk-0106","name":"Creator; 300K+ credits (seller claim)","priceUsd":14.85,"duration":"1 month","access":"Private","status":"On request","summaryEligible":true,"note":"Seller credit claim differs from other Creator offers; confirm quota and source before ordering."},
    {"id":"elevenlabs-local-pk-0108","name":"Creator; 100,000 monthly credits","priceUsd":105.72,"duration":"12 months total","access":"Personal account","status":"On request","summaryEligible":true,"note":"Full annual payment."},
    {"id":"elevenlabs-local-pk-0109","name":"Elevenlabs Creator 1M Link","priceUsd":8.09,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: Warranty not specified — confirm before purchase."},
    {"id":"elevenlabs-local-pk-0110","name":"Elevenlabs Creator 3M (NW) — No warranty","priceUsd":12.96,"duration":"3 months total","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: No warranty."}
  ],
  "grok": [
    {"id":"grok-local-pk-0114","name":"SuperGrok weekly","priceUsd":7.65,"duration":"7 days","access":"Pre-made account","status":"On request","summaryEligible":true,"note":"7-day warranty and no automatic renewal. Catalog /mo display does not change the actual 7-day term."},
    {"id":"grok-local-pk-0116","name":"Starter multi-model portal","priceUsd":4.05,"duration":"1 month","access":"JKDigital portal; 2 concurrent devices; shared credit pool across models","status":"On request","summaryEligible":false,"note":"600 platform credits/month across all included models. This is model access inside JKDigital, not the provider's native paid account. Credit multipliers vary by model."},
    {"id":"grok-local-pk-0117","name":"Pro multi-model portal","priceUsd":11.25,"duration":"1 month","access":"JKDigital portal; 5 concurrent devices; shared credit pool across models","status":"On request","summaryEligible":false,"note":"2000 platform credits/month across all included models. This is model access inside JKDigital, not the provider's native paid account. Credit multipliers vary by model."},
    {"id":"grok-local-pk-0118","name":"Business multi-model portal","priceUsd":31.49,"duration":"1 month","access":"JKDigital portal; 10 concurrent devices; shared credit pool across models","status":"On request","summaryEligible":false,"note":"8000 platform credits/month across all included models. This is model access inside JKDigital, not the provider's native paid account. Credit multipliers vary by model."},
    {"id":"grok-local-pk-0120","name":"Grok Plus 30 days without warranty","priceUsd":11.12,"duration":"30 days","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: Warranty not specified — confirm before purchase. Preserve exact seller tier label. Grok Plus/Premium, Super and Ultra are not treated as interchangeable."},
    {"id":"grok-local-pk-0121","name":"Grok - Grok Premium 1M (W15D) — 15 days warranty","priceUsd":29.09,"duration":"1 month","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: 15 days warranty. Preserve exact seller tier label. Grok Plus/Premium, Super and Ultra are not treated as interchangeable."},
    {"id":"grok-local-pk-0122","name":"Grok + Cursor Premium 1M(FW) — Full warranty (1 Months)","priceUsd":24.74,"duration":"1 month","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: Full warranty (1 Months). Preserve exact seller tier label. Grok Plus/Premium, Super and Ultra are not treated as interchangeable."},
    {"id":"grok-local-pk-0123","name":"GROK PREMIUM 4X 1 MONTH (15D warranty) — 15 days warranty","priceUsd":37.02,"duration":"1 month","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: 15 days warranty. Preserve exact seller tier label. Grok Plus/Premium, Super and Ultra are not treated as interchangeable."},
    {"id":"grok-local-pk-0124","name":"Grok - Grok Super 1M (W7D) — 7 days warranty","priceUsd":70.61,"duration":"1 month","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: 7 days warranty. Preserve exact seller tier label. Grok Plus/Premium, Super and Ultra are not treated as interchangeable."},
    {"id":"grok-local-pk-0125","name":"Cursor Pro Plus bonus Grok Bot redeem 1 month","priceUsd":107.47,"duration":"1 month","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: Warranty not specified — confirm before purchase. Preserve exact seller tier label. Grok Plus/Premium, Super and Ultra are not treated as interchangeable."},
    {"id":"grok-local-pk-0126","name":"Grok - Grok ultra 1M (W2D) — 2 days warranty","priceUsd":107.97,"duration":"1 month","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: 2 days warranty. Preserve exact seller tier label. Grok Plus/Premium, Super and Ultra are not treated as interchangeable."},
    {"id":"grok-local-pk-0127","name":"Grok - Grok Ultra 1M (W7D) — 7 days warranty","priceUsd":132.9,"duration":"1 month","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: 7 days warranty. Preserve exact seller tier label. Grok Plus/Premium, Super and Ultra are not treated as interchangeable."},
    {"id":"grok-local-pk-0128","name":"Grok Ultra 1 month 2D warranty — 2 days warranty","priceUsd":148.46,"duration":"1 month","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: 2 days warranty. Preserve exact seller tier label. Grok Plus/Premium, Super and Ultra are not treated as interchangeable."},
    {"id":"grok-local-pk-0130","name":"Super Grok + X Premium Plus 2M Non Warranty (Paid account) - Manual Delivery","priceUsd":44.98,"duration":"2 months total","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: Warranty not specified — confirm before purchase. Preserve exact seller tier label. Grok Plus/Premium, Super and Ultra are not treated as interchangeable."},
    {"id":"grok-local-pk-0131","name":"Grok - Grok Plus 12M (W1M) — 1 month warranty","priceUsd":89.97,"duration":"12 months total","access":"Full private (seller card)","status":"On request","summaryEligible":true,"note":"Listed warranty: 1 month warranty. Preserve exact seller tier label. Grok Plus/Premium, Super and Ultra are not treated as interchangeable."},
    {"id":"grok-local-pk-0132","name":"Super Grok on own email","priceUsd":61.54,"duration":"3 months total","access":"Activated on buyer email","status":"On request","summaryEligible":true,"note":"Three-month warranty advertised."}
  ],
  "deepseek": [
    {"id":"deepseek-local-pk-0134","name":"Starter multi-model portal","priceUsd":4.05,"duration":"1 month","access":"JKDigital portal; 2 concurrent devices; shared credit pool across models","status":"On request","summaryEligible":false,"note":"600 platform credits/month across all included models. This is model access inside JKDigital, not the provider's native paid account. Credit multipliers vary by model."},
    {"id":"deepseek-local-pk-0135","name":"Pro multi-model portal","priceUsd":11.25,"duration":"1 month","access":"JKDigital portal; 5 concurrent devices; shared credit pool across models","status":"On request","summaryEligible":false,"note":"2000 platform credits/month across all included models. This is model access inside JKDigital, not the provider's native paid account. Credit multipliers vary by model."},
    {"id":"deepseek-local-pk-0136","name":"Business multi-model portal","priceUsd":31.49,"duration":"1 month","access":"JKDigital portal; 10 concurrent devices; shared credit pool across models","status":"On request","summaryEligible":false,"note":"8000 platform credits/month across all included models. This is model access inside JKDigital, not the provider's native paid account. Credit multipliers vary by model."}
  ],
  "notion-ai": [
    {"id":"notion-ai-local-pk-0138","name":"Notion Business Personal Account","priceUsd":10.35,"duration":"3 months total","access":"Personal account (seller claim)","status":"On request","summaryEligible":true,"note":"Listed warranty: 3 months. Business AI limits and account eligibility must be confirmed."},
    {"id":"notion-ai-local-pk-0139","name":"Notion Business Personal Account","priceUsd":26.09,"duration":"6 months total","access":"Personal account (seller claim)","status":"On request","summaryEligible":true,"note":"Listed warranty: 3 months. Business AI limits and account eligibility must be confirmed."},
    {"id":"notion-ai-local-pk-0140","name":"Notion Business Personal Account","priceUsd":35.54,"duration":"12 months total","access":"Personal account (seller claim)","status":"On request","summaryEligible":true,"note":"Listed warranty: 3 months. Business AI limits and account eligibility must be confirmed."},
    {"id":"notion-ai-local-pk-0141","name":"Notion Business","priceUsd":9.9,"duration":"3 months total","access":"Invitation seat","status":"On request","summaryEligible":true,"note":"Workspace ownership, role and AI quota require confirmation. Warranty duration requires confirmation."},
    {"id":"notion-ai-local-pk-0142","name":"Notion Business","priceUsd":3.6,"duration":"3 months total","access":"Redeem link on own Notion account; credit/debit card required","status":"On request","summaryEligible":true,"note":"Activation warranty only. Card required even though the reseller charge is prepaid."}
  ],
  "grammarly": [
    {"id":"grammarly-local-pk-0148","name":"Premium","priceUsd":4.5,"duration":"1 month","access":"Private access","status":"On request","summaryEligible":true,"note":""}
  ],
  "quillbot": [
    {"id":"quillbot-local-pk-0151","name":"Writing plan","priceUsd":2.15,"duration":"1 month","access":"Private access","status":"On request","summaryEligible":true,"note":""}
  ],
  "gamma": [
    {"id":"gamma-local-pk-0166","name":"Gamma Pro","priceUsd":103.47,"duration":"1 year total","access":"Private account","status":"On request","summaryEligible":true,"note":"Full annual total. Warranty duration requires confirmation."},
    {"id":"gamma-local-pk-0167","name":"Gamma Pro, 4,400–5,400 credits","priceUsd":12.6,"duration":"1 month","access":"Ready-made supplied account","status":"On request","summaryEligible":true,"note":"25-day warranty, shorter than plan term. Credit amount is stated as a range."},
    {"id":"gamma-local-pk-0168","name":"Gamma Plus","priceUsd":12.81,"duration":"1 month","access":"Login or own-account upgrade, supplied with order","status":"On request","summaryEligible":true,"note":"Plus is a separate tier from Pro. Access specifics follow order instructions."},
    {"id":"gamma-local-pk-0169","name":"Gamma Pro ready account","priceUsd":32.04,"duration":"1 month","access":"Ready-made supplied account with inbox access","status":"On request","summaryEligible":true,"note":"Account transfer details and native plan limits must be confirmed."},
    {"id":"gamma-local-pk-0170","name":"Gamma Pro code/link","priceUsd":21.78,"duration":"1 month","access":"Code/link applied on own account","status":"On request","summaryEligible":true,"note":"Redeem instructions supplied after payment."},
    {"id":"gamma-local-pk-0171","name":"Gamma Pro coupon","priceUsd":115.38,"duration":"1 year total","access":"Coupon applied on own account","status":"On request","summaryEligible":true,"note":"Card/VCC requested by provider at redemption. Full annual total."}
  ],
  "scispace": [
    {"id":"scispace-local-pk-0179","name":"Premium, 1,200 credits","priceUsd":17.09,"duration":"1 month","access":"Private account","status":"On request","summaryEligible":true,"note":"30-day warranty. Account eligibility and permitted access conditions apply."}
  ],
  "jenni": [
    {"id":"jenni-local-pk-0188","name":"Pro Unlimited","priceUsd":4.49,"duration":"1 month","access":"Shared account","status":"On request","summaryEligible":true,"note":"30-day warranty. Exact account eligibility and access delivery require confirmation."},
    {"id":"jenni-local-pk-0189","name":"Pro Unlimited","priceUsd":17.99,"duration":"1 month","access":"Private account","status":"On request","summaryEligible":true,"note":"30-day warranty. Exact account eligibility and access delivery require confirmation."}
  ],
  "semrush": [
    {"id":"semrush-local-pk-0193","name":"Pro plan","priceUsd":6.75,"duration":"1 month","access":"Private access (seller claim)","status":"On request","summaryEligible":true,"note":"Seller page last-verified date is August 24, 2026. Current stock not tested."},
    {"id":"semrush-local-pk-0194","name":"SEMrush Pro","priceUsd":6.75,"duration":"1 month","access":"Shared","status":"On request","summaryEligible":true,"note":"7-day replacement warranty. Seller explicitly requires availability and final terms confirmation."},
    {"id":"semrush-local-pk-0195","name":"Guru","priceUsd":8.54,"duration":"1 month","access":"Single-user browser access portal","status":"On request","summaryEligible":true,"note":"Full replacement warranty advertised. Single-user portal is not evidence of native account ownership."},
    {"id":"semrush-local-pk-0196","name":"Guru","priceUsd":22.49,"duration":"3 months total","access":"Single-user browser access portal","status":"On request","summaryEligible":true,"note":"Full replacement warranty advertised. Single-user portal is not evidence of native account ownership."},
    {"id":"semrush-local-pk-0198","name":"Semrush Guru shared portal","priceUsd":6.3,"duration":"1 month","access":"Shared quota via cloud dashboard","status":"On request","summaryEligible":true,"note":"Account-level ownership not supplied."}
  ],
  "leonardo": [
    {"id":"leonardo-local-pk-0205","name":"Leonardo AI - Leonardo premium 1M (W2D) — 2 days warranty","priceUsd":44.98,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 2 days warranty."},
    {"id":"leonardo-local-pk-0206","name":"Leonardo AI - Leonardo ultimate 1M (W2D) — 2 days warranty","priceUsd":76.48,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 2 days warranty."},
    {"id":"leonardo-local-pk-0207","name":"Leonardo AI unlimited 1 month warranty 2D — 2 days warranty","priceUsd":107.97,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 2 days warranty."}
  ],
  "magnific": [
    {"id":"magnific-local-pk-0214","name":"Freepik - Magnific Premium API Web Panel 60D full warranty — Full warranty (60 days)","priceUsd":13.04,"duration":"60 days","access":"Seller API web panel; private login label","status":"On request","summaryEligible":false,"note":"Listed warranty: Full warranty (60 days). Freepik/Magnific API gateway service, not a native Magnific premium subscription. Exact usage cap needs confirmation."},
    {"id":"magnific-local-pk-0215","name":"Freepik - Magnific Premium API Web Panel 90D full warranty — Full warranty (90 days)","priceUsd":18.89,"duration":"90 days","access":"Seller API web panel; private login label","status":"On request","summaryEligible":false,"note":"Listed warranty: Full warranty (90 days). Freepik/Magnific API gateway service, not a native Magnific premium subscription. Exact usage cap needs confirmation."}
  ],
  "krea": [
    {"id":"krea-local-pk-0218","name":"KREA AI - Krea PRO 1M (W2D) — 2 days warranty","priceUsd":29.69,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 2 days warranty."}
  ],
  "photoroom": [
    {"id":"photoroom-local-pk-0219","name":"Photoroom Max 7 Days full warranty — Full warranty (7 days)","priceUsd":1.35,"duration":"7 days","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: Full warranty (7 days)."}
  ],
  "heygen": [
    {"id":"heygen-local-pk-0221","name":"Creator","priceUsd":25.19,"duration":"1 month","access":"Private","status":"On request","summaryEligible":true,"note":"Product title supplies plan, privacy and term."},
    {"id":"heygen-local-pk-0222","name":"Creator;600credits","priceUsd":29.24,"duration":"1 month","access":"Private","status":"On request","summaryEligible":true,"note":""},
    {"id":"heygen-local-pk-0223","name":"HEYGEN CREATOR 1 MONTH (warranty 3 days) — 3 days warranty","priceUsd":26.99,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 3 days warranty."},
    {"id":"heygen-local-pk-0224","name":"HEYGEN CREATOR 1 MONTH (warranty 1 day) — 1 day warranty","priceUsd":31.49,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 1 day warranty."},
    {"id":"heygen-local-pk-0225","name":"Heygen - heygen creator 1M (W2D) — 2 days warranty","priceUsd":26.99,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 2 days warranty."},
    {"id":"heygen-local-pk-0226","name":"Heygen - Heygen creator 1M (W15D) — 15 days warranty","priceUsd":34.06,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 15 days warranty."},
    {"id":"heygen-local-pk-0227","name":"HEYGEN CREATOR 1 MONTH (3-day warranty) — 3 days warranty","priceUsd":29.24,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 3 days warranty."},
    {"id":"heygen-local-pk-0228","name":"HEYGEN CREATOR 1 MONTH (15-day warranty) — 15 days warranty","priceUsd":31.49,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 15 days warranty."}
  ],
  "kling": [
    {"id":"kling-local-pk-0229","name":"Standard;660credits","priceUsd":8.1,"duration":"1 month","access":"Private","status":"On request","summaryEligible":true,"note":""},
    {"id":"kling-local-pk-0232","name":"Kling 65-credit supplied account","priceUsd":0.45,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":false,"note":"Listed warranty: Full warranty (1 month). Limited 65/66-credit supplied-account package; not a full Standard/Pro monthly paid tier."},
    {"id":"kling-local-pk-0233","name":"Kling 66-credit supplied account","priceUsd":0.9,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":false,"note":"Listed warranty: Full warranty (1 month). Limited 65/66-credit supplied-account package; not a full Standard/Pro monthly paid tier."},
    {"id":"kling-local-pk-0234","name":"Kling Standard 1000 credit 1 month warranty 1 day — 1 day warranty","priceUsd":11.45,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 1 day warranty."},
    {"id":"kling-local-pk-0235","name":"Kling Standard 1000 Credit 1 Month (24H Warranty) — 24 hours warranty","priceUsd":11.54,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 24 hours warranty."},
    {"id":"kling-local-pk-0236","name":"KLING 792-992 cre 1 month (24h warranty) — 24 hours warranty","priceUsd":12.59,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 24 hours warranty."},
    {"id":"kling-local-pk-0237","name":"KLING STAND RANDOM CREDITS 1K-1.3K 1 MONTH full warranty — Full warranty (1 month)","priceUsd":17.54,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: Full warranty (1 month)."},
    {"id":"kling-local-pk-0238","name":"Kling Standard Random Credit 1000 -1300 1 Month (full warranty) — Full warranty (1 Months)","priceUsd":17.99,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: Full warranty (1 Months)."},
    {"id":"kling-local-pk-0239","name":"KLING STAND RANDOM CREDIT 1k - 1.3k 1 MONTH - full warranty — Full warranty (1 month)","priceUsd":19.67,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: Full warranty (1 month)."},
    {"id":"kling-local-pk-0240","name":"Kling Pro — 3,366 credits","priceUsd":41.05,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 72 hours. Includes the advertised 3,366-credit Pro package; confirm activation and credit validity."},
    {"id":"kling-local-pk-0241","name":"KLING PRO 3k3 credit 1 month warranty 7 days — 7 days warranty","priceUsd":53.98,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 7 days warranty."},
    {"id":"kling-local-pk-0242","name":"Kling - Kling premier 1M (W2D) — 2 days warranty","priceUsd":62.98,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 2 days warranty."},
    {"id":"kling-local-pk-0243","name":"Kling Pre 8k-9k5 1 month 2-day warranty — 2 days warranty","priceUsd":89.97,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 2 days warranty."},
    {"id":"kling-local-pk-0244","name":"Kling Pre 8k-9k5 1 Month (24h warranty) — 24 hours warranty","priceUsd":82.26,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 24 hours warranty."},
    {"id":"kling-local-pk-0245","name":"Kling Ultra 26,000–27,500 Credits 1 Month (2 Days Warranty) — 2 days warranty","priceUsd":121.46,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 2 days warranty."},
    {"id":"kling-local-pk-0246","name":"Kling Ultra 26k credit 1 month warranty 2D — 2 days warranty","priceUsd":134.96,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 2 days warranty."},
    {"id":"kling-local-pk-0247","name":"Kling 28k7 - 29k9 cre 1 Month warranty 3 days — 3 days warranty","priceUsd":139.72,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 3 days warranty."},
    {"id":"kling-local-pk-0248","name":"KLING ULTRA 26000 - 27500 CRE 1 MONTH (warranty 2 DAYS) — 2 days warranty","priceUsd":179.95,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 2 days warranty."},
    {"id":"kling-local-pk-0249","name":"Kling 70K Credit 1 month full warranty — Full warranty (1 month)","priceUsd":764.8,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: Full warranty (1 month)."}
  ],
  "invideo": [
    {"id":"invideo-local-pk-0253","name":"InVideo.io Unlimited (seller label)","priceUsd":3.6,"duration":"30 days","access":"Managed access portal","status":"On request","summaryEligible":true,"note":"Pakistan-only service. Advertised lifetime packages actually specify3/6 months replacement coverage. One ISP/IP per user; shared resources can hit usage limits."}
  ],
  "capcut": [
    {"id":"capcut-local-pk-0260","name":"CapCut Pro","priceUsd":4.5,"duration":"30 days","access":"Shared managed access","status":"On request","summaryEligible":true,"note":"Pakistan-only service. Advertised lifetime packages actually specify3/6 months replacement coverage. One ISP/IP per user; shared resources can hit usage limits."},
    {"id":"capcut-local-pk-0261","name":"CapCut Pro","priceUsd":4.5,"duration":"25 days","access":"Private account (seller label)","status":"On request","summaryEligible":true,"note":"Pakistan-only service. Advertised lifetime packages actually specify3/6 months replacement coverage. One ISP/IP per user; shared resources can hit usage limits."},
    {"id":"capcut-local-pk-0262","name":"CapCut Pro","priceUsd":5.4,"duration":"1 month","access":"Pre-made account","status":"On request","summaryEligible":true,"note":"No automatic renewal."},
    {"id":"capcut-local-pk-0263","name":"CapCut Pro","priceUsd":31.49,"duration":"6 months total","access":"Pre-made account","status":"On request","summaryEligible":true,"note":"No automatic renewal."},
    {"id":"capcut-local-pk-0264","name":"CapCut Pro","priceUsd":58.48,"duration":"12 months total","access":"Pre-made account","status":"On request","summaryEligible":true,"note":"No automatic renewal."},
    {"id":"capcut-local-pk-0265","name":"CapCut Pro","priceUsd":4.05,"duration":"1 month","access":"Private","status":"On request","summaryEligible":true,"note":"Seller-advertised monthly offer."},
    {"id":"capcut-local-pk-0269","name":"Capcut Pro 7D 500 credits — Full warranty (6-7 Days)","priceUsd":0.9,"duration":"7 days","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: Full warranty (6-7 Days)."},
    {"id":"capcut-local-pk-0270","name":"CapCut - Capcut Pro Personal 1M (FW) — Full warranty (1 Months)","priceUsd":4.49,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: Full warranty (1 Months)."},
    {"id":"capcut-local-pk-0271","name":"Capcut Pro 1M(FW) — Full warranty (1 Months)","priceUsd":4.49,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: Full warranty (1 Months)."},
    {"id":"capcut-local-pk-0272","name":"Capcut Pro Team 1M (FW) — Full warranty (1 Months)","priceUsd":4.49,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: Full warranty (1 Months)."},
    {"id":"capcut-local-pk-0275","name":"CapCut - Capcut pro personal 12M (FW) — Full warranty (12 Months)","priceUsd":58.48,"duration":"12 months total","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: Full warranty (12 Months)."},
    {"id":"capcut-local-pk-0276","name":"Capcut Pro 17 Month Individual — 1 month warranty","priceUsd":44.98,"duration":"17 months total","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 1 month warranty."}
  ],
  "descript": [
    {"id":"descript-local-pk-0277","name":"Creator","priceUsd":95.83,"duration":"12 months total","access":"Private personal account (seller claim)","status":"On request","summaryEligible":true,"note":"Annual purchase, not a monthly rate. Confirm AI/media allowance for this offer."}
  ],
  "suno": [
    {"id":"suno-local-pk-0279","name":"Suno - Pro 1M (W1D) — 1 day warranty","priceUsd":11.24,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 1 day warranty."},
    {"id":"suno-local-pk-0280","name":"SUNO PRO 1 MONTH (warranty 1 DAY) — 1 day warranty","priceUsd":16.37,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 1 day warranty."},
    {"id":"suno-local-pk-0281","name":"Suno Pro 1 month warranty 2 Days — 2 days warranty","priceUsd":12.76,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 2 days warranty."},
    {"id":"suno-local-pk-0282","name":"SUNO PREMIER 1 MONTH (3 DAYS warranty) — 3 days warranty","priceUsd":29.24,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 3 days warranty."},
    {"id":"suno-local-pk-0283","name":"Sun - Sun premier 1M (W7D) — 7 days warranty","priceUsd":39.89,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 7 days warranty."},
    {"id":"suno-local-pk-0284","name":"SUNO PREMIER 1 MONTH (7-DAY WARRANTY) — 7 days warranty","priceUsd":33.74,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 7 days warranty."}
  ],
  "murf": [
    {"id":"murf-local-pk-0285","name":"MurfAI group buy","priceUsd":9.9,"duration":"1 month","access":"Managed cloud dashboard","status":"On request","summaryEligible":true,"note":"Pakistan-localized amount; not a private Murf account. Seller accepts card, local wallets rollout not confirmed."}
  ],
  "hailuo": [
    {"id":"hailuo-local-pk-0286","name":"Hailuo AI Unlimited","priceUsd":13.5,"duration":"30 days","access":"Shared managed access","status":"On request","summaryEligible":true,"note":"Pakistan-only service. Advertised lifetime packages actually specify3/6 months replacement coverage. One ISP/IP per user; shared resources can hit usage limits."},
    {"id":"hailuo-local-pk-0287","name":"Hailou AI Unlimited (seller label)","priceUsd":18,"duration":"1 month","access":"Managed access portal","status":"On request","summaryEligible":true,"note":"Actual native plan and usage cap need confirmation."}
  ],
  "cursor": [
    {"id":"cursor-local-pk-0310","name":"Cursor Pro","priceUsd":177.7,"duration":"12 months total","access":"Activation on own email; existing or new account","status":"On request","summaryEligible":true,"note":"Fresh HTTP price grid. Full-warranty claim; renewal/fulfillment not tested."},
    {"id":"cursor-local-pk-0313","name":"Cursor Pro, 12 Months","priceUsd":108.75,"duration":"12 months total","access":"Seller-provided account; change password; up to2devices","status":"On request","summaryEligible":true,"note":"Not activation on own email. Credits, warranty and continued access require confirmation."},
    {"id":"cursor-local-pk-0314","name":"Cursor Pro Plus, 12 Months","priceUsd":286.25,"duration":"12 months total","access":"Seller-provided account; change password; up to2devices","status":"On request","summaryEligible":true,"note":"Not activation on own email. Credits, warranty and continued access require confirmation."}
  ],
  "github-copilot": [
    {"id":"github-copilot-local-pk-0317","name":"GitHub Copilot Pro","priceUsd":107.15,"duration":"2 years total","access":"Activation on own email; private seller claim","status":"On request","summaryEligible":true,"note":""}
  ],
  "devin": [
    {"id":"devin-local-pk-0318","name":"Devin Core","priceUsd":112.5,"duration":"1 year total","access":"Activation on own account; private seller claim","status":"On request","summaryEligible":true,"note":"Seller claims 600 USD usage credits; value/eligibility not independently tested."}
  ],
  "replit": [
    {"id":"replit-local-pk-0320","name":"Replit Core (1 Year Coupon)","priceUsd":70.51,"duration":"1 year total","access":"Voucher/code redeemed on own account","status":"On request","summaryEligible":true,"note":""},
    {"id":"replit-local-pk-0322","name":"Replit Pro (1 Month Coupon)","priceUsd":42.3,"duration":"1 month","access":"Voucher/code redeemed on own account","status":"On request","summaryEligible":true,"note":""},
    {"id":"replit-local-pk-0324","name":"Replit Core","priceUsd":102.5,"duration":"1 year total","access":"Activation on own email; private seller claim","status":"On request","summaryEligible":true,"note":"Usage/hosting/renewal terms need confirmation."}
  ],
  "lovable": [
    {"id":"lovable-local-pk-0365","name":"Lovable.dev Pro Plan (1 Year Voucher)","priceUsd":89.74,"duration":"1 year total","access":"Voucher/code redeemed on own account","status":"On request","summaryEligible":true,"note":""},
    {"id":"lovable-local-pk-0366","name":"Lovable Pro","priceUsd":120,"duration":"1 year total","access":"Activation on own account; private seller claim","status":"On request","summaryEligible":true,"note":"Seller says 100 credits monthly."}
  ],
  "bolt": [
    {"id":"bolt-local-pk-0371","name":"Bolt.new Pro (1 Year Coupon)","priceUsd":38.45,"duration":"1 year total","access":"Voucher/code redeemed on own account","status":"On request","summaryEligible":true,"note":"Seller says 10M tokens monthly; own-account coupon eligibility must be checked."}
  ],
  "claude-code": [
    {"id":"claude-code-local-pk-0434","name":"Claude API, $100 Credit (30 Days)","priceUsd":14.09,"duration":"30 days","access":"Third-party Claude API gateway; not an Anthropic account or official Anthropic API key","status":"On request","summaryEligible":false,"note":"Compatible with Claude Code, but this is a gateway allowance, not native Claude Code subscription access."},
    {"id":"claude-code-local-pk-0435","name":"Claude API, $500 Credit (30 Days)","priceUsd":70.51,"duration":"30 days","access":"Third-party Claude API gateway; not an Anthropic account or official Anthropic API key","status":"On request","summaryEligible":false,"note":"Compatible with Claude Code, but this is a gateway allowance, not native Claude Code subscription access."},
    {"id":"claude-code-local-pk-0436","name":"Claude API, 10M Tokens (1 Day)","priceUsd":3.83,"duration":"1 day","access":"Third-party Claude API gateway; not an Anthropic account or official Anthropic API key","status":"On request","summaryEligible":false,"note":"Compatible with Claude Code, but this is a gateway allowance, not native Claude Code subscription access."},
    {"id":"claude-code-local-pk-0437","name":"Claude API, 50M Tokens (2 Days)","priceUsd":8.96,"duration":"2 days","access":"Third-party Claude API gateway; not an Anthropic account or official Anthropic API key","status":"On request","summaryEligible":false,"note":"Compatible with Claude Code, but this is a gateway allowance, not native Claude Code subscription access."},
    {"id":"claude-code-local-pk-0438","name":"Claude API, 100M Tokens (3 Days)","priceUsd":12.81,"duration":"3 days","access":"Third-party Claude API gateway; not an Anthropic account or official Anthropic API key","status":"On request","summaryEligible":false,"note":"Compatible with Claude Code, but this is a gateway allowance, not native Claude Code subscription access."}
  ],
  "n8n": [
    {"id":"n8n-local-pk-0439","name":"n8n Cloud Starter (1 Year Voucher)","priceUsd":38.45,"duration":"1 year total","access":"Voucher/code redeemed on own account","status":"On request","summaryEligible":true,"note":""},
    {"id":"n8n-local-pk-0440","name":"n8n Starter yearly coupon","priceUsd":106.17,"duration":"1 year total","access":"Own-account coupon redemption","status":"On request","summaryEligible":true,"note":"Cloud coupon eligibility and continuing charges require confirmation."}
  ],
  "gumloop": [
    {"id":"gumloop-local-pk-0446","name":"Gumloop Pro, 20k Credits (1 Year Coupon)","priceUsd":57.68,"duration":"1 year total","access":"Voucher/code redeemed on own account","status":"On request","summaryEligible":true,"note":"Seller says 20,000 monthly credits; own-account coupon."}
  ],
  "reclaim": [
    {"id":"reclaim-local-pk-0447","name":"Reclaim.ai Starter coupon","priceUsd":21.78,"duration":"1 year total","access":"Coupon on own account","status":"On request","summaryEligible":true,"note":"Select yearly Starter, coupon/card required. Native tier supports teams up to 10 seats; purchased coupon seat entitlement must be confirmed."}
  ],
  "manus": [
    {"id":"manus-local-pk-0519","name":"Manus 4000 Credits / Month (1 Year)","priceUsd":128.2,"duration":"1 year total","access":"Voucher/code redeemed on own account","status":"On request","summaryEligible":true,"note":"4,000 monthly credits; card/VCC may be needed at activation."}
  ],
  "chatbase": [
    {"id":"chatbase-local-pk-0522","name":"Chatbase Pro (1 Month Coupon)","priceUsd":70.51,"duration":"1 month","access":"Voucher/code redeemed on own account","status":"On request","summaryEligible":true,"note":""}
  ],
  "qwen": [
    {"id":"qwen-local-pk-0524","name":"API Qwen $30 gateway package","priceUsd":4.49,"duration":"1 month","access":"Private redemption code on third-party vibi.top gateway","status":"On request","summaryEligible":false,"note":"Full one-month warranty advertised. $30 is gateway credit allowance, not native Qwen account cash value or official subscription."}
  ],
  "kimi": [
    {"id":"kimi-local-pk-0525","name":"Starter multi-model portal","priceUsd":4.05,"duration":"1 month","access":"JKDigital portal; 2 concurrent devices; shared credit pool across models","status":"On request","summaryEligible":false,"note":"600 platform credits/month across all included models. This is model access inside JKDigital, not the provider's native paid account. Credit multipliers vary by model."},
    {"id":"kimi-local-pk-0526","name":"Pro multi-model portal","priceUsd":11.25,"duration":"1 month","access":"JKDigital portal; 5 concurrent devices; shared credit pool across models","status":"On request","summaryEligible":false,"note":"2000 platform credits/month across all included models. This is model access inside JKDigital, not the provider's native paid account. Credit multipliers vary by model."},
    {"id":"kimi-local-pk-0527","name":"Business multi-model portal","priceUsd":31.49,"duration":"1 month","access":"JKDigital portal; 10 concurrent devices; shared credit pool across models","status":"On request","summaryEligible":false,"note":"8000 platform credits/month across all included models. This is model access inside JKDigital, not the provider's native paid account. Credit multipliers vary by model."}
  ],
  "higgsfield": [
    {"id":"higgsfield-local-pk-0529","name":"Plus;1000credits","priceUsd":38.24,"duration":"1 month","access":"Private","status":"On request","summaryEligible":true,"note":""},
    {"id":"higgsfield-local-pk-0531","name":"Genjutsu — one 720p video","priceUsd":2.69,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":false,"note":"Listed warranty: 24 hours warranty. Genjutsu package is one 720p video, not an unrestricted paid video subscription."},
    {"id":"higgsfield-local-pk-0532","name":"Genjutsu — one 720p video","priceUsd":2.24,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":false,"note":"Listed warranty: No warranty. Genjutsu package is one 720p video, not an unrestricted paid video subscription."},
    {"id":"higgsfield-local-pk-0533","name":"Genjutsu — one 720p video","priceUsd":2.9,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":false,"note":"Listed warranty: 1 hour warranty. Genjutsu package is one 720p video, not an unrestricted paid video subscription."},
    {"id":"higgsfield-local-pk-0534","name":"HIGGFIELD 1800 credit 1 month (3 DAYS warranty) — 3 days warranty","priceUsd":139.72,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 3 days warranty."},
    {"id":"higgsfield-local-pk-0535","name":"Higgsfield Ultra 3k Credit 1 month (no warranty) — No warranty","priceUsd":119.74,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: No warranty."},
    {"id":"higgsfield-local-pk-0536","name":"Higgsfield Pro Redeem 12 months — ⚡ No warranty after activation","priceUsd":238.43,"duration":"12 months total","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: ⚡ No warranty after activation."},
    {"id":"higgsfield-local-pk-0537","name":"HIGGFIELD PRO REDEEM 12 MONTHS — ⚡ No warranty after activation","priceUsd":247.43,"duration":"12 months total","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: ⚡ No warranty after activation."}
  ],
  "photoshop": [
    {"id":"photoshop-local-pk-0542","name":"Adobe Photoshop","priceUsd":359.91,"duration":"12 months total","access":"Subscription; 1 device","status":"On request","summaryEligible":true,"note":"Windows/macOS. Product page indexed amount and term checked; not a shared Creative Cloud bundle."},
    {"id":"photoshop-local-pk-0543","name":"Adobe Creative Cloud Monthly bundle; Photoshop included","priceUsd":8.1,"duration":"25 days","access":"Managed access; 1 device","status":"On request","summaryEligible":true,"note":"All-apps bundle, not a standalone Photoshop license. Single-ISP restriction applies."},
    {"id":"photoshop-local-pk-0544","name":"Adobe Creative Cloud Monthly bundle; Photoshop included","priceUsd":10.35,"duration":"25 days","access":"Managed access; 2 devices","status":"On request","summaryEligible":true,"note":"All-apps bundle, not a standalone Photoshop license. Single-ISP restriction applies."}
  ],
  "adobe-express": [
    {"id":"adobe-express-local-pk-0546","name":"Adobe Express","priceUsd":11.25,"duration":"12 months total","access":"Own/new Adobe account","status":"On request","summaryEligible":true,"note":"Annual upfront amount; catalog from/mo heading is misleading for this one-year term."},
    {"id":"adobe-express-local-pk-0550","name":"ADOBE EXPRESS 12M","priceUsd":2.69,"duration":"12 months total","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: Warranty not specified — confirm before purchase."},
    {"id":"adobe-express-local-pk-0551","name":"Adobe Express Premium 12M Coupons","priceUsd":4.49,"duration":"12 months total","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: Warranty not specified — confirm before purchase."},
    {"id":"adobe-express-local-pk-0552","name":"Adobe Express 12 Month — No warranty after activation","priceUsd":2.24,"duration":"12 months total","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: No warranty after activation."},
    {"id":"adobe-express-local-pk-0553","name":"Adobe Express Premium 12 months no warranty — No warranty","priceUsd":3.22,"duration":"12 months total","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: No warranty."},
    {"id":"adobe-express-local-pk-0554","name":"Code] Adobe Express Premium 12 months (No warranty) — No warranty","priceUsd":4.04,"duration":"12 months total","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: No warranty."},
    {"id":"adobe-express-local-pk-0555","name":"Adobe Express Premium 12 months without warranty","priceUsd":6.74,"duration":"12 months total","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: Warranty not specified — confirm before purchase."}
  ],
  "luminar": [
    {"id":"luminar-local-pk-0558","name":"Luminar Neo Perpetual Desktop","priceUsd":115.51,"duration":"Perpetual core desktop license","access":"Up to 2 Windows/macOS computers","status":"On request","summaryEligible":true,"note":"Generative AI currently included for365 days; future upgrades and online AI are not perpetual."}
  ],
  "dzine": [
    {"id":"dzine-local-pk-0560","name":"Master","priceUsd":22.49,"duration":"1 month","access":"Private","status":"On request","summaryEligible":true,"note":"Current advertised amount; usage limits require confirmation."}
  ],
  "akool": [
    {"id":"akool-local-pk-0581","name":"Akool Starter 200 Cre 1 month (12H warranty) — 12 hours warranty","priceUsd":8.23,"duration":"1 month","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 12 hours warranty. 200-credit account package; not Pro Max 1200 credits."}
  ],
  "figma": [
    {"id":"figma-local-pk-0599","name":"Figma - EDU 12M (FW) — Full warranty (12 Months)","priceUsd":22.49,"duration":"12 months total","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: Full warranty (12 Months). Education/readymade-account offer where named; education eligibility and commercial-use rights need confirmation."},
    {"id":"figma-local-pk-0600","name":"Figma Pro Edu 1 year (full warranty) — Full warranty (1 Years)","priceUsd":11.24,"duration":"1 year total","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: Full warranty (1 Years). Education/readymade-account offer where named; education eligibility and commercial-use rights need confirmation."},
    {"id":"figma-local-pk-0601","name":"Figma Pro Edu official account 1 year (full warranty) — Full warranty (1 Years)","priceUsd":13.49,"duration":"1 year total","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: Full warranty (1 Years). Education/readymade-account offer where named; education eligibility and commercial-use rights need confirmation."},
    {"id":"figma-local-pk-0602","name":"Figma Pro 1 year full warranty — Full warranty (1 year)","priceUsd":20.24,"duration":"1 year total","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: Full warranty (1 year). Education/readymade-account offer where named; education eligibility and commercial-use rights need confirmation."},
    {"id":"figma-local-pk-0603","name":"Figma Edu 2Year (1MW) — 1 month warranty","priceUsd":13.49,"duration":"2 years total","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 1 month warranty. Education/readymade-account offer where named; education eligibility and commercial-use rights need confirmation."},
    {"id":"figma-local-pk-0604","name":"Figma Professional Edu 2 Year — 6 months warranty","priceUsd":8.99,"duration":"2 years total","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 6 months warranty. Education/readymade-account offer where named; education eligibility and commercial-use rights need confirmation."},
    {"id":"figma-local-pk-0605","name":"Figma Pro Education 2 Years warranty 1 Year — 1 year warranty","priceUsd":17.99,"duration":"2 years total","access":"Shared (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 1 year warranty. Education/readymade-account offer where named; education eligibility and commercial-use rights need confirmation."},
    {"id":"figma-local-pk-0606","name":"Figma Pro Education 2 Years (12 Months Warranty) — 12 months warranty","priceUsd":22.49,"duration":"2 years total","access":"Shared (seller label)","status":"On request","summaryEligible":true,"note":"Listed warranty: 12 months warranty. Education/readymade-account offer where named; education eligibility and commercial-use rights need confirmation."}
  ],
  "warp": [
    {"id":"warp-local-pk-0608","name":"Warp.dev Build Plan (1 Year Voucher)","priceUsd":28.19,"duration":"1 year total","access":"Voucher/code redeemed on own account","status":"On request","summaryEligible":true,"note":"Seller says 1,500 AI credits monthly on Build."},
    {"id":"warp-local-pk-0610","name":"Warp Pro","priceUsd":87.5,"duration":"1 year total","access":"Activation on own email","status":"On request","summaryEligible":true,"note":"Seller-named Pro tier may differ from current Build."}
  ],
  "magic-patterns": [
    {"id":"magic-patterns-local-pk-0612","name":"Magic Patterns Starter (1 Year Coupon)","priceUsd":28.19,"duration":"1 year total","access":"Voucher/code redeemed on own account","status":"On request","summaryEligible":true,"note":"Starter/Hobby only; seller requires a card/VCC for redemption."}
  ],
  "quizlet": [
    {"id":"quizlet-local-pk-0621","name":"Plus Unlimited, full warranty","priceUsd":2.24,"duration":"30 days","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Supplied email/password account; full 30-day warranty."},
    {"id":"quizlet-local-pk-0622","name":"Upgrade Quizlet Plus Unlimited","priceUsd":12.14,"duration":"1 year total","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Upgrade offer. Exact eligibility and delivery information require confirmation."},
    {"id":"quizlet-local-pk-0623","name":"Plus Ultimate, full warranty","priceUsd":13.49,"duration":"12 months total","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Seller marks full private. Supplied account/upgrade distinction needs confirmation."},
    {"id":"quizlet-local-pk-0624","name":"Plus, full warranty","priceUsd":13.49,"duration":"12 months total","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Seller marks full private. Supplied account/upgrade distinction needs confirmation."},
    {"id":"quizlet-local-pk-0625","name":"Plus Unlimited, full warranty","priceUsd":22.49,"duration":"1 year total","access":"Full private (seller label)","status":"On request","summaryEligible":true,"note":"Seller marks full private. Separate listing from the cheaper upgrade."},
    {"id":"quizlet-local-pk-0626","name":"Quizlet Plus","priceUsd":20.5,"duration":"1 year total","access":"Supplied login or own-account upgrade link","status":"On request","summaryEligible":true,"note":"Confirm which delivery option will be supplied; all sales final after code delivery."},
    {"id":"quizlet-local-pk-0628","name":"Quizlet Plus Unlimited / Plus Ultimate","priceUsd":20.5,"duration":"1 year total","access":"Supplied login or own-account upgrade link","status":"On request","summaryEligible":true,"note":"Seller identifies highest Plus tier; confirm account/upgrade delivery before purchase."}
  ],
  "granola": [
    {"id":"granola-local-pk-0631","name":"Granola Business coupon","priceUsd":6.75,"duration":"4 months total","access":"Coupon code for Business plan","status":"On request","summaryEligible":true,"note":"No warranty. Activation/eligibility must be confirmed."},
    {"id":"granola-local-pk-0632","name":"Granola Business coupon","priceUsd":14.09,"duration":"3 months total","access":"Coupon on own account","status":"On request","summaryEligible":true,"note":"All sales final after code delivery."},
    {"id":"granola-local-pk-0633","name":"Granola Business coupon","priceUsd":21.78,"duration":"1 year total","access":"Coupon on own account","status":"On request","summaryEligible":true,"note":"Select Business; card requested at provider redemption. All sales final after code delivery."}
  ],
  "hix-ai": [
    {"id":"hix-ai-local-pk-0638","name":"HIX AI shared portal","priceUsd":6.3,"duration":"1 month","access":"Shared quota via cloud dashboard","status":"On request","summaryEligible":true,"note":"Account-level ownership not supplied."}
  ]
};

export type ToolPricingModel = {
  kind: "free" | "usage" | "quote" | "unverified";
  label: string;
  description: string;
  sourceUrl: string;
};

const toolPricingModels: Partial<Record<ToolId, ToolPricingModel>> = {};

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
    candidates = candidates.filter((plan) => preference === "Monthly" ? /^(1 month|28 days|29 days|30 days|31 days)$/.test(plan.duration) : /^(12 months|1 year|365 days)( total)?$/.test(plan.duration));
    if (!candidates.length) return `Request ${preference.toLowerCase()} pricing`;
  }
  if (!candidates.length) return plans.length ? "View USD plans" : "Request pricing";
  const lowest = candidates.reduce((best, plan) => plan.priceUsd < best.priceUsd ? plan : best);
  return `From ${formatUsd(lowest.priceUsd)} / ${lowest.duration.replace(/ total$/, "")}`;
}
