#!/usr/bin/env bash

# deploy.sh
# Run this script on the server to update and rebuild the personal website.

set -euo pipefail

APP_DIR="${APP_DIR:-/srv/personal-website}"
BRANCH="${BRANCH:-main}"
REMOTE="${REMOTE:-origin}"

log() {
  printf '\n[%s] %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$*"
}

require_command() {
  if ! command -v "$1" >/dev/null 2>&1; then
    printf 'Missing required command: %s\n' "$1" >&2
    exit 1
  fi
}

log "Checking required commands"
require_command git
require_command npm
require_command nginx
require_command systemctl

log "Entering project directory: $APP_DIR"
cd "$APP_DIR"

log "Fetching latest code from $REMOTE/$BRANCH"
git fetch "$REMOTE" "$BRANCH"

log "Switching to $BRANCH and fast-forwarding"
git checkout "$BRANCH"
git pull --ff-only "$REMOTE" "$BRANCH"

log "Installing dependencies from package-lock.json"
npm ci --no-audit --no-fund

log "Building production files"
npm run build

log "Checking Nginx configuration"
nginx -t

log "Reloading Nginx"
systemctl reload nginx

log "Deployment complete"
