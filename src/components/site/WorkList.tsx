import { timeline } from "@/constants/timeline";

export function WorkList({ detailed = false, limit }: { detailed?: boolean; limit?: number }) {
	const items = typeof limit === "number" ? timeline.slice(0, limit) : timeline;

	return (
		<ol>
			{items.map((item) => (
				<li key={`${item.company}-${item.date}`} className="border-b border-line py-5">
					<div className="flex items-baseline justify-between gap-6">
						<h3 className="font-medium">{item.company}</h3>
						<p className="shrink-0 text-sm text-muted">
							{item.dateTime ? <time dateTime={item.dateTime}>{item.date}</time> : item.date}
						</p>
					</div>
					<p className="mt-0.5 text-sm text-muted">{item.title}</p>
					{item.description ? <p className="mt-2 text-soft">{item.description}</p> : null}
					{detailed && item.responsibilities.length > 0 ? (
						<ul className="mt-3 space-y-2 text-soft">
							{item.responsibilities.map((responsibility) => (
								<li key={responsibility} className="pl-4 -indent-4">
									<span aria-hidden>— </span>
									{responsibility}
								</li>
							))}
						</ul>
					) : null}
					{detailed && item.stack && item.stack.length > 0 ? (
						<p className="mt-3 text-sm text-muted">{item.stack.join(" · ")}</p>
					) : null}
				</li>
			))}
		</ol>
	);
}
