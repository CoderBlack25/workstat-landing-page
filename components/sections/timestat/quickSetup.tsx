"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import article1 from "@/public/images/article1.png";
import article2 from "@/public/images/article2.png";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const imageReveal: Variants = {
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

const quickSetup = () => {
  return (
    <motion.section
      className="w-full bg-white py-20 overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="flex flex-col gap-4 mb-10" variants={fadeUp}>
          <p className="font-medium text-(--charcoal)">
            Features for Quick Setup
          </p>

          <h2 className="text-[40px] text-(--dark-gray) leading-tight">
            Hit the ground running fast powerful yet intuitive admin features
          </h2>

          <p className="text-(--slate-gray)">
            Timestat is designed to be easy to set up and manage for admins, and
            just as simple for employees to use, with features like:
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-2 gap-6" variants={container}>
          <motion.div
            variants={imageReveal}
            className="overflow-hidden"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <Image src={article1} alt="" className="w-full h-auto" />
          </motion.div>

          <motion.div
            variants={imageReveal}
            className="rounded-xl overflow-hidden"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <Image src={article2} alt="" className="w-full h-auto" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default quickSetup;
