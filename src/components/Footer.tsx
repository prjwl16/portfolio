"use client";
import React, { useState, useEffect } from "react";
import { wobbly } from "@/lib/wobbly";

const links = [
	{ label: "LinkedIn", href: "https://linkedin.com/in/moreprajwal" },
	{ label: "GitHub", href: "https://github.com/prjwl16" },
	{ label: "Email", href: "mailto:hello@prajwal.dev" },
];

export const Footer = () => {
	const [year, setYear] = useState(2024);

	useEffect(() => {
		setYear(new Date().getFullYear());
	}, []);

	return (
		<footer className="relative px-6 md:px-10 max-w-5xl mx-auto pt-16 pb-12">
			{/* Sketchy dashed top border */}
			<div className="border-t-2 border-dashed border-ink/40 mb-10" />

			<div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
				<div className="space-y-4">
					<div
						className="inline-block bg-postit border-2 border-ink px-3 py-1 font-hand text-sm md:text-base -rotate-2 shadow-sketch-sm"
						style={{ borderRadius: wobbly.sm }}
					>
						say hi...
					</div>
					<h3 className="font-heading text-ink text-3xl md:text-4xl leading-tight max-w-md">
						let&apos;s build something <span className="marker-highlight">together</span>.
					</h3>
				</div>

				<ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
					{links.map((l, i) => (
						<li key={l.label}>
							<a
								href={l.href}
								target="_blank"
								rel="noopener noreferrer"
								className="font-hand text-lg text-ink wavy-underline hover:text-accent transition-colors duration-150 inline-block"
								style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
							>
								{l.label}
							</a>
						</li>
					))}
				</ul>
			</div>

			<div className="mt-10 flex items-center justify-between font-hand text-sm text-ink/50">
				<span>© {year} Prajwal More · drawn with care</span>
				<span aria-hidden className="text-base">✎</span>
			</div>
		</footer>
	);
};
