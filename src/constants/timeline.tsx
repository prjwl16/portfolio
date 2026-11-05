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
		description: "I own engineering end to end for the core operations platform: roadmap, architecture, AWS infrastructure, standards, CI/CD, and delivery.",
		responsibilities: [
			"Replaced Retool, serverless APIs, and Heimdall with NestJS, React 19, and PostgreSQL on AWS (CDK, ECS Fargate, RDS, ElastiCache). Zero-downtime migration, 1,400+ pull requests.",
			"Moved data with CDC from MongoDB and DynamoDB to Postgres, including backfills of hundreds of thousands of records and a single write-back path.",
			"Shipped modules for patients, leads and sales, appointments, treatment plans, payments and refunds (Cashgram), WhatsApp support, tickets, and ERP (purchase orders and warehousing).",
			"Built Dezy Assist, a text-to-SQL agent that keeps patient data hidden, with versioned prompts and evals, Sentry tracing, and daily WhatsApp follow-ups.",
			"Integrated Exotel, Gallabox, Meta WhatsApp, Meta and Google Ads attribution, and NPS.",
			"Added role, module, and clinic access control, and approval routing.",
			"Set engineering standards: test-first delivery, staging-to-production CI/CD, an EC2 test runner, and review gates for AI coding agents.",
		],
		stack: ["NestJS", "TypeScript", "React 19", "PostgreSQL", "MongoDB", "DynamoDB", "AWS CDK", "ECS Fargate", "RDS", "ElastiCache", "Sentry"],
	},
	{
		company: "Flipkart (checkout)",
		title: "SDE-1",
		date: "Jun 2025 — Jun 2026",
		dateTime: "2025-06",
		description: "Checkout services.",
		responsibilities: [
			"Cut checkout API latency from 487 ms to 64 ms.",
			"Cut p99 event-loop latency from 20 ms to 2.5 ms.",
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
			"Led integrations with Zoho People, PeopleStrong, and Darwinbox.",
			"Automated enterprise onboarding.",
			"Built a reusable HRMS sync framework.",
			"Shipped high-throughput REST and RPC services in Java and Vert.x.",
		],
		stack: ["Java", "Vert.x", "Redis", "MySQL", "RPC", "Message queues"],
	},
];
