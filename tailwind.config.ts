import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1F2A3C",
        "navy-light": "#2C3A52",
        ivory: "#FBF8F1",
        sage: "#8FA68A",
        sand: "#E4D7C3",
        copper: "#B0794F",
        "copper-light": "#C28A5E",
        ink: "#2A2A28",
        inkSoft: "#444441",
        muted: "#5F5E5A",
        hairline: "#E7E1D6",
      },
      fontFamily: {
        voice: ["var(--font-voice)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        cta: "11px",
        card: "15px",
        section: "20px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
