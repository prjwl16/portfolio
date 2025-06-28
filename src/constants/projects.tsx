import { Product } from "@/types/products";

export const projects: Product[] = [
  {
    title: "TravelSync Platform",
    description: "A comprehensive travel booking platform that revolutionizes how people plan and book their journeys, featuring AI-powered recommendations and seamless payment integration.",
    thumbnail: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop&crop=center",
    images: ["https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop&crop=center"],
    href: "https://github.com/prjwl16",
    slug: "travelsync-platform",
    stack: ["Next.js", "TypeScript", "Prisma", "Stripe", "OpenAI"],
    content: "Built with scalability in mind, this platform handles thousands of concurrent users with real-time booking updates, intelligent price tracking, and personalized travel recommendations powered by machine learning algorithms."
  },
  {
    title: "DevFlow Analytics",
    description: "An intelligent developer productivity dashboard that tracks coding patterns, identifies bottlenecks, and provides actionable insights to improve team performance.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center"],
    href: "https://github.com/prjwl16",
    slug: "devflow-analytics",
    stack: ["React", "D3.js", "Node.js", "PostgreSQL", "Docker"],
    content: "Features advanced data visualization, real-time collaboration metrics, and integration with popular development tools like GitHub, Jira, and Slack. The platform uses sophisticated algorithms to analyze code quality and team dynamics."
  },
  {
    title: "EcoTrack Sustainability",
    description: "A mobile-first application that helps individuals and organizations track their carbon footprint and implement sustainable practices through gamification.",
    thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&crop=center",
    images: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&crop=center"],
    href: "https://github.com/prjwl16",
    slug: "ecotrack-sustainability",
    stack: ["React Native", "Firebase", "TensorFlow", "GraphQL"],
    content: "Incorporates IoT device integration, machine learning for pattern recognition, and social features that create communities around sustainability goals. The app has helped users reduce their carbon footprint by an average of 23%."
  },
  {
    title: "NeuroLink Communication",
    description: "An innovative real-time communication platform designed for distributed teams, featuring AI-powered meeting summaries and intelligent scheduling.",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&crop=center",
    images: ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&crop=center"],
    href: "https://github.com/prjwl16",
    slug: "neurolink-communication",
    stack: ["Vue.js", "WebRTC", "Socket.io", "Redis", "AWS"],
    content: "Features end-to-end encryption, real-time language translation, and advanced noise cancellation. The platform supports up to 1000 participants in a single session and includes innovative features like emotion detection and engagement analytics."
  }
];
