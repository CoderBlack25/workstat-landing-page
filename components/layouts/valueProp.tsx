"use client";

import { motion, Variants } from "framer-motion";

type ValuePropProps = {
  eyebrow: string;
  title: string;
  bgColor?: string;
};

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 1,
    },
  },
};

const ValueProp = ({
  eyebrow,
  title,
  bgColor = "bg-(--deep-teal)",
}: ValuePropProps) => {
  return (
    <section
      id="overview"
      className={`w-full ${bgColor} text-white py-28 scroll-mt-28 overflow-hidden`}
    >
      <motion.div
        className="max-w-7xl mx-auto px-30 flex flex-col justify-center items-center text-center gap-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.p variants={item} className="font-medium">
          {eyebrow}
        </motion.p>

        <motion.h1 variants={item} className="text-[40px]">
          {title}
        </motion.h1>
      </motion.div>
    </section>
  );
};

export default ValueProp;
