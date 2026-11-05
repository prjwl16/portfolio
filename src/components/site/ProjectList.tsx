import { projects } from "@/constants/projects";

export function ProjectList({ detailed = false }: { detailed?: boolean }) {
	return (
		<ol>
			{projects.map((project) => (
				<li key={project.slug} className="border-b border-line py-5">
					<h3 className="font-medium">
						<a href={project.href} target="_blank" rel="noopener noreferrer" className="link">
							{project.title}
							<span aria-hidden> ↗</span>
							<span className="sr-only"> (opens in a new tab)</span>
						</a>
					</h3>
					{project.note ? <p className="mt-1 text-sm text-soft">{project.note}</p> : null}
					<p className="mt-2 text-soft">{project.description}</p>
					{detailed && typeof project.content === "string" ? <p className="mt-2 text-soft">{project.content}</p> : null}
					{project.stack && project.stack.length > 0 ? (
						<p className="mt-2 text-sm text-muted">{project.stack.join(" · ")}</p>
					) : null}
				</li>
			))}
		</ol>
	);
}
