import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { ProjectList } from "@/components/site/ProjectList";

export const metadata: Metadata = {
	title: "Projects",
	description: "Side projects by Prajwal More, including Dear Patient, Clusta.shop, and Sub2x.",
};

export default function ProjectsPage() {
	return (
		<Container className="py-12 sm:py-16 md:py-20">
			<PageHeader index="03 — Projects" title="Projects" lede="Little corners of the internet I'm proud of." />
			<ProjectList detailed />
		</Container>
	);
}
