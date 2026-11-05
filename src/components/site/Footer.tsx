import { profile, socials } from "@/constants/site";

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="mt-auto border-t border-line">
			<div className="mx-auto grid max-w-page gap-8 px-5 py-10 sm:px-8 sm:py-12 md:grid-cols-[1.4fr_1fr] md:items-end">
				<div>
					<p className="kicker">Contact</p>
					<p className="mt-3">
						<a className="link font-serif text-xl italic tracking-tight sm:text-2xl" href={`mailto:${profile.email}`}>
							{profile.email}
						</a>
					</p>
					<p className="mt-3 text-soft">
						{profile.location}
						<span aria-hidden> · </span>
						<a className="link" href={profile.resumeHref} target="_blank" rel="noopener noreferrer">
							Resume
							<span className="sr-only"> (opens in a new tab)</span>
						</a>
					</p>
				</div>
				<ul className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
					{socials.map((item) => (
						<li key={item.href}>
							<a className="link" href={item.href} target="_blank" rel="noopener noreferrer">
								{item.label}
								<span className="sr-only"> (opens in a new tab)</span>
							</a>
						</li>
					))}
				</ul>
				<p className="font-mono text-[0.8125rem] leading-relaxed text-muted md:col-span-2">
					© {year} {profile.name}. Set in Fraunces, Newsreader, and IBM Plex Mono.
				</p>
			</div>
		</footer>
	);
}
