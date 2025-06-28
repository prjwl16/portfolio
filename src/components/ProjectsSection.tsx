"use client";
import React from "react";
import { motion } from "framer-motion";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { projects } from "@/constants/projects";
import Image from "next/image";

interface ProjectsSectionProps {
  onBack: () => void;
}

export const ProjectsSection = ({ onBack }: ProjectsSectionProps) => {
  return (
    <div className="h-screen relative overflow-hidden">
      {/* Fixed background with floating shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
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
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-r from-neutral-200/15 to-neutral-300/15 rounded-full blur-lg"
        />
      </div>

      {/* Fixed content with scrollable cards */}
      <div className="relative z-10 h-full flex flex-col px-6 pt-8 pb-6">
        {/* Fixed Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8 flex-shrink-0"
        >
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-800 transition-all duration-300 mb-4 group"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
            >
              <path d="M19 12l-14 0"></path>
              <path d="M5 18l6 -6"></path>
              <path d="M5 6l6 6"></path>
            </motion.svg>
            Back to Home
          </button>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="text-3xl mb-2"
          >
            ✨
          </motion.div>

          <Heading className="font-black text-2xl md:text-3xl text-neutral-800 mb-2">
            Featured Projects
          </Heading>

          <Paragraph className="text-neutral-600 text-sm">
            A curated collection of my work, showcasing innovation and technical excellence.
          </Paragraph>
        </motion.div>

        {/* Scrollable Projects Grid */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
          <div className="max-w-7xl mx-auto py-8 pb-32 px-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
              {projects.map((project, index) => {
                const isFirstRow = index < 2;
                const isLastRow = index >= projects.length - 2;
                const isLeftColumn = index % 2 === 0;
                
                // Determine shadow classes based on position
                let shadowClass = "";
                if (isFirstRow) {
                  shadowClass = "shadow-b-lg"; // Bottom shadow for first row
                } else if (isLastRow) {
                  shadowClass = "shadow-t-lg"; // Top shadow for last row
                } else {
                  // Middle rows
                  if (isLeftColumn) {
                    shadowClass = "shadow-r-lg"; // Right shadow for left column
                  } else {
                    shadowClass = "shadow-l-lg"; // Left shadow for right column
                  }
                }
                
                return (
                  <motion.div
                    key={project.slug}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: index * 0.2,
                      duration: 0.8,
                      ease: "easeOut"
                    }}
                    className="group relative"
                  >
                    <div className={`relative bg-white rounded-2xl ${shadowClass} hover:shadow-xl transition-all duration-500 overflow-hidden border border-neutral-100 hover:border-neutral-200 h-full flex flex-col`}>
                      {/* Project Image */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={project.thumbnail}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                        {/* Floating index number */}
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                          className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center font-bold text-neutral-800 shadow-lg"
                        >
                          {String(index + 1).padStart(2, '0')}
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="p-4 sm:p-6 flex-1 flex flex-col">
                        <div className="mb-3">
                          <Heading as="h3" className="text-base sm:text-lg font-bold text-neutral-800 group-hover:text-neutral-900 transition-colors">
                            {project.title}
                          </Heading>
                        </div>

                        <Paragraph className="text-neutral-600 mb-4 leading-relaxed flex-1 text-xs sm:text-sm">
                          {project.description}
                        </Paragraph>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                          {project.stack?.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: index * 0.2 + techIndex * 0.1 + 0.8 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="px-2 sm:px-3 py-1 text-xs font-medium bg-gradient-to-r from-neutral-100 to-neutral-50 text-neutral-700 rounded-full border border-neutral-200 hover:border-neutral-300 hover:bg-gradient-to-r hover:from-neutral-200 hover:to-neutral-100 transition-all duration-200 cursor-help select-none"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>

                        {/* Action Button */}
                        <motion.a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-neutral-800 to-neutral-700 text-white rounded-xl font-medium hover:from-neutral-700 hover:to-neutral-600 transition-all duration-300 shadow-lg hover:shadow-xl group/button mt-auto text-sm"
                        >
                          View Project
                          <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 group-hover/button:translate-x-1 transition-transform"
                          >
                            <path d="M5 12l14 0"></path>
                            <path d="M13 18l6 -6"></path>
                            <path d="M13 6l6 6"></path>
                          </motion.svg>
                        </motion.a>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-neutral-200/50 to-neutral-300/50 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
