import type { Metadata } from "next";
import Link from "next/link";
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
				lede="I like software that feels thoughtful — the kind that's clean, fast, and doesn't make users suffer. I'm into systems, structure, and the little design choices most people ignore. Currently figuring out how to get better at all of it, one bug fix and brain dump at a time."
			/>

			<div className="space-y-4 text-[1.05rem] leading-relaxed">
				<p>
					I&apos;m a backend and AI engineer with 4+ years across Dezy, Flipkart, and Cleartrip, based in {profile.location}. I work on AI agents and
					distributed systems.
				</p>
				<p>
					Since July 2026 I&apos;ve been a Senior Software Engineer at Dezy, a dental healthtech company, and I own engineering for the core operations
					platform. Until June 2026 I was an SDE-1 at Flipkart, on checkout. Before that, from February 2023, I was an SDE-1 at Cleartrip, on Cleartrip
					for Work.
				</p>
				<p>
					I like clean systems and small, careful ideas. On weekends I tinker with side projects. Most never leave my laptop, but a couple do. Runs on
					chai and a bit of curiosity.
				</p>
				<p>
					I talk work, life, and code on{" "}
					<a className="link" href="https://www.linkedin.com/in/moreprajwal/" target="_blank" rel="noopener noreferrer">
						LinkedIn
						<span className="sr-only"> (opens in a new tab)</span>
					</a>
					, ship on{" "}
					<a className="link" href="https://github.com/prjwl16" target="_blank" rel="noopener noreferrer">
						GitHub
						<span className="sr-only"> (opens in a new tab)</span>
					</a>
					, and occasionally drop half-baked thoughts on{" "}
					<a className="link" href="https://x.com/prjwl_16" target="_blank" rel="noopener noreferrer">
						X
						<span className="sr-only"> (opens in a new tab)</span>
					</a>
					.
				</p>
			</div>

			<h2 className="mt-14 text-xl font-semibold tracking-tight">Open to</h2>
			<ul className="mt-3 space-y-2 text-soft">
				{seeking.map((role) => (
					<li key={role}>{role}</li>
				))}
			</ul>

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

			<h2 className="mt-14 text-xl font-semibold tracking-tight">Interests</h2>
			<ul className="mt-3 space-y-2 text-soft">
				{interests.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>

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
			<p className="mt-8">
				<Link href="/contact" className="link">
					Say hello
				</Link>
			</p>
		</Container>
	);
}
