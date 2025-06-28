"use client";
import React from "react";
import { motion } from "framer-motion";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import Image from "next/image";

interface BioSectionProps {
  onShowProjects: () => void;
}

export const BioSection = ({ onShowProjects }: BioSectionProps) => {
  return (
    <div className="min-h-screen relative">
      {/* Fixed background with floating shapes */}
      <div className="fixed inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-neutral-200/20 to-neutral-300/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            y: [0, -20, 0],
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-r from-neutral-200/15 to-neutral-300/15 rounded-full blur-lg"
        />
      </div>

      {/* Fixed content - no scroll */}
      <div className="relative z-10 h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div>
                <span className="text-4xl mb-4 block">👋</span>
                <Heading className="text-4xl md:text-5xl font-light text-neutral-800 mb-6 tracking-tight">
                  Hello there! <br/> I&apos;m <span className="font-medium">Prajwal</span>
                </Heading>
              </div>
              
              <div className="space-y-6">
                <Paragraph className="text-lg leading-relaxed text-neutral-600">
                  I&apos;m a Software Engineer at Flipkart who loves{" "}
                  <span className="text-neutral-800 font-medium">building real products</span> — the kind that don't just work,
                  but quietly make life easier for people (and don't break on Fridays).
                </Paragraph>
                <Paragraph className="text-lg leading-relaxed text-neutral-600">
                  Over the past <span className="text-neutral-800 font-medium">3 years</span>, I've worked across startups and product teams,
                  learning how to turn vague problems into working software and how to stay calm when nothing deploys as
                  planned.
                </Paragraph>
              </div>

              <div className="border-l-2 border-neutral-300 pl-6">
                <Paragraph className="text-base leading-relaxed text-neutral-600 italic">
                  Lately, I've been building something of my own — an idea that sits at the intersection of tech, habits,
                  and care. It's early, still evolving, but rooted in a real problem that I think deserves a better
                  solution.
                </Paragraph>
              </div>

              <div className="space-y-4">
                <Paragraph className="text-base leading-relaxed text-neutral-600">
                  I like software that feels thoughtful — the kind that's clean, fast, and doesn't make users suffer.
                  I'm into systems, structure, and the little design choices most people ignore.
                </Paragraph>
                
                <Paragraph className="text-base leading-relaxed text-neutral-600">
                  I talk work/life/code on{" "}
                  <a
                    href="https://linkedin.com/in/moreprajwal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-800 hover:text-neutral-600 transition-colors font-medium"
                  >
                    LinkedIn
                  </a>
                  , ship whatever compiles on{" "}
                  <a
                    href="https://github.com/prjwl16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-800 hover:text-neutral-600 transition-colors font-medium"
                  >
                    GitHub
                  </a>
                  , and occasionally drop half-baked thoughts on{" "}
                  <a
                    href="https://x.com/prjwl_16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-800 hover:text-neutral-600 transition-colors font-medium"
                  >
                    X
                  </a>
                  .
                </Paragraph>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <a
                  href="https://drive.google.com/file/d/1aWmywIm8Pi2TJhQhEATOgUCyh9V622NE/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors font-medium"
                >
                  View Resume
                </a>
                
                <motion.button
                  onClick={onShowProjects}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 border border-neutral-300 text-neutral-800 rounded-full hover:bg-neutral-50 transition-colors font-medium"
                >
                  See Projects
                </motion.button>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-neutral-200/30 rounded-2xl blur-2xl transform rotate-3" />
                <Image
                  src="/me.png"
                  alt="Prajwal More"
                  width={400}
                  height={500}
                  className="relative rounded-2xl object-cover w-full h-auto shadow-2xl transform hover:rotate-0 transition-transform duration-500"
                  style={{ aspectRatio: '4/5' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
