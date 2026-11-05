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
		<Container className="py-12 sm:py-16">
			<PageHeader
				title="Notes"
				lede="Short write-ups will live here — systems, databases, infrastructure, and the languages I'm learning. Nothing is published yet."
			/>

			<h2 className="text-xl font-semibold tracking-tight">On my mind</h2>
			<p className="mt-3 text-soft">Not posts. Just the subjects I keep coming back to, until the notes exist.</p>
			<ul className="mt-6 divide-y divide-line border-y border-line">
				{interests.map((item) => (
					<li key={item} className="py-3">
						{item}
					</li>
				))}
				<li className="py-3">Learning {learning.join(" and ")}</li>
			</ul>
			<p className="mt-8 text-soft">
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
		</Container>
	);
}
