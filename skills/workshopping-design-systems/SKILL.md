---
name: workshopping-design-systems
description: Use when designing or iterating a visual design system in a live canvas — colours, typography, spacing, radii, shadows, motion, or other design rules — before or instead of building product UI.
---

# Workshopping design systems

Decide visual rules on a live canvas, then write them as tokens. Stop when foundations can drive a real screen — not when every component exists.

Not for applying a finished brand (read that system's skill instead), and not for building product pages before tokens exist.

**First action in every session:** run [Setup](#setup). Do not brief, tokenise, or run `create-next-app` until the lab is verified.

## Canvas

The lab lives at `./website/` in the **project root** — not inside the skill folder.

| File | Role |
|------|------|
| `./website/app/tokens.css` | Source of truth for tokens |
| `./website/DECISIONS.md` | Locked rules, open questions, why |
| `./website/app/{colour,type,space,shape}/` | Specimen pages that only consume tokens |

The lab chrome uses the same tokens, so every change is visible immediately.

## Setup

**Run this before anything else.** From the **project root** (where you want `./website/`):

```bash
bash ~/.cursor/skills/workshopping-design-systems/scripts/setup-lab.sh
cd website && npm install && npm run dev
```

If the skill is not under `~/.cursor/skills/`, find this skill's folder on disk and run `scripts/setup-lab.sh` from there. The script copies its bundled `website/` template — do not set paths by hand.

**Lab is ready when all are true:**

- `./website/.design-lab` exists
- `./website/app/tokens.css` exists
- `./website/app/components/LabShell.js` exists
- Home shows “Design lab” nav (Overview, Colour, Type, Space, Shape) — not the create-next-app starter

**Needs setup when any of these are true:**

- `./website/.design-lab` is missing
- `./website/app/tokens.css` is missing
- `./website/app/page.js` imports `next/image` with the Next.js logo, or says “edit page.js”

**Never:**

- Run `create-next-app` or `npx create-next-app` for this workflow
- Workshop inside the skill's bundled `website/` (read-only template)
- Edit the starter page in place — copy the template first

If `./website/` already has a valid lab, skip the script; only run `npm install` / `npm run dev` if needed.

Open [http://localhost:3000](http://localhost:3000) and confirm Overview plus `/colour`, `/type`, `/space`, `/shape` load before workshopping.

## Workflow

0. **Setup.** Run [Setup](#setup). Confirm the lab marker and nav. Stop if you still see the create-next-app page.
1. **Brief the product.** Do not invent a brand. Ask in [Briefing](#briefing).
2. **Read `DECISIONS.md` and `tokens.css`.** Treat locked rules as given.
3. **One axis per pass.** Colour → type → space → shape → motion. Do not jump to components.
4. **Change tokens, not specimens.** Hex, font names, and sizes live in `tokens.css`. Pages only use `var(--…)`.
5. **Verify in the browser** after each pass. Look at the axis page and at least one other page (the lab chrome is a consumer).
6. **Record the why** in `DECISIONS.md`. Move the item from Open to Locked.
7. **Stop** when a real screen can be composed from tokens. Hand off; do not pre-build a component library.

## Briefing

Ask in one message. Enough is whatever lets you propose a first pass on colour and type:

- **Surfaces:** marketing, app, both, print/deck
- **Audience and tone** in a few words (they pick; you do not assign a personality)
- **Constraints:** existing logo, colours, type, accessibility target (e.g. WCAG AA)
- **What already exists:** style PDF, Figma, live site, `reference/` mocks — paths or `@` files, not a verbal recap
- **Out of scope for this pass** (dark mode, a second brand, marketing vs app split)

If they have no brand yet, start from the neutral tokens already in `tokens.css` and replace them one axis at a time.

## Token rules

- **Primitives then semantic.** `--ink-900` is a swatch. `--fg` is what UI uses. Components never pick a primitive.
- **Few tokens.** Add a token when a specimen would otherwise hard-code a value. Do not pre-create hover/disabled/dark variants "for later".
- **One theme first.** Dark mode is a later pass, not a parallel system.
- **Fonts via `next/font`.** Load in `layout.js` as CSS variables; map those variables in `tokens.css`. Do not `@import` Google Fonts CSS.
- **4px space base** unless they lock a different one. Scale by doubling once it feels even; do not add 5px and 6px because a mock was close.
- **Australian English** in labels and copy (`colour`, `organisation`).

## Specimen pages

Keep them boring. Their job is to show the tokens, not to look like a product.

When adding an axis, add a route and a nav item in `website/app/components/LabShell.js`. Do not start a second styling method (no Tailwind, no inline hex).

## Common mistakes

| Mistake | Instead |
|---------|---------|
| `create-next-app` or editing the starter | Run `setup-lab.sh` first |
| Working in the skill folder | Copy template to project `./website/` |
| Inventing a brand personality | Brief first; they pick tone |
| Hex / px in page CSS | Token in `tokens.css`, `var(--…)` in the page |
| Designing buttons before type | Foundations in order |
| Two palettes (app vs marketing) on day one | One theme; split when a real surface needs it |
| Copying another product's tokens | Start from this canvas, or from files they attached |
| Dark mode + light mode together | One theme first |
| Building a component library "so we're ready" | Compose one real screen, then extract |
