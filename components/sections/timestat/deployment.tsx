"use client";

import Image from "next/image";
import image1 from "@/public/images/cloud.png";
import image2 from "@/public/images/server.png";
import { motion, Variants } from "framer-motion";

const sectionContainer: Variants = {
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

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const Deployment = () => {
  return (
    <motion.section
      className="py-12 md:py-16 bg-white overflow-hidden"
      variants={sectionContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={fadeUp}
          className="flex flex-col gap-3 md:gap-4 items-center justify-center my-10 md:my-14 text-center"
        >
          <p className="font-medium text-(--charcoal) text-sm md:text-base">
            How It Works
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-[40px] text-(--dark-gray) leading-tight">
            Multiple ways to Clock-In
          </h1>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={sectionContainer}
        >
          <motion.div
            variants={cardReveal}
            transition={{ duration: 0.3 }}
            className="flex flex-col justify-between bg-(--extra-light) p-5 sm:p-7"
          >
            <div className="flex flex-col space-y-3 md:space-y-4">
              <p className="font-medium text-(--charcoal) text-sm md:text-base">
                Cloud Deployment
              </p>

              <h2 className="text-lg sm:text-xl md:text-[28px] text-(--dark-gray) leading-snug">
                Faster setup, secure hosting and Subscription model
              </h2>
            </div>

            <div className="flex justify-center items-center mt-6 md:mt-10">
              <Image
                src={image1}
                alt=""
                className="w-1/2 sm:w-2/5 md:w-2/4 h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            variants={cardReveal}
            transition={{ duration: 0.3 }}
            className="flex flex-col justify-between bg-(--extra-light) p-5 sm:p-7"
          >
            <div className="flex flex-col space-y-3 md:space-y-4">
              <p className="font-medium text-(--charcoal) text-sm md:text-base">
                Hybrid Deployment & Training
              </p>

              <h2 className="text-lg sm:text-xl md:text-[28px] text-(--dark-gray) leading-snug">
                Dedicated server with hardware installation. Offering staff
                onboarding & SLA
              </h2>
            </div>

            <div className="flex justify-center items-center mt-6 md:mt-10">
              <Image
                src={image2}
                alt=""
                className="w-2/3 sm:w-1/2 md:w-3/4 h-auto"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Deployment;
