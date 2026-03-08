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
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const organizeEmployee = () => {
  return (
    <motion.section
      className="w-full bg-white py-20 overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="flex flex-col gap-4 mb-14" variants={fadeUp}>
          <p className="font-medium text-(--charcoal)">
            Workstat organizes employees
          </p>

          <h2 className="text-[44px] text-(--dark-gray) leading-tight">
            Built around how organizations actually operate
          </h2>
        </motion.div>

        <motion.div className="grid grid-cols-3 gap-6" variants={container}>
          <motion.div
            variants={cardReveal}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-(--soft-cloud) px-5 pt-5 pb-60"
          >
            <h2 className="text-[24px] text-(--midnight)">
              Positions and reporting lines
            </h2>

            <p className="text-(--slate-gray)">Clear hierarchical structure</p>
          </motion.div>

          <motion.div
            variants={cardReveal}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-(--soft-pink) px-5 pt-5 pb-60"
          >
            <h2 className="text-[24px] text-(--midnight)">
              Department and units
            </h2>

            <p className="text-(--slate-gray)">Organized team structure</p>
          </motion.div>

          <motion.div
            variants={cardReveal}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-(--soft-cloud) px-5 pt-5 pb-60"
          >
            <h2 className="text-[24px] text-(--midnight)">
              Organizational hierarchy
            </h2>

            <p className="text-(--slate-gray)">Structured relationships</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default organizeEmployee;
