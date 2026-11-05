import { Product } from "@/types/products";

export const projects: Product[] = [
	{
		title: "Dear Patient",
		description: "A WhatsApp-first AI nurse for clinics.",
		thumbnail: "https://images.unsplash.com/photo-1580281657521-6a42b0a6b2c3?w=800&h=600&fit=crop&crop=center",
		images: [
			"https://images.unsplash.com/photo-1580281657521-6a42b0a6b2c3?w=800&h=600&fit=crop&crop=center",
			"https://images.unsplash.com/photo-1580281657442-bf07f82d4a2f?w=800&h=600&fit=crop&crop=center",
		],
		href: "https://dearpatient.in/",
		slug: "dear-patient",
		note: "WhatsApp-first AI nurse",
		stack: ["LangGraph", "AWS", "Docker"],
		content:
			"It extracts prescriptions and documents, and uses LangGraph agents with tool calling and patient context. The clinic backend is multi-tenant, running in production on AWS EC2 and Docker.",
		showLinkPreview: true,
	},
	{
		title: "Clusta.shop",
		description:
			"A community-driven eCommerce platform where small brands and indie creators come together to sell unique, high-quality products in one elegant space.",
		thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop&crop=center",
		images: [
			"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop&crop=center",
			"https://images.unsplash.com/photo-1561715276-a2d4bcb9c16e?w=800&h=600&fit=crop&crop=center",
		],
		href: "https://clusta.shop/",
		slug: "clusta-shop",
		stack: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS", "Stripe"],
		content:
			"Clusta.shop is built around community and curation. Instead of endless scrolling, shoppers discover collections handpicked by independent sellers. It's a blend of modern design, smooth UX, and the heart of small business... crafted to make online shopping feel human again.",
		showLinkPreview: true,
	},

	// ⚡ New project 2
	{
		title: "Sub2x",
		description:
			"A sleek, growth-driven SaaS platform that helps creators and startups double their subscription conversions through smart onboarding, retention tools, and analytics.",
		thumbnail: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop&crop=center",
		images: [
			"https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop&crop=center",
			"https://images.unsplash.com/photo-1556767576-cfba2d4b6b00?w=800&h=600&fit=crop&crop=center",
		],
		href: "https://sub2x.in/",
		slug: "sub2x",
		stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "PostgreSQL"],
		content:
			"Sub2x helps digital entrepreneurs and SaaS founders grow faster by tracking user behavior, optimizing pricing models, and automating retention strategies. It's designed with a modern dashboard and powerful insights... perfect for anyone chasing that next growth milestone.",
		showLinkPreview: true,
	},
];
