"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-10 mb-20">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className="">
          I like software that feels thoughtful — the kind that’s clean, fast, and doesn’t make users suffer.
          I&#39;m into systems, structure, and the little design choices most people ignore.
          Currently figuring out how to get better at all of it, one bug fix and brain dump at a time.
        </Paragraph>
        <Paragraph className="mt-4">
          I talk work/life/code on{" "}
          <a
            href="https://linkedin.com/in/moreprajwal"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline text-[#0A66C2]" // LinkedIn blue
          >
            LinkedIn
          </a>
          , ship whatever compiles on{" "}
          <a
            href="https://github.com/prjwl16"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline text-black" // GitHub dark/light
          >
            GitHub
          </a>
          , and occasionally drop half-baked thoughts on{" "}
          <a
            href="https://x.com/prjwl_16"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline text-[#1DA1F2] dark:text-[#1DA1F2]" // Twitter/X blue
          >
            X
          </a>
          — all in a day’s scroll.
        </Paragraph>


      </div>

    </div>
  );
}
