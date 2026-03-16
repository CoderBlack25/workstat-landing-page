"use client";

import { motion, Variants } from "framer-motion";

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

const PlatformOverview = () => {
  return (
    <motion.section
      className="overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="max-w-7xl mx-auto mb-20">
        <motion.div
          variants={fadeUp}
          style={{ willChange: "transform, opacity" }}
          className="max-w-180"
        >
          <p className="font-medium text-(--charcoal) mb-4">
            Platform Overview
          </p>

          <h2 className="text-[40px] leading-11 text-(--dark-gray) mb-6">
            One platform. Multiple workforce solutions.
          </h2>

          <p className="leading-6 text-(--slate-gray) max-w-155">
            Workstat is designed as a modular system where each function works
            independently but becomes more powerful when combined.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PlatformOverview;
