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

Date: 2026-10-07
Author: AI
Scope: data | architecture
Files:
- dashboard/lib/advertising.mjs
- dashboard/lib/advertising.d.mts
- dashboard/lib/data.ts
- dashboard/app/page.tsx
- dashboard/tests/advertising.test.mjs
- dashboard/README.md
- docs/AI-HANDOFF.md
Change summary:
- Restricted all James Meta reports to the confirmed webinar campaign and account.
- Added ad and device/placement details, weighted CTR/CPC/CPM and explicit action definitions.
- Reported excluded unconfirmed Meta campaigns without including their spend in James totals.
Impact:
- Intentional Meta scope change across overview, advertising and freshness.
- No public-site, Airbyte, campaign or database-write changes.
Actions required:
- [x] six unit tests, lint, build and authenticated local HTTP checks
- [x] real SQL checks: Meta breakdown spend agrees within EUR 0.01
- [ ] compare reference figures with the platform interfaces

Date: 2026-10-07
Author: AI
Scope: architecture | data | build | infra
Files:
- dashboard/app/
- dashboard/lib/
- dashboard/tests/
- dashboard/package.json
- dashboard/package-lock.json
- dashboard/next.config.ts
- dashboard/postcss.config.mjs
- dashboard/tsconfig.json
- dashboard/eslint.config.mjs
- dashboard/README.md
- tsconfig.json
- docs/AI-HANDOFF.md
Change summary:
- Built an independent authenticated acquisition dashboard in the James repo.
- Added four sections, date filters, real SQL reports and explicit data limitations.
- Isolated dashboard TypeScript and PostCSS configuration from the public site.
Impact:
- No public-site route or tracking change; dashboard awaits Vercel deployment.
- Queries use READ ONLY transactions, but Airbyte credentials still have write rights.
- Separate dashboard password and Vercel project configuration are required.
Actions required:
- [x] dashboard build, lint, three date tests and authenticated HTTP data checks
- [x] public-site lint and TypeScript validation (three existing image warnings)
- [ ] deploy a second Vercel project with Root Directory dashboard
- [ ] configure private server environment and verify deployment

Date: 2026-10-07
Author: AI
Scope: architecture | infra | data
Files:
- dashboard/.gitignore
- dashboard/.env.example
- dashboard/README.md
- docs/AI-HANDOFF.md
- docs/TECH-CHANGELOG.md
Change summary:
- Prepared a dashboard subdirectory in the existing James repository.
- Kept the public site at the root to avoid a site migration.
- Documented dedicated PostgreSQL data and a separate Vercel deployment.
- Verified local TLS database access, import coverage and reporting role
  permissions using read-only transactions; recorded checks in dashboard/README.md.
Impact:
- No runtime change; dashboard application and deployment are not created yet.
- Private local connection configuration is excluded from Git.
Actions required:
- [ ] configure local James database credentials
- [ ] verify database access and read-only reporting permissions
- [ ] implement and deploy the authenticated dashboard

Date: 2026-10-05
Author: AI
Scope: routing | data | docs
Files:
- src/app/workshop/page.tsx
- docs/AI-HANDOFF.md
- docs/TECH-CHANGELOG.md
Change summary:
- Rewrote `/workshop` with the full long-form copy (hero, problem, stake, what happens, leave-with, how it works, details, form, closing).
- Re-embedded MailerLite form 46729013 (email, name, "how did you hear about this?"), styled via `workshop.module.css`; MailerLite's own inline CSS was not copied.
- Sections now use the main site's card colours (white, sand, sage, dark green); capacity changed from 10 to 12.
Impact:
- Runtime impact: visitors submit to MailerLite from `/workshop`; no Lead event or page-specific tracking.
- Deployment/migration impact: requires a redeploy.
Actions required:
- [ ] none
- [x] run npm run lint
- [ ] set/update env vars
- [x] manual verification needed

