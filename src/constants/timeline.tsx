export type Role = {
	company: string;
	title: string;
	date: string;
	dateTime?: string;
	description: string;
	responsibilities: string[];
	stack?: string[];
};

export const timeline: Role[] = [
	{
		company: "Dezy",
		title: "Senior Software Engineer, Platform Migration Lead",
		date: "Jul 2026 — Present",
		dateTime: "2026-07",
		description: "I own engineering for the core operations platform.",
		responsibilities: [
			"Led the zero-downtime rebuild from Retool and serverless APIs to NestJS, React 19, and PostgreSQL on AWS, across 1,400+ pull requests.",
			"Migrated data with CDC from MongoDB and DynamoDB to Postgres, including backfills of hundreds of thousands of records.",
			"Built Dezy Assist, a text-to-SQL agent that keeps patient data protected, with versioned prompts, evals, and tracing.",
			"Integrated Exotel, Gallabox, Meta WhatsApp, and ads attribution, with role and clinic access control.",
			"Set engineering standards: test-first delivery, staging-to-production CI/CD, and review gates for AI coding agents.",
		],
		stack: ["NestJS", "TypeScript", "React 19", "PostgreSQL", "MongoDB", "DynamoDB", "AWS CDK", "ECS Fargate", "RDS", "ElastiCache", "Sentry"],
	},
	{
		company: "Flipkart (checkout)",
		title: "SDE-1",
		date: "Jun 2025 — Jun 2026",
		dateTime: "2025-06",
		description: "Checkout at Flipkart scale.",
		responsibilities: [
			"Cut checkout API latency from 487 ms to 64 ms, and p99 event-loop latency from 20 ms to 2.5 ms.",
			"Worked on checkout services for Big Billion Days.",
			"Fixed a UPI SMS-spoofing vulnerability with device-level verification.",
		],
		stack: ["Java", "Node.js", "Redis", "PostgreSQL", "AWS"],
	},
	{
		company: "Cleartrip (Cleartrip for Work)",
		title: "SDE-1",
		date: "Feb 2023 — Jun 2025",
		dateTime: "2023-02",
		description: "Enterprise onboarding and HRMS integrations.",
		responsibilities: [
			"Led Zoho People, PeopleStrong, and Darwinbox integrations that automated enterprise onboarding.",
			"Built a reusable framework for HRMS sync.",
			"Shipped high-throughput REST and RPC services in Java and Vert.x.",
		],
		stack: ["Java", "Vert.x", "Redis", "MySQL", "RPC", "Message queues"],
	},
];
