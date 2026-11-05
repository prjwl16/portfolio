"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { nav, profile } from "@/constants/site";
import { cn } from "@/lib/cn";

function preferredDark() {
	try {
		const stored = localStorage.getItem("theme");
		if (stored === "dark") return true;
		if (stored === "light") return false;
		return window.matchMedia("(prefers-color-scheme: dark)").matches;
	} catch {
		return false;
	}
}

function applyTheme(dark: boolean) {
	document.documentElement.classList.toggle("dark", dark);
	document.documentElement.style.colorScheme = dark ? "dark" : "light";
}

function SunIcon() {
	return (
		<svg aria-hidden viewBox="0 0 24 24" className="theme-sun h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5">
			<circle cx="12" cy="12" r="3.25" />
			<path strokeLinecap="round" d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2M6 6l1.4 1.4M16.6 16.6 18 18M18 6l-1.4 1.4M7.4 16.6 6 18" />
		</svg>
	);
}

function MoonIcon() {
	return (
		<svg aria-hidden viewBox="0 0 24 24" className="theme-moon h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5">
			<path strokeLinecap="round" strokeLinejoin="round" d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
		</svg>
	);
}

function MenuIcon() {
	return (
		<svg aria-hidden viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5">
			<path strokeLinecap="round" d="M4 8h16M4 16h16" />
		</svg>
	);
}

function CloseIcon() {
	return (
		<svg aria-hidden viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5">
			<path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
		</svg>
	);
}

export function Header() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const menuId = useId();
	const menuButtonRef = useRef<HTMLButtonElement>(null);
	const firstLinkRef = useRef<HTMLAnchorElement>(null);

	useLayoutEffect(() => {
		applyTheme(preferredDark());
	}, []);

	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	useEffect(() => {
		const main = document.getElementById("content");
		const footer = document.querySelector("footer");
		if (!open) {
			main?.removeAttribute("inert");
			footer?.removeAttribute("inert");
			return;
		}

		main?.setAttribute("inert", "");
		footer?.setAttribute("inert", "");
		firstLinkRef.current?.focus();

		const onKey = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setOpen(false);
				menuButtonRef.current?.focus();
			}
		};
		document.addEventListener("keydown", onKey);
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";

		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = previousOverflow;
			main?.removeAttribute("inert");
			footer?.removeAttribute("inert");
		};
	}, [open]);

	function toggleTheme() {
		const next = !document.documentElement.classList.contains("dark");
		applyTheme(next);
		try {
			localStorage.setItem("theme", next ? "dark" : "light");
		} catch {
			/* storage unavailable */
		}
	}

	return (
		<>
			<header className="sticky top-0 z-40 border-b border-line bg-bg">
				<div className="mx-auto flex h-14 max-w-page items-center justify-between gap-4 px-6">
					<Link href="/" className="text-[0.95rem] font-medium tracking-tight text-ink">
						{profile.name}
					</Link>

					<nav aria-label="Primary" className="hidden md:block">
						<ul className="flex items-center gap-6">
							{nav.map((item) => {
								const active = pathname === item.href;
								return (
									<li key={item.href}>
										<Link
											href={item.href}
											aria-current={active ? "page" : undefined}
											className={cn("text-sm", active ? "font-medium text-ink" : "text-muted hover:text-ink")}
										>
											{item.label}
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>

					<div className="flex items-center">
						<button type="button" className="icon-button" onClick={toggleTheme} aria-label="Toggle color theme">
							<SunIcon />
							<MoonIcon />
						</button>
						<button
							ref={menuButtonRef}
							type="button"
							className="icon-button md:hidden"
							aria-expanded={open}
							aria-controls={menuId}
							aria-label={open ? "Close menu" : "Open menu"}
							onClick={() => setOpen((value) => !value)}
						>
							{open ? <CloseIcon /> : <MenuIcon />}
						</button>
					</div>
				</div>
			</header>

			{open ? (
				<div id={menuId} className="fixed inset-x-0 bottom-0 top-14 z-50 overflow-y-auto bg-bg md:hidden">
					<nav aria-label="Mobile" className="mx-auto max-w-page px-6 py-4">
						<ul>
							{nav.map((item, index) => {
								const active = pathname === item.href;
								return (
									<li key={item.href} className="border-b border-line">
										<Link
											ref={index === 0 ? firstLinkRef : undefined}
											href={item.href}
											aria-current={active ? "page" : undefined}
											className={cn("block py-4 text-lg", active ? "font-medium text-ink" : "text-soft")}
										>
											{item.label}
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>
			) : null}
		</>
	);
}
