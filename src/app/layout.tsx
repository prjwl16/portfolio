import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { profile, socials, themeInitScript } from "@/constants/site";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-sans",
});

export const metadata: Metadata = {
	metadataBase: new URL(profile.url),
	title: {
		default: `${profile.name} · Software Engineer`,
		template: `%s · ${profile.name}`,
	},
	description: profile.description,
	authors: [{ name: profile.name, url: profile.url }],
	openGraph: {
		title: `${profile.name} · Software Engineer`,
		description: profile.description,
		url: profile.url,
		siteName: profile.name,
		locale: "en_IN",
		type: "website",
	},
	twitter: {
		card: "summary",
		title: `${profile.name} · Software Engineer`,
		description: profile.description,
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
		{ media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
	],
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: profile.name,
	jobTitle: "Senior Software Engineer",
	email: profile.email,
	url: profile.url,
	homeLocation: {
		"@type": "Place",
		name: profile.location,
	},
	worksFor: {
		"@type": "Organization",
		name: "Dezy",
	},
	sameAs: socials.map((item) => item.href),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning className={inter.variable}>
			<body className="flex min-h-dvh flex-col bg-bg font-sans text-ink antialiased">
				<script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
				<a href="#content" className="skip-link">
					Skip to content
				</a>
				<Header />
				<main id="content" tabIndex={-1} className="flex-1 outline-none">
					{children}
				</main>
				<Footer />
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
