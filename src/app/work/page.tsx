import {Heading} from "@/components/Heading";
import {Paragraph} from "@/components/Paragraph";
import {Highlight} from "@/components/Highlight";
import {WorkHistory} from "@/components/WorkHistory";
import {Container} from "@/components/Container";

export default function Work() {
    return (
        <Container>
            <span className="text-4xl">💼</span>
            <Heading className="font-black">Work History</Heading>
            <Paragraph className="max-w-xl mt-4">
                I&apos;m a full-stack developer that loves{" "}
                <Highlight>building products</Highlight> and web apps that can impact
                millions of lives
            </Paragraph>
            <WorkHistory/>
        </Container>
    )
}