import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { SkillGroups } from "@/components/site/SkillGroups";
import { education, interests, learning, profile, seeking, socials } from "@/constants/site";

export const metadata: Metadata = {
	title: "About",
	description:
		"About Prajwal More, a backend and AI engineer in Bengaluru. Senior Software Engineer at Dezy, with 4+ years across Dezy, Flipkart, and Cleartrip.",
};

export default function AboutPage() {
	return (
		<Container className="py-12 sm:py-16">
			<PageHeader
				title="About"
				lede="I'm a backend and AI engineer in Bengaluru. I've spent 4+ years at Dezy, Flipkart, and Cleartrip, mostly on AI agents and distributed systems."
			/>

			<div className="space-y-4 text-[1.05rem] leading-relaxed">
				<p>
					Since July 2026 I&apos;ve been a Senior Software Engineer at Dezy, a dental healthtech company, and I own engineering for the core operations
					platform. Until June 2026 I was an SDE-1 at Flipkart, on checkout. Before that, from February 2023, I was an SDE-1 at Cleartrip, on Cleartrip
					for Work.
				</p>
				<p>I&apos;m looking for {seeking.join(", ")} roles.</p>
				<p>Most of my time goes to {interests.join(", ").toLowerCase()}.</p>
			</div>

			<h2 className="mt-14 text-xl font-semibold tracking-tight">Skills</h2>
			<SkillGroups />
			<p className="mt-4 text-soft">
				<span className="font-medium text-ink">Learning. </span>
				{learning.join(" and ")}.
			</p>

			<h2 className="mt-14 text-xl font-semibold tracking-tight">Education</h2>
			<p className="mt-3 text-soft">
				{education.degree}, {education.school}
				<span className="text-muted"> · {education.cgpa} CGPA</span>
			</p>

			<h2 className="mt-14 text-xl font-semibold tracking-tight">Elsewhere</h2>
			<ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
				{socials.map((item) => (
					<li key={item.href}>
						<a className="link" href={item.href} target="_blank" rel="noopener noreferrer">
							{item.label}
							<span className="sr-only"> (opens in a new tab)</span>
						</a>
					</li>
				))}
				<li>
					<a className="link" href={profile.resumeHref} target="_blank" rel="noopener noreferrer">
						Resume
						<span className="sr-only"> (opens in a new tab)</span>
					</a>
				</li>
			</ul>
		</Container>
	);
}
