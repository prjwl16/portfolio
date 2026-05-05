"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, MapPin, Coffee, Sparkles, Zap } from "lucide-react";
import { wobbly } from "@/lib/wobbly";

const socials = [
	{ label: "LinkedIn", href: "https://linkedin.com/in/moreprajwal" },
	{ label: "GitHub", href: "https://github.com/prjwl16" },
	{ label: "X", href: "https://x.com/prjwl_16" },
	{ label: "Instagram", href: "https://www.instagram.com/prajwal._.16/" },
];

const facts = [
	{ Icon: MapPin, text: "based in India · working at Flipkart" },
	{ Icon: Zap, text: "3+ years shipping web products that scale" },
	{ Icon: Sparkles, text: "ts, next.js, node — anything that ships fast" },
	{ Icon: Coffee, text: "runs on chai, side projects & cliffhanger commits" },
];

export const BioSection = () => {
	return (
		<section className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 max-w-5xl mx-auto py-24">
			{/* Sticky-note role tag — pinned to the corner like a post-it */}
			<motion.div
				initial={{ opacity: 0, rotate: -12, y: -20 }}
				animate={{ opacity: 1, rotate: -6, y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
				className="absolute top-10 right-6 md:right-10 bg-postit border-[3px] border-ink shadow-sketch px-4 py-2 z-10"
				style={{ borderRadius: wobbly.sm }}
			>
				<span className="font-hand text-ink text-base md:text-lg">
					hi, i&apos;m building stuff
				</span>
			</motion.div>

			<div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
				{/* Left: name, bio, ctas */}
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="lg:col-span-3 space-y-9"
				>
					{/* Section label — looks like a torn paper tag */}
					<div className="flex items-center gap-3">
						<span
							className="inline-block bg-muted border-2 border-ink px-3 py-1 font-hand text-sm md:text-base -rotate-2"
							style={{ borderRadius: wobbly.sm }}
						>
							software engineer
						</span>
						<span className="hidden sm:inline-block w-12 border-t-2 border-dashed border-ink/50" />
					</div>

					{/* Name — single word, big and confident with a wiggling exclamation */}
					<h1 className="font-heading text-ink leading-[0.9] tracking-tight text-6xl sm:text-7xl md:text-8xl flex items-end gap-2 md:gap-4 flex-wrap">
						<span className="-rotate-1 inline-block">Prajwal</span>
						<motion.span
							aria-hidden
							initial={{ rotate: -10 }}
							animate={{ rotate: [12, -8, 12] }}
							transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
							className="inline-block text-accent"
						>
							!
						</motion.span>
					</h1>

					{/* Bio */}
					<p className="font-hand text-ink/80 text-xl md:text-2xl max-w-2xl leading-relaxed">
						full-stack engineer building at{" "}
						<span className="marker-highlight">Flipkart</span> — i obsess over
						scalable systems, clean code, and shipping stuff that actually works.
						when i&apos;m not at my day job, i&apos;m hacking on side projects
						that hopefully help a few humans out there.
					</p>

					{/* CTAs */}
					<div className="relative flex flex-wrap gap-5 items-center pt-2">
						<a
							href="#projects"
							className="group relative inline-flex items-center gap-2 bg-paper border-[3px] border-ink shadow-sketch px-6 md:px-8 h-12 md:h-14 font-hand text-lg md:text-2xl text-ink transition-all duration-100 hover:bg-accent hover:text-paper hover:shadow-sketch-sm hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
							style={{ borderRadius: wobbly.pill }}
						>
							View Work
							<ArrowRight strokeWidth={3} className="w-5 h-5 transition-transform group-hover:translate-x-1" />
						</a>
						<a
							href="https://drive.google.com/file/d/1aWmywIm8Pi2TJhQhEATOgUCyh9V622NE/view?usp=drive_link"
							target="_blank"
							rel="noopener noreferrer"
							className="group inline-flex items-center gap-2 bg-muted border-[3px] border-ink shadow-sketch px-6 md:px-8 h-12 md:h-14 font-hand text-lg md:text-2xl text-ink transition-all duration-100 hover:bg-ballpoint hover:text-paper hover:shadow-sketch-sm hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
							style={{ borderRadius: wobbly.pill }}
						>
							<FileText strokeWidth={2.5} className="w-5 h-5" />
							Resume
						</a>

						{/* Hand-drawn arrow pointing to View Work — desktop only */}
						<svg
							aria-hidden
							className="hidden md:block absolute -top-16 left-32 text-ink"
							width="120"
							height="80"
							viewBox="0 0 120 80"
							fill="none"
						>
							<path
								d="M5 5 Q 40 10, 60 30 T 95 65"
								stroke="currentColor"
								strokeWidth="2.5"
								strokeLinecap="round"
								strokeDasharray="6 6"
								fill="none"
							/>
							<path
								d="M85 60 L 95 65 L 90 75"
								stroke="currentColor"
								strokeWidth="2.5"
								strokeLinecap="round"
								strokeLinejoin="round"
								fill="none"
							/>
							<text
								x="0"
								y="0"
								className="font-heading"
								fontSize="14"
								fill="currentColor"
								transform="translate(-2 -2) rotate(-8)"
							>
								start here
							</text>
						</svg>
					</div>

					{/* Socials — wavy underlined links */}
					<div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4">
						<span className="font-hand text-ink/60 text-base">find me on</span>
						{socials.map((s, i) => (
							<a
								key={s.label}
								href={s.href}
								target="_blank"
								rel="noopener noreferrer"
								className="font-hand text-lg md:text-xl text-ink wavy-underline hover:text-accent hover:wavy-underline-accent transition-colors duration-150"
								style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
							>
								{s.label}
							</a>
						))}
					</div>
				</motion.div>

				{/* Right: about-me sticky note + bouncing badge */}
				<motion.aside
					initial={{ opacity: 0, y: 24, rotate: 0 }}
					animate={{ opacity: 1, y: 0, rotate: 1.5 }}
					transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
					className="lg:col-span-2 relative"
				>
					{/* Tape strip */}
					<span
						aria-hidden
						className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-ink/15 border border-ink/30 rotate-[-4deg] z-10"
					/>

					<div
						className="relative bg-paper border-[3px] border-ink shadow-sketch-lg p-6 md:p-7"
						style={{ borderRadius: wobbly.md }}
					>
						<h2 className="font-heading text-ink text-2xl md:text-3xl mb-1">
							a few things
						</h2>
						<p className="font-hand text-ink/60 text-sm md:text-base mb-5">
							about me &mdash;
						</p>

						<ul className="space-y-3.5">
							{facts.map(({ Icon, text }, i) => (
								<li key={i} className="flex items-start gap-3 font-hand text-ink/80 text-base md:text-lg leading-snug">
									<span
										className="shrink-0 mt-0.5 w-7 h-7 flex items-center justify-center bg-postit border-2 border-ink"
										style={{
											borderRadius: wobbly.sm,
											transform: `rotate(${i % 2 === 0 ? -3 : 3}deg)`,
										}}
									>
										<Icon strokeWidth={2.5} className="w-4 h-4 text-ink" />
									</span>
									<span>{text}</span>
								</li>
							))}
						</ul>

						<div className="border-t-2 border-dashed border-ink/30 my-5" />

						<p className="font-hand text-ink/70 text-base md:text-lg leading-relaxed">
							always up for a chat about{" "}
							<span className="marker-highlight">side projects</span>,
							developer tools, or what i&apos;m breaking this week.
						</p>
					</div>

					{/* Bouncing "ship it!" badge nestled into the corner */}
					<motion.div
						aria-hidden
						className="hidden lg:block absolute -bottom-12 -right-8 animate-sketch-bounce"
					>
						<div
							className="w-24 h-24 bg-accent border-[3px] border-ink shadow-sketch flex items-center justify-center text-paper font-heading text-xl text-center leading-tight px-2"
							style={{ borderRadius: wobbly.lg }}
						>
							ship
							<br />
							it!
						</div>
					</motion.div>
				</motion.aside>
			</div>
		</section>
	);
};
