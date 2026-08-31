---
name: workshopping-design-systems
description: Use when designing or iterating a visual design system in a live canvas — colours, typography, spacing, radii, shadows, motion, or other design rules — before or instead of building product UI.
---

# Workshopping design systems

Decide visual rules on a live canvas, then write them as tokens. Stop when foundations can drive a real screen — not when every component exists.

Not for applying a finished brand (read that system's skill instead), and not for building product pages before tokens exist.

## Canvas

Default: `./website/` in this folder.

| File | Role |
|------|------|
| `./website/app/tokens.css` | Source of truth for tokens |
| `./website/DECISIONS.md` | Locked rules, open questions, why |
| `./website/app/{colour,type,space,shape}/` | Specimen pages that only consume tokens |

The lab chrome uses the same tokens, so every change is visible immediately.

If the canvas is missing or still a create-next-app starter, restore this layout before workshopping.

## Workflow

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
| Inventing a brand personality | Brief first; they pick tone |
| Hex / px in page CSS | Token in `tokens.css`, `var(--…)` in the page |
| Designing buttons before type | Foundations in order |
| Two palettes (app vs marketing) on day one | One theme; split when a real surface needs it |
| Copying another product's tokens | Start from this canvas, or from files they attached |
| Dark mode + light mode together | One theme first |
| Building a component library "so we're ready" | Compose one real screen, then extract |
