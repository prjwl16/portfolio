import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { ProjectList } from "@/components/site/ProjectList";

export const metadata: Metadata = {
	title: "Projects",
	description: "Projects by Prajwal More, including Dezy Assist, Dear Patient, Clusta.shop, and Sub2x.",
};

export default function ProjectsPage() {
	return (
		<Container className="py-12 sm:py-16">
			<PageHeader title="Projects" lede="Dezy Assist and Dear Patient, plus Clusta.shop and Sub2x." />
			<ProjectList detailed />
		</Container>
	);
}
