# Crystal Clear Problem Solving — Homepage handoff

A premium, conversion-first landing page for **Inner Strength Compass** — a 12-week body reset
program for women 40+ in the Netherlands with chronic back pain.

This package contains the **validated design foundation**: tokens, the locked CTA system,
the media architecture, centralized (translatable) content, and animation helpers.
It does **not** contain a finished `page.tsx` — that's the first job for Claude Code,
because it must be built where it can actually be installed, built, and tested.

---

## 0. What to tell Claude Code first

> "Read `README.md`, `docs/DESIGN-DIRECTION.md`, `docs/CTA-RULES.md`, and `docs/COMPONENT-MAP.md`.
> Scaffold a Next.js 14 (App Router) + TypeScript + Tailwind project, drop the provided `src/`
> files in, install dependencies, then build the homepage section by section following the
> component map. Run `npm run build` and `npx eslint` and fix everything before showing me.
> Never produce a CTA outside the four states in CTA-RULES.md."

---

## 1. Stack

- Next.js 14+ (App Router)
- React 18+
- TypeScript
- Tailwind CSS 3.4+
- framer-motion (scroll reveal, micro-interactions)
- lucide-react (line icons — all emojis already removed)
- clsx (class merging in Button)

Fonts (via `next/font/google`): a serif **display/voice** face (e.g. Fraunces or Source Serif 4)
mapped to `--font-voice`, and a humanist **sans** (e.g. Inter or Geist) mapped to `--font-sans`.

---

## 2. Install

```bash
npm install
# if starting fresh:
npm install framer-motion lucide-react clsx
npm install -D tailwindcss postcss autoprefixer
```

## 3. Run / validate

```bash
npm run dev          # local preview
npm run build        # MUST pass
npx eslint src --ext .ts,.tsx
```

## Analytics (GA4 + Clarity)

1. Edit `.env.local` in the project root
2. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` (example: `G-XXXXXXXXXX`)
3. Set `NEXT_PUBLIC_CLARITY_PROJECT_ID` to your Clarity Project ID
4. Restart dev/build process after env changes

If you only want Clarity, you can leave the GA4 variable unset.

Tracking is automatically enabled only when the IDs are present.

## Deployment

- Vercel deployment runbook: `docs/DEPLOY-VERCEL.md`
- Primary production domain: `jamesdaime.com`

---

## 4. Recommended tree

```
src/
  app/
    layout.tsx          ← fonts (--font-voice / --font-sans), <html lang>, metadata
    page.tsx            ← homepage: imports sections in order (BUILD THIS)
    globals.css         ← Tailwind directives + base
    (routes)/           ← future pages, see COMPONENT-MAP.md §future
  components/
    ui/
      Button.tsx        ✅ provided — locked CTA system
      MediaSlot.tsx     ✅ provided — image/video + labelled placeholder
      Reveal.tsx        ✅ provided — scroll reveal, respects reduced-motion
    sections/           ← one file per homepage section (BUILD THESE)
      Header.tsx  Hero.tsx  ProofBar.tsx  Problem.tsx  VideoSection.tsx
      QuickFixes.tsx  Solution.tsx  Plan.tsx  Program.tsx  Phases.tsx
      Included.tsx  Fit.tsx  Testimonials.tsx  Fascia.tsx  Promise.tsx
      About.tsx  Faq.tsx  FinalCta.tsx  Footer.tsx  StickyMobileCta.tsx
  config/
    design-tokens.ts    ✅ provided
    media.config.ts     ✅ provided — swap assets here only
    content.en.ts       ✅ provided — all copy; clone to content.nl.ts for Dutch
  lib/
    icons.ts            ✅ provided — lucide icon map
tailwind.config.ts      ✅ provided
docs/
  DESIGN-DIRECTION.md   ✅ visual direction (validated)
  CTA-RULES.md          ✅ locked button contrast rule
  COMPONENT-MAP.md      ✅ section order, props, build notes
  AI-HANDOFF.md         ✅ fast architecture + workflow context for AI agents
```

## AI startup instructions

- `AGENTS.md` defines mandatory AI preflight (including git pull workflow).
- `docs/AI-HANDOFF.md` explains architecture, routing, data flow, and update policy.
- `docs/TECH-CHANGELOG.md` stores minimal structural change history.
- When structure or behavior changes, update `docs/AI-HANDOFF.md` in the same task.
- When structure or behavior changes, also add one entry to `docs/TECH-CHANGELOG.md`.

---

## 5. Section order (homepage)

Header · Hero · ProofBar · Problem · VideoSection · QuickFixes · Solution · Plan ·
Program · Phases · Included · Fit · Testimonials · Fascia · Promise · About · Faq ·
FinalCta · Footer · StickyMobileCta

Full per-section spec in `docs/COMPONENT-MAP.md`.

---

## 6. CTA rule (non-negotiable)

See `docs/CTA-RULES.md`. Summary:
- light bg → primary navy/ivory · secondary transparent/navy + navy border
- dark bg  → primary **copper/navy** · secondary transparent/ivory + ivory border
- sage is SUPPORT ONLY (icons, validation, recovery) — never an action button
- always pass `<Button surface="light|dark">`; the component enforces contrast.

---

## 7. Media to replace

All assets are registered in `src/config/media.config.ts` with empty `src` → they render
as labelled placeholders until you drop files in `/public/media`. Replace:

| key                | what                          | ratio |
|--------------------|-------------------------------|-------|
| heroImage          | woman 40–60, calm movement    | 4/5   |
| presentationVideo  | studio / session intro video  | 16/9  |
| movementClip       | gentle guided stretch loop    | 1/1   |
| jamesPortrait      | warm portrait of James        | 3/4   |
| testimonial*       | optional client photos        | 1/1   |

No illustration is used as a primary visual — placeholders are diagnostic only.

---

## 8. Next steps in Claude Code

1. Scaffold project, install deps, drop in `src/`, confirm `npm run dev` boots.
2. Build `layout.tsx` (fonts + metadata from `content.en.ts → meta`).
3. Build each section component reading copy from `content.en.ts` and assets from `MediaSlot`.
4. Assemble `page.tsx` in the order above, each wrapped in `<Reveal>`.
5. Wrap the buttons with the right `surface` per section (table in COMPONENT-MAP.md).
6. Verify responsive at 375 / 768 / 1280; confirm sticky mobile CTA + hamburger nav.
7. `npm run build` + `eslint`, fix all.
8. Then: replicate the layout system for the 6 remaining pages (program, fascia,
   workshops, about, faq, contact) and wire `content.nl.ts` for Dutch.
