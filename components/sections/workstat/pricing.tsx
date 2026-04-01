"use client";

import { motion, Variants } from "framer-motion";
import { Check, Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import basic from "@/public/icons/basic.svg";
import pro from "@/public/icons/pro.svg";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const card: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.97,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Pricing = () => {
  return (
    <motion.section
      className="bg-white py-14 sm:py-16 lg:py-20 overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={fadeUp}
          className="flex flex-col gap-3 sm:gap-4 items-center justify-center mb-10 sm:mb-14 text-center"
        >
          <p className="font-medium text-(--charcoal)">Pricing</p>

          <h1 className="text-2xl sm:text-3xl lg:text-[40px] text-(--dark-gray)">
            Choose the right plan that works for you
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <motion.div
            variants={card}
            className="flex flex-col bg-(--extra-light) p-4 sm:p-6 transition-transform"
          >
            <div className="flex flex-col gap-2">
              <p className="font-medium text-(--charcoal)">Basic Plan</p>

              <h3 className="text-xl sm:text-2xl lg:text-[28px] text-(--dark-gray)">
                Experience the power of timestat
              </h3>
            </div>

            <div className="flex items-center gap-4 bg-white my-8 sm:my-12 p-4">
              <div className="bg-(--soft-cloud) flex items-center justify-center p-4 sm:p-6">
                <Image
                  src={basic}
                  alt=""
                  className="w-auto h-auto object-contain"
                />
              </div>

              <div className="text-(--dark-gray)">
                <h1 className="text-xl sm:text-2xl lg:text-[28px]">
                  30 Days free
                </h1>
                <p className="font-medium">Full feature access</p>
              </div>
            </div>

            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-12 grow text-base sm:text-[18px] text-(--slate-gray)">
              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white shrink-0">
                  <Check size={14} />
                </div>
                <span>30 Days Free Access</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white shrink-0">
                  <Check size={14} />
                </div>
                <span>10 Employee Seat Limit</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white shrink-0">
                  <Check size={14} />
                </div>
                <span>Full Premium Feature Set</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white shrink-0">
                  <Check size={14} />
                </div>
                <span>Mobile, Web & Kiosk Access</span>
              </li>
            </ul>

            <div className="p-px bg-(--tone-gray) my-8 sm:my-14" />

            <Link
              href="/start"
              className="w-full py-3 sm:py-4 mb-4 sm:mb-8 bg-white border border-gray-200 text-(--dark-gray) font-medium hover:bg-gray-200 transition-colors text-center"
            >
              Start
            </Link>
          </motion.div>

          <motion.div
            variants={card}
            className="relative flex flex-col text-white bg-(--deep-teal) p-4 sm:p-6 transition-transform"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-(--brand-red) font-medium py-1 px-4 text-sm sm:text-base">
                Recommended
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-medium">Pro Plan</p>

              <h3 className="text-xl sm:text-2xl lg:text-[28px]">
                Scale your business with confidence
              </h3>
            </div>

            <div className="flex items-center gap-4 bg-(--secondary-blue) my-8 sm:my-12 p-4">
              <div className="bg-(--primary-blue) flex items-center justify-center p-4 sm:p-6">
                <Image
                  src={pro}
                  alt=""
                  className="w-auto h-auto object-contain"
                />
              </div>

              <div>
                <h1 className="text-xl sm:text-2xl lg:text-[28px] font-medium">
                  Enterprise-grade features
                </h1>
                <p>Optimize for growth</p>
              </div>
            </div>

            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-12 grow text-base sm:text-[18px]">
              <li className="flex items-center gap-3">
                <div className="bg-(--brand-red) p-0.5 text-white shrink-0">
                  <Plus size={14} />
                </div>
                <span>Unlimited Employee Scaling</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--brand-red) p-0.5 text-white shrink-0">
                  <Plus size={14} />
                </div>
                <span>Full Premium Feature Set</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--brand-red) p-0.5 text-white shrink-0">
                  <Plus size={14} />
                </div>
                <span>Mobile, Web & Kiosk Access</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--brand-red) p-0.5 text-white shrink-0">
                  <Plus size={14} />
                </div>
                <span>Priority Technical Support</span>
              </li>
            </ul>

            <div className="p-px bg-(--medium-blue) my-8 sm:my-14" />

            <Link
              href="/upgrade"
              className="w-full py-3 sm:py-4 mb-4 sm:mb-8 bg-(--brand-red) text-white font-medium hover:bg-rose-800 transition-colors text-center"
            >
              Upgrade to Pro
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Pricing;
