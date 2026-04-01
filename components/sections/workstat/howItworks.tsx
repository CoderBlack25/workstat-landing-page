"use client";

import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const HowItWorks = () => {
  return (
    <motion.section
      className="overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          style={{ willChange: "transform, opacity" }}
          className="flex flex-col gap-4 mb-14"
        >
          <p className="font-medium text-white">How It Works</p>

          <h1 className="text-3xl md:text-4xl lg:text-[40px] text-white">
            Deploy and Go Live in a Few Simple Steps
          </h1>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;
