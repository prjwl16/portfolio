"use client";
import React from "react";
import { motion } from "framer-motion";

const socials = [
	{ label: "LinkedIn", href: "https://linkedin.com/in/moreprajwal" },
	{ label: "GitHub", href: "https://github.com/prjwl16" },
	{ label: "X", href: "https://x.com/prjwl_16" },
	{ label: "Instagram", href: "https://www.instagram.com/prajwal._.16/" },
];

export const BioSection = () => {
	return (
		<section className="min-h-screen flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28 max-w-7xl mx-auto">
			<motion.div
				initial={{ opacity: 0, y: 24 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, ease: "easeOut" }}
				className="space-y-10"
			>
				{/* Name & Role */}
				<div className="space-y-4">
					<p className="text-xs font-medium text-neutral-500 tracking-[0.3em] uppercase">
						Software Engineer
					</p>
					<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight text-white tracking-tight leading-none">
						Prajwal More
					</h1>
					<p className="text-base sm:text-lg text-neutral-400 max-w-lg leading-relaxed font-light">
						Building at Flipkart. Full-stack engineer with a focus on scalable systems, clean code, and
						shipping fast.
					</p>
				</div>

				{/* Social Links */}
				<div className="flex items-center gap-8">
					{socials.map((s) => (
						<a
							key={s.label}
							href={s.href}
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm text-neutral-500 hover:text-white transition-colors duration-200"
						>
							{s.label}
						</a>
					))}
				</div>

				{/* CTAs */}
				<div className="flex flex-wrap gap-3">
					<a
						href="#projects"
						className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors duration-200"
					>
						View Work
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M5 12h14" />
							<path d="M13 6l6 6-6 6" />
						</svg>
					</a>
					<a
						href="https://drive.google.com/file/d/1aWmywIm8Pi2TJhQhEATOgUCyh9V622NE/view?usp=drive_link"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center px-6 py-3 border border-neutral-700 text-neutral-300 text-sm font-medium hover:border-neutral-500 hover:text-white transition-colors duration-200"
					>
						Resume
					</a>
				</div>
			</motion.div>
		</section>
	);
};
