import Link from "next/link";
import { Container } from "@/components/site/Container";
import { ProjectList } from "@/components/site/ProjectList";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WorkList } from "@/components/site/WorkList";
import { interests, learning, profile, socials, stack } from "@/constants/site";

export default function Home() {
	return (
		<Container className="pb-8 pt-12 sm:pt-16 md:pt-20">
			<p className="kicker">Software engineer · {profile.location}</p>
			<h1 className="display mt-5 text-ink">
				<span>Prajwal</span>
				<span>More</span>
			</h1>
			<p className="measure mt-6 text-xl leading-snug text-soft sm:text-2xl">
				Senior Software Engineer at Dezy. Supervising engineer at Dhyay. Based in {profile.location}.
			</p>

			<div className="mt-14 grid gap-12 border-t border-line pt-10 md:mt-16 md:grid-cols-12 md:gap-10">
				<div className="essay measure text-[1.075rem] md:col-span-7">
					<p>
						I like software that feels <em>thoughtful</em> — the kind that&apos;s clean, fast, and doesn&apos;t make users suffer. I&apos;m into systems,
						structure, and the little design choices most people ignore.
					</p>
					<p>
						Until June 2026 I was an SDE-1 at Flipkart, on Cleartrip, building a travel platform for millions of users. Before that I was a full-stack
						developer at Trips For Business. About five years in, still learning every day.
					</p>
					<p>
						I like clean systems and small, careful ideas. On weekends I tinker with side projects. Most never leave my laptop, but a couple do —{" "}
						<em>Dear Patient</em>, a WhatsApp-first AI healthcare assistant, is the one I keep coming back to.
					</p>
					<p className="text-muted">Runs on chai and a bit of curiosity.</p>
					<p>
						<Link href="/about" className="link">
							More about me
						</Link>
					</p>
				</div>

				<aside className="md:col-span-5 md:border-l md:border-line md:pl-8" aria-label="Focus and tools">
					<p className="kicker">Focus</p>
					<ul className="mt-3 space-y-1.5">
						{interests.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>

					<p className="kicker mt-8">Learning</p>
					<p className="mt-3">{learning.join(" and ")}</p>

					<p className="kicker mt-8">Stack</p>
					<p className="mt-3 font-mono text-[0.8125rem] leading-relaxed text-soft">{stack.join(" · ")}</p>
				</aside>
			</div>

			<section aria-labelledby="work-heading" className="mt-16 scroll-mt-24 sm:mt-24">
				<SectionHeading id="work-heading" index="02" title="Work" href="/work" action="Full history" />
				<div className="mt-6">
					<WorkList limit={3} />
				</div>
			</section>

			<section aria-labelledby="projects-heading" className="mt-16 scroll-mt-24 sm:mt-24">
				<SectionHeading id="projects-heading" index="03" title="Projects" href="/projects" action="More detail" />
				<div className="mt-6">
					<ProjectList />
				</div>
			</section>

			<section aria-labelledby="notes-heading" className="mt-16 scroll-mt-24 border-t border-line pt-8 sm:mt-24">
				<SectionHeading id="notes-heading" index="04" title="Notes" href="/notes" action="Open" />
				<p className="measure mt-4 text-soft">
					Short write-ups on systems, databases, and whatever I&apos;m learning. Nothing is published here yet.
				</p>
			</section>

			<section aria-labelledby="contact-heading" className="mt-16 scroll-mt-24 border-t border-line pt-8 sm:mt-24">
				<SectionHeading id="contact-heading" index="05" title="Contact" href="/contact" action="Write" />
				<p className="measure mt-4 text-soft">Happy to chat about side projects, developer tools, or whatever you&apos;re working on.</p>
				<p className="mt-5">
					<a className="link font-serif text-3xl italic tracking-tight sm:text-4xl" href={`mailto:${profile.email}`}>
						{profile.email}
					</a>
				</p>
				<ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
					{socials.map((item) => (
						<li key={item.href}>
							<a className="link" href={item.href} target="_blank" rel="noopener noreferrer">
								{item.label}
								<span className="sr-only"> (opens in a new tab)</span>
							</a>
						</li>
					))}
				</ul>
			</section>
		</Container>
	);
}
