"use client";

import { motion, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import image1 from "@/public/icons/cancel-anytime.svg";
import image2 from "@/public/icons/core-features.svg";
import image3 from "@/public/icons/individual-subscription.svg";

type WhatWeOffer = {
  description: string;
  icon: StaticImageData;
};

const offers: WhatWeOffer[] = [
  {
    description: "7 Core Features",
    icon: image2,
  },
  {
    description: "Individual Subscriptions",
    icon: image3,
  },
  {
    description: "Cancel Anytime",
    icon: image1,
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
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
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const Whatweoffer = () => {
  return (
    <motion.section
      className="w-full bg-(--deep-teal) py-14 md:py-20 text-white overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-center items-center gap-10 md:gap-14">
        <motion.h1
          variants={fadeUp}
          className="text-2xl sm:text-3xl md:text-[40px] text-center leading-tight"
        >
          Everything You Need, Nothing You Don&apos;t
        </motion.h1>

        <motion.div
          variants={container}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 w-full"
        >
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex items-start sm:items-center gap-4 sm:gap-5 bg-(--secondary-blue) px-4 sm:px-5 py-4 sm:py-5"
            >
              <div className="shrink-0">
                <Image
                  src={offer.icon}
                  alt={offer.description}
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-auto md:h-auto"
                />
              </div>

              <p className="text-sm sm:text-base md:text-lg leading-snug">
                {offer.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Whatweoffer;
