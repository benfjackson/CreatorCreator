---
name: building-domain-knowledge
description: Use when standing up a domain knowledge corpus for software modelling, before schema or UI design, or when the user asks what to upload, what they need to know about a field, or which knowledge is missing.
---

# Building domain knowledge

Build a small, goal-shaped corpus so later modelling (schema, UI, workflows) can read the domain instead of inventing it. Stop when the named goals can be modelled — not when the field is complete.

Not for one-off Q&A from an existing corpus, or for drafting tables (`designing-postgres-schemas`).

## Workflow

1. **Name the goals.** Do not collect sources first.
2. **Map the knowledge.** What must be known to model those goals.
3. **Ask for uploads** that close the gaps — specific, not "send everything".
4. **Score coverage** after each batch. Repeat until modelling can start.
5. **Write the index** so other skills can find the corpus.

## 1. Goals

If goals are vague, propose 2–3 candidate slices and ask them to pick. Do not invent a product.

Ask in one message. Enough is whatever lets you write the job lines:

- **Product now:** who uses it, which screens or flows this slice must support
- **Questions the software must answer**
- **Setting:** jurisdiction, industry, organisation type if it changes the domain
- **Out of scope for this slice**
- **What they already have** (folders, skills, docs, expert notes) — paths or `@` attachments, not a verbal summary of a long document

Write `GOALS.md`. Wait for confirmation before mapping knowledge.

## 2. Knowledge map

From the goals, list areas a modeller would need. Use these lenses; drop any the goals do not need:

| Lens | Typical question |
|------|------------------|
| Actors | Who acts, decides, or is acted on? |
| Nouns | What things exist and must be stored or shown? |
| Vocabulary | What terms have a local meaning? |
| Rules | What must / must not happen? |
| Processes | What sequences and states exist? |
| Sources of truth | What is authoritative vs local practice? |
| Exceptions | Where do the rules bend? |

For each area: **enough / thin / missing**, and the smallest artefact that would close it (e.g. "the intake form", "the policy that defines a case", "three anonymised records").

Present the map. Do not search the web to fill gaps unless the user asks.

## 3. What to upload

Request only what the map marked thin or missing. Prefer:

- **Primary:** standards, policies, legislation, official definitions
- **Operational:** forms, screen lists, existing schemas, SOPs, real (anonymised) records
- **Expert:** a short brief they write — not a recap of a 200-page act

Not substitutes: blog explainers, the model's prior knowledge, a paraphrase of a document they could attach.

Ask for paths, links, or `@` files in one message, **one concrete ask per gap**.

## 4. Coverage

After they upload, read the files. Re-score the map. If a goal still cannot be modelled, name the missing area and the next upload. If they insist on proceeding with a gap, record it as **assumed** — do not invent the missing content.

Stop when jobs, nouns, and the current product slice are covered.

## 5. Corpus layout

Default folder `<domain>-knowledge/` unless they name one:

```
<domain>-knowledge/
  GOALS.md
  KNOWLEDGE_MAP.md
  sources/          # originals they uploaded
  00_Contents.md    # file, lens it covers, one-line summary
```

`KNOWLEDGE_MAP.md` is the living coverage table (area, status, evidence file, next ask).

When the corpus is usable, hand off to `designing-postgres-schemas` (and later UI/modelling skills) and treat this folder as the domain briefing.

## Common mistakes

| Mistake | Instead |
|---------|---------|
| Collecting before goals | Goals first |
| Completing the field | Cover the slice |
| Filling gaps from model memory | Ask for the source |
| "Send me everything on X" | One artefact per gap |
| Designing tables in this skill | Hand off to `designing-postgres-schemas` |
