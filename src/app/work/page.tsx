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
				lede="I'm a full-stack developer that loves building products and web apps that can impact millions of lives."
			/>
			<WorkList detailed />
		</Container>
	);
}
