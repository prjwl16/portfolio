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
				accent: "var(--accent)",
				raised: "var(--raised)",
			},
			fontFamily: {
				serif: ["var(--font-serif)", "Georgia", "serif"],
				body: ["var(--font-body)", "Georgia", "serif"],
				mono: ["var(--font-mono)", "ui-monospace", "monospace"],
			},
			maxWidth: {
				page: "72rem",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
} satisfies Config;

export default config;
