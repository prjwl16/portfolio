import {Product} from "@/types/products";

export const projects: Product[] = [
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
        thumbnail: "https://images.unsplash.com/photo-1582582425171-966bdf0b017b?w=800&h=600&fit=crop&crop=center",
        images: ["https://images.unsplash.com/photo-1582582425171-966bdf0b017b?w=800&h=600&fit=crop&crop=center"],
        href: "https://furni-track.vercel.app/",
        slug: "furnitrack-erp",
        stack: ["React", "TypeScript", "NodeJS", "Tailwind CSS", "Prisma"],
        content: "Built for small to mid-sized furniture businesses, this ERP system streamlines operations by offering modules for order management, inventory tracking, customer records, and delivery statuses. It's fast, mobile-friendly, and customizable for offline workflows."
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
    }
];
