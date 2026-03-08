"use client";

import { motion, Variants } from "framer-motion";

type QuadLayoutProps = {
  heading: string;
  items: string[];
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

const quadLayout = ({ heading, items }: QuadLayoutProps) => {
  return (
    <motion.section
      className="w-full bg-(--primary-blue) py-20 text-white overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-stretch gap-14">
        <motion.h1 variants={fadeUp} className="text-[44px] text-center">
          {heading}
        </motion.h1>

        <motion.div
          variants={container}
          className="grid grid-cols-2 gap-4 text-[18px]"
        >
          {items.map((text, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ y: -6 }}
              className="bg-(--medium-blue) p-6 transition-transform"
            >
              <p>{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default quadLayout;
