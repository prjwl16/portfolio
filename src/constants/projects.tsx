import { Product } from "@/types/products";

export const projects: Product[] = [
    {
        title: "Dear Patient",
        description:
            "A heartfelt digital companion for healthcare providers to write, manage, and send empathetic letters or updates to patients with ease and warmth.",
        thumbnail:
            "https://images.unsplash.com/photo-1580281657521-6a42b0a6b2c3?w=800&h=600&fit=crop&crop=center",
        images: [
            "https://images.unsplash.com/photo-1580281657521-6a42b0a6b2c3?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1580281657442-bf07f82d4a2f?w=800&h=600&fit=crop&crop=center",
        ],
        href: "https://dearpatient.in/",
        slug: "dear-patient",
        stack: ["Next.js", "OpenAI", "Google Gemini", "Shadcn/UI", "PostgreSQL", "Node.js"],
        content:
            "Dear Patient bridges the gap between doctors and patients by making communication more personal and comforting. Whether it's a recovery note or a health reminder, the app focuses on empathy, simplicity, and trust—because care shouldn't feel automated.",
        showLinkPreview: true,
    },

    // ⚡ New project 2
    {
        title: "Sub2x",
        description:
            "A sleek, growth-driven SaaS platform that helps creators and startups double their subscription conversions through smart onboarding, retention tools, and analytics.",
        thumbnail:
            "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop&crop=center",
        images: [
            "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1556767576-cfba2d4b6b00?w=800&h=600&fit=crop&crop=center",
        ],
        href: "https://sub2x.in/",
        slug: "sub2x",
        stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "PostgreSQL"],
        content:
            "Sub2x helps digital entrepreneurs and SaaS founders grow faster by tracking user behavior, optimizing pricing models, and automating retention strategies. It's designed with a modern dashboard and powerful insights—perfect for anyone chasing that next growth milestone.",
        showLinkPreview: true,
    },

    // 🛍️ New project 3
    {
        title: "Clusta.shop",
        description:
            "A community-driven eCommerce platform where small brands and indie creators come together to sell unique, high-quality products in one elegant space.",
        thumbnail:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop&crop=center",
        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1561715276-a2d4bcb9c16e?w=800&h=600&fit=crop&crop=center",
        ],
        href: "https://clusta.shop/",
        slug: "clusta-shop",
        stack: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS", "Stripe"],
        content:
            "Clusta.shop is built around community and curation. Instead of endless scrolling, shoppers discover collections handpicked by independent sellers. It's a blend of modern design, smooth UX, and the heart of small business—crafted to make online shopping feel human again.",
        showLinkPreview: true,
    },
    {
        title: "CalmLog – Emotional Journal",
        description: "A private emotional journaling app designed to help users track their mood, reflect on thoughts, and gain insights over time through clean, minimalist UI.",
        thumbnail: "https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?w=800&h=600&fit=crop&crop=center",
        images: ["https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?w=800&h=600&fit=crop&crop=center"],
        href: "https://calmlog.vercel.app/",
        slug: "calmlog-journal",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
        content: "CalmLog provides a distraction-free space to record and revisit daily emotional experiences. Users can tag their entries, track mood trends, and visualize emotional shifts over time. Built with privacy in mind, it supports user authentication and secure Supabase backend."
    },
    {
        title: "The Traitors Game",
        description: "An AI-enhanced multiplayer social deduction game inspired by 'The Traitors', designed for remote friend groups with live chat, whisper mechanics, and betrayal-driven gameplay.",
        thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&crop=center",
        images: ["https://images.unsplash.com/photo-1553531384-cc64ac601b79?w=800&h=600&fit=crop&crop=center"],
        href: "https://the-traitors.vercel.app/",
        slug: "traitors-game",
        stack: ["Next.js", "TypeScript", "Node.js", "Supabase", "OpenAI"],
        content: "Players are assigned secret roles like 'Traitor' or 'Faithful' and must survive by deduction and deception. Features include AI-generated missions, whisper chats, real-time voting, and admin tools for game hosting. Designed for high engagement and drama among remote teams or friends."
    },
    {
        title: "SharePrompts",
        description: "A beautifully simple platform to share and discover ChatGPT prompts with preview support, making it easier to learn and showcase AI use cases.",
        thumbnail: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop&crop=center",
        images: ["https://images.unsplash.com/photo-1557989034-0c5e6bff9e15?w=800&h=600&fit=crop&crop=center"],
        href: "https://share-prompts-brown.vercel.app/",
        slug: "shareprompts",
        stack: ["Next.js", "Tailwind CSS", "TypeScript", "Supabase", "OpenAI"],
        content: "Built as a playground for prompt engineering, this app allows users to upload and share their best ChatGPT prompts with beautiful formatting and metadata. It supports real-time previews, prompt categorization, and user authentication powered by Supabase Auth."
    },
    {
        title: "FurniTrack ERP",
        description: "A lightweight ERP solution tailored for furniture businesses to manage inventory, orders, and production workflows efficiently from a single dashboard.",
        thumbnail: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&h=600&fit=crop&crop=center",
        images: ["https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&h=600&fit=crop&crop=center"],
        href: "https://furni-track.vercel.app/",
        slug: "furnitrack-erp",
        stack: ["React", "TypeScript", "NodeJS", "Tailwind CSS", "Prisma"],
        content: "Built for small to mid-sized furniture businesses, this ERP system streamlines operations by offering modules for order management, inventory tracking, customer records, and delivery statuses. It's fast, mobile-friendly, and customizable for offline workflows."
    },
];
