"use client";
import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/constants/projects";
import Image from "next/image";

export const ProjectsSection = () => {
	return (
		<section id="projects" className="px-6 sm:px-12 md:px-20 lg:px-28 max-w-7xl mx-auto py-24 border-t border-neutral-900">
			{/* Section Header */}
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="mb-16"
			>
				<p className="text-xs font-medium text-neutral-500 tracking-[0.3em] uppercase mb-2">Work</p>
				<h2 className="text-3xl sm:text-4xl font-extralight text-white">Selected Projects</h2>
			</motion.div>

			{/* Projects Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-900">
				{projects.map((project, index) => (
					<motion.a
						key={project.slug}
						href={project.href}
						target="_blank"
						rel="noopener noreferrer"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: index * 0.08, duration: 0.5 }}
						viewport={{ once: true }}
						className="group relative bg-[#0a0a0a] hover:bg-neutral-900 transition-colors duration-300 overflow-hidden"
					>
						{/* Preview */}
						<div className="relative h-52 overflow-hidden bg-neutral-900">
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
									{/* Gradient overlay so it blends into the card */}
									<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none" />
								</div>
							) : (
								<>
									<Image
										src={project.thumbnail}
										alt={project.title}
										fill
										className="object-cover opacity-50 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
								</>
							)}
							<div className="absolute top-4 left-4 text-xs text-neutral-500 font-medium z-10">
								{String(index + 1).padStart(2, "0")}
							</div>
						</div>

						{/* Content */}
						<div className="p-6 space-y-3">
							<div className="flex items-start justify-between gap-4">
								<h3 className="text-white font-medium text-base leading-snug">{project.title}</h3>
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
									className="shrink-0 text-neutral-600 group-hover:text-neutral-400 transition-colors mt-0.5"
								>
									<path d="M7 7h10v10" />
									<path d="M7 17L17 7" />
								</svg>
							</div>
							<p className="text-neutral-500 text-sm leading-relaxed line-clamp-2">{project.description}</p>
							<div className="flex flex-wrap gap-1.5 pt-1">
								{project.stack?.slice(0, 4).map((tech) => (
									<span
										key={tech}
										className="text-xs text-neutral-600 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded-sm"
									>
										{tech}
									</span>
								))}
								{project.stack && project.stack.length > 4 && (
									<span className="text-xs text-neutral-700 px-2 py-0.5">
										+{project.stack.length - 4}
									</span>
								)}
							</div>
						</div>
					</motion.a>
				))}
			</div>
		</section>
	);
};
