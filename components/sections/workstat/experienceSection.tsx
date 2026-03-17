"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import image1 from "@/public/images/controlled.png";
import image2 from "@/public/images/structured.png";

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
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const card: Variants = {
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

const ExperienceSection = () => {
  return (
    <motion.section
      className="w-full bg-(--deep-teal) py-24 overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="grid grid-rows-2 gap-20" variants={container}>
          <div className="grid grid-cols-[1.5fr_2fr] gap-6">
            <motion.div
              variants={fadeUp}
              style={{ willChange: "transform, opacity" }}
              className="flex flex-col gap-6"
            >
              <p className="text-white font-medium">
                Built for control and flexibility
              </p>

              <h2 className="text-white text-[32px] leading-tight">
                Administrators have complete control over workflows, structure,
                and system configuration.
              </h2>

              <h3 className="text-white font-medium leading-loose">
                Configure workflows for payroll, leave, and approvals <br />
                Manage departments, units, and reporting lines <br />
                Modify organizational structure with full visibility <br />
                Maintain system integrity with validation and audit logs
              </h3>
            </motion.div>

            <motion.div
              variants={card}
              style={{ willChange: "transform, opacity" }}
              className="bg-(--primary-blue) flex flex-col p-5"
            >
              <p className="text-white font-medium mb-4">Admin Dashboard</p>

              <h2 className="text-white text-[32px] leading-tight mb-10">
                Complete visibility and control over your entire workforce
                system
              </h2>
              <div className="flex justify-center items-center">
                <Image src={image1} alt="" className="w-45" />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-[2fr_1.5fr] gap-6">
            <motion.div
              variants={card}
              style={{ willChange: "transform, opacity" }}
              className="bg-(--primary-blue) flex flex-col p-10"
            >
              <p className="text-white font-medium mb-4">Employee Portal</p>

              <h2 className="text-white text-[32px] leading-tight mb-10">
                Simple, structured, and accessible for every team member
              </h2>
              <div className="flex justify-center items-center">
                <Image src={image2} alt="" className="w-65" />
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              style={{ willChange: "transform, opacity" }}
              className="flex flex-col gap-6"
            >
              <p className="text-white font-medium">
                Simple, structured, and accessible
              </p>

              <h2 className="text-white text-[32px] leading-tight">
                Employees can access everything they need without relying on HR
                for every request.
              </h2>

              <h3 className="text-white font-medium leading-loose">
                View and update personal records <br />
                Track attendance and working hours <br />
                Access payroll and payment history <br />
                Apply for leave <br />
                Participate in training programs <br />
                Receive updates via the message center
              </h3>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
