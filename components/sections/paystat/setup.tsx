"use client";

import { motion, Variants } from "framer-motion";
import PayrollReveal from "./payrollReveal";

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
      ease: "easeOut",
    },
  },
};

const Setup = () => {
  return (
    <motion.section
      className="w-full bg-(--deep-teal) text-white pt-20 md:pt-24 lg:pt-28 pb-16 md:pb-20 lg:pb-22 overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-30 flex flex-col justify-center items-center gap-4 md:gap-6 text-center">
        <motion.p
          variants={fadeUp}
          className="font-medium text-sm sm:text-base md:text-lg"
        >
          From setup to payroll in a few steps
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight max-w-3xl"
        >
          Set up your employee compensation structure once, and Paystat handles
          the rest—calculating, organizing, and preparing payroll every cycle
          with consistency.
        </motion.h1>

        <PayrollReveal />
      </div>
    </motion.section>
  );
};

export default Setup;
