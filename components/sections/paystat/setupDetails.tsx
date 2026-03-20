"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import image1 from "@/public/images/piggy-bank.png";
import image2 from "@/public/images/institution2.png";
import image3 from "@/public/images/system.png";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 70, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const SetupDetails = () => {
  return (
    <motion.section
      id="howitworks"
      className="w-full bg-white py-40 scroll-mt-30"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="flex flex-col gap-30 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-[1fr_1.5fr] gap-30">
          <motion.div
            variants={fadeLeft}
            className="flex flex-col gap-4 h-fit sticky top-35"
          >
            <h1 className="text-[40px] text-(--dark-gray) leading-tight">
              Built for control, without complexity
            </h1>

            <p className="font-medium text-(--charcoal)">
              Manage payroll from a single dashboard. Designed to give you
              clarity when it matters most.
            </p>
          </motion.div>

          <motion.div variants={container} className="flex flex-col">
            {[
              {
                title: "Review and Approve",
                text: "Catch errors before they happen. Review every detail and approve payments with a single click before processing begins.",
              },
              {
                title: "History Access",
                text: "Access detailed payroll history anytime. Deep dive into past cycles with comprehensive filtering and export tools.",
              },
              {
                title: "Financial Accuracy",
                text: "Maintain accurate financial records across cycles. Our system automatically reconciles data to keep your books balanced.",
              },
              {
                title: "Compliance Sync",
                text: "Stay ahead of regulations. Automated updates ensure your payroll adheres to the latest local and federal tax laws.",
              },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="flex flex-col gap-4">
                  <p className="font-medium text-(--charcoal)">{item.title}</p>

                  <h2 className="text-[28px] text-(--charcoal)">{item.text}</h2>
                </div>

                {i !== 3 && <div className="p-px bg-(--light-gray) my-20" />}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div variants={container} className="grid grid-rows-2 gap-6">
          <div className="grid grid-cols-2 gap-6">
            <motion.div variants={card} className="">
              <Image src={image1} alt="" className="w-full" />
            </motion.div>

            <motion.div variants={card} className="">
              <Image src={image2} alt="" className="w-full" />
            </motion.div>
          </div>

          <motion.div variants={card} className="">
            <Image src={image3} alt="" className="w-full" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SetupDetails;
