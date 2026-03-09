"use client";

import FeatureGrid from "@/components/layouts/featureGrid";
import { motion, Variants } from "framer-motion";

const leftReveal: Variants = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const rightReveal: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: 0.15,
    },
  },
};

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const leaveWorkflow = () => {
  return (
    <section className="w-full bg-white pb-28 pt-10 overflow-hidden">
      <FeatureGrid
        heading="Simple leave workflow"
        preheading="How it works"
        items={[
          {
            label: "Employees submit leave requests",
            title: "Simple request submission through the system",
          },
          {
            label: "Managers review and approve or reject",
            title: "Follow your organizational approval workflows",
          },
          {
            label: "Leave is tracked within employee records",
            title: "Automatic updates to employee profiles",
          },
          {
            label: "Data reflects in attendance and reporting",
            title: "Connected across all workforce modules",
          },
        ]}
      />

      <motion.div
        className="mx-auto max-w-7xl"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="grid grid-cols-[1.5fr_2fr] gap-6 mt-40">
          <motion.div variants={leftReveal} className="flex flex-col gap-6">
            <p className="font-medium text-(--charcoal)">
              Complete visibility and control
            </p>

            <h1 className="text-[32px] text-(--dark-gray)">
              Track leave balances, approvals, and employee availability in real
              time. Everything is connected to your organizational structure and
              flows into attendance and payroll automatically.
            </h1>

            <h3 className="font-medium text-(--charcoal) leading-loose">
              Automated approval workflows <br />
              Leave balance tracking <br />
              Historical records and reporting
            </h3>
          </motion.div>

          <motion.div
            variants={rightReveal}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-6 bg-(--extra-light) p-10 rounded-xl"
          >
            <p className="font-medium text-(--charcoal)">
              Structured Leave Management
            </p>

            <h1 className="text-[32px] text-(--dark-gray)">
              Clear policies, consistent tracking
            </h1>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default leaveWorkflow;
