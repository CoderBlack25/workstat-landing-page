"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dashboard from "@/public/images/employee-ss.png";
import { Check } from "lucide-react";
import {
  container,
  fadeUp,
  imageRevealRight,
  list,
  listItem,
} from "@/lib/featuresPageAnimation";

const EmployeeSelfService = () => {
  return (
    <motion.section
      id="employee"
      className="w-full bg-white py-30 scroll-mt-30 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="max-w-7xl px-6 mx-auto grid grid-cols-[1.5fr_2fr] items-start gap-10">
        <motion.div variants={container} className="flex flex-col space-y-4">
          <motion.p
            variants={fadeUp}
            className="font-medium text-(--slate-gray)"
          >
            Employee Self-Service
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-[32px] text-(--dark-gray) leading-snug"
          >
            Give employees direct access to the information they need
          </motion.h1>

          <motion.h2 variants={fadeUp} className="text-(--slate-gray)">
            Workstat&apos;s Employee Self-Service allows employees to access
            their records, track activity, and stay informed without relying on
            HR for routine requests.
          </motion.h2>

          <motion.h3
            variants={fadeUp}
            className="text-lg font-medium text-(--charcoal)"
          >
            Reduce manual requests and improve transparency
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
                <span>View personal records instantly</span>
              </motion.li>

              <motion.li
                variants={listItem}
                className="flex items-center gap-3"
              >
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Access payment history and payslips</span>
              </motion.li>

              <motion.li
                variants={listItem}
                className="flex items-center gap-3"
              >
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Receive company updates directly from dashboard</span>
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
                <span>Track attendance and work hours</span>
              </motion.li>

              <motion.li
                variants={listItem}
                className="flex items-center gap-3"
              >
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Manage leave requests digitally</span>
              </motion.li>

              <motion.li
                variants={listItem}
                className="flex items-center gap-3"
              >
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Update personal information independently</span>
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
            alt="Employee self-service dashboard"
            className="w-50"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EmployeeSelfService;
