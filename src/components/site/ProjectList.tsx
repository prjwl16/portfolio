import { projects } from "@/constants/projects";

export function ProjectList({ detailed = false }: { detailed?: boolean }) {
	return (
		<ol>
			{projects.map((project) => (
				<li key={project.slug} className="border-b border-line py-6">
					<h3 className="font-medium">
						{project.href ? (
							<a href={project.href} target="_blank" rel="noopener noreferrer" className="link">
								{project.title}
								<span className="sr-only"> (opens in a new tab)</span>
							</a>
						) : (
							project.title
						)}
					</h3>
					{project.note ? <p className="mt-1 text-sm text-soft">{project.note}</p> : null}
					<p className="mt-2 text-soft">{project.description}</p>
					{detailed && project.highlights && project.highlights.length > 0 ? (
						<ul className="mt-3 list-disc space-y-2 pl-5 text-soft marker:text-muted">
							{project.highlights.map((highlight) => (
								<li key={highlight}>{highlight}</li>
							))}
						</ul>
					) : null}
					{detailed && typeof project.content === "string" ? <p className="mt-2 text-soft">{project.content}</p> : null}
					{project.stack && project.stack.length > 0 ? (
						<p className="mt-3 text-sm text-muted">Stack: {project.stack.join(", ")}.</p>
					) : null}
				</li>
			))}
		</ol>
	);
}
