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

const cardAnimation: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const CoreDifferentiatorSection = () => {
  return (
    <motion.section
      className="w-full bg-white py-28"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          style={{ willChange: "transform, opacity" }}
          className="text-center"
        >
          <p className="font-medium text-(--charcoal)">Core Differentiator</p>

          <h2 className="mt-6 text-[44px] leading-11 text-(--dark-gray)">
            A system that reflects how organizations
            <br />
            actually work
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          className="mt-20 grid gap-8 grid-cols-2"
        >
          <motion.div
            variants={cardAnimation}
            style={{ willChange: "transform, opacity" }}
            className="bg-(--extra-light) px-10 pt-10 pb-60"
          >
            <p className="font-medium text-(--charcoal)">
              Organizational model
            </p>

            <h3 className="mt-6 text-[32px] leading-8 text-(--dark-gray)">
              Hierarchical organizational modeling
              <br />
              (Executive → Management → Department)
            </h3>
          </motion.div>

          <motion.div
            variants={cardAnimation}
            style={{ willChange: "transform, opacity" }}
            className="bg-(--rose-light) px-10 pt-10 pb-60"
          >
            <p className="font-medium text-(--charcoal)">
              Configurable workflow
            </p>

            <h3 className="mt-6 text-[32px] leading-8 text-(--dark-gray)">
              Configurable approval workflows
              <br />
              across modules
            </h3>
          </motion.div>

          <motion.div
            variants={cardAnimation}
            style={{ willChange: "transform, opacity" }}
            className="bg-(--rose-light) px-10 pt-10 pb-60"
          >
            <p className="font-medium text-(--charcoal)">Cloud Deployment</p>

            <h3 className="mt-6 text-[32px] leading-8 text-(--dark-gray)">
              Centralized employee data powering all features
            </h3>
          </motion.div>

          <motion.div
            variants={cardAnimation}
            style={{ willChange: "transform, opacity" }}
            className="bg-(--extra-light) px-10 pt-10 pb-60"
          >
            <p className="font-medium text-(--charcoal)">
              On-Premise Deployment & Training
            </p>

            <h3 className="mt-6 text-[32px] leading-8 text-(--dark-gray)">
              Audit trails and system integrity controls
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CoreDifferentiatorSection;
