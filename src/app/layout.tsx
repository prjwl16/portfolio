import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {twMerge} from "tailwind-merge";
import {Footer} from "@/components/Footer";
import {FloatingDockAceternity} from "@/components/floating-dock";
import React from "react";

const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Prajwal More - Software Engineer",
    description:
        "Prajwal More's personal website",
};

export default function RootLayout({children,}: { children: React.ReactNode; }) {
    return (
        <html lang="en">
        <body
            className={twMerge(
                inter.className,
                "flex antialiased h-screen overflow-hidden bg-gray-100"
            )}
        >
        {/*<Sidebar />*/}
        <div className="p-2 h-screen flex-1">
            <div
                className="flex-1 bg-white lg:rounded-xl border border-transparent lg:border-neutral-200 h-full overflow-hidden">
                {children}
                <Footer/>
            </div>
        </div>
        </body>
        </html>
    );
}
