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
		<Container className="py-12 sm:py-16 md:py-20">
			<PageHeader
				index="05 — Contact"
				title="Contact"
				lede="Happy to chat about side projects, developer tools, or whatever you're working on."
			/>

			<div className="grid gap-12 md:grid-cols-[11.5rem_minmax(0,1fr)] md:gap-8">
				<div className="hidden md:block" />
				<div>
					<h2 className="kicker">Email</h2>
					<p className="mt-3">
						<a className="link font-serif text-3xl italic tracking-tight sm:text-5xl" href={`mailto:${profile.email}`}>
							{profile.email}
						</a>
					</p>

					<h2 className="kicker mt-12">Resume</h2>
					<p className="mt-3">
						<a className="link" href={profile.resumeHref} target="_blank" rel="noopener noreferrer">
							View resume
							<span className="sr-only"> (opens in a new tab)</span>
						</a>
					</p>

					<h2 className="kicker mt-12">Elsewhere</h2>
					<ul className="mt-4 border-t border-line">
						{socials.map((item) => (
							<li key={item.href} className="border-b border-line">
								<a
									className="flex items-baseline justify-between gap-4 py-4 text-lg hover:text-accent"
									href={item.href}
									target="_blank"
									rel="noopener noreferrer"
								>
									<span>{item.label}</span>
									<span aria-hidden className="font-mono text-[0.8125rem] text-muted">
										↗
									</span>
									<span className="sr-only"> (opens in a new tab)</span>
								</a>
							</li>
						))}
					</ul>

					<p className="mt-10 text-soft">{profile.location}</p>
				</div>
			</div>
		</Container>
	);
}
