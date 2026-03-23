"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dashboard from "@/public/images/time-management.png";
import { Check } from "lucide-react";
import {
  container,
  fadeUp,
  imageRevealRight,
  list,
  listItem,
} from "@/lib/featuresPageAnimation";

const AttendanceManagement = () => {
  return (
    <motion.section
      id="attendance"
      className="w-full bg-white py-30 scroll-mt-30 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-[1.5fr_2fr] items-start gap-10">
        <motion.div variants={container} className="flex flex-col space-y-4">
          <motion.p
            variants={fadeUp}
            className="font-medium text-(--slate-gray)"
          >
            Time & Attendance Management
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-[32px] text-(--dark-gray) leading-snug"
          >
            Track attendance with accuracy and real-time visibility
          </motion.h1>

          <motion.h2 variants={fadeUp} className="text-(--slate-gray)">
            Timestat helps organizations monitor employee attendance and working
            hours while maintaining reliable workforce records.
          </motion.h2>

          <motion.h3
            variants={fadeUp}
            className="text-lg font-medium text-(--charcoal)"
          >
            Improve workforce accountability
          </motion.h3>

          <motion.div
            variants={fadeUp}
            className="flex space-x-10 items-center justify-center"
          >
            <motion.ul
              variants={list}
              className="space-y-4 mb-12 grow text-sm text-(--dark-gray)"
            >
              <motion.li
                variants={listItem}
                className="flex items-center gap-3"
              >
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Real-time clock-in and clock-out tracking</span>
              </motion.li>

              <motion.li
                variants={listItem}
                className="flex items-center gap-3"
              >
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Maintain accurate time records</span>
              </motion.li>

              <motion.li
                variants={listItem}
                className="flex items-center gap-3"
              >
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Improve operational oversight</span>
              </motion.li>
            </motion.ul>

            <motion.ul
              variants={list}
              className="space-y-4 mb-12 grow text-sm text-(--dark-gray)"
            >
              <motion.li
                variants={listItem}
                className="flex items-center gap-3"
              >
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Monitor attendance across all teams</span>
              </motion.li>

              <motion.li
                variants={listItem}
                className="flex items-center gap-3"
              >
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Support payroll calculations</span>
              </motion.li>

              <motion.li
                variants={listItem}
                className="flex items-center gap-3"
              >
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Generate attendance reports</span>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>

        <motion.div
          variants={imageRevealRight}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="bg-(--extra-light) flex justify-center items-center pt-20"
        >
          <Image
            src={dashboard}
            alt="Attendance management dashboard"
            className="w-150"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AttendanceManagement;
