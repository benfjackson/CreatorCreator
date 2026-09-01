# Phase 9 — Synthesis

Answers to meta-questions after grid completion.

## 9.1 Default page set (v1)

**Universal:** home, privacy, terms, sitemap, robots.

| Archetype | Additional v1 pages |
|-----------|---------------------|
| B2B SaaS | pricing, 2–3 feature pages, customers (optional) |
| B2B services | contact/book, 1 case study, services overview |
| Mission-led | about, 1 resource hub, get-involved |

Blog index: v2 unless SEO strategy requires day-one content.

## 9.2 Varies by archetype vs universal

| Universal | Archetype-specific |
|-----------|------------------|
| Hero, logo-bar, CTA band, FAQ, legal | Pricing table vs opaque form |
| One H1, metadata template, JSON-LD Organization | SaaS: SoftwareApplication schema |
| Footer columns (product, company, legal) | Mission: impact stats, dual-audience hero |
| Sticky nav CTA | Services: case study before features |
| | SaaS: changelog/teaser |

## 9.3 Section library (12 blocks)

1. `hero`
2. `logo-bar`
3. `pillars`
4. `feature-deep-dive`
5. `case-study`
6. `impact-stats`
7. `testimonials`
8. `pricing-table` / `pricing-bands`
9. `faq`
10. `cta-band`
11. `dual-audience`
12. `resource-grid`

## 9.4 CTA rules (safe defaults)

See [`ctas.md`](ctas.md) — one primary colour, max 2 hero buttons, repeat every 2–3 sections, consistent pricing verbs.

## 9.5 SEO checklist

See [`seo.md`](seo.md) — 10-item Next.js checklist for metadata, JSON-LD, sitemap, canonical, one H1.

## 9.6 Hand off to workshopping-design-systems

**Recommended order:**

1. Marketing skill: routes + blocks + copy + SEO (semantic HTML, no colours).
2. Design-system skill: tokens in `tokens.css`; blocks consume `var(--*)`.
3. Optional parallel: neutral tokens first, then marketing structure.

Do not workshop specimens before marketing IA is locked — avoids building components that don't match real pages.

## 9.7 reference/ vs SKILL.md

| Corpus (`marketing-site-patterns/`) | Future SKILL.md |
|---------------------------------------|-----------------|
| Evidence, HTML snapshots, grids | Workflow, briefing, checklists |
| Pattern cards per archetype | When to read which pattern card |
| Per-site locators | Rules distilled from patterns |

## Phase 5 & 7–8 (condensed)

### Messaging (Phase 5)

| Archetype | H1 pattern | Category naming |
|-----------|------------|-----------------|
| SaaS | Outcome + category | Invent or own category ("agentic revenue") |
| Services | Outcome question or bold claim | Industry-standard + POV |
| Mission | Issue statement | Plain language issue keywords |

Audience callout in hero: common for SaaS ("for teams"), services (budget bands), mission (dual audience).

### Trust (Phase 7)

- SaaS: logo bar + G2/SOC2 badges + security page
- Services: named executive testimonials + ROI metrics
- Mission: impact numbers + framework publications + funders

### Mobile (Phase 8)

- Hamburger nav with CTA preserved (or sticky bottom CTA on long single-pages)
- Section order unchanged; stack columns
- FOREsight-style single-page: repeated booking CTA compensates for no sticky bar
