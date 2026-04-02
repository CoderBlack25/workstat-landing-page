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
    <section
      className={`${bgColor} w-full overflow-hidden relative py-16 sm:py-20 lg:py-28`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl lg:max-w-4xl mx-auto flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6"
      >
        <motion.h1
          variants={fadeUp}
          className={`${titleTextColor} text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight`}
        >
          {title}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className={`${desTextColor} font-medium text-sm sm:text-base md:text-lg max-w-2xl`}
        >
          {description}
        </motion.p>

        {secondaryDescription && (
          <motion.p
            variants={fadeUp}
            className={`${desTextColor} font-medium text-sm sm:text-base md:text-lg max-w-2xl`}
          >
            {secondaryDescription}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
};

export default PowerPoint;
