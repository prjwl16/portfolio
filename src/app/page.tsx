import { BioSection } from "@/components/BioSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { WorkSection } from "@/components/WorkSection";

export default function Home() {
	return (
		<main className="bg-[#0a0a0a]">
			<BioSection />
			<ProjectsSection />
			<WorkSection />
		</main>
	);
}
