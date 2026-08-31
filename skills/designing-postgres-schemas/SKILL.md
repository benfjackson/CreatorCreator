---
name: designing-postgres-schemas
description: Designs minimal product-first Postgres schemas for new domains and settings. Use when creating a new database, adding tables, writing Supabase or Postgres migrations, modelling a new product domain, or reviewing a schema that looks overbuilt for audit/compliance.
---

# Designing Postgres schemas

Start from the product, not from audit/compliance machinery.

Use this for a greenfield database (new setting/domain) and for additive schema in an existing app. Do not use it for static content/seed dumps or query tuning.

## Workflow

1. **Get a domain briefing.** Do not invent jobs or nouns from general knowledge. Request the material in [Domain briefing](#domain-briefing) and read what they give you before drafting tables.
2. **Read what exists.** If this is not a blank database, list current tables, source-of-truth flags, and the membership/RLS helper. New tables must point at those, not recreate them.
3. **Name the jobs.** What questions must this schema answer? Write them in one line each. Example: "how did this org meet this indicator?" + "what evidence exists?"
4. **Name the nouns.** One table per noun you would say out loud. If you cannot explain a table in one sentence to a teammate, drop it.
5. **Minimum tables.** Prefer 2 tables over 4. Join tables exist only for real many-to-many.
6. **Minimum columns.** Keep identity, ownership, a human label, a type, a pointer to an existing source if one exists, `created_at`/`created_by`, and an idempotency key. Put type-specific extras in `detail jsonb`. Do not add status, validity windows, actor identity snapshots, review fields, or event logs until a current product flow needs them.
7. **Do not duplicate sources.** If a file, task, or quiz already has a table, point at it (`source_type` + `source_id`). Do not copy filename, storage path, or hash into a parallel "artifact" table.
8. **Reuse existing flags.** If a column already answers "is this done / met / complete?", that column is the source of truth. Do not add a parallel status projection.
9. **Defer workflows.** Review, revoke, supersede, expire, and append-only event streams are product features. Add them when they exist, not "for later".
10. **Match host style.** Copy RLS, CHECK constraints, and index patterns from the project you are in. Writes go through the app (insert/delete), not a wall of SECURITY DEFINER RPCs, unless there is a proven integrity need.

Stop when jobs, nouns, and the current product flow are covered. Extra tables "we'll need for compliance" are out of scope.

## Domain briefing

Ask before designing. Enough is whatever lets you write the job lines and name the nouns; do not wait for a complete corpus, and do not design from a statute or standard that nobody attached.

Request, in one message:

- **Product now:** who uses it, and which screens or flows must work in this slice
- **Questions the database must answer** for those flows (if they already know them)
- **Trusted domain sources** they want you to read: knowledge-base skill, docs folder, rubric, policy, standard, or a short brief. Ask for paths, links, or `@` attachments — not a verbal summary of a 200-page act
- **Tenant:** who owns a row (org, school, workspace, …) if that is not obvious
- **What already exists as data** (files, tasks, people, assessments) so you can point at it
- **Out of scope for v1**

If they name a skill or folder, read it. If a source needed for jobs or nouns is missing, ask again. Do not fill gaps with compliance tables or nouns from adjacent domains.

Use domain sources to name jobs and nouns. Do not turn unused chapters, schedules, or "for later" duties into tables.

## Greenfield (new domain / new database)

Still brief the domain, then jobs and nouns. Do not clone another product's schema.

Decide, in this order:

- **Briefing** — trusted sources for this setting, first product slice, tenant, out of scope
- **Jobs** the first product slice must answer
- **Tenant boundary** if the product is multi-tenant (name the owner column from the product: `org_id`, `workspace_id`, `school_id`, …)
- **Nouns** for that slice only (often 2–4 tables)
- **Sources** that already exist or will exist as real tables (files, tasks, submissions) — point at them later; do not pre-build an artifact warehouse

A tenant-owned row typically needs:

| Column | Role |
|--------|------|
| `id` | Identity (`uuid` + `gen_random_uuid()` unless the host uses integers) |
| owner id | Tenant/ownership FK |
| `label` | Human-readable name that survives source deletion |
| `type` / `source_type` | Closed set via `CHECK (... IN (...))` |
| `source_id` | Pointer at an existing row; null when there is no source |
| `detail jsonb` | Type-specific extras |
| `created_at` | `timestamptz not null default now()` |
| `created_by` | Actor id, nullable, `ON DELETE SET NULL` |
| `idempotency_key` | Dedup; partial unique index when nullable |

Include the owner column in unique constraints (`UNIQUE (org_id, id)` plus a composite FK from children) so tenant isolation holds under joins.

Skip until a real screen needs them: `status`, `valid_from`/`valid_to`, reviewer id, snapshot display names, history/event tables, `SECURITY DEFINER` RPC facades.

## Pointers, not copies

```sql
-- ❌ BAD: shadow copy of an existing files table
CREATE TABLE evidence_artifacts (
  storage_path text,
  original_filename text,
  sha256_digest text
);

-- ✅ GOOD: one ledger row pointing at the row that already exists
source_type text CHECK (source_type IN ('file_analysis', 'task_completion', 'quiz', 'manual')),
source_id integer,  -- files.id / tasks.id / null for manual
label text NOT NULL
```

`source_id` is intentionally not a polymorphic FK. Document which table each `source_type` points at in a table comment.

## Host style (discover, then match)

Look in the current project's migrations (often `supabase/migrations/`) and copy:

- RLS enabled on tenant-owned tables, policies using the existing membership helper (e.g. `is_org_member(org_id)`), not a new auth scheme
- `CHECK` constraints on type enums, not a separate enum type unless the host already uses one
- Partial unique indexes for dedup (`WHERE idempotency_key IS NOT NULL`)
- App-layer insert/delete rather than RPC wrappers

If the host has no RLS yet and the product is single-tenant, do not add a membership system "for later".

## Common mistakes

| Mistake | Instead |
|---------|---------|
| Extra artifact/file clone table | `source_type` + `source_id` |
| Parallel `*_status` for a flag that already exists | Read/write the existing flag |
| Review/revoke/event tables in v1 | Defer until that flow ships |
| Four tables for two nouns | Two tables; join table only for real M:N |
| Type-specific columns on the ledger | `detail jsonb` |
| New SECURITY DEFINER RPC per write | Insert/delete from the app |
| Copying another domain's table names | Name nouns from *this* product |
| Schema from unrequested legislation | Brief first; tables only for the current slice |
