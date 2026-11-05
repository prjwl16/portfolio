import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { WorkList } from "@/components/site/WorkList";

export const metadata: Metadata = {
	title: "Work",
	description:
		"Work history for Prajwal More: Senior Software Engineer at Dezy, formerly SDE-1 at Flipkart on checkout and SDE-1 at Cleartrip for Work.",
};

export default function WorkPage() {
	return (
		<Container className="py-12 sm:py-16">
			<PageHeader
				title="Work"
				lede="Senior Software Engineer at Dezy. Before that, SDE-1 on checkout at Flipkart and on Cleartrip for Work."
			/>
			<WorkList detailed />
		</Container>
	);
}
