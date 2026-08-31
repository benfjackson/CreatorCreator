#!/usr/bin/env bash
# Point Cursor and Claude Code at the skills in this repo.
#
# Cursor: ~/.cursor/skills → this repo's skills/ directory.
#   New skill folders appear automatically; no need to re-run for Cursor.
# Claude Code: ~/.claude/skills/<name> → each skill folder.
#   Re-run after adding a skill so Claude sees it (that directory already
#   holds other skills, so we cannot replace it wholesale).
#
# Idempotent. Safe to run after git pull.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SKILLS_DIR="${REPO_ROOT}/skills"
CURSOR_SKILLS="${HOME}/.cursor/skills"
CLAUDE_SKILLS="${HOME}/.claude/skills"

if [[ ! -d "$SKILLS_DIR" ]]; then
  echo "No skills/ directory at ${SKILLS_DIR}" >&2
  exit 1
fi

skill_names() {
  local skill_md
  for skill_md in "${SKILLS_DIR}"/*/SKILL.md; do
    [[ -f "$skill_md" ]] || continue
    basename "$(dirname "$skill_md")"
  done
}

link_cursor() {
  mkdir -p "$(dirname "$CURSOR_SKILLS")"

  if [[ -L "$CURSOR_SKILLS" ]]; then
    local current
    current="$(readlink "$CURSOR_SKILLS")"
    if [[ "$current" == "$SKILLS_DIR" ]]; then
      echo "Cursor already linked: ${CURSOR_SKILLS} -> ${SKILLS_DIR}"
      return
    fi
    echo "Refusing to replace ${CURSOR_SKILLS} -> ${current}" >&2
    echo "Remove that symlink if you want this repo to own Cursor personal skills." >&2
    exit 1
  fi

  if [[ -d "$CURSOR_SKILLS" ]]; then
    echo "Linking each skill into existing ${CURSOR_SKILLS} (directory already present)"
    local name dest
    while IFS= read -r name; do
      dest="${CURSOR_SKILLS}/${name}"
      if [[ -L "$dest" ]]; then
        ln -sfn "${SKILLS_DIR}/${name}" "$dest"
        echo "  updated ${name}"
      elif [[ -e "$dest" ]]; then
        echo "  skip ${name}: ${dest} exists and is not a symlink"
      else
        ln -sfn "${SKILLS_DIR}/${name}" "$dest"
        echo "  linked ${name}"
      fi
    done < <(skill_names)
    echo "Note: new skills need this script re-run while ~/.cursor/skills is a real directory."
    return
  fi

  if [[ -e "$CURSOR_SKILLS" ]]; then
    echo "Refusing to replace ${CURSOR_SKILLS} (not a directory or symlink)" >&2
    exit 1
  fi

  ln -sfn "$SKILLS_DIR" "$CURSOR_SKILLS"
  echo "Cursor skills: ${CURSOR_SKILLS} -> ${SKILLS_DIR}"
  echo "New folders under skills/ are picked up automatically by Cursor."
}

link_claude() {
  mkdir -p "$CLAUDE_SKILLS"
  echo "Claude skills: linking into ${CLAUDE_SKILLS}"
  local name dest
  while IFS= read -r name; do
    dest="${CLAUDE_SKILLS}/${name}"
    if [[ -L "$dest" ]]; then
      ln -sfn "${SKILLS_DIR}/${name}" "$dest"
      echo "  updated ${name}"
    elif [[ -e "$dest" ]]; then
      echo "  skip ${name}: ${dest} exists and is not a symlink"
    else
      ln -sfn "${SKILLS_DIR}/${name}" "$dest"
      echo "  linked ${name}"
    fi
  done < <(skill_names)
}

echo "CreatorCreator skill link"
echo "  repo: ${REPO_ROOT}"
echo ""
link_cursor
echo ""
link_claude
echo ""
echo "Done. Start a new Cursor agent chat (reload the window if a new skill is missing)."
