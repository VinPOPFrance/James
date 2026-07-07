# AI Handoff - Site structure and behavior

This file is the fast technical context for AI agents. Keep it updated when the project evolves.

## 1) Stack
- Next.js 14 App Router
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

## 2) High-level architecture
- `src/app`: route entrypoints (pages, metadata, locale routes)
- `src/components`: reusable UI and page sections
- `src/config`: business and content configuration (EN/NL copy, site config)
- `src/lib`: helper modules and integrations
- `src/data`: local static data sources (blog snapshot)
- `public/media`: static media assets

## 3) Routing model
Main language:
- `/`
- `/about`
- `/contact`
- `/faq`
- `/workshops`
- `/fascia-reset-session`
- `/12-week-body-reset-program`
- `/blog`
- `/blog/[slug]`

Dutch mirror:
- `/nl`
- `/nl/about`
- `/nl/contact`
- `/nl/faq`
- `/nl/workshops`
- `/nl/fascia-reset-session`
- `/nl/12-week-body-reset-program`
- `/nl/blog`
- `/nl/blog/[slug]`

## 4) Content system
- Main page copy is centralized in `src/config/content.en.ts` and `src/config/content.nl.ts`.
- Other pages use dedicated `src/config/content.*.ts` files.
- Components should not hardcode editorial copy when a config entry exists.

## 5) Blog system (decoupled from WordPress runtime)
- Source of truth at runtime: `src/data/blog-posts.json`
- Blog media: `public/media/blog`
- Data access layer: `src/lib/wordpress.ts` (local dataset reader)
- List pages:
  - `src/app/blog/page.tsx`
  - `src/app/nl/blog/page.tsx`
- Detail pages:
  - `src/app/blog/[slug]/page.tsx`
  - `src/app/nl/blog/[slug]/page.tsx`

### Refresh process (only when needed)
1. Run `npm run sync:blog`
2. Verify imported posts and media
3. Check article rendering and missing images
4. Run `npm run lint`

## 6) Layout and global behavior
- Root layout: `src/app/layout.tsx`
- Global styles: `src/app/globals.css`
- Header and footer live in section/layout components
- SEO metadata is set per route where relevant
- Newsletter section submits to internal API route `src/app/api/newsletter/route.ts`.
- Server route forwards data to MailerLite JSON endpoint and returns normalized success/error messages.
- Newsletter form includes client-side submit locking to prevent duplicate concurrent requests.
- Newsletter client treats HTTP 2xx from `/api/newsletter` as success, with non-fatal JSON parsing for resilience.
- In async submit handlers, capture `event.currentTarget` before `await` and reuse a stable form reference.

## 7) Analytics
- Tracking loader: `src/components/analytics/TrackingScripts.tsx`
- Mounted in `src/app/layout.tsx`
- Must be wrapped in `Suspense` in layout because it uses `useSearchParams`.
- Enabled only when env vars are set:
  - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
  - `NEXT_PUBLIC_CLARITY_PROJECT_ID`

## 8) Deployment target
- Hosting platform: Vercel
- Domain registrar/DNS: Namecheap
- Primary domain: `jamesdaime.com`
- Canonical host rule: redirect `www.jamesdaime.com` to `jamesdaime.com` (see `vercel.json`)
- Deployment runbook: `docs/DEPLOY-VERCEL.md`

## 9) Collaboration workflow (required)
Before any implementation task:
1. `git branch --show-current`
2. `git status --short`
3. Pull latest remote changes:
   - clean workspace: `git pull --rebase origin <current-branch>`
   - dirty workspace: ask user first

## 10) Definition of done for AI changes
1. Feature/code updated
2. `npm run lint` passes
3. `docs/AI-HANDOFF.md` updated if architecture/flow changed
4. `docs/TECH-CHANGELOG.md` updated for any structural/behavioral change
5. Short change summary provided to user
