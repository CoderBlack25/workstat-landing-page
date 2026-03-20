"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeScaleUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const CallToAction = () => {
  return (
    <section className="bg-(--primary-blue) text-white py-30 w-full overflow-hidden relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto flex flex-col space-y-6 justify-center items-center text-center px-6"
      >
        <motion.h1 variants={fadeScaleUp} className="text-[40px] leading-tight">
          To provide structured systems for modern organizations
        </motion.h1>

        <motion.p variants={fadeScaleUp} className="font-medium">
          Workstat is designed to support organizations that want to operate
          with clarity, efficiency, and control—whether they are growing teams,
          established companies, or large institutions.
        </motion.p>

        <motion.div
          variants={fadeScaleUp}
          className="flex items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href=""
              className="border border-[#7B9EAE] px-6 py-3 text-sm font-medium transition-colors hover:bg-white/10 text-nowrap"
            >
              Get Started
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 rounded-lg bg-(--brand-red) opacity-30 blur-xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />

            <Link
              href=""
              className="relative flex items-center gap-2 bg-(--brand-red) px-6 py-3 text-sm font-medium transition-colors hover:bg-rose-800 text-nowrap"
            >
              <p>Book a Demo</p>

              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                <IoArrowForwardOutline />
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
