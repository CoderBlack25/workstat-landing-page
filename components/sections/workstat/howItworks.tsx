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

const cardUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const lineDraw: Variants = {
  hidden: {
    scaleX: 0,
    opacity: 0,
  },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const HowItWorks = () => {
  return (
    <motion.section
      className="py-30 bg-(--primary-blue) overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          style={{ willChange: "transform, opacity" }}
          className="flex flex-col gap-4 mb-14"
        >
          <p className="font-medium text-white">How It Works</p>

          <h1 className="text-[40px] text-white">
            Deploy and Go Live in a Few Simple Steps
          </h1>
        </motion.div>

        <motion.div
          variants={container}
          className="grid grid-cols-[2fr_1fr_1fr] gap-6"
        >
          <motion.div
            variants={cardUp}
            style={{ willChange: "transform, opacity" }}
            className="flex flex-col bg-(--medium-blue) text-white"
          >
            <div className="px-6 pt-6 pb-12">
              <p className="font-medium">01</p>

              <div className="flex flex-col gap-2 pt-100">
                <h1 className="text-[32px] leading-none">
                  Faster setup, secure hosting and Subscription model
                </h1>

                <p className="font-medium">Cloud Deployment</p>
              </div>
            </div>

            <motion.div
              variants={lineDraw}
              style={{
                transformOrigin: "left",
                willChange: "transform",
              }}
              className="bg-(--brand-pink) p-0.75 w-80"
            />
          </motion.div>

          <motion.div
            variants={cardUp}
            style={{ willChange: "transform, opacity" }}
            className="flex flex-col justify-end bg-(--medium-blue) px-6 pt-6 pb-12"
          >
            <p className="text-[32px] text-(--white-semi) leading-none">
              Faster setup, secure hosting and Subscription model
            </p>
          </motion.div>

          <motion.div
            variants={cardUp}
            style={{ willChange: "transform, opacity" }}
            className="flex flex-col justify-end bg-(--medium-blue) px-6 pt-6 pb-12"
          >
            <p className="text-[32px] text-(--white-semi) leading-none">
              Faster setup, secure hosting and Subscription model
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;
