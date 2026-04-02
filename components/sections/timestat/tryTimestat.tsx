"use client";

import Image, { StaticImageData } from "next/image";
import { motion, Variants } from "framer-motion";
import icon1 from "@/public/icons/clock.svg";
import icon2 from "@/public/icons/verification.svg";
import icon3 from "@/public/icons/location.svg";
import icon4 from "@/public/icons/leave.svg";
import icon5 from "@/public/icons/proration.svg";
import icon6 from "@/public/icons/insights.svg";

type Feature = {
  title: string;
  heading: string;
  description: string;
  image: StaticImageData;
  width: number;
  height: number;
};

const features: Feature[] = [
  {
    title: "Attendance & Time Tracking",
    heading: "Clock In and Out with Web or Mobile Access",
    description:
      "Employees can securely clock in and out from approved devices and locations. Facial recognition and GPS validation ensure identity and location accuracy.",
    image: icon1,
    width: 100,
    height: 100,
  },
  {
    title: "Facial Recognition & Biometric Control",
    heading: "Eliminate Proxy Attendance with Face Verification",
    description:
      "Timestat uses facial recognition for secure clock-ins and clock-outs. Admins can manage and enroll biometric data, helping prevent buddy clocking and attendance fraud.",
    image: icon2,
    width: 100,
    height: 100,
  },
  {
    title: "Shift & Location Management",
    heading: "Create, Assign, and Monitor Shifts Across Locations",
    description:
      "Set up shifts by department, location, or working hours, and ensure employees can only clock in at their assigned locations.",
    image: icon3,
    width: 80,
    height: 80,
  },
  {
    title: "Structured Leave Administration",
    heading: "Centralize Leave Requests with Approval Workflow",
    description:
      "Employees submit leave requests directly within the platform. Administrators can review, approve, or deny requests while tracking leave balances and holiday schedules.",
    image: icon4,
    width: 80,
    height: 80,
  },
  {
    title: "Smart Proration System",
    heading: "Encourage Punctuality & Discourages Indiscipline",
    description:
      "Automatically deduct lateness or absence fees based on preset company rules. Ensures fairness, accountability, and seamless payroll integration.",
    image: icon5,
    width: 80,
    height: 80,
  },
  {
    title: "Reporting & Insights",
    heading: "Get Simple Attendance Insights and Reports",
    description: `Timestat provides simplified yet comprehensive reporting, including attendance summaries,
      absentee trends, late arrival frequency, shift compliance reports and leave statistics.`,
    image: icon6,
    width: 100,
    height: 100,
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const TryTimestat = () => {
  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{
                y: -6,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.05)",
                transition: { duration: 0.2 },
              }}
              className="relative flex flex-col justify-between bg-(--extra-light) p-6 sm:p-7 overflow-hidden group cursor-pointer"
            >
              <div className="flex flex-col space-y-4 max-w-md mb-10 sm:mb-20 relative z-10">
                <p className="text-sm text-(--slate-gray)">{item.title}</p>

                <h2 className="text-xl sm:text-2xl text-(--midnight) leading-snug">
                  {item.heading}
                </h2>

                <p className="text-(--slate-gray) leading-relaxed text-sm sm:text-base">
                  {item.description}
                </p>
              </div>

              <motion.div
                className="
              relative 
              flex justify-center items-center
              sm:absolute sm:-bottom-2.5 sm:-right-2.5
              opacity-90
              transition-transform duration-300
              group-hover:scale-105
              sm:group-hover:-translate-x-2 sm:group-hover:-translate-y-2
            "
              >
                <Image
                  src={item.image}
                  alt={item.heading}
                  width={item.width}
                  height={item.height}
                  className="object-contain max-w-full h-auto"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TryTimestat;
