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
      className="w-full bg-white py-24"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeUp} className="mb-16">
          <span className="font-medium text-(--charcoal) block mb-4">
            Solutions
          </span>

          <h2 className="text-[44px] leading-11 text-(--dark-gray) max-w-2xl">
            Manage people through a single connected platform
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          className="grid grid-cols-[2fr_1fr] gap-6"
        >
          <motion.div
            variants={slideLeft}
            style={{ willChange: "transform, opacity" }}
            className="bg-(--soft-blue) p-10 flex flex-col gap-4 text-(--slate-gray)"
          >
            <span className="text-sm">Complex staff/people management</span>

            <h3 className="text-2xl text-(--midnight)">
              Managing people shouldn’t require multiple <br /> disconnected
              tools
            </h3>

            <p className="mb-4">
              Most organizations rely on separate systems for HR, attendance,
              payroll, and <br /> performance—leading to duplicated data, manual
              processes, and costly errors.
            </p>

            <p>Disconnected systems and data silos</p>
            <p>Manual processes and duplication</p>
            <p>Costly errors and inconsistencies</p>
          </motion.div>

          <motion.div
            variants={slideRight}
            style={{ willChange: "transform, opacity" }}
            className="bg-(--rose-light) p-10 flex flex-col gap-4 text-(--slate-gray)"
          >
            <span className="text-sm">Multiple Tools</span>

            <h3 className="text-2xl text-(--midnight)">
              Workstat replaces fragmented systems with a single, connected
              platform
            </h3>

            <p className="mb-4">
              From onboarding new employees to processing payroll and tracking
              performance, every workflow is structured, automated, and
              centralized.
            </p>

            <p>Single, connected platform</p>
            <p>Structured and automated workflows</p>
            <p>Centralized data and processes</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SolutionSection;
