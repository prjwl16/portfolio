import { timeline } from "@/constants/timeline";

export function WorkList({ detailed = false, limit }: { detailed?: boolean; limit?: number }) {
	const items = typeof limit === "number" ? timeline.slice(0, limit) : timeline;

	return (
		<ol className="border-t border-line">
			{items.map((item) => (
				<li key={`${item.company}-${item.date}`} className="grid gap-2 border-b border-line py-7 md:grid-cols-[11.5rem_minmax(0,1fr)] md:gap-8 md:py-8">
					<p className="font-mono text-[0.8125rem] tabular-nums text-muted md:pt-2">
						{item.dateTime ? <time dateTime={item.dateTime}>{item.date}</time> : item.date}
					</p>
					<div>
						<h3 className="font-serif text-[1.7rem] tracking-tight">{item.company}</h3>
						<p className="mt-1 text-soft">{item.title}</p>
						{item.description ? <p className="measure mt-3 text-soft">{item.description}</p> : null}
						{detailed && item.responsibilities.length > 0 ? (
							<ul className="measure mt-4 space-y-2.5">
								{item.responsibilities.map((responsibility) => (
									<li key={responsibility} className="grid grid-cols-[0.9rem_minmax(0,1fr)] gap-2 text-soft">
										<span aria-hidden className="text-accent">
											–
										</span>
										<span>{responsibility}</span>
									</li>
								))}
							</ul>
						) : null}
					</div>
				</li>
			))}
		</ol>
	);
}
