export const profile = {
	name: "Prajwal More",
	role: "Software engineer",
	location: "Bengaluru",
	email: "hello@prajwal.dev",
	url: "https://prajwal.wtf",
	resumeHref:
		"https://drive.google.com/file/d/1aWmywIm8Pi2TJhQhEATOgUCyh9V622NE/view?usp=drive_link",
	description:
		"Prajwal More is a software engineer in Bengaluru. Senior Software Engineer at Dezy, and formerly an SDE-1 at Flipkart and at Cleartrip.",
};

export const nav = [
	{ href: "/about", label: "About", index: "01" },
	{ href: "/work", label: "Work", index: "02" },
	{ href: "/projects", label: "Projects", index: "03" },
	{ href: "/notes", label: "Notes", index: "04" },
	{ href: "/contact", label: "Contact", index: "05" },
] as const;

export const socials = [
	{ label: "LinkedIn", href: "https://www.linkedin.com/in/moreprajwal/" },
	{ label: "GitHub", href: "https://github.com/prjwl16" },
	{ label: "X", href: "https://x.com/prjwl_16" },
	{ label: "Instagram", href: "https://www.instagram.com/prajwal._.16/" },
	{ label: "LeetCode", href: "https://leetcode.com/u/prjwl16/" },
] as const;

export const stack = [
	"Java",
	"JavaScript",
	"TypeScript",
	"Node.js",
	"NestJS",
	"React",
	"Next.js",
	"PostgreSQL",
	"Redis",
	"Prisma",
	"Drizzle",
	"Kafka",
	"Vert.x",
	"AWS",
	"Vercel",
	"Tailwind",
] as const;

export const learning = ["Go", "Rust"] as const;

export const interests = [
	"Distributed systems",
	"Databases",
	"Infrastructure",
	"AI systems",
] as const;

export const themeInitScript = `(function(){try{var s=localStorage.getItem("theme");var d=s==="dark"||(s!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);var r=document.documentElement;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light";}catch(e){}})();`;
