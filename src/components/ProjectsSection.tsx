"use client";
import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/constants/projects";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { wobbly } from "@/lib/wobbly";

// Pre-computed pseudo-random tilts so SSR + client agree.
const tilts = [-2, 1.5, -1, 2, -1.5, 1];
const decorations: Array<"tape" | "tack"> = ["tape", "tack", "tape"];

export const ProjectsSection = () => {
	return (
		<section id="projects" className="relative px-6 md:px-10 max-w-5xl mx-auto py-24">
			{/* Section header */}
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="mb-16 flex items-end justify-between gap-6 flex-wrap"
			>
				<div className="space-y-3">
					<span
						className="inline-block bg-postit border-2 border-ink px-3 py-1 font-hand text-sm md:text-base -rotate-2 shadow-sketch-sm"
						style={{ borderRadius: wobbly.sm }}
					>
						selected work
					</span>
					<h2 className="font-heading text-ink text-5xl md:text-6xl leading-tight">
						Stuff I&apos;ve <span className="marker-highlight">built</span>
					</h2>
				</div>
				<p className="font-hand text-ink/60 text-base md:text-lg max-w-xs">
					little corners of the internet i&apos;m proud of —
				</p>
			</motion.div>

			{/* Cards */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
				{projects.map((project, index) => {
					const tilt = tilts[index % tilts.length];
					const decoration = decorations[index % decorations.length];
					return (
						<motion.a
							key={project.slug}
							href={project.href}
							target="_blank"
							rel="noopener noreferrer"
							initial={{ opacity: 0, y: 24, rotate: 0 }}
							whileInView={{ opacity: 1, y: 0, rotate: tilt }}
							whileHover={{ rotate: tilt * 1.6, y: -4 }}
							transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
							viewport={{ once: true }}
							className="group relative block bg-paper border-[3px] border-ink shadow-sketch hover:shadow-sketch-lg transition-shadow duration-150"
							style={{ borderRadius: wobbly.md }}
						>
							{/* Decoration: tape strip */}
							{decoration === "tape" && (
								<span
									aria-hidden
									className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-ink/15 border border-ink/30 rotate-[-4deg] z-10"
								/>
							)}
							{/* Decoration: thumbtack */}
							{decoration === "tack" && (
								<span
									aria-hidden
									className="absolute -top-3 left-8 w-5 h-5 rounded-full bg-accent border-2 border-ink shadow-sketch-sm z-10"
								/>
							)}

							{/* Index */}
							<span
								className="absolute -top-4 -right-4 w-12 h-12 bg-postit border-[3px] border-ink shadow-sketch-sm flex items-center justify-center font-heading text-lg text-ink rotate-6 z-10"
								style={{ borderRadius: wobbly.sm }}
							>
								{String(index + 1).padStart(2, "0")}
							</span>

							{/* Preview */}
							<div
								className="relative h-56 overflow-hidden border-b-[3px] border-ink bg-muted"
								style={{ borderTopLeftRadius: "28px", borderTopRightRadius: "8px" }}
							>
								{project.showLinkPreview ? (
									<div className="w-full h-full relative">
										<iframe
											src={project.href}
											title={project.title}
											className="absolute top-0 left-0 border-0 pointer-events-none"
											style={{
												width: "200%",
												height: "200%",
												transform: "scale(0.5)",
												transformOrigin: "top left",
											}}
											sandbox="allow-scripts allow-same-origin"
											loading="lazy"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-paper/40 via-transparent to-transparent pointer-events-none" />
									</div>
								) : (
									<>
										<Image
											src={project.thumbnail}
											alt={project.title}
											fill
											className="object-cover transition-transform duration-300 group-hover:scale-105"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-paper/30 via-transparent to-transparent" />
									</>
								)}

								{/* Sketchy corner marks */}
								<svg aria-hidden className="absolute top-2 left-2 text-ink" width="22" height="22" viewBox="0 0 22 22" fill="none">
									<path d="M2 9 L 2 2 L 9 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
								</svg>
								<svg aria-hidden className="absolute bottom-2 right-2 text-ink" width="22" height="22" viewBox="0 0 22 22" fill="none">
									<path d="M20 13 L 20 20 L 13 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
								</svg>
							</div>

							{/* Content */}
							<div className="p-6 md:p-7 space-y-3">
								<div className="flex items-start justify-between gap-3">
									<h3 className="font-heading text-2xl md:text-3xl text-ink leading-tight">
										{project.title}
									</h3>
									<ArrowUpRight
										strokeWidth={3}
										className="shrink-0 mt-1 text-ink transition-transform duration-150 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
									/>
								</div>
								<p className="font-hand text-ink/70 text-base md:text-lg leading-relaxed line-clamp-3">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2 pt-2">
									{project.stack?.slice(0, 4).map((tech, i) => (
										<span
											key={tech}
											className="font-hand text-sm text-ink bg-muted border-2 border-ink px-2.5 py-0.5"
											style={{
												borderRadius: wobbly.sm,
												transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)`,
											}}
										>
											{tech}
										</span>
									))}
									{project.stack && project.stack.length > 4 && (
										<span className="font-hand text-sm text-ink/60 px-2 py-0.5">
											+{project.stack.length - 4} more
										</span>
									)}
								</div>
							</div>
						</motion.a>
					);
				})}
			</div>
		</section>
	);
};
