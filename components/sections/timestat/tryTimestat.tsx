"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import timestat1 from "@/public/images/timestat1.png";
import timestat2 from "@/public/images/timestat2.png";
import timestat3 from "@/public/images/timestat3.png";
import timestat4 from "@/public/images/timestat4.png";
import timestat5 from "@/public/images/timestat5.png";
import timestat6 from "@/public/images/timestat6.png";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
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
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
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

const TryTimestat = () => {
  return (
    <motion.section
      id="overview"
      className="w-full bg-white py-20 scroll-mt-20 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="flex flex-col gap-4 mb-14" variants={fadeUp}>
          <p className="font-medium text-(--charcoal)">Solutions</p>
          <h2 className="text-[40px] text-(--dark-gray) leading-tight">
            Track Time Accurately. Improve Discipline. Increase <br />{" "}
            Productivity.
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 grid-row-2 gap-6 mb-35"
          variants={container}
        >
          {[
            timestat1,
            timestat2,
            timestat3,
            timestat4,
            timestat5,
            timestat6,
          ].map((img, i) => (
            <motion.div
              key={i}
              variants={imageReveal}
              className="overflow-hidden"
            >
              <Image src={img} alt="" className="w-full h-auto" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="flex flex-col gap-6" variants={fadeUp}>
          <p className="font-medium text-(--charcoal)">
            Dump the the manual registers
          </p>

          <h2 className="text-[32px] text-(--dark-gray) leading-tight">
            Adopt the modern and efficient <br /> way of tracking attendance
          </h2>

          <Link
            href=""
            className="font-medium text-(--charcoal) underline hover:opacity-70 transition"
          >
            Try Timestat
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TryTimestat;
