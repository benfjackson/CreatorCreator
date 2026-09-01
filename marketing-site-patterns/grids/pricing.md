# Phase 4 — Pricing presentation

## Summary table

| Site | Model | Tiers | Public prices | Toggle | Enterprise | Comparison |
|------|-------|-------|---------------|--------|------------|------------|
| Linear | Per seat/mo | 4 (Free–Enterprise) | Yes | Annual default | Custom + contact sales | Full feature matrix |
| Notion | Per member/mo | 4+ | Yes | Monthly shown | Enterprise custom | Table + FAQ |
| Vercel | Platform + usage | 3 + usage lines | Yes | N/A | Custom | Massive feature grid |
| PostHog | Usage-based | Per product | Yes (unit rates) | N/A | Not emphasized | Product rate cards |
| Attio | Per user/mo | 4 | Yes | Monthly/Annual −20% | Custom + Talk to sales | Extensive matrix |
| Gong | Per user + platform fee | Opaque | **No** | N/A | Form only | Not observed |
| Bain | Custom engagements | N/A | **No** | N/A | Only option | Not observed |
| FOREsight | Subscription by org budget | 2 + budget bands | Yes | Monthly/annual | N/A | Side-by-side cards |
| Our Watch | N/A | — | — | — | — | — |
| Social Traders | Membership/advisory | Opaque | **No** | N/A | Contact | Not observed |
| Thankyou | Product retail | SKU | In shop | N/A | N/A | N/A |
| B Lab | Revenue-tiered annual fee | Many bands | Partial (process pages) | N/A | Discovery process | FAQ on fees |
| Atlassian Foundation | Grants | N/A | Free/discounted software | N/A | N/A | N/A |

---

## Per-site detail

### Linear (`/pricing`)

| Q | Finding |
|---|---------|
| 4.1 Model | Per user/month, billed yearly |
| 4.2 Tiers | **4:** Free ($0), Basic ($10), Business ($16), Enterprise (Custom) |
| 4.3 Toggle | Annual billing stated; no visible monthly toggle on page |
| 4.4 Enterprise | Separate row; "contact sales" CTA |
| 4.5 Comparison | Full scrollable matrix — all features by tier |
| 4.6 Anchoring | Free first; no "popular" badge |
| 4.7 FAQ | Not on pricing page — minimal |
| 4.10 Early bird | Not observed |

**Locator:** H1 "Pricing"; Free tier "Free for everyone"; Business lists premium AI features.

### Notion (`/pricing`)

| Q | Finding |
|---|---------|
| 4.1 | Per member/month |
| 4.2 | Free, Plus ($10), Business ($20, **Recommended**), Enterprise |
| 4.3 | Monthly prices shown |
| 4.6 Anchoring | **"Recommended" badge on Business** (middle-high tier) |
| 4.5 | Grouped: "Essentials" vs "AI workspace" sections |
| 4.7 FAQ | Pricing FAQ section on page |

### Vercel (`/pricing`)

| Q | Finding |
|---|---------|
| 4.1 | Flat plan + usage overages |
| 4.2 | Hobby ($0), Pro ($20/mo), Enterprise (Custom) |
| 4.5 | **Deepest matrix in set** — features × plans × usage units |
| 4.4 Enterprise | Custom throughout |
| 4.7 | Implicit in table footnotes |

### PostHog (homepage + `/pricing`)

| Q | Finding |
|---|---------|
| 4.1 | Pay-per-use with free tiers per product |
| 4.2 | Not traditional tiers — **per-product rate cards** |
| 4.5 | Example rates on homepage (events, recordings, requests, rows) |
| 4.7 | Philosophy section: "you shouldn't have to worry about pricing" |
| 4.10 | Humorous urgency parody ("Act now and get $0 off") |

### Attio (`/pricing`)

| Q | Finding |
|---|---------|
| 4.1 | Per user/month |
| 4.2 | Free ($0), Plus ($35 annual), Pro ($79, **Popular**), Enterprise |
| 4.3 | **Monthly/Annual toggle** — Save 20% on annual |
| 4.5 | Multi-section matrix: Credits, Workspace, Automations, Email, etc. |
| 4.6 | **"Popular" on Pro** |
| 4.7 | 11 FAQs on pricing page |

### Gong (`/pricing`)

| Q | Finding |
|---|---------|
| 4.1 | Per user + platform fee — **described, not priced** |
| 4.8 | "We'd love to prepare a customized proposal" — form wizard |
| 4.2 | Step 1: team size buckets (1–50, 51–1K, etc.) |
| 4.7 | Trust badges (G2, Gartner) instead of FAQ |

### Bain

| Q | Finding |
|---|---------|
| 4.8 | **Fully opaque** — no pricing page |
| 4.9 | N/A |

### FOREsight (homepage)

| Q | Finding |
|---|---------|
| 4.1 | Flat subscription by organisation budget band |
| 4.2 | **2 tiers:** Essentials, Essentials + Advisory |
| 4.3 | Monthly or annual (2 months free on annual) |
| 4.8 | Budget selector: Under 30K → 5M+ |
| 4.9 | Not-for-profit positioning; sized to org budget |
| 4.10 | **"Early joiner pricing (until end of 2026)"** — urgency with deadline |
| 4.7 FAQ | Board buy-in, "not a lobbying agency", part of FORE Good |

**Locator:** Essentials "$49/month (or $490/year)"; Advisory "$229/month (or $2,290/year)".

### Social Traders

| Q | Finding |
|---|---------|
| 4.8 | Packages via `/corporate-membership` — **no numbers on site** |
| 4.9 | Mission framing: social performance ROI |

### B Lab

| Q | Finding |
|---|---------|
| 4.1 | Annual certification fee by gross revenue |
| 4.4 | Large enterprise: discovery/scoping, email `certify@bcorporation.net` |
| 4.9 | Equity pricing available; grant-funded N/A |
| 4.7 FAQ | Fee structure FAQ on process pages |

---

## Archetype pricing patterns

### B2B SaaS

- **3–4 tiers** + Enterprise row is the modal pattern.
- Show **per-seat/per-month** with annual discount toggle (Attio, Notion).
- **"Popular" or "Recommended"** badge on growth tier (Notion Business, Attio Pro).
- **Feature matrix** below cards — expected for technical buyers.
- Enterprise always **"Contact sales"** or custom quote.

### B2B services

- **Opaque default** for high-touch (Gong, Bain).
- **Productised exception:** 2–3 packages with public prices when ACV is low (FOREsight).
- Lead with **budget/team size qualifier** before showing anything.
- **FAQ replaces comparison table** for objection handling.

### Mission-led

- **Membership/certification fees** tied to revenue or org size (B Lab, FOREsight bands).
- **Donation/shop** separate from programme pricing (Thankyou).
- **Early-bird / founding member** pricing with explicit end date (FOREsight).
- Often **no pricing in nav** — embedded in story or dedicated process page.
