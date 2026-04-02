"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import {
  container,
  fadeUp,
  imageRevealLeft,
  list,
  listItem,
} from "@/lib/featuresPageAnimation";

const Structure = () => {
  return (
    <motion.section
      id="structure"
      className="w-full bg-(--deep-teal) py-20 md:py-24 lg:py-30 scroll-mt-24 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-white">
        <motion.div
          variants={container}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          <motion.div
            variants={imageRevealLeft}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col space-y-4 sm:space-y-5 max-w-xl"
          >
            <motion.p
              variants={fadeUp}
              className="font-medium text-sm sm:text-base"
            >
              Designed around real organizational structure
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-2xl sm:text-3xl lg:text-4xl leading-tight"
            >
              Workstat is built on the idea that organizations are not flat—they
              are structured.
            </motion.h1>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col space-y-5 sm:space-y-6"
          >
            <motion.p
              variants={fadeUp}
              className="font-medium text-sm sm:text-base"
            >
              That’s why the platform is designed around:
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-x-10"
            >
              <motion.ul
                variants={list}
                className="space-y-3 text-sm sm:text-base"
              >
                <motion.li
                  variants={listItem}
                  className="flex items-center gap-3"
                >
                  <div className="bg-(--brand-red) p-1 text-white mt-1">
                    <Check size={12} />
                  </div>
                  <span>Clear reporting relationships</span>
                </motion.li>

                <motion.li
                  variants={listItem}
                  className="flex items-center gap-3"
                >
                  <div className="bg-(--brand-red) p-1 text-white mt-1">
                    <Check size={12} />
                  </div>
                  <span>Departments and operational units</span>
                </motion.li>
              </motion.ul>

              <motion.ul
                variants={list}
                className="space-y-3 text-sm sm:text-base"
              >
                <motion.li
                  variants={listItem}
                  className="flex items-center gap-3"
                >
                  <div className="bg-(--brand-red) p-1 text-white mt-1">
                    <Check size={12} />
                  </div>
                  <span>Defined roles and positions</span>
                </motion.li>

                <motion.li
                  variants={listItem}
                  className="flex items-center gap-3"
                >
                  <div className="bg-(--brand-red) p-1 text-white mt-1">
                    <Check size={12} />
                  </div>
                  <span>Structured approval workflows</span>
                </motion.li>
              </motion.ul>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="font-medium text-sm sm:text-base"
            >
              This allows organizations to operate with clarity, accountability,
              and consistency.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Structure;
