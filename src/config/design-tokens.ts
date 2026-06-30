/**
 * Crystal Clear — Design Tokens
 * Single source of truth for the brand. Change a value here and it propagates everywhere.
 */

export const colors = {
  navy: "#1F2A3C", // confidence — primary text, primary CTA on light, dark sections
  navyLight: "#2C3A52", // hover / gradient partner for navy
  ivory: "#FBF8F1", // softness — page background, text on dark
  sage: "#8FA68A", // body & recovery — SUPPORT ONLY: icons, validation, reassurance
  sand: "#E4D7C3", // human warmth — avatars, soft fills
  copper: "#B0794F", // premium action — primary CTA on dark, eyebrows, accents
  copperLight: "#C28A5E", // copper hover
  // functional tints
  ink: "#2A2A28",
  inkSoft: "#444441",
  muted: "#5F5E5A",
  mutedSoft: "#888780",
  hairline: "#E7E1D6",
} as const;

export const typography = {
  // Display / "voice" — elegant serif for emotional moments (headlines, quotes, promise)
  voice: 'var(--font-voice)', // e.g. "Fraunces", "Source Serif 4"
  // Body / UI — clean humanist sans
  sans: 'var(--font-sans)', // e.g. "Inter", "Geist"
  scale: {
    h1: "clamp(2rem, 4vw, 2.6rem)",
    h2: "clamp(1.5rem, 2.6vw, 1.7rem)",
    h3: "1.05rem",
    body: "0.97rem",
    small: "0.84rem",
  },
} as const;

export const radius = {
  sm: "11px",
  md: "15px",
  lg: "20px",
  pill: "999px",
} as const;

/**
 * CTA contrast rule — locked.
 * surface "light"  → primary = navy bg / ivory text ; secondary = transparent / navy text + navy border
 * surface "dark"   → primary = copper bg / navy text ; secondary = transparent / ivory text + ivory border
 * This mapping makes a low-contrast button structurally impossible.
 */
export const ctaRule = {
  light: {
    primary: { bg: colors.navy, text: colors.ivory, border: colors.navy, hoverBg: colors.navyLight },
    secondary: { bg: "transparent", text: colors.navy, border: colors.navy, hoverBg: colors.navy, hoverText: colors.ivory },
  },
  dark: {
    primary: { bg: colors.copper, text: colors.navy, border: colors.copper, hoverBg: colors.copperLight },
    secondary: { bg: "transparent", text: colors.ivory, border: colors.ivory, hoverBg: "rgba(251,248,241,0.14)" },
  },
} as const;
