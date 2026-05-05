"use client";
import React, { useState, useEffect } from "react";

export const Footer = () => {
	const [year, setYear] = useState(2024);

	useEffect(() => {
		setYear(new Date().getFullYear());
	}, []);

	return (
		<footer className="px-6 sm:px-12 md:px-20 lg:px-28 max-w-7xl mx-auto py-8 border-t border-neutral-900">
			<div className="flex items-center justify-between">
				<span className="text-sm font-light text-neutral-600">Prajwal More</span>
				<span className="text-xs text-neutral-700">{year}</span>
			</div>
		</footer>
	);
};
