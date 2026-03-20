"use client";

import { motion, Variants } from "framer-motion";

type PowerPointProps = {
  title: string;
  description: string;
  secondaryDescription?: string;
  bgColor?: string;
  titleTextColor?: string;
  desTextColor?: string;
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const PowerPoint = ({
  title,
  description,
  secondaryDescription,
  bgColor = "bg-white",
  titleTextColor = "text-(--dark-gray)",
  desTextColor = "text-(--charcoal)",
}: PowerPointProps) => {
  return (
    <section className={`${bgColor} py-30 w-full overflow-hidden relative`}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl mx-auto flex flex-col space-y-6 justify-center items-center text-center px-6"
      >
        <motion.h1
          variants={fadeUp}
          className={`${titleTextColor} text-[40px] leading-tight`}
        >
          {title}
        </motion.h1>

        <motion.p variants={fadeUp} className={`${desTextColor} font-medium`}>
          {description}
        </motion.p>

        {secondaryDescription && (
          <motion.p variants={fadeUp} className={`${desTextColor} font-medium`}>
            {secondaryDescription}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
};

export default PowerPoint;
