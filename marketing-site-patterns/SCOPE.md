# Marketing site patterns — research scope

Research date: September 2026. Corpus for a future Next.js marketing-site skill (pairs with `workshopping-design-systems`).

## Phase 0 answers

| # | Question | Answer |
|---|----------|--------|
| 0.1 | Primary buyer | **B2B SaaS:** champion (eng/product) + economic buyer (VP/head). **Services:** economic buyer + committee. **Mission-led:** mission-aligned leader + board; secondary: partners/funders. |
| 0.2 | Primary conversion | **SaaS:** self-serve signup / free tier. **Services:** demo or intro call. **Mission-led:** trust + newsletter/partner/donate; product CTA when applicable. |
| 0.3 | Traffic intent | Category + problem-aware keywords (solutions pages, blog); branded search; comparison pages (SaaS leaders); issue keywords (mission-led). |
| 0.4 | Stack constraints | Next.js App Router, static/SSG marketing pages, MDX blog optional, metadata API, `sitemap.ts` / `robots.ts`, JSON-LD components. No page-builder runtime. |
| 0.5 | Out of scope v1 | Checkout, full docs portal, logged-in personalisation, e-commerce beyond link-out. |

## Approved exemplars (14 sites)

### A — B2B SaaS (5)

| Site | URL | Why included | Primary conversion |
|------|-----|--------------|-------------------|
| Linear | https://linear.app | Best-in-class product marketing; transparent pricing; Next.js | Sign up (free tier) |
| Notion | https://www.notion.com | Mature IA; product/solutions split; strong SEO content | Sign up |
| Vercel | https://vercel.com | Next.js reference stack; dev + enterprise dual CTA | Deploy / Sign up |
| PostHog | https://posthog.com | Usage-based pricing; anti-sales tone; technical SEO | Get started — free |
| Attio | https://attio.com | PLG + sales-assist hybrid; detailed pricing matrix | Start for free / Talk to sales |

### B — B2B services / advisory (4)

| Site | URL | Why included | Primary conversion |
|------|-----|--------------|-------------------|
| Gong | https://www.gong.io | Sales-led SaaS; opaque pricing; demo funnel | Book a demo |
| Bain & Company | https://www.bain.com | Classic consulting IA; industry × capability matrix | Contact / Let's get to work |
| FOREsight (FORE Good) | https://www.foresightgr.com.au | AU mission-adjacent subscription; tiered pricing on-page; Calendly | Book a FREE intro call |
| Attio | (also A) | Sales-assist tier on same site | Talk to sales / Send me a demo |

### D — Mission-led / social impact (5)

| Site | URL | Why included | Primary conversion |
|------|-----|--------------|-------------------|
| Our Watch | https://www.ourwatch.org.au | AU peak body; resources-first IA; institute sub-brand | Subscribe / Donate |
| Social Traders | https://www.socialtraders.com.au | Industry body; dual audience (corporate / SE); impact stats | I'm a corporate / I'm a social enterprise |
| Thankyou | https://thankyou.co | Social enterprise + product; manifesto storytelling | Shop / Newsletter |
| Atlassian Foundation | https://www.atlassianfoundation.org | Corporate foundation; impact metrics; soft CTAs | Register interest |
| B Lab | https://www.bcorporation.net | Certification body; revenue-tiered fees (subdomain docs) | Start assessment / Contact |

**Note:** `bcorporation.net` homepage blocked by Cloudflare during automated fetch. B Lab patterns captured from `usca.bcorporation.net` pricing/process pages and secondary sources. See `sources/bcorporation_net_notes.md`.

## Artefacts collected

Per site in [`sources/`](sources/):

- `{slug}_home.html` — homepage snapshot
- `{slug}_pricing.html` — `/pricing` or equivalent
- `{slug}_sitemap.xml` — where available
- `extraction_summary.json` — parsed meta, H1, nav sample, CTAs

See [`sources/INDEX.md`](sources/INDEX.md) for file list and fetch dates.

## Deliverables

| File | Content |
|------|---------|
| [`grids/ia.md`](grids/ia.md) | Phase 1 — information architecture |
| [`grids/homepage-sections.md`](grids/homepage-sections.md) | Phase 2 — section order |
| [`grids/ctas.md`](grids/ctas.md) | Phase 3 — CTA matrix |
| [`grids/pricing.md`](grids/pricing.md) | Phase 4 — pricing presentation |
| [`grids/seo.md`](grids/seo.md) | Phase 6 — technical + content SEO |
| [`patterns/b2b-saas.md`](patterns/b2b-saas.md) | Archetype synthesis |
| [`patterns/b2b-services.md`](patterns/b2b-services.md) | Archetype synthesis |
| [`patterns/mission-led.md`](patterns/mission-led.md) | Archetype synthesis |
| [`NEXT_SKILL_OUTLINE.md`](NEXT_SKILL_OUTLINE.md) | Stub for future SKILL.md |
