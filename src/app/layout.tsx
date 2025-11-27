import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import React from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Prajwal More - Software Engineer",
	description: "Prajwal More's personal website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={twMerge(inter.className, "flex antialiased overflow-hidden")}>
				<Analytics />
				<SpeedInsights />
				{/*<Sidebar />*/}
				<div className="flex-1 overflow-y-auto">
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
