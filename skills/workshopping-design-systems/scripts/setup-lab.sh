#!/usr/bin/env bash
# Copy the bundled design lab into the current project.
# Usage: bash /path/to/skills/workshopping-design-systems/scripts/setup-lab.sh [target-dir]
# Default target: ./website (relative to cwd)

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
TEMPLATE="${SCRIPT_DIR}/../website"
TARGET="${1:-./website}"

if [[ ! -f "${TEMPLATE}/app/tokens.css" ]]; then
  echo "Template not found at ${TEMPLATE}" >&2
  exit 1
fi

mkdir -p "$(dirname "$TARGET")"

if command -v rsync >/dev/null 2>&1; then
  rsync -a --delete \
    --exclude node_modules \
    --exclude .next \
    --exclude reference \
    "${TEMPLATE}/" "${TARGET}/"
else
  echo "rsync not found; using cp" >&2
  rm -rf "${TARGET}"
  cp -R "${TEMPLATE}" "${TARGET}"
  rm -rf "${TARGET}/node_modules" "${TARGET}/.next" "${TARGET}/reference"
fi

echo "design-lab" > "${TARGET}/.design-lab"

echo "Lab copied to ${TARGET}"
echo "Run: cd ${TARGET} && npm install && npm run dev"
