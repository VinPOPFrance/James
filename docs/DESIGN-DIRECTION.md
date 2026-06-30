# Design direction — validated

## Feel
Calm, premium, human. A reassuring guide for women 40+ in pain — never a cold medical site,
never aggressive fitness. The client (woman) is the hero; James is the expert guide.

## Palette
| Token  | Hex       | Role |
|--------|-----------|------|
| navy   | `#1F2A3C` | confidence — primary text, primary CTA on light, dark sections |
| ivory  | `#FBF8F1` | softness — page background, text on dark |
| sage   | `#8FA68A` | body & recovery — SUPPORT ONLY (icons, validation, reassurance) |
| sand   | `#E4D7C3` | human warmth — avatars, soft fills |
| copper | `#B0794F` | premium action — primary CTA on dark, eyebrows, accents |

Supporting tints: navy-light `#2C3A52`, copper-light `#C28A5E`, ink `#2A2A28`,
inkSoft `#444441`, muted `#5F5E5A`, hairline `#E7E1D6`.

## Typography
- **Voice (serif display)** — emotional moments only: H1, the problem quote, the promise,
  section titles. Restraint is the point. Suggest Fraunces or Source Serif 4.
- **Sans (humanist body)** — everything else: paragraphs, labels, UI. Suggest Inter or Geist.
- Eyebrows: 12px, uppercase, letter-spacing ~0.09em, copper (sage on sage sections).

## Layout rhythm
Alternate quiet light cards with immersive dark bands so it never reads as a stack of
identical cards. The two dark bands carry the emotional weight:
1. **VideoSection** (navy gradient) — "See how a session feels"
2. **FinalCta** (navy gradient) — "Stop feeling broken…"
Plus the navy ProofBar near the top and the navy Promise band lower down.

## Signature elements
- The **3-phase timeline** with a sage→copper→navy connecting line = the program's arc made visual.
- Soft circular glows behind dark bands (sage + copper at low opacity).
- The floating "No pushing through pain" chip over the hero media.

## Motion (subtle, reduced-motion aware)
- Hero text/CTAs: gentle fade-up on load.
- Sections: scroll reveal via `<Reveal>` (opacity + 16px rise, once).
- Cards: hover lift (-4px) + soft shadow.
- Nav links: copper underline grows on hover.
- Buttons: hover deepen + 2px rise.
Avoid heavy 3D, parallax, glassmorphism overload. Effects must support calm, not distract.

## Conversion hierarchy (must hold)
- ONE dominant CTA repeated: **Book a free discovery call**.
- Fascia Reset is always secondary (outline / lower weight), never a filled primary competing with the call.
- Workshops never appear high on the page — footer link only.
- Program always led by the transformation line ("You don't leave with random exercises"),
  not by "12 sessions". Price present but calm.

## Don'ts
Cold medical look · aggressive fitness · fascia/biomechanics jargon dumps · all offers at equal
weight · generic SaaS template · miracle-cure promises · multiple competing CTAs · leading with James.
