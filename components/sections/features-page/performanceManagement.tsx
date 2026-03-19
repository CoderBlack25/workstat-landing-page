"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dashboard from "@/public/images/performance-dashboard.png";
import { Check } from "lucide-react";
import {
  container,
  fadeUp,
  imageRevealRight,
  list,
  listItem,
} from "@/lib/featuresPageAnimation";

const PerformanceManagement = () => {
  return (
    <motion.section
      id="performance"
      className="w-full bg-(--primary-blue) py-30 scroll-mt-30 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-[1.5fr_2fr] items-start gap-10 text-white">
        <motion.div variants={container} className="flex flex-col space-y-4">
          <motion.p variants={fadeUp} className="font-medium">
            Performance Management
          </motion.p>

          <motion.h1 variants={fadeUp} className="text-[32px] leading-snug">
            Track performance and support employee growth
          </motion.h1>

          <motion.h2 variants={fadeUp} className="">
            Workstat helps organisations evaluate employee performance and
            monitor development across teams.
          </motion.h2>

          <motion.h3 variants={fadeUp} className="text-lg font-medium">
            Make informed workforce decisions
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
                <span>Structured performance evaluation process</span>
              </motion.li>

              <motion.li
                variants={listItem}
                className="flex items-center gap-3"
              >
                <div className="bg-(--brand-red) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Support employee growth initiatives</span>
              </motion.li>

              <motion.li
                variants={listItem}
                className="flex items-center gap-3"
              >
                <div className="bg-(--brand-red) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>
                  Align individual goals with organizational objectives
                </span>
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
                <span>Monitor development across teams</span>
              </motion.li>

              <motion.li
                variants={listItem}
                className="flex items-center gap-3"
              >
                <div className="bg-(--brand-red) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Track key performance indicators</span>
              </motion.li>

              <motion.li
                variants={listItem}
                className="flex items-center gap-3"
              >
                <div className="bg-(--brand-red) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Generate insights for better workforce decisions</span>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>

        <motion.div
          variants={imageRevealRight}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="bg-(--tertiary-blue) flex justify-center items-center pt-20"
        >
          <Image
            src={dashboard}
            alt="Performance dashboard"
            className="w-150"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PerformanceManagement;
