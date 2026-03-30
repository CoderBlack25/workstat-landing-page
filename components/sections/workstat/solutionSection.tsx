"use client";

import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const SolutionSection = () => {
  return (
    <motion.section
      className="w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="mb-12 sm:mb-16">
          <span className="font-medium text-(--charcoal) block mb-3 sm:mb-4 text-sm sm:text-base">
            Solutions
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-(--dark-gray) max-w-2xl">
            Manage people through a single connected platform
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          className="
            grid 
            grid-cols-1           
            md:grid-cols-2        
            xl:grid-cols-[2fr_1.5fr]
            gap-6 lg:gap-8
          "
        >
          <motion.div
            variants={slideLeft}
            style={{ willChange: "transform, opacity" }}
            className="
              bg-(--soft-blue) 
              p-6 sm:p-8 lg:p-10 
              flex flex-col gap-4
              text-(--slate-gray)
            "
          >
            <span className="text-xs sm:text-sm">
              Complex staff/people management
            </span>

            <h3 className="text-lg sm:text-xl lg:text-2xl text-(--midnight) leading-snug">
              Managing people shouldn’t require multiple disconnected tools
            </h3>

            <p className="text-sm sm:text-base">
              Most organizations rely on separate systems for HR, attendance,
              payroll, and performance leading to duplicated data, manual
              processes, and costly errors.
            </p>

            <ul className="flex flex-col space-y-3 list-disc ml-5 text-sm sm:text-base">
              <li>Disconnected systems and data silos</li>
              <li>Manual processes and duplication</li>
              <li>Costly errors and inconsistencies</li>
            </ul>
          </motion.div>

          <motion.div
            variants={slideRight}
            style={{ willChange: "transform, opacity" }}
            className="
              bg-(--rose-light) 
              p-6 sm:p-8 lg:p-10 
              flex flex-col gap-4
              text-(--slate-gray)
            "
          >
            <span className="text-xs sm:text-sm">Multiple Tools</span>

            <h3 className="text-lg sm:text-xl lg:text-2xl text-(--midnight) leading-snug">
              Workstat replaces fragmented systems with a single, connected
              platform
            </h3>

            <p className="text-sm sm:text-base">
              From onboarding new employees to processing payroll and tracking
              performance, every workflow is structured, automated, and
              centralized.
            </p>

            <ul className="flex flex-col space-y-3 list-disc ml-5 text-sm sm:text-base">
              <li>Single, connected platform</li>
              <li>Structured and automated workflows</li>
              <li>Centralized data and processes</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SolutionSection;
