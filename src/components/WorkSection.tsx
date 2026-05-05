"use client";
import React from "react";
import { motion } from "framer-motion";
import { timeline } from "@/constants/timeline";
import { wobbly } from "@/lib/wobbly";

const cardTilts = [-1.5, 1];

export const WorkSection = () => {
	return (
		<section className="relative px-6 md:px-10 max-w-5xl mx-auto py-24">
			{/* Section header */}
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="mb-16"
			>
				<span
					className="inline-block bg-postit border-2 border-ink px-3 py-1 font-hand text-sm md:text-base -rotate-2 shadow-sketch-sm mb-4"
					style={{ borderRadius: wobbly.sm }}
				>
					where i&apos;ve been
				</span>
				<h2 className="font-heading text-ink text-5xl md:text-6xl leading-tight">
					Work <span className="marker-highlight-accent">history</span>
				</h2>
			</motion.div>

			{/* Timeline */}
			<div className="relative space-y-14 md:space-y-20">
				{/* Sketchy vertical line behind cards (desktop only) */}
				<svg
					aria-hidden
					className="hidden md:block absolute left-[12.5%] top-4 bottom-4 text-ink/40 -translate-x-1/2"
					width="6"
					height="100%"
					preserveAspectRatio="none"
					viewBox="0 0 6 100"
				>
					<path
						d="M3 0 Q 0 25, 3 50 T 3 100"
						stroke="currentColor"
						strokeWidth="2"
						strokeDasharray="4 6"
						fill="none"
					/>
				</svg>

				{timeline.map((item, index) => {
					const tilt = cardTilts[index % cardTilts.length];
					const isPostit = index % 2 === 0;
					return (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1, duration: 0.6 }}
							viewport={{ once: true }}
							className="relative grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 items-start"
						>
							{/* Date pill */}
							<div className="md:col-span-1">
								<div
									className="inline-flex items-center gap-2 bg-paper border-[3px] border-ink shadow-sketch-sm px-3 py-1.5 font-hand text-base md:text-lg text-ink"
									style={{ borderRadius: wobbly.sm, transform: `rotate(${tilt}deg)` }}
								>
									<span className="w-2 h-2 rounded-full bg-accent" />
									{item.date}
								</div>
							</div>

							{/* Card */}
							<motion.div
								whileHover={{ rotate: tilt * 1.5, y: -3 }}
								transition={{ duration: 0.15 }}
								className={`md:col-span-3 relative border-[3px] border-ink shadow-sketch p-6 md:p-7 ${
									isPostit ? "bg-postit" : "bg-paper"
								}`}
								style={{
									borderRadius: wobbly.md,
									transform: `rotate(${tilt * 0.6}deg)`,
								}}
							>
								{/* Tack */}
								<span
									aria-hidden
									className="absolute -top-3 left-8 w-5 h-5 rounded-full bg-ballpoint border-2 border-ink shadow-sketch-sm"
								/>

								<div className="space-y-4">
									<div className="flex items-baseline justify-between gap-4 flex-wrap">
										<h3 className="font-heading text-2xl md:text-3xl text-ink leading-tight">
											{item.company}
										</h3>
									</div>
									<div className="font-hand text-lg md:text-xl text-ink/80">
										{item.title}
									</div>

									{/* Dashed divider */}
									<div className="border-t-2 border-dashed border-ink/30 my-2" />

									<ul className="space-y-3">
										{item.responsibilities.map((r, i) => (
											<li
												key={i}
												className="flex gap-3 font-hand text-base md:text-lg text-ink/75 leading-relaxed"
											>
												<span aria-hidden className="shrink-0 text-accent font-heading text-xl leading-none mt-0.5">
													✓
												</span>
												<span>{r}</span>
											</li>
										))}
									</ul>
								</div>
							</motion.div>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
};
