"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import anima from "@/public/images/anima.png";

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
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const buttons: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <motion.section
      className="bg-(--midnight) text-white pt-30 pb-40"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="max-w-screen-2xl mx-auto px-20 grid grid-cols-2 gap-30">
        <div className="flex flex-col gap-6">
          <motion.h1
            variants={fadeUp}
            style={{ willChange: "transform, opacity" }}
            className="text-[52px] leading-tight"
          >
            Manage your entire workforce from one unified platform
          </motion.h1>

          <motion.p
            variants={fadeUp}
            style={{ willChange: "transform, opacity" }}
            className="font-medium text-(--light-white)"
          >
            Workstat brings together employee management, attendance tracking,
            payroll processing, recruitment, and performance tools into one
            connected system—so your team can operate efficiently from hire to
            retirement.
          </motion.p>

          <motion.div
            variants={buttons}
            style={{ willChange: "transform, opacity" }}
            className="flex flex-row items-center gap-4"
          >
            <Link
              href="#"
              className="flex items-center gap-2 bg-(--brand-red) px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-pink-700"
            >
              Book a Demo
            </Link>

            <Link
              href="#"
              className="border border-(--primary-blue) px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Get Started
            </Link>
          </motion.div>

          <motion.p
            variants={fadeUp}
            style={{ willChange: "transform, opacity" }}
            className="mt-6 font-medium text-(--less-white)"
          >
            Built for organizations that want clarity, control, and scale in
            workforce management.
          </motion.p>
        </div>

        <motion.div
          variants={fadeUp}
          className="flex justify-center items-center"
        >
          <Image src={anima} alt="" className="w-350 h-120" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
