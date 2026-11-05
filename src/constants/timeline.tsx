export type Role = {
	company: string;
	title: string;
	date: string;
	dateTime?: string;
	description: string;
	responsibilities: string[];
};

export const timeline: Role[] = [
	{
		company: "Dezy",
		title: "Senior Software Engineer",
		date: "Jul 2026 — Present",
		dateTime: "2026-07",
		description: "Dental healthtech",
		responsibilities: [],
	},
	{
		company: "Cleartrip - Flipkart",
		title: "Software Development Engineer - I",
		date: "2022 — Jun 2026",
		dateTime: "2022",
		description: "Building a travel platform for millions of users",
		responsibilities: [
			"Led integration of HRMS systems (Zoho People, PeopleStrong, Darwinbox, workline), achieving 100% automation of employee onboarding processes for clients",
			"Implemented SAML-based SSO integration, streamlining login processes and reducing login-related support queries by 100",
			"Led the integration of invoicing modules (Tally, Zoho Invoice, Oracle Fusion), achieving 100% automation and saving clients number of hours per month",
			"Worked extensively with in memory databases | Queue Systems | RPC frameworks",
		],
	},
	{
		company: "Trips For Business",
		title: "Full Stack Developer",
		date: "2021 — 2022",
		dateTime: "2021",
		description: "Building a platform for business travel",
		responsibilities: [
			"Developed and maintained web applications using Node.js for the backend and React for the frontend",
			"Improved API performance and security by optimizing database queries and backend logic",
		],
	},
];
