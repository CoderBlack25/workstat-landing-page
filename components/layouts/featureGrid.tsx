"use client";

import Image, { StaticImageData } from "next/image";
import { motion, Variants } from "framer-motion";
//import { image } from "framer-motion/client";

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
  hidden: {
    opacity: 0,
    y: 50,
  },
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
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.96,
  },
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

const featureGrid = ({
  heading,
  preheading,
  subheading,
  items,
}: FeatureGridProps) => {
  return (
    <motion.section
      className="w-full bg-white py-28 overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={container}
          className="flex flex-col gap-4 justify-center items-center text-center"
        >
          {preheading && (
            <motion.p
              variants={fadeUp}
              className="font-medium text-(--charcoal)"
            >
              {preheading}
            </motion.p>
          )}

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-[40px] leading-11 text-(--dark-gray)"
          >
            {heading}
          </motion.h2>

          {subheading && (
            <motion.p
              variants={fadeUp}
              className="font-medium text-(--charcoal)"
            >
              {subheading}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          variants={container}
          className="mt-20 grid gap-6 grid-cols-2"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ y: -8 }}
              className={`px-7 pt-7 pb-0 transition-transform ${
                item.bgColor ?? "bg-(--extra-light)"
              }`}
            >
              {item.label && (
                <p className="font-medium text-(--charcoal)">{item.label}</p>
              )}

              <h3 className="text-[28px] leading-8 text-(--dark-gray)">
                {item.title}
              </h3>

              <div className="mt-20 mx-10">
                <Image src={item.image} alt="" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default featureGrid;
