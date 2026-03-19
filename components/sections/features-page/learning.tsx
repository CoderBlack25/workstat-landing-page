"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dashboard from "@/public/images/learning-dashboard.png";
import { Check } from "lucide-react";
import {
  container,
  fadeUp,
  imageRevealLeft,
  list,
  listItem,
} from "@/lib/featuresPageAnimation";

const Learning = () => {
  return (
    <motion.section
      id="learning"
      className="w-full bg-white py-30 scroll-mt-30 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-[2fr_1.5fr] items-start gap-10">
        <motion.div
          variants={imageRevealLeft}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="bg-(--extra-light) flex justify-center items-center pt-20"
        >
          <Image src={dashboard} alt="Learning dashboard" className="w-150" />
        </motion.div>

        <motion.div variants={container} className="flex flex-col space-y-4">
          <motion.p
            variants={fadeUp}
            className="font-medium text-(--slate-gray)"
          >
            Learning &ndash; Training & Orientation
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-[32px] text-(--dark-gray) leading-snug"
          >
            Support employee growth through structured learning
          </motion.h1>

          <motion.h2 variants={fadeUp} className="text-(--slate-gray)">
            Workstat enables organizations to create and manage training
            programs that support onboarding, skill development, and
            professional growth.
          </motion.h2>

          <motion.h3
            variants={fadeUp}
            className="text-lg font-medium text-(--charcoal)"
          >
            Encourage continuous learning across your workforce
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
                <span>Create and assign training programs</span>
              </motion.li>

              <motion.li
                variants={listItem}
                className="flex items-center gap-3"
              >
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Support effective onboarding processes</span>
              </motion.li>

              <motion.li
                variants={listItem}
                className="flex items-center gap-3"
              >
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Develop skills needed for success</span>
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
                <span>Track employee progress and completion</span>
              </motion.li>

              <motion.li
                variants={listItem}
                className="flex items-center gap-3"
              >
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Provide access to learning resources</span>
              </motion.li>

              <motion.li
                variants={listItem}
                className="flex items-center gap-3"
              >
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Monitor professional development</span>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Learning;
