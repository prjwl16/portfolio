import { Product } from "@/types/products";

export const projects: Product[] = [
	{
		title: "Dear Patient",
		description:
			"Dear Patient is a WhatsApp-first AI nurse for clinics, at dearpatient.in. It extracts prescriptions and documents, uses LangGraph agents with tool calling and patient context, and runs a multi-tenant clinic backend on AWS EC2 and Docker.",
		thumbnail: "https://images.unsplash.com/photo-1580281657521-6a42b0a6b2c3?w=800&h=600&fit=crop&crop=center",
		images: [
			"https://images.unsplash.com/photo-1580281657521-6a42b0a6b2c3?w=800&h=600&fit=crop&crop=center",
			"https://images.unsplash.com/photo-1580281657442-bf07f82d4a2f?w=800&h=600&fit=crop&crop=center",
		],
		href: "https://dearpatient.in/",
		slug: "dear-patient",
		stack: ["LangGraph", "AWS EC2", "Docker"],
		highlights: [
			"Prescription and document extraction.",
			"LangGraph agents with tool calling and patient context.",
			"Multi-tenant clinic backend.",
			"In production on AWS EC2 and Docker.",
		],
		showLinkPreview: true,
	},
	{
		title: "Clusta.shop",
		description:
			"Clusta.shop is an eCommerce site where small brands and indie creators sell in one place. Shoppers browse collections picked by independent sellers.",
		thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop&crop=center",
		images: [
			"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop&crop=center",
			"https://images.unsplash.com/photo-1561715276-a2d4bcb9c16e?w=800&h=600&fit=crop&crop=center",
		],
		href: "https://clusta.shop/",
		slug: "clusta-shop",
		stack: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS", "Stripe"],
		showLinkPreview: true,
	},

	{
		title: "Sub2x",
		description:
			"Sub2x is a SaaS product for subscription onboarding, retention, and analytics. It tracks user behavior, pricing, and retention.",
		thumbnail: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop&crop=center",
		images: [
			"https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop&crop=center",
			"https://images.unsplash.com/photo-1556767576-cfba2d4b6b00?w=800&h=600&fit=crop&crop=center",
		],
		href: "https://sub2x.in/",
		slug: "sub2x",
		stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "PostgreSQL"],
		showLinkPreview: true,
	},
];
