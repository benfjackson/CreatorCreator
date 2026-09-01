# Design decisions

Record locked rules and open questions as you workshop. Move items from Open to Locked when agreed.

## Open

- **Surfaces:** (marketing, app, both, print/deck)
- **Audience and tone:** (a few words — they pick; do not invent a personality)
- **Constraints:** (logo, colours, type, accessibility target)
- **Reference material:** (paths to mocks, live site, style PDF, Figma)
- **Out of scope this pass:** (dark mode, second brand, marketing vs app split)

## Locked

- **Starter palette:** Neutral accent blue (`#2563eb`), slate ink, off-white canvas — replace during briefing.
- **Starter type:** Geist Sans for display and body via `next/font`. Swap font variables in `layout.js` and map in `tokens.css` when a brand locks type.
- **Space base:** 4px — scale by doubling when the rhythm feels even.
- **One theme:** Light mode only until a real surface needs dark mode.
