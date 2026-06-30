# Component map — homepage sections

Each section is one file in `src/components/sections/`, reads copy from `content.en.ts`,
assets from `MediaSlot`, and is wrapped in `<Reveal>` inside `page.tsx`.
All section wrappers: `rounded-section` (20px), generous padding (`p-10` desktop), `mt-4` between.

| # | Component        | Section bg          | Content key      | Media / buttons | Notes |
|---|------------------|---------------------|------------------|-----------------|-------|
| 1 | Header           | ivory, blurred, sticky | nav           | Button light primary | hamburger < md; copper underline on links |
| 2 | Hero             | ivory               | hero             | `heroImage` (4/5) · 2 buttons light | 2-col → 1-col mobile; serif H1; floating chip on media |
| 3 | ProofBar         | navy                | proofBar         | — | 4 stats, dividers; wraps on mobile |
| 4 | Problem          | white               | problem          | 3 icon cards (refresh/alert/help) | serif quote; cards hover-lift |
| 5 | VideoSection     | navy gradient       | video            | `presentationVideo` (16/9) · Button **dark** primary | play button on poster |
| 6 | QuickFixes       | sage-tint `#F4F6F2` | quickFixes       | loop→reset with arrow icon | eyebrow in sage |
| 7 | Solution         | white               | solution         | `movementClip` (1/1) · sage check list | media left, text right |
| 8 | Plan             | ivory               | plan             | 3 numbered cards (sage circles) · Button light | numbers are real sequence ✓ |
| 9 | Program          | white               | program          | price card | led by transformation line, not "12 sessions" |
| 10| Phases           | ivory               | phases           | 3-card timeline | sage→copper→navy connecting line behind number circles |
| 11| Included         | white               | included         | 9 sage-check items + effort callout (leaf icon) | 3-col grid → 1-col mobile |
| 12| Fit              | —                   | fit              | 2 cards: sage "for you" (check), copper "not for you" (minus) | |
| 13| Testimonials     | white               | testimonials     | 3 cards, optional `testimonial*` media else initials | keep the "replace" note visible |
| 14| Fascia           | `#F1F3F6`           | fascia           | 2 price tiers (60min dark) · Button light **secondary** | entry offer stays secondary |
| 15| Promise          | navy                | promise          | shield icon badge | copper glow circle |
| 16| About            | white               | about            | `jamesPortrait` (3/4) · Button light primary | James = guide, not hero |
| 17| Faq              | ivory               | faq              | 8 accordion items | first open by default; client-side toggle is fine (post-hydration) |
| 18| FinalCta         | navy gradient       | finalCta         | Button **dark** primary + **dark** secondary | sage+copper glow circles |
| 19| Footer           | white               | footer           | — | workshops link lives here only |
| 20| StickyMobileCta  | ivory, fixed bottom | hero.ctaPrimary  | Button light primary | < md only; appears after hero scrolls past |

## Icons (from `lib/icons.ts`, lucide-react)
refresh · alert · help (problem) · check (included/fit/solution) · minus (not-for-you) ·
leaf (effort) · shield (promise) · arrow (quickfixes) · play (video).

## Accessibility floor
- `<html lang="en">` (later `nl`); semantic landmarks; alt text from media.config.
- Visible focus rings (Button has one); accordion keyboard-operable.
- Respect `prefers-reduced-motion` (Reveal already does).
- Color contrast AA on all text.

## Future pages (same layout system)
`/12-week-body-reset-program` · `/fascia-reset-session` · `/workshops` · `/about` ·
`/faq` · `/contact` (or `/book`). Reuse Button, MediaSlot, Reveal, tokens. Add `content.*` keys
per page. Keep workshops out of the main funnel.

## i18n readiness
All strings live in `content.en.ts`. For Dutch: clone to `content.nl.ts` (same shape),
add a locale switch (e.g. `[lang]` segment or next-intl), set `<html lang>` accordingly.
No component hardcodes copy.
