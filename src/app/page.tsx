import { BioSection } from "@/components/BioSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { WorkSection } from "@/components/WorkSection";

export default function Home() {
	return (
		<main>
			<BioSection />
			<ProjectsSection />
			<WorkSection />
		</main>
	);
}
