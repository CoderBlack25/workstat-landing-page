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
      className="py-16 bg-white overflow-hidden"
      variants={sectionContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          className="flex flex-col gap-4 items-center justify-center my-14 text-center"
        >
          <p className="font-medium text-(--charcoal)">How It Works</p>

          <h1 className="text-[40px] text-(--dark-gray)">
            Multiple ways to Clock-In
          </h1>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-6"
          variants={sectionContainer}
        >
          <motion.div
            variants={cardReveal}
            transition={{ duration: 0.3 }}
            className=""
          >
            <Image src={image1} alt="" className="w-full" />
          </motion.div>

          <motion.div
            variants={cardReveal}
            transition={{ duration: 0.3 }}
            className=""
          >
            <Image src={image2} alt="" className="w-full" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Deployment;
