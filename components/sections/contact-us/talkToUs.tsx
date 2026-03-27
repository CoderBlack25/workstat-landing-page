"use client";

import { motion, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import icon1 from "@/public/icons/support1.svg";
import icon2 from "@/public/icons/support2.svg";
import icon3 from "@/public/icons/support3.svg";

type Items = {
  title: string;
  description: string;
  image: StaticImageData;
};

const items: Items[] = [
  {
    title: "Book a demo",
    description: "Book a demo with our team",
    image: icon1,
  },
  {
    title: "Send a message",
    description: "Send us a message and we'll respond promptly",
    image: icon2,
  },
  {
    title: "Get support",
    description: "Get support with onboarding and setup",
    image: icon3,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const TalkToUs = () => {
  return (
    <section className="bg-white py-30 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center text-center text-(--charcoal) font-medium"
        >
          <h1 className="text-(--dark-gray) text-[40px] leading-tight">
            Talk to us directly
          </h1>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-3 gap-4 mt-16"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.04, y: -5 }}
              className="flex flex-col space-y-3 border border-[#E5E7EB] p-7 transition-shadow hover:shadow-xl"
            >
              <Image src={item.image} alt="" />
              <h3 className="text-lg font-medium text-[#0A0A0A]">
                {item.title}
              </h3>
              <p className="text-(--slate-gray) text-[20px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TalkToUs;
