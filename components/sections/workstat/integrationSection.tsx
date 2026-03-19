"use client";

import { motion, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import shop from "@/public/images/shop.png";
import enterprise from "@/public/images/enterprise.png";
import institution from "@/public/images/institution.png";

type Card = {
  title: string;
  desc: string;
  img: StaticImageData;
};

const cards: Card[] = [
  {
    title: "Growing businesses",
    desc: "Building structure as you scale",
    img: shop,
  },
  {
    title: "Enterprises",
    desc: "Managing complex teams at scale",
    img: enterprise,
  },
  {
    title: "Government & institutions",
    desc: "Requiring compliance and accountability",
    img: institution,
  },
];

const IntegrationSection = () => {
  const items = [
    "Attendance feeds into payroll",
    "Organizational structure drives approvals",
    "Performance and training connect to employee growth",
  ];

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
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="w-full bg-white py-28 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-40">
          <motion.p
            variants={fadeUp}
            className="text-(--dark-navy) font-medium mb-6"
          >
            Integration of modules
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-[40px] leading-[1.1] text-(--dark-gray) mb-16"
          >
            Everything works better together
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-(--dark-navy) font-medium mb-8"
          >
            Employee data flows across all modules:
          </motion.p>

          <motion.div variants={container} className="space-y-0">
            {items.map((text, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                style={{ willChange: "transform, opacity" }}
                className="flex items-center justify-between border-b border-(--light-gray) py-6"
              >
                <div className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-[#A2BAC6] block" />

                  <span className="text-2xl text-(--dark-gray)">{text}</span>
                </div>

                <span className="text-(--dark-navy) font-medium whitespace-nowrap">
                  Employee data flows across all modules:
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p variants={fadeUp} className="mt-10 text-(--dark-navy)">
            No duplication. No inconsistencies.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-5"
        >
          <motion.p variants={fadeUp} className="text-(--charcoal) font-medium">
            Who it&apos;s for
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-(--dark-gray) text-[40px]"
          >
            Designed for organizations of all sizes
          </motion.h1>

          <div className="grid grid-cols-3 gap-5">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                style={{ willChange: "transform, opacity" }}
                className="flex flex-col bg-(--almost-white) px-5 pt-5 pb-0 justify-between"
              >
                <p className="font-medium text-(--dark-navy)">{card.title}</p>

                <h1 className="text-[22px] text-(--dark-gray)">{card.desc}</h1>

                <div className="flex justify-center items-center mt-20">
                  <Image
                    src={card.img}
                    alt={card.title}
                    className="w-35 h-35"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default IntegrationSection;
