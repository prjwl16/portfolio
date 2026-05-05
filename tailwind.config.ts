import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "paper-dots": "radial-gradient(#e5e0d8 1px, transparent 1px)",
      },
      backgroundSize: {
        "paper-dots": "24px 24px",
      },
      colors: {
        // Hand-drawn palette
        paper: "#fdfbf7",
        ink: "#2d2d2d",
        muted: "#e5e0d8",
        accent: "#ff4d4d",
        ballpoint: "#2d5da1",
        postit: "#fff9c4",

        // Legacy aliases kept so older /work and /about pages still resolve
        primary: "var(--neutral-700)",
        secondary: "var(--neutral-500)",
      },
      fontFamily: {
        heading: ["var(--font-kalam)", "Kalam", "cursive"],
        hand: ["var(--font-patrick)", "Patrick Hand", "cursive"],
      },
      borderRadius: {
        wobbly: "255px 15px 225px 15px / 15px 225px 15px 255px",
        wobblyMd: "30px 8px 28px 6px / 8px 30px 6px 28px",
        wobblySm: "12px 4px 14px 5px / 4px 12px 5px 14px",
      },
      boxShadow: {
        sketch: "4px 4px 0px 0px #2d2d2d",
        "sketch-sm": "2px 2px 0px 0px #2d2d2d",
        "sketch-lg": "8px 8px 0px 0px #2d2d2d",
        "sketch-soft": "3px 3px 0px 0px rgba(45, 45, 45, 0.15)",
      },
      keyframes: {
        sketchBounce: {
          "0%, 100%": { transform: "translateY(0) rotate(-6deg)" },
          "50%": { transform: "translateY(-10px) rotate(-6deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
      },
      animation: {
        "sketch-bounce": "sketchBounce 3s ease-in-out infinite",
        wiggle: "wiggle 2.5s ease-in-out infinite",
      },
      perspective: {
        "1000": "1000px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), addVariablesForColors],
} satisfies Config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
