export function PageHeader({ title, lede }: { title: string; lede?: React.ReactNode }) {
	return (
		<header className="mb-10">
			<h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
			{lede ? <div className="mt-3 max-w-prose text-lg leading-relaxed text-soft">{lede}</div> : null}
		</header>
	);
}