Date: 2026-10-05
Author: AI
Scope: routing | seo | data | docs
Files:
- src/app/workshop/page.tsx
- src/app/workshop/workshop.module.css
- src/components/ui/FloatingWhatsApp.tsx
- docs/AI-HANDOFF.md
- docs/TECH-CHANGELOG.md
Change summary:
- Added a short, noindex/nofollow fixed-URL `/workshop` landing page for the 31 October event with the supplied MailerLite form embed.
- Hid the floating WhatsApp shortcut on the single-purpose landing page; no page-specific tracking or Lead event was added.
Impact:
- Runtime impact: visitors can read workshop details and submit their name and email to MailerLite at `/workshop`.
- Deployment/migration impact: requires a redeploy to publish the route.
Actions required:
- [ ] none
- [x] run npm run lint
- [ ] set/update env vars
- [x] manual verification needed

Date: 2026-08-19
Author: AI
Scope: routing | seo | data | docs
Files:
- src/app/lower-back-pain-reset/page.tsx (moved from src/app/pelvic-engine-reset/page.tsx)
- src/app/nl/lower-back-pain-reset/page.tsx (moved from src/app/nl/pelvic-engine-reset/page.tsx)
- next.config.js
- src/config/content.en.ts
- src/config/content.nl.ts
- src/components/sections/WorkshopPromoCard.tsx
- src/components/sections/AnnouncementBar.tsx
- src/app/nl/page.tsx
- src/app/api/workshop-application/route.ts
- README.md
- docs/AI-HANDOFF.md
Change summary:
- Renamed the "Pelvic Engine Reset" workshop landing page and all copy/labels/emails to "Lower Back Pain Reset" (name change requested by site owner, term was confusing).
- Moved the route from `/pelvic-engine-reset` to `/lower-back-pain-reset` (and the `nl` mirror) and added permanent 301 redirects from the old paths in `next.config.js` so existing links keep working.
Impact:
- Runtime impact: old URLs redirect to the new ones; all internal links (announcement bar, promo card, homepage) now point at the new paths.
- Deployment/migration impact: requires a redeploy to surface the new route and redirects on Vercel.
Actions required:
- [ ] none
- [ ] run npm run lint
- [ ] set/update env vars
- [x] manual verification needed

Date: 2026-07-29
Author: AI
Scope: routing | seo | docs
Files:
- src/app/pelvic-engine-reset/page.tsx
- docs/AI-HANDOFF.md
- docs/TECH-CHANGELOG.md
Change summary:
- Added a hidden direct-URL landing page for the Pelvic Engine Reset application flow.
- Marked the page noindex/nofollow and kept it out of site navigation.
Impact:
- Runtime impact: new private landing route available at `/pelvic-engine-reset`.
- Deployment/migration impact: requires a redeploy to surface the new route on Vercel.
Actions required:
- [x] none
- [ ] run npm run lint
- [ ] set/update env vars
- [ ] manual verification needed

Date: 2026-07-15
Author: AI
Scope: analytics | infra | docs
Files:
- .env.local
- README.md
Change summary:
- Added the Clarity Project ID to local environment configuration for this workspace.
- Updated analytics setup instructions to point directly at `.env.local` instead of a missing `.env.example`.
Impact:
- Runtime impact: local and Vercel builds can enable Clarity when `NEXT_PUBLIC_CLARITY_PROJECT_ID` is present.
- Deployment/migration impact: none.
Actions required:
- [ ] none
- [ ] run npm run lint
- [x] set/update env vars
- [ ] manual verification needed

Date: 2026-07-07
Author: AI
Scope: data
Files:
- src/config/business-info.ts
- docs/AI-HANDOFF.md
Change summary:
- Updated shared `businessInfo.bookingUrl` to the specific SimplyBook discovery-call URL (`/category/1/service/6/count/1/`).
- Ensures all "Book a free discovery call" CTAs now resolve to the same target.
Impact:
- Runtime impact: all CTA buttons wired to `businessInfo.bookingUrl` now land on the requested booking flow.
- Deployment/migration impact: none.
Actions required:
- [x] none
- [ ] run npm run lint
- [ ] set/update env vars
- [ ] manual verification needed

Date: 2026-07-07
Author: AI
Scope: data | build
Files:
- src/components/sections/Newsletter.tsx
- docs/AI-HANDOFF.md
Change summary:
- Fixed root cause of false newsletter errors: `event.currentTarget` used after `await` could become invalid and throw during `reset()`.
- Captured form reference before async boundary and reused it safely.
Impact:
- Runtime impact: successful subscriptions now show success reliably instead of a false error.
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
