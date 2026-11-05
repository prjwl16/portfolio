export function PageHeader({
	index,
	title,
	lede,
}: {
	index: string;
	title: string;
	lede?: React.ReactNode;
}) {
	return (
		<header className="mb-12 grid gap-4 sm:mb-16 md:grid-cols-[11.5rem_minmax(0,1fr)] md:gap-8">
			<p className="kicker md:pt-3">{index}</p>
			<div>
				<h1 className="font-serif text-[2.6rem] leading-[1.02] tracking-tight sm:text-5xl md:text-[3.35rem]">{title}</h1>
				{lede ? <div className="measure mt-5 text-lg leading-relaxed text-soft">{lede}</div> : null}
			</div>
		</header>
	);
}
