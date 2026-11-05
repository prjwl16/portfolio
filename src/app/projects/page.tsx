import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { ogImage } from "@/constants/site";
import { PageHeader } from "@/components/site/PageHeader";
import { ProjectList } from "@/components/site/ProjectList";

export const metadata: Metadata = {
	title: "Projects",
	description: "Projects by Prajwal More, including Dezy Assist, Dear Patient, Clusta.shop, and Sub2x.",
	alternates: { canonical: "/projects" },
	openGraph: { url: "/projects", images: [ogImage] },
};

export default function ProjectsPage() {
	return (
		<Container className="py-16 sm:py-20">
			<PageHeader title="Projects" />
			<ProjectList detailed />
		</Container>
	);
}
