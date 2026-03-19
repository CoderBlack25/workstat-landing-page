"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import image1 from "@/public/images/piggy-bank.png";
import image2 from "@/public/images/institution.png";
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
      className="w-full bg-white py-40 scroll-mt-30 overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="flex flex-col gap-30 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-10">
          <motion.div variants={fadeLeft} className="flex flex-col gap-4">
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
            <motion.div
              variants={card}
              className="flex flex-col gap-4 bg-(--extra-light) px-7 pt-7 transition-transform"
            >
              <p className="font-medium text-(--charcoal)">
                Clear, transparent access to earnings
              </p>

              <h3 className="text-[28px] text-(--charcoal)">
                Employees can easily view their payment history and understand
                their compensation without needing to request information.
              </h3>

              <div className="ml-100 mt-20">
                <Image src={image1} alt="" className="w-40" />
              </div>
            </motion.div>

            <motion.div
              variants={card}
              className="flex flex-col gap-4 bg-(--extra-light) px-7 pt-7  transition-transform"
            >
              <p className="font-medium text-(--charcoal)">
                Designed for organizations that need reliable payroll operations
              </p>

              <h3 className="text-[28px] text-(--charcoal)">
                Whether you&apos;re managing a growing team or a large
                workforce, Paystat gives you the structure and consistency
                needed to run payroll with confidence.
              </h3>

              <div className="ml-100 mt-20">
                <Image src={image2} alt="" className="w-40" />
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={card}
            className="flex flex-col gap-4 bg-(--extra-light) px-7 pt-7 transition-transform"
          >
            <p className="font-medium text-(--charcoal)">
              Stronger when connected to your full workforce system
            </p>

            <h2 className="text-[28px] text-(--charcoal)">
              When used with Workstat, Paystat becomes part of a fully connected
              system where employee data, attendance, and payroll work together
              seamlessly.
            </h2>

            <h3 className="text-[28px] text-(--charcoal)">
              Attendance data flows into payroll, employee records stay
              consistent, and approval processes follow your organizational
              structure automatically.
            </h3>

            <div className="ml-255 mt-20">
              <Image src={image3} alt="" className="w-45" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SetupDetails;
