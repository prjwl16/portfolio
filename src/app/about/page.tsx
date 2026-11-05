import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { interests, learning, profile, socials, stack } from "@/constants/site";

export const metadata: Metadata = {
	title: "About",
	description:
		"About Prajwal More, a software engineer in Bengaluru. Senior Software Engineer at Dezy, supervising engineer at Dhyay, previously SDE-1 at Flipkart on Cleartrip.",
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
					I&apos;m a software engineer with about five years of experience, based in {profile.location}. Since July 2026 I&apos;ve been a Senior Software
					Engineer at Dezy, a dental healthtech company. I&apos;m also a supervising engineer at Dhyay, an astrology platform.
				</p>
				<p>
					Until June 2026 I was a Software Development Engineer - I at Flipkart, on Cleartrip, building a travel platform for millions of users. Before
					that I was a full-stack developer at Trips For Business, building a platform for business travel.
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

			<h2 className="mt-14 text-xl font-semibold tracking-tight">Stack</h2>
			<p className="mt-3 text-soft">
				Day to day: {stack.join(", ")}. Learning {learning.join(" and ")}.
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
