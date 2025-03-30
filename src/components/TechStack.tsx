import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Java",
      src: "/images/logos/java.png",

      className: "h-10 w-14",
    },
    {
      title: "Java",
      src: "/images/logos/vertx.png",

      className: "h-10 w-10",
    },
    {
      title: "React.js",
      src: "/images/logos/react.png",

      className: "h-10 w-14",
    },
    {
      title: "Javascript",
      src: "/images/logos/js.png",

      className: "h-10 w-14",
    },
    {
      title: "Kafka",
      src: "/images/logos/kafka.png",

      className: "h-10 w-24",
    },
    {
      title: "Next.js",
      src: "/images/logos/next.png",

      className: "h-10 w-14",
    },
    {
      title: "AWS",
      src: "/images/logos/aws.webp",

      className: "h-10 w-10",
    },
    {
      title: "Node",
      src: "/images/logos/node.png",

      className: "h-10 w-12",
    },
    {
      title: "postgreSQL",
      src: "/images/logos/psql.png",

      className: "h-10 w-12",
    },
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",

      className: "h-10 w-24",
    }
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
