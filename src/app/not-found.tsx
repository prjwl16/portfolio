import Link from "next/link";
import { Container } from "@/components/site/Container";

export default function NotFound() {
	return (
		<Container className="py-20 sm:py-28">
			<p className="kicker">404</p>
			<h1 className="mt-4 font-serif text-4xl tracking-tight sm:text-6xl">This page isn&apos;t here.</h1>
			<p className="mt-5 text-soft">The link may be old, or the note was never published.</p>
			<p className="mt-6">
				<Link href="/" className="link">
					Back home
				</Link>
			</p>
		</Container>
	);
}
