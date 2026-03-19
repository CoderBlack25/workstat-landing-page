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
      className="w-full bg-white py-24 overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeUp} className="mb-16">
          <span className="font-medium text-(--charcoal) block mb-4">
            Solutions
          </span>

          <h2 className="text-[40px] leading-11 text-(--dark-gray) max-w-2xl">
            Manage people through a single connected platform
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          className="grid grid-cols-[2fr_1.5fr] gap-6"
        >
          <motion.div
            variants={slideLeft}
            style={{ willChange: "transform, opacity" }}
            className="bg-(--soft-blue) p-10 flex flex-col gap-4 text-(--slate-gray)"
          >
            <span className="text-sm">Complex staff/people management</span>

            <h3 className="text-[22px] text-(--midnight)">
              Managing people shouldn’t require multiple <br /> disconnected
              tools
            </h3>

            <p className="mb-4">
              Most organizations rely on separate systems for HR, attendance,
              payroll, and <br /> performance—leading to duplicated data, manual
              processes, and costly errors.
            </p>

            <ul className="flex flex-col space-y-4 list-disc ml-6">
              <li>Disconnected systems and data silos</li>
              <li>Manual processes and duplication</li>
              <li>Costly errors and inconsistencies</li>
            </ul>
          </motion.div>

          <motion.div
            variants={slideRight}
            style={{ willChange: "transform, opacity" }}
            className="bg-(--rose-light) p-10 flex flex-col gap-4 text-(--slate-gray)"
          >
            <span className="text-sm">Multiple Tools</span>

            <h3 className="text-[22px] text-(--midnight)">
              Workstat replaces fragmented systems with a single, connected
              platform
            </h3>

            <p className="mb-4">
              From onboarding new employees to processing payroll and tracking
              performance, every workflow is structured, automated, and
              centralized.
            </p>

            <ul className="flex flex-col space-y-4 list-disc ml-6">
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
