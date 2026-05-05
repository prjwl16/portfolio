import "./globals.css";
import type { Metadata } from "next";
import { Kalam, Patrick_Hand } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import React from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const kalam = Kalam({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-kalam",
	display: "swap",
});

const patrick = Patrick_Hand({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-patrick",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Prajwal More — Software Engineer",
	description: "Prajwal More is a software engineer at Flipkart building scalable products.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={twMerge(kalam.variable, patrick.variable)}>
			<body className="antialiased bg-paper text-ink font-hand">
				<Analytics />
				<SpeedInsights />
				{children}
				<Footer />
			</body>
		</html>
	);
}
