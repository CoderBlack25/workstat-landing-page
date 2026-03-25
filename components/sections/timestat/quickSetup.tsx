"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import article1 from "@/public/images/article1.png";
import article2 from "@/public/images/article2.png";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
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
  hidden: { opacity: 0, y: 60, scale: 0.96 },
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

const QuickSetup = () => {
  return (
    <motion.section
      id="features"
      className="w-full bg-white py-20 scroll-mt-20 overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="flex flex-col gap-4 mb-10" variants={fadeUp}>
          <p className="font-medium text-(--charcoal)">
            Features for Quick Setup
          </p>

          <h2 className="text-[40px] text-(--dark-gray) leading-tight">
            Hit the ground running fast powerful yet intuitive admin features
          </h2>

          <p className="text-(--slate-gray)">
            Timestat is designed to be easy to set up and manage for admins, and
            just as simple for employees to use, with features like:
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-2 gap-6" variants={container}>
          <motion.div
            variants={imageReveal}
            className="flex flex-col justify-between bg-(--primary-blue) text-white px-7 pt-7 overflow-hidden"
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              <p className="text-sm">Controlled Access</p>
              <h1 className="text-[24px]">Fast registration and onboarding</h1>
              <h2>
                Register your organization and onboard employees effortlessly by
                Inviting employees in bulk
              </h2>
              <Link
                href=""
                className="group inline-block underline underline-offset-3 transition duration-300 hover:translate-x-1"
              >
                <span className="relative">
                  Learn more about roles and permissions
                  <span className="pointer-events-none absolute left-0 bottom-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </div>

            <Link
              href="#"
              className="w-fit flex items-center gap-2 bg-(--brand-red) px-6 py-3 text-sm font-medium text-white mt-10 transition-colors hover:bg-rose-800"
            >
              <p>Book a Demo</p>
            </Link>

            <div className="flex justify-center items-center px-7 mt-10">
              <Image src={article1} alt="" className="w-full h-auto" />
            </div>
          </motion.div>

          <motion.div
            variants={imageReveal}
            className="flex flex-col justify-between bg-(--soft-pink) px-7 pt-7 overflow-hidden"
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              <p className="text-sm text-(--slate-gray)">Quick Setup</p>
              <h1 className="text-[24px] text-(--midnight)">
                Easy roles and access delegations{" "}
              </h1>
              <h2 className="text-(--slate-gray)">
                Assign roles and permissions, manage accounts, update roles,
                individually or in bulk
              </h2>
              <Link
                href=""
                className="group inline-block text-(--dark-gray) underline underline-offset-3 transition duration-300 hover:translate-x-1"
              >
                <span className="relative">
                  Learn more about shift management
                  <span className="pointer-events-none absolute left-0 bottom-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </div>

            <div className="flex justify-center items-center px-7">
              <Image src={article2} alt="" className="w-full h-auto" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default QuickSetup;
