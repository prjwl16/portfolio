import { timeline } from "@/constants/timeline";

export function WorkList({ detailed = false, limit }: { detailed?: boolean; limit?: number }) {
	const items = typeof limit === "number" ? timeline.slice(0, limit) : timeline;

	return (
		<ol>
			{items.map((item) => {
				const bullets = detailed ? item.responsibilities : item.preview ?? [];
				return (
					<li key={`${item.company}-${item.date}`} className="border-b border-line py-6">
						<div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
							<h3 className="font-medium">{item.company}</h3>
							<p className="text-sm text-muted">
								{item.dateTime ? <time dateTime={item.dateTime}>{item.date}</time> : item.date}
							</p>
						</div>
						<p className="mt-1 text-sm text-muted">{item.title}</p>
						{item.description ? <p className="mt-3 text-soft">{item.description}</p> : null}
						{bullets.length > 0 ? (
							<ul className="mt-3 list-disc space-y-2 pl-5 text-soft marker:text-muted">
								{bullets.map((responsibility) => (
									<li key={responsibility}>{responsibility}</li>
								))}
							</ul>
						) : null}
						{item.stack && item.stack.length > 0 ? (
							<p className="mt-3 text-sm text-muted">Stack: {item.stack.join(", ")}.</p>
						) : null}
					</li>
				);
			})}
		</ol>
	);
}
