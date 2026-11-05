import Link from "next/link";

export function SectionHeading({
	id,
	title,
	href,
	action,
}: {
	id: string;
	title: string;
	href?: string;
	action?: string;
}) {
	return (
		<div className="mb-1 flex items-baseline justify-between gap-4">
			<h2 id={id} className="text-xl font-semibold tracking-tight">
				{title}
			</h2>
			{href && action ? (
				<Link href={href} className="link shrink-0 text-sm text-muted">
					{action}
				</Link>
			) : null}
		</div>
	);
}
