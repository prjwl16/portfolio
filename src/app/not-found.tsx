import Link from "next/link";
import { Container } from "@/components/site/Container";

export default function NotFound() {
	return (
		<Container className="py-16 sm:py-20">
			<h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">This page isn&apos;t here.</h1>
			<p className="mt-3 text-soft">The link may be old, or the note was never published.</p>
			<p className="mt-6">
				<Link href="/" className="link">
					Back home
				</Link>
			</p>
		</Container>
	);
}
