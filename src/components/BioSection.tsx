"use client";
import React from "react";
import { motion } from "framer-motion";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import Image from "next/image";
import { VerticalImageCarousel } from "./VerticalImageCarousel";

interface BioSectionProps {
  onShowProjects: () => void;
}

export const BioSection = ({ onShowProjects }: BioSectionProps) => {
  return (
    <div className="relative">
      {/* Background with vertical image carousel */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 border-black">
        {/* Vertical Image Carousel */}
        <VerticalImageCarousel />

        {/* Subtle floating shapes for depth */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-32 left-20 w-24 h-24 bg-gradient-to-r from-neutral-200/10 to-neutral-300/10 rounded-full blur-xl"
        />

        {/* Elegant overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 md:px-8 py-8">
        <div className="max-w-6xl mx-auto w-full">

          {/* Main Layout */}
          <div className="grid grid-cols-12 gap-4 sm:gap-6 md:gap-8 items-center">

            {/* Left: Content */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="col-span-12 sm:col-span-11 md:col-span-10 lg:col-span-9 xl:col-span-8 space-y-8 sm:space-y-10 md:space-y-12 pr-4 sm:pr-8 md:pr-12 lg:pr-16"
            >

              {/* Intro */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-sm font-medium text-neutral-400 tracking-[0.2em] uppercase">
                    Software Engineer
                  </div>
                  <Heading className="text-xl sm:text-5xl md:text-6xl font-thin text-neutral-800 tracking-wide leading-none">
                    Prajwal
                  </Heading>
                  <div className="text-lg text-neutral-500 font-light">
                    Currently at Flipkart, previously breaking things at startups
                  </div>
                </div>
              </div>

              {/* Philosophy */}
              <div className="space-y-8">
                <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
                  <Paragraph className="text-lg sm:text-xl leading-relaxed text-neutral-600 font-light">
                    I build software that doesn't suck.
                    <br />
                    <span className="text-neutral-800">Three years</span> of turning coffee into code,
                    bugs into features, and "it works on my machine" into actual solutions.
                    <br />
                    <span className="text-neutral-500">Tech stack? Whatever gets the job done faster.</span>
                  </Paragraph>
                </div>

                <div className="border-l border-neutral-200 pl-6 max-w-md">
                  <Paragraph className="text-base text-neutral-500 italic font-light leading-relaxed">
                    Currently building something at the intersection of tech and human habits.
                    It's early, messy, and probably over-engineered — exactly how I like it.
                  </Paragraph>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-lg">
                <div className="space-y-2">
                  <div className="text-xs font-medium text-neutral-400 tracking-wider uppercase">
                    Specialty
                  </div>
                  <div className="text-base text-neutral-700 font-medium">
                    Products that work
                    <br />
                    <span className="text-neutral-500 font-light">(even on Fridays)</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-medium text-neutral-400 tracking-wider uppercase">
                    Approach
                  </div>
                  <div className="text-base text-neutral-700 font-medium">
                    Language agnostic
                    <br />
                    <span className="text-neutral-500 font-light">(whatever works faster)</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-6">
                <div className="flex gap-4 sm:gap-6 md:gap-8 text-sm">
                  <a
                    href="https://linkedin.com/in/moreprajwal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-neutral-700 transition-colors font-medium tracking-wide"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/prjwl16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-neutral-700 transition-colors font-medium tracking-wide"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://x.com/prjwl_16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-neutral-700 transition-colors font-medium tracking-wide"
                  >
                    X
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <motion.button
                    onClick={onShowProjects}
                    whileHover={{ y: -1 }}
                    whileTap={{ y: 0 }}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-800 transition-colors text-center"
                  >
                    View Work
                  </motion.button>

                  <a
                    href="https://drive.google.com/file/d/1aWmywIm8Pi2TJhQhEATOgUCyh9V622NE/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 sm:px-8 py-3 sm:py-4 border border-neutral-200 text-neutral-700 text-sm font-medium tracking-wide hover:bg-neutral-50 transition-colors text-center"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right: Small Image */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              className="col-span-12 lg:col-span-3 flex justify-center lg:justify-end"
            >
              {/*<div className="relative">*/}
              {/*  <div className="absolute -inset-2 bg-gradient-to-br from-neutral-100 to-neutral-200 blur-xl opacity-20" />*/}
              {/*  <div className="relative w-32 h-40 overflow-hidden bg-neutral-100">*/}
              {/*    <Image*/}
              {/*      src="/me.png"*/}
              {/*      alt="Prajwal"*/}
              {/*      width={128}*/}
              {/*      height={160}*/}
              {/*      className="object-cover object-top w-full h-full"*/}
              {/*      style={{ objectPosition: '50% 20%' }}*/}
              {/*    />*/}
              {/*  </div>*/}
              {/*</div>*/}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
