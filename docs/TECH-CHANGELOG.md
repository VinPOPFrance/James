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
Scope: data | build
Files:
- src/components/sections/Newsletter.tsx
- docs/AI-HANDOFF.md
Change summary:
- Hardened newsletter client logic: treat 2xx API response as success and make JSON parsing non-fatal.
- This addresses intermittent cases where API returns success but UI still shows an error.
Impact:
- Runtime impact: more reliable success feedback in production browsers.
- Deployment/migration impact: none.
Actions required:
- [ ] none
- [x] run npm run lint
- [ ] set/update env vars
- [x] manual verification needed

Date: 2026-07-07
Author: AI
Scope: data | build
Files:
- src/app/api/newsletter/route.ts
- src/components/sections/Newsletter.tsx
- docs/AI-HANDOFF.md
Change summary:
- Switched newsletter submissions to internal API route to avoid browser-side intermittent failures when calling MailerLite directly.
- Added server-side forwarding to MailerLite with normalized error handling for the UI.
Impact:
- Runtime impact: more reliable newsletter signups in production browsers.
- Deployment/migration impact: none.
Actions required:
- [ ] none
- [x] run npm run lint
- [ ] set/update env vars
- [x] manual verification needed

Date: 2026-07-07
Author: AI
Scope: data | build
Files:
- src/components/sections/Newsletter.tsx
- docs/AI-HANDOFF.md
Change summary:
- Fixed newsletter race condition causing simultaneous success and error messages under duplicate submissions.
- Added submit lock and enforced mutually exclusive success/error state updates.
Impact:
- Runtime impact: stable newsletter feedback with no conflicting UI state.
- Deployment/migration impact: none.
Actions required:
- [ ] none
- [x] run npm run lint
- [ ] set/update env vars
- [x] manual verification needed

Date: 2026-07-07
Author: AI
Scope: data | build
Files:
- src/components/sections/Newsletter.tsx
- docs/AI-HANDOFF.md
Change summary:
- Fixed newsletter signup flow by replacing failing direct POST form submit with MailerLite JSON GET submission.
- Added in-page success/error feedback and loading state to the newsletter form.
Impact:
- Runtime impact: newsletter subscription now works from site without opening a broken target tab.
- Deployment/migration impact: none.
Actions required:
- [ ] none
- [x] run npm run lint
- [ ] set/update env vars
- [x] manual verification needed

Date: 2026-07-07
Author: AI
Scope: build | analytics
Files:
- src/app/layout.tsx
- docs/AI-HANDOFF.md
Change summary:
- Fixed production build failure by wrapping `TrackingScripts` in `Suspense`.
- Documented the `useSearchParams` + Suspense requirement in AI handoff docs.
Impact:
- Runtime impact: none on user flows.
- Deployment/migration impact: unblocks Vercel production builds.
Actions required:
- [ ] none
- [x] run npm run lint
- [ ] set/update env vars
- [x] manual verification needed

Date: 2026-07-07
Author: AI
Scope: infra | build | docs
Files:
- vercel.json
- docs/DEPLOY-VERCEL.md
- docs/AI-HANDOFF.md
- README.md
Change summary:
- Added Vercel deployment runbook and explicit Namecheap DNS cutover instructions.
- Added canonical host redirect from `www.jamesdaime.com` to `jamesdaime.com` via `vercel.json`.
- Declared Vercel as deployment target in AI handoff docs.
Impact:
- Runtime impact: canonical host normalization with 301 redirect.
- Deployment/migration impact: clearer, repeatable migration flow from WordPress to Vercel.
Actions required:
- [ ] none
- [x] run npm run lint
- [ ] set/update env vars
- [x] manual verification needed

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
