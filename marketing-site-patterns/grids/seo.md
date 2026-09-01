# Phase 6 — SEO (technical + content)

## On-page & technical (per site)

| Site | Title formula | Meta desc CTA? | H1 count | JSON-LD | Canonical | Notes |
|------|---------------|----------------|----------|---------|-----------|-------|
| Linear | `Brand – Category tagline` | No — descriptive | 1 | None observed | `https://linear.app` | Next.js |
| Notion | `Outcome. \| Brand` | No | 1 | None | `https://www.notion.com/` | notion.so → notion.com |
| Vercel | `Category - Brand` | No | 1 | Organization, Service, SoftwareApplication | `https://vercel.com` | Next.js |
| PostHog | `Brand – Outcome` | No | 1 | SoftwareApplication, Organization | `https://posthog.com/` | |
| Attio | `Brand: Category` | No | 1 (duplicate in DOM) | Organization, WebSite, SoftwareApplication | default | |
| Gong | `Brand - Category` | No | 1 (animated) | None | `https://www.gong.io` | |
| Bain | `Category \| Brand` | No | 0 on home | Organization | `https://www.bain.com/` | |
| FOREsight | `Brand \| Product` (stale title) | No | 3 | WebSite | `https://www.foresightgr.com.au` | Wix; title mismatch |
| Our Watch | `Brand \| Issue` | No | 2 (duplicate) | None | `https://www.ourwatch.org.au` | |
| Social Traders | `Home - Brand` | **Weak** — generic title | 1 | None | apex, trailing slash | Title not optimised |
| Thankyou | `Brand - Product category` | Shop-focused | 1 (cart in DOM) | WebSite, Corporation | `https://thankyou.co/` | Shopify |
| Atlassian Foundation | `Brand \| Brand` | Mission | 1 | Not checked | — | |
| B Lab | Not fetched (CF) | — | — | — | — | Subdomain content indexed |

### Title tag formulas observed

1. **`Product – Tagline`** — Linear: "Linear – The system for product development"
2. **`Outcome | Brand`** — Notion: "The AI workspace that works for you. | Notion"
3. **`Category - Brand`** — Vercel: "Agentic Infrastructure - Vercel"
4. **`Brand – Provocative outcome`** — PostHog: "PostHog – We make your product self-driving"
5. **`Brand: Category claim`** — Attio: "Attio: The CRM for agentic revenue"

### JSON-LD (Next.js exemplars — deep dive)

**Vercel** (best practice in set):

```json
@type: Organization, Service, SoftwareApplication
```

**PostHog:**

```json
@type: SoftwareApplication, Organization
```

**Attio:**

```json
@type: Organization, WebSite, SoftwareApplication
```

**Linear:** No JSON-LD in homepage snapshot — gap vs peers.

**Recommendation for skill:** Ship `Organization` + `SoftwareApplication` (SaaS) or `Organization` + `WebSite` (mission) on every page; add `FAQPage` on pricing/FAQ routes.

### robots.txt / sitemap patterns

| Site | Sitemap size | Excludes |
|------|--------------|----------|
| PostHog | Very large (~1.8 MB) | App routes; heavy docs/comparison indexing |
| Vercel | Large (~996 KB) | Dashboard |
| Linear | Moderate (~110 KB) | Login |
| Gong | Moderate | App |
| FOREsight | Minimal (Wix) | — |
| Thankyou | Tiny (Shopify) | Cart/checkout |

### Core Web Vitals / performance

Not formally benchmarked in this pass. Qualitative: Linear, Vercel, PostHog use modern stacks suitable for SSG/ISR. Wix (FOREsight) and Shopify (Thankyou) heavier. **Skill default:** static generation for marketing routes.

### Image alt text

- **Linear/Vercel:** Decorative product UI — alt often empty or generic; opportunity for descriptive alts on feature screenshots.
- **Our Watch/Social Traders:** Content images typically have descriptive alts.
- **Skill default:** Meaningful alt on hero and feature images; empty alt on purely decorative logos if redundant with adjacent text.

---

## Content SEO

| Site | Category keywords on home | Blog strategy | Comparison pages | Programmatic SEO | Local SEO |
|------|-------------------------|---------------|------------------|------------------|-----------|
| Linear | Product development, AI agents | Changelog-focused | Not observed | Low | No |
| Notion | AI workspace | Blog + templates + use cases | Limited | Templates directory | No |
| Vercel | Agentic infrastructure, Next.js | Blog + KB | Framework pages | Large docs index | No |
| PostHog | Product analytics, self-driving | Handbook + docs | **Yes** — vs/alternatives | **Heavy** — 1.8MB sitemap | No |
| Attio | Agentic revenue, CRM | Engineering blog | Not observed | Moderate | No |
| Gong | Revenue AI | Thought leadership | Not observed | Solutions by industry | No |
| Bain | Management consulting | Insights articles | No | Industry × capability pages | Global offices |
| FOREsight | Government relations (weak in title) | None | No | Low | **`.com.au`** |
| Our Watch | GBV prevention (strong) | News + resources | No | Resource collections | AU |
| Social Traders | Social enterprise, procurement | Sector news | No | Industry vertical pages | AU |
| Thankyou | Social enterprise + product | Manifesto chapters | No | Product collections | AU |
| B Lab | B Corp certification | Resources | No | Process/fee pages by region | Regional subdomains |

### Content SEO patterns

**B2B SaaS:**

- Homepage targets **brand + category**; long-tail on `/product/*`, `/blog`, `/docs`.
- PostHog model: **comparison and alternative pages** for high-intent search.
- Notion model: **templates** as programmatic SEO.

**B2B services:**

- **Insights/articles** carry SEO (Bain briefs).
- Industry landing pages for "consulting for {industry}".
- Local: office pages with `LocalBusiness` potential (Bain).

**Mission-led:**

- **Issue keywords** in title and H1 (Our Watch: "Preventing violence against women").
- **Resource libraries** as SEO assets (frameworks, guides).
- `.com.au` + canonical to national body.

---

## Next.js SEO checklist (for future skill)

Ship on every marketing route:

1. **`export const metadata`** — title template `%s | Brand`, description 150–160 chars, `openGraph`, `twitter`.
2. **`alternates.canonical`** — absolute URL, consistent www/apex.
3. **`app/sitemap.ts`** — marketing routes only; exclude `/app`, `/api`, auth.
4. **`app/robots.ts`** — allow `/`; disallow dashboard paths.
5. **JSON-LD component** — `Organization` sitewide; page-specific `SoftwareApplication`, `FAQPage`, `Article`.
6. **One H1 per page** — keyword in H1; H2s for sections.
7. **Internal links** — homepage → pricing, primary features, blog pillar posts.
8. **`next/image`** — priority on hero; descriptive `alt`.
9. **Structured data for pricing** — `Offer` / `Product` on pricing page when prices are public.
10. **Performance** — static generation; `generateStaticParams` for blog/resource slugs.

### FOREsight SEO gap (teaching example)

- Title "FORE Australia | One-Page Policy Briefs" does not match live product (FOREsight GR subscription).
- **Skill briefing must capture target keywords** and enforce title/H1 alignment before build.
