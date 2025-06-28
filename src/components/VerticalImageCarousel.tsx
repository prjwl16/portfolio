"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=600&fit=crop&crop=center",
  "/me.png"
];

export const VerticalImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Get the three visible images: previous, current, next
  const getVisibleImages = () => {
    const total = images.length;
    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;

    return [
      { index: prevIndex, position: -1 },
      { index: currentIndex, position: 0 },
      { index: nextIndex, position: 1 }
    ];
  };

  return (
    <div className="hidden sm:block absolute right-2 sm:right-4 md:right-8 lg:right-12 xl:right-16 top-1/2 -translate-y-1/2 w-28 sm:w-36 md:w-48 lg:w-56 xl:w-64 h-72 sm:h-80 md:h-96 overflow-visible z-30">
      <div className="relative w-full h-full">
        {getVisibleImages().map(({ index, position }) => {
          const isCenter = position === 0;

          return (
            <motion.div
              key={index}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{
                y: position * 90, // Base spacing
                scale: isCenter ? 1.05 : 0.85,
                opacity: isCenter ? 1 : 0.65,
                zIndex: isCenter ? 50 : 40,
              }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "tween"
              }}
            >
              <div className={`
                relative rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-1200
                ${isCenter
                  ? 'w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 h-16 sm:h-20 md:h-28 lg:h-32 xl:h-36 shadow-xl sm:shadow-2xl ring-1 ring-white/20'
                  : 'w-20 sm:w-28 md:w-36 lg:w-40 xl:w-48 h-14 sm:h-18 md:h-24 lg:h-28 xl:h-32 shadow-md sm:shadow-lg'
                }
              `}>
                <Image
                  src={images[index]}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover object-top transition-transform duration-1200"
                  sizes="(max-width: 640px) 120px, (max-width: 768px) 160px, (max-width: 1024px) 200px, 240px"
                  priority={isCenter}
                />

                {/* Subtle overlay */}
                <div className={`
                  absolute inset-0 transition-opacity duration-1200
                  ${isCenter
                    ? 'bg-gradient-to-t from-black/10 via-transparent to-transparent'
                    : 'bg-gradient-to-t from-black/25 via-black/5 to-transparent'
                  }
                `} />

                {/* Subtle border glow for center image */}
                {isCenter && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute -inset-0.5 bg-gradient-to-r from-white/15 via-white/8 to-white/15 rounded-2xl sm:rounded-3xl blur-sm -z-10"
                  />
                )}
              </div>
            </motion.div>
          );
        })}


      </div>
    </div>
  );
};
