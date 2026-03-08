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

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const howitworks = () => {
  return (
    <motion.section
      className="bg-white py-30 overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          variants={fadeUp}
          className="text-(--dark-gray) text-[44px] text-center mb-10"
        >
          How it works
        </motion.h1>

        <motion.div className="grid grid-cols-3 gap-4" variants={container}>
          <motion.div className="flex flex-col gap-4" variants={container}>
            <motion.div
              variants={cardReveal}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-2 bg-(--extra-light) px-10 pt-10 pb-50 rounded-xl"
            >
              <p className="font-medium text-(--charcoal)">Provide resources</p>

              <h1 className="text-[32px] text-(--dark-gray)">
                Give access to learning materials and content
              </h1>
            </motion.div>

            <motion.div
              variants={cardReveal}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-2 bg-(--extra-light) px-10 pt-10 pb-50 rounded-xl"
            >
              <p className="font-medium text-(--charcoal)">Track progress</p>

              <h1 className="text-[32px] text-(--dark-gray)">
                Monitor completion and learning outcomes
              </h1>
            </motion.div>
          </motion.div>

          <motion.div
            variants={cardReveal}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center text-center gap-2 bg-(--extra-light) p-10 rounded-xl"
          >
            <p className="font-medium text-(--charcoal)">
              Create training programs
            </p>

            <h1 className="text-[32px] text-(--dark-gray)">
              Design orientation and training programs for your organization
            </h1>
          </motion.div>

          <motion.div className="flex flex-col gap-4" variants={container}>
            <motion.div
              variants={cardReveal}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-2 bg-(--extra-light) px-10 pt-10 pb-50 rounded-xl"
            >
              <p className="font-medium text-(--charcoal)">Enroll employees</p>

              <h1 className="text-[32px] text-(--dark-gray)">
                Assign employees to relevant learning programs
              </h1>
            </motion.div>

            <motion.div
              variants={cardReveal}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-2 bg-(--extra-light) px-10 pt-10 pb-50 rounded-xl"
            >
              <p className="font-medium text-(--charcoal)">Collect feedback</p>

              <h1 className="text-[32px] text-(--dark-gray)">
                Gather evaluations and improve programs
              </h1>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default howitworks;
