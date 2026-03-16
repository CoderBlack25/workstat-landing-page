"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dashboard from "@/public/images/dashboard2.png";
import { Check } from "lucide-react";
import {
  container,
  fadeUp,
  imageRevealRight,
  list,
  listItem,
} from "@/lib/featuresPageAnimation";

const PayrollProcessing = () => {
  return (
    <motion.section
      id="payroll"
      className="w-full bg-(--deep-teal) py-30 scroll-mt-30 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-[1.5fr_2fr] items-start gap-10 text-white">
        <motion.div variants={container} className="flex flex-col space-y-4">
          <motion.p variants={fadeUp} className="font-medium">
            Payroll Processing
          </motion.p>

          <motion.h1 variants={fadeUp} className="text-[32px] leading-snug">
            Run payroll with accuracy and confidence
          </motion.h1>

          <motion.h2 variants={fadeUp} className="">
            Paystat simplifies payroll operations by organizing employee
            compensation and generating payroll records within a structured
            system.
          </motion.h2>

          <motion.h3 variants={fadeUp} className="text-lg font-medium">
            Process payroll faster with fewer errors
          </motion.h3>

          <motion.div
            variants={fadeUp}
            className="flex space-x-10 items-center justify-center"
          >
            <motion.ul variants={list} className="space-y-4 mb-12 grow text-sm">
              <motion.li
                variants={listItem}
                className="flex items-center gap-3"
              >
                <div className="bg-(--brand-red) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Manage salaries and allowances in one place</span>
              </motion.li>

              <motion.li
                variants={listItem}
                className="flex items-center gap-3"
              >
                <div className="bg-(--brand-red) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Generate accurate payment records</span>
              </motion.li>

              <motion.li
                variants={listItem}
                className="flex items-center gap-3"
              >
                <div className="bg-(--brand-red) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Reduce manual calculation errors</span>
              </motion.li>
            </motion.ul>

            <motion.ul variants={list} className="space-y-4 mb-12 grow text-sm">
              <motion.li
                variants={listItem}
                className="flex items-center gap-3"
              >
                <div className="bg-(--brand-red) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Calculate and track deductions automatically</span>
              </motion.li>

              <motion.li
                variants={listItem}
                className="flex items-center gap-3"
              >
                <div className="bg-(--brand-red) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Maintain clear payroll documentation</span>
              </motion.li>

              <motion.li
                variants={listItem}
                className="flex items-center gap-3"
              >
                <div className="bg-(--brand-red) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Streamlined month-end processing</span>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>

        <motion.div
          variants={imageRevealRight}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="bg-(--secondary-blue) flex justify-center items-center pt-20"
        >
          <Image src={dashboard} alt="Payroll dashboard" className="w-150" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PayrollProcessing;
