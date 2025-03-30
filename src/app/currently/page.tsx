import {Container} from "@/components/Container";
import {Heading} from "@/components/Heading";
import {Products} from "@/components/Products";

export default function Currently() {
    return (
        <Container>
            <span className="text-4xl">⚡</span>
            <Heading className="font-black mb-6">
                {" "}
                What I&apos;ve been working on
            </Heading>
            <Products />
        </Container>
    );
}