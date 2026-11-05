import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				bg: "var(--bg)",
				ink: "var(--ink)",
				soft: "var(--soft)",
				muted: "var(--muted)",
				line: "var(--line)",
				raised: "var(--raised)",
			},
			fontFamily: {
				sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
			},
			maxWidth: {
				page: "42rem",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
} satisfies Config;

export default config;
