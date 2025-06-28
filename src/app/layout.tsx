import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {twMerge} from "tailwind-merge";
import {Footer} from "@/components/Footer";
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
                "flex antialiased h-screen bg-gray-100 overflow-hidden"
            )}
        >
        {/*<Sidebar />*/}
        <div className="p-2 flex-1 overflow-y-auto">
            <div
                className="flex-1 h-full bg-white lg:rounded-xl border border-transparent lg:border-neutral-200 overflow-auto">
                {children}
                <Footer/>
            </div>
        </div>
        </body>
        </html>
    );
}
