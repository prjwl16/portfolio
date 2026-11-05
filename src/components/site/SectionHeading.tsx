import Link from "next/link";

export function SectionHeading({
	id,
	index,
	title,
	href,
	action,
}: {
	id: string;
	index: string;
	title: string;
	href?: string;
	action?: string;
}) {
	return (
		<div className="mb-2 flex items-baseline justify-between gap-4">
			<h2 id={id} className="font-serif text-[1.7rem] tracking-tight sm:text-[2rem]">
				<span className="mr-3 align-[0.25em] font-mono text-[0.75rem] font-normal tracking-[0.16em] text-muted">{index}</span>
				{title}
			</h2>
			{href && action ? (
				<Link href={href} className="link shrink-0 font-mono text-[0.8125rem]">
					{action}
				</Link>
			) : null}
		</div>
	);
}
