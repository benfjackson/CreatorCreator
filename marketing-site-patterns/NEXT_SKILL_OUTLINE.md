# Next skill outline — building marketing sites

Stub for a future `SKILL.md`. Do not implement until product brief workflow is tested.

---

## Proposed frontmatter

```yaml
name: building-marketing-sites
description: Use when building a Next.js marketing site for an app or organisation — product offering, pricing, CTAs, and SEO — before or after visual tokens from workshopping-design-systems.
```

## Relationship to other skills

| Skill | Role | Order |
|-------|------|-------|
| `building-domain-knowledge` | Corpus for product/domain facts | First (if domain-heavy) |
| **`building-marketing-sites`** | IA, copy structure, sections, SEO, pricing page | Second |
| `workshopping-design-systems` | Visual tokens in `./website/` | Parallel or after structure |
| `capy-voice` | Copy tone review (Capyble products) | After draft copy |

**Handoff:** Marketing skill defines routes, section blocks, and placeholder copy. Design-system skill replaces neutrals with brand tokens. Marketing skill should not hard-code colours — use semantic classes that map to `tokens.css`.

## First action in every session

1. Read [`marketing-site-patterns/SCOPE.md`](../SCOPE.md) and the matching pattern card in [`patterns/`](../patterns/).
2. Confirm archetype: B2B SaaS, B2B services, or mission-led (or hybrid).
3. Check if `./website/` exists (design lab). If not, either run `setup-lab.sh` or scaffold marketing routes separately.

## Briefing (one message)

- **Archetype** (SaaS / services / mission-led)
- **Primary conversion** (signup, demo, intro call, subscribe, donate)
- **Audience** (economic buyer vs end user)
- **Pricing model** (public tiers, opaque, usage-based, N/A)
- **Target keywords** (3–5 phrases for title/H1 alignment)
- **Existing assets** (`reference/copy.md`, brand, logo — paths or `@` files)
- **Out of scope** (blog, docs, e-commerce checkout)

Write `website/MARKETING_DECISIONS.md` with locked answers before building pages.

## Default page set (v1)

Universal:

- `/` home
- `/privacy`, `/terms` (or links to parent org)
- `sitemap.ts`, `robots.ts`
- `layout.js` metadata template

By archetype — see pattern cards.

## Section block catalogue

Reusable blocks (compose in `app/components/blocks/`):

| Block ID | Used in |
|----------|---------|
| `hero` | All |
| `logo-bar` | All |
| `pillars` | All |
| `feature-deep-dive` | SaaS |
| `case-study` | Services, mission |
| `impact-stats` | Mission, services |
| `pricing-table` | SaaS, productised services |
| `pricing-bands` | Services (FOREsight style) |
| `faq` | All |
| `testimonials` | SaaS, services |
| `cta-band` | All |
| `dual-audience` | Mission |
| `resource-grid` | Mission |
| `newsletter` | Mission, services |

Each block: props for headline, body, CTA labels, links — no inline hex.

## CTA defaults

From [`grids/ctas.md`](../grids/ctas.md):

- One primary action colour
- Max 2 hero buttons
- Repeat primary CTA every 2–3 sections
- Same verb on all pricing tier buttons

## SEO baseline (every page)

From [`grids/seo.md`](../grids/seo.md):

```javascript
// app/layout.js — template
export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  title: { default: '…', template: '%s | Brand' },
  description: '…',
  openGraph: { … },
  alternates: { canonical: '…' },
};
```

Components to ship:

- `components/json-ld/Organization.js`
- `components/json-ld/SoftwareApplication.js` (SaaS)
- `components/json-ld/FAQPage.js` (pricing/FAQ)

## Workflow

0. Brief → `MARKETING_DECISIONS.md`
1. Pick pattern card → draft sitemap
2. Scaffold routes + empty blocks with **real H1/titles from brief keywords**
3. Fill section copy from brief (not invented brand)
4. Add pricing page per archetype rules
5. Wire CTAs (app URL, Calendly, mailto)
6. SEO pass: metadata, JSON-LD, sitemap, one-H1 audit
7. Hand off to `workshopping-design-systems` for tokens if not done
8. Stop when home + pricing + legal + primary conversion path work — not full blog

## What stays in `reference/` vs SKILL.md

| In SKILL.md | In `marketing-site-patterns/` corpus |
|-------------|--------------------------------------|
| Workflow, briefing, block names | Per-site research evidence |
| SEO checklist | Grid answers with locators |
| CTA/pricing rules (short) | Full pattern cards |
| Integration with design lab | HTML snapshots, extraction JSON |

## Open questions for v1 skill author

1. Single `./website/` for both design lab and marketing pages, or `marketing/` subfolder?
2. MDX blog in scope for v1?
3. Shared block components between lab specimens and marketing pages?

## Research corpus

Full grounded research: [`marketing-site-patterns/`](../)
