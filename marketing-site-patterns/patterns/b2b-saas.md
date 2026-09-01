# Pattern card — B2B SaaS marketing site

Synthesised from Linear, Notion, Vercel, PostHog, Attio (September 2026 research).

## When to use

Self-serve or PLG product with public pricing (or freemium). Primary conversion: signup / deploy / get started.

## Default sitemap

```
/                    Home
/pricing             Pricing (in primary nav)
/product/*           Feature pages
/customers           Social proof hub
/blog or /changelog  Content
/docs                External or subdomain
/about, /careers     Company
/security, /privacy  Trust + legal
/login, /signup      App entry (or app subdomain)
```

## Homepage section library

| Block | Purpose | Copy formula |
|-------|---------|--------------|
| `hero` | Convert | H1: [outcome] for [audience]. Subhead: category + differentiator. CTA: Get started + optional Talk to sales |
| `logo-bar` | Trust | "Trusted by X" or named logos |
| `pillars` | Position | 3 cards: why us (speed, AI, purpose-built) |
| `feature-deep-dive` | Explain | H2: [Job-to-be-done]. Interactive UI + bullet features |
| `testimonials` | Proof | Quote + name + role + company |
| `scale-stat` | Proof | "X teams" / "X companies" |
| `changelog-teaser` | Velocity | 3 recent ships |
| `cta-band` | Convert | Repeat primary CTA |

## CTA rules

- Nav: **Sign up** (filled) + Log in (text).
- Hero: 1–2 buttons max; primary = signup.
- Pricing: per-tier **Get started**; Enterprise = **Contact sales**.
- Add micro-copy: "Free", "No credit card required" when true.

## Pricing rules

- 3–4 tiers + Enterprise.
- Show per-seat/month; annual toggle with % savings.
- Badge **Popular/Recommended** on growth tier.
- Full comparison matrix below cards.
- FAQ accordion on pricing page.

## SEO rules

- Title: `Outcome \| Brand` or `Brand – Category`.
- JSON-LD: `Organization` + `SoftwareApplication`.
- Target category terms on feature pages, not just homepage.
- Consider comparison pages (`/vs/*`) at scale (PostHog model).

## Notable outliers

| Site | Pattern worth stealing |
|------|------------------------|
| PostHog | Pricing philosophy on homepage; anti-sales positioning |
| Vercel | Dual CTA (Deploy + Talk to sales) for dev + enterprise |
| Attio | PLG free tier + aggressive sales CTAs on same page |
| Linear | Feature sections as product UI stories, not bullet lists |

## Default Next.js routes

```
app/
  page.js              # Home
  pricing/page.js
  product/[slug]/page.js
  customers/page.js
  blog/[slug]/page.js
  layout.js            # metadata template
  sitemap.ts
  robots.ts
  components/
    blocks/            # Section library
    json-ld/
```
