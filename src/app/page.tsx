import Image from "next/image";
import Link from "next/link";
import portrait from "@/images/prajwal.webp";
import { Container } from "@/components/site/Container";
import { ProjectList } from "@/components/site/ProjectList";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WorkList } from "@/components/site/WorkList";
import { profile, socials } from "@/constants/site";

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
					I&apos;m a backend and AI engineer. I&apos;ve spent 4+ years at Dezy, Flipkart, and Cleartrip, mostly on AI agents and distributed systems. At
					Dezy I own engineering for the core operations platform. Before that I worked on checkout at Flipkart and on Cleartrip for Work.
				</p>
				<p>
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

			<section aria-labelledby="notes-heading" className="mt-16 scroll-mt-20">
				<SectionHeading id="notes-heading" title="Notes" href="/notes" action="Notes" />
				<p className="mt-3 text-soft">Nothing is published here yet.</p>
			</section>

			<section aria-labelledby="contact-heading" className="mt-16 scroll-mt-20">
				<SectionHeading id="contact-heading" title="Contact" href="/contact" action="Contact" />
				<p className="mt-3 text-soft">Email is the best way to reach me.</p>
				<p className="mt-4">
					<a className="link" href={`mailto:${profile.email}`}>
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
