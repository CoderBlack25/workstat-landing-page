"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import icon1 from "@/public/icons/lifecycle1.svg";
import icon2 from "@/public/icons/lifecycle2.svg";
import icon3 from "@/public/icons/lifecycle3.svg";
import icon4 from "@/public/icons/lifecycle4.svg";
import icon5 from "@/public/icons/lifecycle5.svg";
import hris from "@/public/images/hris.png";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Lifecycle = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col space-y-3 text-(--charcoal) font-medium max-w-3xl"
        >
          <p className="text-sm sm:text-base">
            A complete workforce management system
          </p>

          <h1 className="text-(--dark-gray) text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
            Workstat provides a unified system that supports every stage of the
            employee lifecycle:
          </h1>

          <h3 className="text-sm sm:text-base md:text-lg text-(--slate-gray)">
            Each part of the system works independently, but becomes more
            powerful when used together.
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-14 text-(--slate-gray) text-base sm:text-lg"
        >
          <div className="grid grid-rows-1 sm:grid-rows-2 gap-4 sm:gap-6">
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.04, y: -5 }}
              className="flex flex-col space-y-4 border border-[#E5E7EB] p-6 sm:p-8 lg:p-10 transition-shadow hover:shadow-xl"
            >
              <Image src={icon1} alt="" className="w-10 h-10" />
              <p>Hiring and onboarding</p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.04, y: -5 }}
              className="flex flex-col space-y-4 border border-[#E5E7EB] p-6 sm:p-8 lg:p-10 transition-shadow hover:shadow-xl"
            >
              <Image src={icon4} alt="" className="w-10 h-10" />
              <p>Payroll processing and compensation</p>
            </motion.div>
          </div>

          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col justify-between h-full space-y-4 border border-[#E5E7EB] p-6 lg:p-10 transition-shadow hover:shadow-xl"
          >
            <Image src={icon2} alt="" className="w-10 h-10" />

            <p>Employee management and organization</p>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hidden lg:flex justify-center items-center mt-10"
            >
              <Image src={hris} alt="" className="w-28 lg:w-32" />
            </motion.div>
          </motion.div>

          <div className="grid grid-rows-1 sm:grid-rows-2 gap-4 sm:gap-6">
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.04, y: -5 }}
              className="flex flex-col space-y-4 border border-[#E5E7EB] p-6 sm:p-8 lg:p-10 transition-shadow hover:shadow-xl"
            >
              <Image src={icon3} alt="" className="w-10 h-10" />
              <p>Attendance tracking and time management</p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.04, y: -5 }}
              className="flex flex-col space-y-4 border border-[#E5E7EB] p-6 sm:p-8 lg:p-10 transition-shadow hover:shadow-xl"
            >
              <Image src={icon5} alt="" className="w-10 h-10" />
              <p>Performance tracking and development</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Lifecycle;
