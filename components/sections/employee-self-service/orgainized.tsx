"use client";

import { motion, Variants } from "framer-motion";

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
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const organized = () => {
  return (
    <motion.section
      className="w-full bg-white py-20 overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="flex flex-col gap-4 mb-14" variants={fadeUp}>
          <p className="font-medium text-(--charcoal)">
            Everything is organized and accessible in one place.
          </p>

          <h2 className="text-[44px] text-(--dark-gray) leading-tight">
            Employees can log in to their personal dashboard and access
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 grid-row-2 gap-6"
          variants={container}
        >
          {[
            {
              title: "Profile and personal records",
              text: "View and update personal information anytime",
              bg: "bg-(--soft-cloud)",
            },
            {
              title: "Attendance tracking and history",
              text: "Track working hours and attendance records",
              bg: "bg-(--soft-pink)",
            },
            {
              title: "Payment and payroll records",
              text: "Access payslips and payment history",
              bg: "bg-(--soft-cloud)",
            },
            {
              title: "Leave requests and status updates",
              text: "Apply for leave and track approval status",
              bg: "bg-(--soft-pink)",
            },
            {
              title: "Training and onboarding materials",
              text: "Access learning resources and programs",
              bg: "bg-(--soft-cloud)",
            },
            {
              title: "Messages and company-wide updates",
              text: "Stay informed with organizational communication",
              bg: "bg-(--soft-pink)",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={cardReveal}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className={`${item.bg} px-5 pt-5 pb-60`}
            >
              <h2 className="text-[24px] text-(--midnight)">{item.title}</h2>

              <p className="text-(--slate-gray)">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default organized;
