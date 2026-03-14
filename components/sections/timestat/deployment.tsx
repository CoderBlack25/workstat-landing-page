"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import deploy1 from "@/public/images/deploy1.png";
import deploy2 from "@/public/images/deploy2.png";
import deploy3 from "@/public/images/deploy3.png";
import deploy4 from "@/public/images/deploy4.png";

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

const imageReveal: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
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
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          className="flex flex-col gap-4 items-center justify-center my-14 text-center"
        >
          <p className="font-medium text-(--charcoal)">Deployment</p>

          <h1 className="text-[40px] text-(--dark-gray)">
            Secure cloud-based or On-premise <br />
            deployment and training
          </h1>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-6"
          variants={sectionContainer}
        >
          <motion.div
            variants={cardReveal}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-(--extra-light) pt-6 pl-6 rounded-xl"
          >
            <div className="flex flex-col gap-2">
              <p className="font-medium text-(--charcoal)">Cloud Deployment</p>

              <h1 className="text-[28px] text-(--dark-gray)">
                Faster setup, secure hosting and subscription model
              </h1>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-4 mt-20 ml-5"
              variants={sectionContainer}
            >
              <motion.div variants={imageReveal}>
                <Image src={deploy1} alt="" />
              </motion.div>

              <motion.div variants={imageReveal}>
                <Image src={deploy2} alt="" />
              </motion.div>

              <motion.div variants={imageReveal}>
                <Image src={deploy3} alt="" />
              </motion.div>

              <motion.div variants={imageReveal}>
                <Image src={deploy4} alt="" />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={cardReveal}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-(--extra-light) p-6 rounded-xl"
          >
            <div className="flex flex-col gap-2">
              <p className="font-medium text-(--charcoal)">
                On-Premise Deployment & Training
              </p>

              <h1 className="text-[28px] text-(--dark-gray)">
                Dedicated server with hardware installation. Offering staff
                onboarding & SLA
              </h1>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Deployment;
