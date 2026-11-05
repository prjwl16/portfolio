import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { profile, socials } from "@/constants/site";

export const metadata: Metadata = {
	title: "Contact",
	description: `Contact Prajwal More by email at ${profile.email}. LinkedIn, GitHub, X, Instagram, and LeetCode.`,
};

export default function ContactPage() {
	return (
		<Container className="py-12 sm:py-16">
			<PageHeader title="Contact" lede="Happy to chat about side projects, developer tools, or whatever you're working on." />

			<h2 className="text-sm font-medium text-muted">Email</h2>
			<p className="mt-2">
				<a className="link text-2xl font-medium tracking-tight" href={`mailto:${profile.email}`}>
					{profile.email}
				</a>
			</p>

			<h2 className="mt-10 text-sm font-medium text-muted">Resume</h2>
			<p className="mt-2">
				<a className="link" href={profile.resumeHref} target="_blank" rel="noopener noreferrer">
					View resume
					<span className="sr-only"> (opens in a new tab)</span>
				</a>
			</p>

			<h2 className="mt-10 text-sm font-medium text-muted">Elsewhere</h2>
			<ul className="mt-2 divide-y divide-line border-y border-line">
				{socials.map((item) => (
					<li key={item.href}>
						<a
							className="flex items-center justify-between py-3 hover:text-soft"
							href={item.href}
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>{item.label}</span>
							<span aria-hidden className="text-muted">
								↗
							</span>
							<span className="sr-only"> (opens in a new tab)</span>
						</a>
					</li>
				))}
			</ul>

			<p className="mt-8 text-muted">{profile.location}</p>
		</Container>
	);
}
