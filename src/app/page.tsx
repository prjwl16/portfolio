"use client"
import {Container} from "@/components/Container";
import {Heading} from "@/components/Heading";
import {Highlight} from "@/components/Highlight";
import {Paragraph} from "@/components/Paragraph";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <span className="text-4xl">👋</span>
            <Heading className="font-black mt-2">Hello there! <br/> I&apos;m Prajwal</Heading>
            <Paragraph className="mt-4">
              I&apos;m a Software Engineer at Flipkart who loves{" "}
              <Highlight>building real products</Highlight> the kind that don’t just work,
              but quietly make life easier for people (and don’t break on Fridays).
            </Paragraph>
            <Paragraph className="mt-4">
              Over the past <Highlight>3 years</Highlight>, I’ve worked across startups and product teams,
              learning how to turn vague problems into working software and how to stay calm when nothing deploys as
              planned.
            </Paragraph>
          </div>

          <div className="w-[300px] h-[300px]">
            <Image
              src="/me.png"
              alt="about"
              width={250}
              height={250}
              className="rounded-xl object-contain w-full h-full rotate-3 hover:rotate-0 transition transform duration-200"
            />
          </div>
        </div>
        <Paragraph className="border-l-4 border-muted-foreground pl-4 leading-relaxed mt-8">
          Lately, I’ve been building something of my own an idea that sits at the intersection of tech, habits,
          and care. It&#39;s early, still evolving, but rooted in a real problem that I think deserves a better
          solution. Most of the work happens quietly, in between work hours and long walks, but it’s the kind of
          thing that makes me want to open my laptop even on tired days.
        </Paragraph>

        <div className="mt-8">
          <Paragraph>
            I like software that feels thoughtful the kind that’s clean, fast, and doesn’t make users suffer.
            I&#39;m into systems, structure, and the little design choices most people ignore.
            Currently figuring out how to get better at all of it, one bug fix and brain dump at a time.
          </Paragraph>
          <Paragraph className="mt-4">
            I talk work/life/code on{" "}
            <a
              href="https://linkedin.com/in/moreprajwal"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-medium text-[#0A66C2]"
            >
              LinkedIn
            </a>
            , ship whatever compiles on{" "}
            <a
              href="https://github.com/prjwl16"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-medium text-black "
            >
              GitHub
            </a>
            , and occasionally drop half-baked thoughts on{" "}
            <a
              href="https://x.com/prjwl_16"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-medium text-[#1DA1E9]"
            >
              X
            </a>
            {" "} all in a day’s scroll.
          </Paragraph>
          <Paragraph className="mt-8">
            If you’re curious about my work, here’s my{" "}
            <a
              href="https://drive.google.com/file/d/1aWmywIm8Pi2TJhQhEATOgUCyh9V622NE/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-medium text-[#4B6AFF]"
            >
              resume
            </a>
            .
          </Paragraph>
        </div>

      </div>
    </Container>
  );
}
