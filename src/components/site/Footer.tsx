import { profile, socials } from "@/constants/site";

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="mt-auto border-t border-line">
			<div className="mx-auto flex max-w-page flex-col gap-4 px-6 py-10 text-sm text-muted">
				<p>
					<a className="link text-ink" href={`mailto:${profile.email}`}>
						{profile.email}
					</a>
					<span aria-hidden> · </span>
					<a className="link" href={profile.resumeHref} target="_blank" rel="noopener noreferrer">
						Resume
						<span className="sr-only"> (opens in a new tab)</span>
					</a>
				</p>
				<ul className="flex flex-wrap gap-x-4 gap-y-2">
					{socials.map((item) => (
						<li key={item.href}>
							<a className="link" href={item.href} target="_blank" rel="noopener noreferrer">
								{item.label}
								<span className="sr-only"> (opens in a new tab)</span>
							</a>
						</li>
					))}
				</ul>
				<p>
					© {year} {profile.name} · {profile.location}
				</p>
			</div>
		</footer>
	);
}
