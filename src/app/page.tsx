import {Container} from "@/components/Container";
import {Heading} from "@/components/Heading";
import {Highlight} from "@/components/Highlight";
import {Paragraph} from "@/components/Paragraph";
import {TechStack} from "@/components/TechStack";
import About from "@/components/About";

export default function Home() {
    return (
        <Container>
            <span className="text-4xl">👋</span>
            <Heading className="font-black">Hello there! I&apos;m Prajwal</Heading>
            <Paragraph className="max-w-xl mt-4">
                I&apos;m a Software Engineer who loves{" "}
                <Highlight>building products</Highlight> and web apps that can impact
                millions of lives
            </Paragraph>
            <Paragraph className="max-w-xl mt-4 mb-20">
                I have{" "}
                <Highlight> 3 years of experience</Highlight> building scalable web apps
                that are performance optimized and good looking.
            </Paragraph>
            {/*<div className={""}>*/}
            {/*    <span className="text-4xl">💬</span>*/}
            {/*    <Heading as="h2" className="font-black">About Me</Heading>*/}
            {/*</div>*/}
            <About/>
            <TechStack/>
        </Container>
    );
}
