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
  hidden: {
    opacity: 0,
    y: 40,
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

const aboutUs = () => {
  return (
    <motion.section
      id="about"
      className="bg-white py-24 overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.p
          variants={fadeUp}
          className="text-(--charcoal) font-medium mb-8"
        >
          About Us
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="text-(--dark-gray) text-[40px] max-w-5xl leading-tight"
        >
          Timestat is the time and attendance management module of Workstat — a
          complete workforce management platform designed to help organizations
          manage their people, processes, and performance from one place.
        </motion.h2>
      </div>
    </motion.section>
  );
};

export default aboutUs;
