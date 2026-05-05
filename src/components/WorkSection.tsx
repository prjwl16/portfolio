"use client";
import React from "react";
import { motion } from "framer-motion";
import { timeline } from "@/constants/timeline";

export const WorkSection = () => {
	return (
		<section className="px-6 sm:px-12 md:px-20 lg:px-28 max-w-7xl mx-auto py-24 border-t border-neutral-900">
			{/* Section Header */}
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="mb-16"
			>
				<p className="text-xs font-medium text-neutral-500 tracking-[0.3em] uppercase mb-2">Experience</p>
				<h2 className="text-3xl sm:text-4xl font-extralight text-white">Work History</h2>
			</motion.div>

			{/* Timeline */}
			<div className="space-y-16">
				{timeline.map((item, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.1, duration: 0.6 }}
						viewport={{ once: true }}
						className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-12"
					>
						{/* Meta */}
						<div className="md:col-span-1 space-y-1">
							<div className="text-white font-medium text-sm">{item.company}</div>
							<div className="text-neutral-600 text-xs">{item.date}</div>
						</div>

						{/* Details */}
						<div className="md:col-span-3 space-y-4">
							<div className="text-neutral-300 font-light">{item.title}</div>
							<ul className="space-y-2">
								{item.responsibilities.map((r, i) => (
									<li key={i} className="flex gap-3 text-neutral-500 text-sm leading-relaxed">
										<span className="shrink-0 text-neutral-700 mt-1.5">—</span>
										{r}
									</li>
								))}
							</ul>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
};
