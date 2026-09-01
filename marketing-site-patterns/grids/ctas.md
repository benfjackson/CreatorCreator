# Phase 3 — CTAs (placement, copy, hierarchy)

## CTA matrix by archetype × page

| Archetype | Page | Primary CTA | Secondary CTA | Micro-copy |
|-----------|------|-------------|---------------|------------|
| B2B SaaS | Home | Sign up / Get started / Deploy now | Contact sales / Talk to sales | "Free", "No credit card" (Attio pricing) |
| B2B SaaS | Nav (sticky) | Sign up | Log in | — |
| B2B SaaS | Pricing | Get started (per tier) | Contact sales (Enterprise) | "Billed yearly", per-user/month |
| B2B SaaS | Feature | Get started | Learn more → docs | — |
| B2B services | Home | Book a demo / See in action | Contact | — |
| B2B services | Pricing | Fill form / Continue | — | Team size qualifier first (Gong) |
| B2B services | Home (consulting) | Let's get to work | Subscribe (insights) | — |
| B2B services | Home (productised) | Book FREE intro call | Take quiz | "No lock-in" (FOREsight) |
| Mission-led | Home | Donate / Subscribe / Partner | Learn more | — |
| Mission-led | Home (dual) | I'm a corporate / I'm a SE | Find directory | — |
| Mission-led | Home (commerce) | Shop collection | Newsletter SIGN UP | Impact $ raised |

---

## Per-site detail

### Linear

| Q | Finding |
|---|---------|
| 3.1 Primary vs secondary | **Primary:** "Sign up" / "Get started". **Secondary:** "Contact sales" (Enterprise) |
| 3.2 Sticky header | Sign up visible in header always |
| 3.3 Hero CTAs | One dominant (Get started); product UI as visual anchor |
| 3.4 Nav signup separate | Sign up + Log in; no separate "Contact" in hero |
| 3.5 Mid-page repeats | After feature sections — implicit via UI, final band CTA |
| 3.6 Pricing CTAs | Per tier: "Get started"; Enterprise: "contact sales" |
| 3.9 Micro-copy | "Free for everyone" on Free tier |
| 3.10 Colour | Single accent; filled primary on dark UI |

### Notion

| Q | Finding |
|---|---------|
| 3.1 | **Primary:** implicit signup via hero. **Secondary:** "Request a demo" in nav |
| 3.3 | Hero focuses on video/demo — softer direct CTA in hero body |
| 3.4 | Request a demo for enterprise path |
| 3.6 Pricing | Per-plan signup; Business marked "Recommended" |

### Vercel

| Q | Finding |
|---|---------|
| 3.1 | **Primary:** "Deploy now". **Secondary:** "Talk to sales" |
| 3.2 | Both CTAs in hero; Sign Up in nav |
| 3.3 | Two equal-weight hero buttons (filled + outline pattern) |
| 3.6 | Hobby: free; Pro: upgrade; Enterprise: contact |

### PostHog

| Q | Finding |
|---|---------|
| 3.1 | **Primary:** "Get started — free" throughout |
| 3.5 | Repeated after major sections |
| 3.9 | "98% use PostHog for free" — objection handling as micro-copy |
| 3.6 | No sales CTA — anti-enterprise-sales positioning |

### Attio

| Q | Finding |
|---|---------|
| 3.1 | **Primary:** "Talk to sales" + "Send me a demo" (co-primary on hero) |
| 3.2 | "Start for free" in nav alongside Talk to sales |
| 3.3 | Two hero buttons — demo + sales |
| 3.6 | Free: start; Enterprise: "Talk to sales" |
| 3.9 | "no credit card required" on pricing page |

### Gong

| Q | Finding |
|---|---------|
| 3.1 | **Primary:** "See Gong in action" (hero); "Book a demo" (footer band) |
| 3.7 | Multi-step form: team size → customised proposal |
| 3.3 | Single hero CTA |
| 3.6 | No self-serve; form only |

### Bain

| Q | Finding |
|---|---------|
| 3.1 | **Primary:** "LET'S GET TO WORK" (final band) |
| 3.7 | Interactive selector → content personalisation, not instant form |
| 3.3 | No aggressive hero button — engagement via selector |

### FOREsight

| Q | Finding |
|---|---------|
| 3.1 | **Primary:** "Book a FREE intro call" (Calendly external) |
| 3.2 | Repeated 4+ times down page |
| 3.3 | **Secondary:** "Take our readiness quiz" |
| 3.6 | Per tier: "Book a FREE Intro Call" (not self-checkout) |
| 3.9 | "Monthly or annual, no lock-in" under pricing |

### Our Watch

| Q | Finding |
|---|---------|
| 3.1 | **Primary:** Donate (nav). **Secondary:** Subscribe / mailing list |
| 3.8 | Donate > Subscribe > external institute |
| 3.3 | Soft CTAs on resource cards ("Learn more") |

### Social Traders

| Q | Finding |
|---|---------|
| 3.1 | **Primary:** "I'm a corporate" / "I'm a social enterprise" (hero split) |
| 3.8 | Directory search > membership inquiry |
| 3.5 | Playbook download as mid-funnel CTA |

### Thankyou

| Q | Finding |
|---|---------|
| 3.1 | **Primary:** Shop / Explore collection |
| 3.8 | Newsletter signup in footer bands |
| 3.3 | Product CTAs dominate over donate |

### Atlassian Foundation

| Q | Finding |
|---|---------|
| 3.1 | **Primary:** "Register to be notified" (open call) |
| 3.8 | Soft — no donate button on homepage |
| 3.3 | Single gentle CTA per section |

### B Lab

| Q | Finding |
|---|---------|
| 3.1 | **Primary:** Create B Impact Assessment account |
| 3.7 | Email contact for complex structures |
| 3.8 | Newsletter > certification app |

---

## Safe defaults (for future skill)

1. **One primary action colour** per viewport; secondary as outline or text link.
2. **Hero:** max 2 buttons; if two, primary = conversion goal, secondary = learn more or talk to sales.
3. **Repeat primary CTA** after every 2–3 major sections on long homepages.
4. **Nav:** persistent primary CTA button on right (Sign up / Book demo / Donate).
5. **Micro-copy** under hero CTA when friction is a known objection (free tier, no credit card, no lock-in).
6. **Pricing page:** one CTA per tier card, same verb where possible ("Get started" not mixed verbs).
7. **Mission-led:** never more than 3 competing CTAs in hero — pick donate, subscribe, or partner.
