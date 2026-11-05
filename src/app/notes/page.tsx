import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { learning, ogImage } from "@/constants/site";

export const metadata: Metadata = {
	title: "Notes",
	description: "Notes by Prajwal More. Nothing is published yet.",
	alternates: { canonical: "/notes" },
	openGraph: { url: "/notes", images: [ogImage] },
};

export default function NotesPage() {
	return (
		<Container className="py-16 sm:py-20">
			<PageHeader title="Notes" lede="Nothing is published yet." />

			<p className="text-soft">
				When I write, it will be about distributed systems, databases, infrastructure, and AI systems, and about learning {learning.join(" and ")}. Until
				then, the record is the{" "}
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
