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
			<PageHeader title="Notes" lede="Nothing is published yet." />

			<p className="text-[1.05rem] leading-relaxed text-soft">
				When I write, it will be about {interests.join(", ").toLowerCase()}, and about learning {learning.join(" and ")}. Until then, the record is the{" "}
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
