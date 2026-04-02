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
      className="w-full bg-white py-14 md:py-20 scroll-mt-20 overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          variants={fadeUp}
          className="text-2xl sm:text-3xl md:text-[40px] text-(--dark-gray) mb-10 md:mb-16 text-center leading-tight"
        >
          Timestat works and adapts to organizations at all levels
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"
          variants={container}
        >
          <motion.div
            variants={cardReveal}
            transition={{ duration: 0.3 }}
            className="flex flex-col justify-between bg-(--extra-light) px-5 sm:px-7 pt-6 sm:pt-7"
          >
            <div className="flex flex-col space-y-3 md:space-y-4">
              <p className="font-medium text-(--charcoal) text-sm sm:text-base">
                SMEs (Small Medium Enterprises)
              </p>

              <h2 className="text-lg sm:text-xl md:text-[28px] text-(--dark-gray) leading-snug">
                Timestat offers scalable attendance solutions with enterprise
                features for small and medium-sized businesses.
              </h2>
            </div>

            <Image src={adapt1} alt="" className="w-full mt-6 md:mt-8" />
          </motion.div>

          <motion.div
            variants={cardReveal}
            transition={{ duration: 0.3 }}
            className="flex flex-col justify-between bg-(--soft-pink) px-5 sm:px-7 pt-6 sm:pt-7"
          >
            <div className="flex flex-col space-y-3 md:space-y-4">
              <p className="font-medium text-(--charcoal) text-sm sm:text-base">
                Large Enterprises
              </p>

              <h2 className="text-lg sm:text-xl md:text-[28px] text-(--dark-gray) leading-snug">
                Timestat streamlines business management with bulk employee
                handling and advanced scheduling.
              </h2>
            </div>

            <Image src={adapt2} alt="" className="w-full mt-6 md:mt-8" />
          </motion.div>
        </motion.div>

        <motion.div
          variants={cardReveal}
          transition={{ duration: 0.3 }}
          className="flex flex-col justify-between bg-(--extra-light) px-5 sm:px-7 pt-6 sm:pt-7"
        >
          <div className="flex flex-col space-y-3 md:space-y-4">
            <p className="font-medium text-(--charcoal) text-sm sm:text-base">
              Government Organizations
            </p>

            <h2 className="text-lg sm:text-xl md:text-[28px] text-(--dark-gray) max-w-4xl leading-snug">
              Government organizations need secure data handling and thorough
              documentation. Timestat offers on-premise deployment, access
              control, and efficient employee management.
            </h2>
          </div>
          <div className="flex justify-center items-center w-full mt-6 md:mt-8 px-0 md:px-20 lg:px-60">
            <Image src={adapt3} alt="" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Adaptability;
