import { projects } from "@/constants/projects";

export function ProjectList({ detailed = false }: { detailed?: boolean }) {
	return (
		<ol>
			{projects.map((project) => (
				<li key={project.slug} className="border-b border-line py-5">
					<h3 className="font-medium">
						{project.href ? (
							<a href={project.href} target="_blank" rel="noopener noreferrer" className="link">
								{project.title}
								<span aria-hidden> ↗</span>
								<span className="sr-only"> (opens in a new tab)</span>
							</a>
						) : (
							project.title
						)}
					</h3>
					{project.note ? <p className="mt-1 text-sm text-soft">{project.note}</p> : null}
					<p className="mt-2 text-soft">{project.description}</p>
					{detailed && project.highlights && project.highlights.length > 0 ? (
						<ul className="mt-3 space-y-2 text-soft">
							{project.highlights.map((highlight) => (
								<li key={highlight} className="pl-4 -indent-4">
									<span aria-hidden>— </span>
									{highlight}
								</li>
							))}
						</ul>
					) : null}
					{detailed && typeof project.content === "string" ? <p className="mt-2 text-soft">{project.content}</p> : null}
					{project.stack && project.stack.length > 0 ? (
						<ul className="mt-3 flex flex-wrap gap-2" aria-label={`${project.title} stack`}>
							{project.stack.map((tag) => (
								<li key={tag} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
									{tag}
								</li>
							))}
						</ul>
					) : null}
				</li>
			))}
		</ol>
	);
}
