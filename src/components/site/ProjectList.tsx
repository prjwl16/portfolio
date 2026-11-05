import { projects } from "@/constants/projects";

export function ProjectList({ detailed = false }: { detailed?: boolean }) {
	return (
		<ol className="border-t border-line">
			{projects.map((project, index) => (
				<li
					key={project.slug}
					className="grid gap-2 border-b border-line py-7 md:grid-cols-[11.5rem_minmax(0,1fr)] md:gap-8 md:py-8"
				>
					<p className="font-mono text-[0.8125rem] tabular-nums text-muted md:pt-2">
						{String(index + 1).padStart(2, "0")}
					</p>
					<div>
						<h3 className="font-serif text-[1.7rem] tracking-tight">
							<a href={project.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-baseline gap-2">
								<span className="underline decoration-transparent underline-offset-[5px] group-hover:text-accent group-hover:decoration-accent">
									{project.title}
								</span>
								<span aria-hidden className="text-base text-muted group-hover:text-accent">
									↗
								</span>
								<span className="sr-only"> (opens in a new tab)</span>
							</a>
						</h3>
						{project.note ? <p className="mt-2 font-mono text-[0.8125rem] text-accent">{project.note}</p> : null}
						<p className="measure mt-3 text-soft">{project.description}</p>
						{detailed && typeof project.content === "string" ? <p className="measure mt-3">{project.content}</p> : null}
						{project.stack && project.stack.length > 0 ? (
							<p className="mt-4 font-mono text-[0.8125rem] leading-relaxed text-muted">{project.stack.join(" · ")}</p>
						) : null}
					</div>
				</li>
			))}
		</ol>
	);
}
