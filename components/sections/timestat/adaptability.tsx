"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import adapt1 from "@/public/images/adapt1.png";
import adapt2 from "@/public/images/adapt2.png";
import adapt3 from "@/public/images/adapt3.png";

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
  hidden: { opacity: 0, y: 60, scale: 0.97 },
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

const Adaptability = () => {
  return (
    <motion.section
      id="howitworks"
      className="w-full bg-white py-20 scroll-mt-20 overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          variants={fadeUp}
          className="text-[40px] text-(--dark-gray) mb-16 text-center"
        >
          Timestat works and adapts to organizations at all levels
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 gap-6 mb-6"
          variants={container}
        >
          <motion.div variants={cardReveal} transition={{ duration: 0.3 }}>
            <Image src={adapt1} alt="" className="w-full" />
          </motion.div>

          <motion.div variants={cardReveal} transition={{ duration: 0.3 }}>
            <Image src={adapt2} alt="" className="w-full" />
          </motion.div>
        </motion.div>

        <motion.div variants={cardReveal} transition={{ duration: 0.3 }}>
          <Image src={adapt3} alt="" className="w-full" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Adaptability;
