# AGENTS.md - Operating instructions for AI coding agents

Purpose: give any AI assistant a reliable startup procedure and project context before making changes.

## Scope
These instructions apply to the full repository.

## Mandatory preflight before any code change
1. Detect current branch and workspace state:
   - `git branch --show-current`
   - `git status --short`
2. Sync local branch with remote before starting implementation:
   - If workspace is clean: `git pull --rebase origin <current-branch>`
   - If workspace is dirty: stop and ask the user how to proceed before pulling.
3. If pull fails (conflict, auth, network), report the issue and do not continue implementation until resolved.

## Safety and collaboration rules
1. Never discard local changes automatically.
2. Never run destructive git commands (`reset --hard`, `checkout --`, force-push) unless user explicitly requests it.
3. In multi-device workflows, prioritize remote truth: always sync first.

## Project quick map
Read this file first, then read:
- `docs/AI-HANDOFF.md`
- `README.md`

## Content and architecture update policy
Whenever code changes affect structure, behavior, routes, data flow, or setup:
1. Update `docs/AI-HANDOFF.md` in the same task.
2. Keep sections short and factual.
3. Update route map and data source notes first.
4. Add an entry in `docs/TECH-CHANGELOG.md` using the template.

## Blog data policy (WordPress independence)
1. Runtime must not depend on WordPress API.
2. Blog content source is local snapshot: `src/data/blog-posts.json`.
3. Blog media source is local: `public/media/blog`.
4. To refresh content from old WordPress, run `npm run sync:blog` before WordPress shutdown.

## Analytics policy
1. Analytics is environment-driven and optional.
2. Configure through:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - `NEXT_PUBLIC_CLARITY_PROJECT_ID`
3. Do not hardcode secret values in source files.
