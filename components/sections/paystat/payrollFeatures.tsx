"use client";

import Image from "next/image";
import frame5 from "@/public/images/frame5.png";
import frame6 from "@/public/images/frame6.png";
import frame7 from "@/public/images/frame7.png";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const PayrollFeatures = () => {
  return (
    <motion.section
      className="w-full bg-white py-24 overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-20">
          <motion.div variants={fadeLeft} className="col-span-5">
            <p className="font-medium text-(--charcoal) mb-4">
              Automated payroll that works the way your organization operates
            </p>
            <h2 className="text-[32px] text-(--dark-gray)">
              Generate payroll for all employees with structured, reliable
              calculations based on your existing data—no spreadsheets, no
              duplication.
            </h2>
          </motion.div>

          <motion.div
            variants={fadeRight}
            whileHover={{ y: -8 }}
            className="col-span-7 bg-(--extra-light) px-7 pt-7 pb-0 min-h-65 transition-transform"
          >
            <p className="font-medium text-(--charcoal) mb-4">
              Automated Calculations
            </p>
            <h3 className="text-[32px] text-(--dark-gray)">
              Reliable payroll processing every cycle
            </h3>
            <div className="mt-20 mx-10">
              <Image src={frame5} alt="" />
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            whileHover={{ y: -8 }}
            className="col-span-7 bg-(--extra-light) px-7 pt-7 pb-0 min-h-65 transition-transform"
          >
            <p className="font-medium text-(--charcoal) mb-4">Organized Data</p>
            <h3 className="text-[32px] text-(--dark-gray)">
              All compensation in one place
            </h3>
            <div className="mt-20 mx-10">
              <Image src={frame6} alt="" />
            </div>
          </motion.div>

          <motion.div variants={fadeLeft} className="col-span-5">
            <p className="font-medium text-(--charcoal) mb-4">
              Clear and organized compensation management
            </p>
            <h2 className="text-[32px] text-(--dark-gray)">
              Manage salaries, allowances, and deductions in one place so every
              employee&apos;s compensation is consistent and easy to track.
            </h2>
          </motion.div>

          <motion.div variants={fadeLeft} className="col-span-5">
            <p className="font-medium text-(--charcoal) mb-4">
              Payroll records you can trust
            </p>
            <h2 className="text-[32px] text-(--dark-gray)">
              Access complete payroll history and generate reports whenever you
              need them, with clean exports for documentation or external
              processing.
            </h2>
          </motion.div>

          <motion.div
            variants={fadeRight}
            whileHover={{ y: -8 }}
            className="col-span-7 bg-(--extra-light) px-10 pt-10 pb-80 min-h-65 transition-transform"
          >
            <p className="font-medium text-(--charcoal) mb-4">
              Complete History
            </p>
            <h3 className="text-[32px] text-(--dark-gray)">
              Full audit trails and reporting
            </h3>
          </motion.div>

          <motion.div
            variants={fadeRight}
            whileHover={{ y: -8 }}
            className="col-span-7 bg-(--extra-light) px-7 pt-7 pb-0 min-h-65 transition-transform"
          >
            <p className="font-medium text-(--charcoal) mb-4">
              Full Visibility
            </p>
            <h3 className="text-[32px] text-(--dark-gray)">
              Transparent for everyone
            </h3>
            <div className="mt-20 mx-10">
              <Image src={frame7} alt="" />
            </div>
          </motion.div>

          <motion.div variants={fadeLeft} className="col-span-5">
            <p className="font-medium text-(--charcoal) mb-4">
              Full visibility into employee payments
            </p>
            <h2 className="text-[32px] text-(--dark-gray)">
              Give both administrators and employees clear access to payment
              records, improving transparency and reducing back-and-forth.
            </h2>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default PayrollFeatures;
