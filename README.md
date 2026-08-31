# CreatorCreator

Portable agent skills. Canonical copies live in `skills/<name>/SKILL.md`.

## Cursor (automatic)

Once:

```bash
bash scripts/link-skills.sh
```

That makes `~/.cursor/skills` point at `skills/` in this repo. After that, **new skill folders are picked up by Cursor without running the script again**. Start a new agent chat (reload the window if one does not appear).

## Claude Code

The same script adds a per-skill symlink into `~/.claude/skills/`. Re-run it after you add a skill so Claude Code sees the new name.

## Adding a skill

1. Create `skills/<name>/SKILL.md` (`name` = lowercase letters, numbers, hyphens).
2. Cursor: new chat. Claude Code: `bash scripts/link-skills.sh`.
