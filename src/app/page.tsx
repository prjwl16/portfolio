import Image from "next/image";
import Link from "next/link";
import portrait from "@/images/prajwal.webp";
import { Container } from "@/components/site/Container";
import { ProjectList } from "@/components/site/ProjectList";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WorkList } from "@/components/site/WorkList";
import { SkillGroups } from "@/components/site/SkillGroups";
import { learning, profile, seeking, socials } from "@/constants/site";

export default function Home() {
	return (
		<Container className="pb-8 pt-12 sm:pt-16">
			<div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
				<Image
					src={portrait}
					alt="Prajwal More"
					priority
					width={192}
					height={192}
					sizes="(min-width: 640px) 192px, 160px"
					className="h-40 w-40 shrink-0 rounded-full border border-line object-cover sm:h-48 sm:w-48"
				/>
				<div>
					<h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{profile.name}</h1>
					<p className="mt-2 text-lg text-soft">Backend and AI engineer in {profile.location}</p>
					<p className="mt-1 text-muted">Senior Software Engineer at Dezy</p>
				</div>
			</div>

			<div className="mt-10 space-y-4 text-[1.05rem] leading-relaxed">
				<p>
					I&apos;m a backend and AI engineer with 4+ years across Dezy, Flipkart, and Cleartrip. I work on AI agents and distributed systems. At Dezy I
					own engineering for the core operations platform, after checkout at Flipkart and Cleartrip for Work.
				</p>
				<p className="text-muted">I like software that feels thoughtful. Runs on chai and a bit of curiosity.</p>
				<p>
					Open to {seeking.join(", ")} roles.{" "}
					<Link href="/about" className="link">
						More about me
					</Link>
				</p>
			</div>

			<section aria-labelledby="work-heading" className="mt-16 scroll-mt-20">
				<SectionHeading id="work-heading" title="Work" href="/work" action="All work" />
				<WorkList limit={3} />
			</section>

			<section aria-labelledby="projects-heading" className="mt-16 scroll-mt-20">
				<SectionHeading id="projects-heading" title="Projects" href="/projects" action="All projects" />
				<ProjectList />
			</section>

			<section aria-labelledby="skills-heading" className="mt-16 scroll-mt-20">
				<SectionHeading id="skills-heading" title="Skills" href="/about" action="About" />
				<SkillGroups />
				<p className="mt-4 text-soft">
					<span className="font-medium text-ink">Learning. </span>
					{learning.join(" and ")}.
				</p>
			</section>

			<section aria-labelledby="notes-heading" className="mt-16 scroll-mt-20">
				<SectionHeading id="notes-heading" title="Notes" href="/notes" action="Notes" />
				<p className="mt-3 text-soft">Short write-ups on systems, databases, and whatever I&apos;m learning. Nothing is published here yet.</p>
			</section>

			<section aria-labelledby="contact-heading" className="mt-16 scroll-mt-20">
				<SectionHeading id="contact-heading" title="Contact" href="/contact" action="Contact" />
				<p className="mt-3 text-soft">Happy to chat about side projects, developer tools, or whatever you&apos;re working on.</p>
				<p className="mt-4">
					<a className="link text-lg" href={`mailto:${profile.email}`}>
						{profile.email}
					</a>
				</p>
				<ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
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
