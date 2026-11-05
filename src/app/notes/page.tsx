import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { interests, learning } from "@/constants/site";

export const metadata: Metadata = {
	title: "Notes",
	description: "Notes by Prajwal More. Short write-ups on systems, databases, infrastructure, and AI systems. Nothing published yet.",
};

export default function NotesPage() {
	return (
		<Container className="py-12 sm:py-16 md:py-20">
			<PageHeader
				index="04 — Notes"
				title="Notes"
				lede="Short write-ups will live here — systems, databases, infrastructure, and the languages I'm learning. Nothing is published yet."
			/>

			<div className="grid gap-12 md:grid-cols-[11.5rem_minmax(0,1fr)] md:gap-8">
				<div className="hidden md:block" />
				<div>
					<h2 className="font-serif text-3xl tracking-tight">On my mind</h2>
					<p className="measure mt-4 text-soft">Not posts. Just the subjects I keep coming back to, until the notes exist.</p>
					<ol className="mt-6 border-t border-line">
						{interests.map((item, index) => (
							<li key={item} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-b border-line py-4">
								<span className="font-mono text-[0.8125rem] text-muted">{String(index + 1).padStart(2, "0")}</span>
								<span>{item}</span>
							</li>
						))}
						<li className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-b border-line py-4">
							<span className="font-mono text-[0.8125rem] text-muted">05</span>
							<span>Learning {learning.join(" and ")}</span>
						</li>
					</ol>
					<p className="measure mt-8 text-soft">
						Until then, the record is the{" "}
						<Link href="/work" className="link">
							work
						</Link>{" "}
						and the{" "}
						<Link href="/projects" className="link">
							projects
						</Link>
						.
					</p>
				</div>
			</div>
		</Container>
	);
}
