# Pattern card — B2B services / advisory marketing site

Synthesised from Gong, Bain, FOREsight, plus Attio/Gong sales-assist patterns (September 2026 research).

## When to use

High-touch sale, custom scoping, or productised subscription with advisory layer. Primary conversion: demo, intro call, contact.

## Default sitemap

```
/                    Home (often long-form or single-page)
/services or /capabilities
/industries or /who-we-serve
/insights or /case-studies    ★ SEO + credibility
/about /team
/contact or /book             ★
/pricing                      Optional — only if productised tiers
```

## Homepage section library

| Block | Purpose | Copy formula |
|-------|---------|--------------|
| `hero` | Qualify + convert | H1: [outcome] for [audience]. CTA: Book demo / Intro call |
| `logo-bar` | Credibility | Client logos or "Trusted by X" |
| `stakes` | Problem | "Every missed [X] costs [Y]" |
| `case-study` | Proof | Named client + 2–3 impact metrics |
| `services` | Explain | 3 modules or methodology steps |
| `industry-grid` | Segment | By vertical or persona |
| `testimonials` | Proof | Executive quotes with titles |
| `pricing` | Convert (if productised) | 2–3 packages OR budget-band selector |
| `faq` | Objections | Board buy-in, "what we're not", lock-in |
| `cta-band` | Convert | Repeat booking CTA |

## CTA rules

- **Single primary verb** sitewide: "Book a demo" OR "Book intro call" — don't mix.
- Repeat booking CTA every 2–3 sections on long pages.
- Secondary: quiz/assessment, download playbook, subscribe to insights.
- External scheduler (Calendly) acceptable for small ACV (FOREsight).
- Enterprise: multi-step form with team-size qualifier first (Gong).

## Pricing rules

| Model | Presentation |
|-------|--------------|
| Fully custom (Gong, Bain) | No numbers; form or "Let's talk" |
| Productised (FOREsight) | 2 tiers + org-size bands; public monthly/annual |
| Hybrid (Attio) | Public SaaS tiers + "Talk to sales" on Enterprise |

- If showing prices: tie tiers to **buyer budget band**, not arbitrary names.
- Early-bird: explicit deadline + what they lock in.
- FAQ > feature matrix for services.

## SEO rules

- **Insights/case studies** are the content engine (Bain briefs).
- Industry pages: `{service} for {industry}`.
- Local: `.com.au`, office pages if multi-site.
- Title must match current product — avoid stale meta (FOREsight lesson).

## Credibility vs outcome

| Style | When | Example |
|-------|------|---------|
| Outcome-first | Strong case metrics | Bain, Gong (Anthropic 64%) |
| Credibility-first | New or niche category | FOREsight (FORE Good track record) |
| Product-demo-first | SaaS-assisted services | Gong platform tour |

## Default Next.js routes

```
app/
  page.js
  services/[slug]/page.js
  industries/[slug]/page.js
  insights/[slug]/page.js
  book/page.js               # or embed Calendly
  pricing/page.js            # optional
```

## FOREsight reference (productised AU services)

Closest to Capyble-adjacent builds:

- Single-page scroll with pricing embedded
- CTAs: "Book a FREE intro call" + readiness quiz
- Tiers: Essentials $49/mo, Essentials + Advisory $229/mo
- Budget bands: Under 30K → 5M+
- Early joiner pricing until end of 2026
- FAQ addresses board buy-in and "not a lobbying agency"

See [`skills/workshopping-design-systems/website/reference/copy_v1.md`](../../skills/workshopping-design-systems/website/reference/copy_v1.md) for project copy source.
