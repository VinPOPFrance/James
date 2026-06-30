# CTA rules — LOCKED

The `Button` component (`src/components/ui/Button.tsx`) is the only way to render a CTA.
It takes `variant="primary|secondary"` and `surface="light|dark"` and derives colors so a
low-contrast button is impossible. Do not write raw `<a>`/`<button>` CTAs.

## The four valid states

| Surface | Variant   | Background      | Text         | Border            |
|---------|-----------|-----------------|--------------|-------------------|
| light   | primary   | navy `#1F2A3C`  | ivory `#FBF8F1` | navy            |
| light   | secondary | transparent     | navy `#1F2A3C`  | navy 1.5px      |
| dark    | primary   | **copper `#B0794F`** | navy `#1F2A3C` | copper       |
| dark    | secondary | transparent     | ivory `#FBF8F1` | ivory 1.5px     |

## Hard constraints

- No white-on-white. No light text on light background.
- No button relies on hover alone to be visible — every state has a solid fill or 1.5px border at rest.
- Hover only *deepens* the resting state (navy→navy-light, copper→copper-light, etc.).
- Visible keyboard focus ring (copper) is built in.

## Color roles (do not blur these)

- **navy** — confidence: primary text, primary action on light, dark section backgrounds.
- **copper** — premium action: the ONLY primary action color on dark surfaces; eyebrows/accents.
- **sage** — SUPPORT ONLY: icons, validation checks, recovery/movement cues, reassurance. Never an action button.
- **ivory** — softness: page background, text on dark.
- **sand** — human warmth: avatars, soft fills.

## Per-section surface (homepage)

| Section        | Section bg | Button surface |
|----------------|------------|----------------|
| Header         | light      | light          |
| Hero           | light      | light          |
| VideoSection   | dark (navy)| dark           |
| Plan           | light      | light          |
| Fascia         | light      | light          |
| About          | light      | light          |
| FinalCta       | dark (navy)| dark           |
| StickyMobileCta| light      | light          |
