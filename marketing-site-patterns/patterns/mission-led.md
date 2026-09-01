# Pattern card — Mission-led / social impact marketing site

Synthesised from Our Watch, Social Traders, Thankyou, Atlassian Foundation, B Lab (September 2026 research).

## When to use

Peak body, social enterprise, foundation, or certification body. Primary conversion: trust, subscribe, partner, donate — or shop if product-led SE.

## Default sitemap

```
/                    Mission home
/about               Story, team, theory of change
/impact              Metrics, annual report
/programmes or /work # What we do
/resources/*         Frameworks, guides ★ SEO
/news, /events
/get-involved        Donate, partner, member
/institute or /shop  Secondary commercial surface (optional)
```

## Homepage section library

| Block | Purpose | Copy formula |
|-------|---------|--------------|
| `hero` | Mission | H1: [issue we address]. Subhead: who we are + authority claim |
| `featured-resources` | Value | 3 latest frameworks/resources |
| `pillars` | Programmes | 3 ways we help (Enhance / Grow / Advocate) |
| `impact-stats` | Proof | $ raised, jobs, organisations reached |
| `dual-audience` | Segment | "I'm a [A]" / "I'm a [B]" (Social Traders) |
| `case-study` | Proof | Partner story with human narrative |
| `directory` | Utility | Find members / certified orgs (if applicable) |
| `news-events` | Freshness | Upcoming + statements |
| `newsletter` | Soft convert | Subscribe |
| `acknowledgement` | Trust | Country acknowledgement (AU) |

## CTA priority (typical)

1. **Subscribe / join mailing list** — lowest friction
2. **Partner / member / certify** — mid friction
3. **Donate** — when registered charity (Our Watch nav)
4. **Shop** — when product social enterprise (Thankyou)
5. **Register interest** — grants/open calls (Atlassian Foundation)

Do not put all five in the hero — pick 1–2.

## Story vs utility balance

| Site | Story % | Utility % | Notes |
|------|---------|-----------|-------|
| Our Watch | 40% | 60% | Resources-first |
| Social Traders | 50% | 50% | Dual audience + directory |
| Thankyou | 60% | 40% | Mission ticker + shop |
| Atlassian Foundation | 70% | 30% | Corporate foundation narrative |
| B Lab | 50% | 50% | Process + certification tool |

## Pricing / fees

| Model | Example | Presentation |
|-------|---------|--------------|
| Membership (opaque) | Social Traders | Contact / membership page, no numbers |
| Tiered subscription | FOREsight (hybrid) | On-page with budget bands |
| Certification fees | B Lab | Revenue-tiered annual fees on process pages |
| Product retail | Thankyou | Shopify — prices in store |
| Free programmes | Atlassian Foundation | 50–100% off software for nonprofits |

## SEO rules

- H1 = **issue keyword** ("Preventing violence against women").
- Resource collections as indexable hubs (`/change-the-story/*`).
- Title: `Brand \| Issue` not generic "Home - Brand".
- JSON-LD: `Organization` + `NGO` or `WebSite` where appropriate.
- `.com.au` canonical for AU bodies.

## Trust signals (mission-specific)

- Impact metrics with methodology link (annual report)
- Funder / partner logos
- Peak body / certification authority
- Theory of change / framework publications
- B Corp, DGR, or registered charity status in footer

## Sub-brand pattern

When commercial arm exists:

- **Our Watch** → Our Watch Institute (training)
- **B Lab** → regional subdomains + B Impact Assessment app
- **Social Traders** → member portal

Link from main nav with clear label; don't merge IA.

## Default Next.js routes

```
app/
  page.js
  about/page.js
  impact/page.js
  resources/[collection]/[slug]/page.js
  news/[slug]/page.js
  events/page.js
  get-involved/page.js
```
