"use client";

import Image, { StaticImageData } from "next/image";
import { motion, Variants } from "framer-motion";

type GridItem = {
  label?: string;
  title: string;
  bgColor?: string;
  image: StaticImageData;
};

type FeatureGridProps = {
  heading: string;
  preheading?: string;
  subheading?: string;
  items: GridItem[];
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const FeatureGrid = ({
  heading,
  preheading,
  subheading,
  items,
}: FeatureGridProps) => {
  return (
    <motion.section
      id="features"
      className="w-full bg-white py-16 md:py-20 lg:py-28 scroll-mt-28 overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          className="flex flex-col gap-3 md:gap-4 justify-center items-center text-center"
        >
          {preheading && (
            <motion.p
              variants={fadeUp}
              className="font-medium text-(--charcoal) text-sm md:text-base"
            >
              {preheading}
            </motion.p>
          )}

          <motion.h2
            variants={fadeUp}
            className="mt-4 md:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight md:leading-11 text-(--dark-gray)"
          >
            {heading}
          </motion.h2>

          {subheading && (
            <motion.p
              variants={fadeUp}
              className="font-medium text-(--charcoal) text-sm md:text-base"
            >
              {subheading}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          variants={container}
          className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 items-stretch"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              className={`flex flex-col px-5 md:px-7 pt-5 md:pt-7 pb-0 ${
                item.bgColor ?? "bg-(--extra-light)"
              }`}
            >
              <div className="flex flex-col gap-2">
                {item.label && (
                  <p className="font-medium text-(--charcoal)">{item.label}</p>
                )}

                <h3 className="text-xl md:text-2xl lg:text-[28px] leading-snug md:leading-8 text-(--dark-gray)">
                  {item.title}
                </h3>
              </div>

              <div className="mt-6 md:mt-8 lg:mt-auto flex justify-center items-end">
                <Image
                  src={item.image}
                  alt=""
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeatureGrid;
