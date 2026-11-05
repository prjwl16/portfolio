export const profile = {
	name: "Prajwal More",
	role: "Software engineer",
	location: "Bengaluru",
	email: "prajumore76@gmail.com",
	url: "https://prajwal.wtf",
	resumeHref:
		"https://drive.google.com/file/d/1aWmywIm8Pi2TJhQhEATOgUCyh9V622NE/view?usp=drive_link",
	description:
		"Prajwal More is a backend and AI engineer in Bengaluru. Senior Software Engineer at Dezy, with 4+ years across Dezy, Flipkart, and Cleartrip.",
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

export const seeking = ["Senior Backend", "AI/LLM Engineer", "AI Infra"] as const;

export const education = {
	degree: "BCA",
	school: "Pune University",
	cgpa: "7.8",
} as const;

export const skillGroups = [
	{ label: "Languages", items: ["Java", "TypeScript", "JavaScript"] },
	{ label: "Backend", items: ["Node.js", "NestJS", "Express", "Vert.x", "Microservices", "REST", "RPC"] },
	{ label: "AI", items: ["AI agents", "Text-to-SQL", "Prompt evals", "LangGraph", "LangChain", "LangSmith", "RAG", "Tool calling"] },
	{ label: "Data", items: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis", "ClickHouse", "MySQL", "CDC"] },
	{ label: "Infra", items: ["AWS CDK", "ECS Fargate", "EC2", "RDS", "ElastiCache", "Docker", "CI/CD", "Sentry"] },
] as const;

export const interests = [
	"Distributed systems",
	"Databases",
	"Infrastructure",
	"AI systems",
] as const;

export const themeInitScript = `(function(){try{var s=localStorage.getItem("theme");var d=s==="dark"||(s!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);var r=document.documentElement;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light";}catch(e){}})();`;
