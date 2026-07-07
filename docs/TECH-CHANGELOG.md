# Technical Changelog (AI-maintained)

Purpose: keep a concise history of structural or behavioral changes.

## Rules
1. Add one entry per structural change (routing, architecture, data flow, build, analytics, env, integrations).
2. Keep entries short and factual.
3. Do not log cosmetic-only text edits.
4. Newest entry on top.

---

## Entry Template
Date: YYYY-MM-DD
Author: AI | Human
Scope: routing | architecture | data | infra | analytics | seo | build
Files:
- path/to/file
- path/to/file
Change summary:
- What changed
- Why it changed
Impact:
- Runtime impact
- Deployment/migration impact
Actions required:
- [ ] none
- [ ] run npm run lint
- [ ] set/update env vars
- [ ] manual verification needed

---

## Entries

Date: 2026-07-07
Author: AI
Scope: docs | workflow
Files:
- AGENTS.md
- docs/AI-HANDOFF.md
- docs/TECH-CHANGELOG.md
- README.md
Change summary:
- Added mandatory AI preflight workflow (git status + pull policy) and architecture handoff docs.
- Added technical changelog template to enforce structural change documentation.
Impact:
- Runtime impact: none
- Deployment/migration impact: lower risk of undocumented architecture changes
Actions required:
- [x] none
- [x] run npm run lint
- [ ] set/update env vars
- [ ] manual verification needed
