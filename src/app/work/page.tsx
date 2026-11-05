import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { ogImage } from "@/constants/site";
import { PageHeader } from "@/components/site/PageHeader";
import { WorkList } from "@/components/site/WorkList";

export const metadata: Metadata = {
	title: "Work",
	description:
		"Work history for Prajwal More: Senior Software Engineer at Dezy since July 2026, SDE-1 at Flipkart from June 2025 to June 2026, and SDE-1 at Cleartrip from February 2023 to June 2025.",
	alternates: { canonical: "/work" },
	openGraph: { url: "/work", images: [ogImage] },
};

export default function WorkPage() {
	return (
		<Container className="py-16 sm:py-20">
			<PageHeader
				title="Work"
				lede="Senior Software Engineer at Dezy. Before that, SDE-1 on checkout at Flipkart and on Cleartrip for Work."
			/>
			<WorkList detailed />
		</Container>
	);
}
