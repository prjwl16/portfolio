"use client";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { ProjectsSection } from "@/components/ProjectsSection";
import { BioSection } from "@/components/BioSection";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [showProjects, setShowProjects] = useState(false);

  const pageVariants = {
    initial: { opacity: 0, x: 300 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -300 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <Container>
      <div className="flex flex-col flex-1">
        <AnimatePresence mode="wait">
          {!showProjects ? (
            <motion.div
              key="home"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className="w-full max-w-7xl mx-auto"
            >
              <BioSection onShowProjects={() => setShowProjects(true)} />
            </motion.div>
          ) : (
            <motion.div
              key="projects"
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              className="w-full max-w-7xl mx-auto h-[50px]"
            >
              <ProjectsSection onBack={() => setShowProjects(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Container>
  );
}
