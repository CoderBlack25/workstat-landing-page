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
      className="w-full bg-(--deep-teal) py-16 sm:py-20 lg:py-24 overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="grid grid-rows-1 lg:grid-rows-2 gap-12 sm:gap-16 lg:gap-20"
          variants={container}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-6">
            <motion.div
              variants={fadeUp}
              style={{ willChange: "transform, opacity" }}
              className="flex flex-col gap-4 sm:gap-6"
            >
              <p className="text-white font-medium">
                Built for control and flexibility
              </p>

              <h2 className="text-white text-xl sm:text-2xl lg:text-[32px] leading-tight">
                Administrators have complete control over workflows, structure,
                and system configuration.
              </h2>

              <h3 className="text-white font-medium leading-relaxed sm:leading-loose text-sm sm:text-base">
                Configure workflows for payroll, leave, and approvals <br />
                Manage departments, units, and reporting lines <br />
                Modify organizational structure with full visibility <br />
                Maintain system integrity with validation and audit logs
              </h3>
            </motion.div>

            <motion.div
              variants={card}
              style={{ willChange: "transform, opacity" }}
              className="bg-(--primary-blue) flex flex-col p-5 sm:p-6"
            >
              <p className="text-white font-medium mb-3 sm:mb-4">
                Admin Dashboard
              </p>

              <h2 className="text-white text-xl sm:text-2xl lg:text-[32px] leading-tight mb-6 sm:mb-10">
                Complete visibility and control over your entire workforce
                system
              </h2>

              <div className="flex justify-center items-center">
                <Image
                  src={image1}
                  alt=""
                  className="w-32 sm:w-40 lg:w-45 h-auto object-contain"
                />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.5fr] gap-6">
            <motion.div
              variants={fadeUp}
              style={{ willChange: "transform, opacity" }}
              className="flex flex-col gap-4 sm:gap-6 order-1 lg:order-2"
            >
              <p className="text-white font-medium">
                Simple, structured, and accessible
              </p>

              <h2 className="text-white text-xl sm:text-2xl lg:text-[32px] leading-tight">
                Employees can access everything they need without relying on HR
                for every request.
              </h2>

              <h3 className="text-white font-medium leading-relaxed sm:leading-loose text-sm sm:text-base">
                View and update personal records <br />
                Track attendance and working hours <br />
                Access payroll and payment history <br />
                Apply for leave <br />
                Participate in training programs <br />
                Receive updates via the message center
              </h3>
            </motion.div>

            <motion.div
              variants={card}
              style={{ willChange: "transform, opacity" }}
              className="bg-(--primary-blue) flex flex-col p-5 sm:p-8 lg:p-10 order-2 lg:order-1"
            >
              <p className="text-white font-medium mb-3 sm:mb-4">
                Employee Portal
              </p>

              <h2 className="text-white text-xl sm:text-2xl lg:text-[32px] leading-tight mb-6 sm:mb-10">
                Simple, structured, and accessible for every team member
              </h2>

              <div className="flex justify-center items-center">
                <Image
                  src={image2}
                  alt=""
                  className="w-40 sm:w-52 lg:w-65 h-auto object-contain"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
