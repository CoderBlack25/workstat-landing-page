"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { IoArrowForwardOutline } from "react-icons/io5";

type HeroProps = {
  title?: string;
  heading: string;
  description: string;
  secondbutton: string;
  bgColor?: string;
  headingTextColor?: string;
  descriptionTextColor?: string;
  extraText?: string;
  buttonBgcolor?: string;
  buttonTextColor?: string;
  buttonBorderColor?: string;
  buttonHoverColor?: string;
  heroImage: StaticImageData;
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const buttons: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Hero = ({
  title,
  heading,
  description,
  secondbutton,
  bgColor = "bg-(--soft-cloud)",
  headingTextColor = "text-(--midnight)",
  descriptionTextColor = "text-(--slate-gray)",
  extraText,
  buttonBgcolor = "bg-white",
  buttonTextColor = "text-(--slate-gray)",
  buttonBorderColor = "border-(--light-gray)",
  buttonHoverColor = "hover:bg-white/10",
  heroImage,
}: HeroProps) => {
  return (
    <motion.section
      id="home"
      className={`${bgColor} pt-40 pb-52 overflow-hidden`}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="max-w-screen-2xl mx-auto px-20 grid grid-cols-2 gap-30 items-center">
        <motion.div className="flex flex-col gap-6" variants={container}>
          {title && (
            <motion.h2
              variants={fadeUp}
              className="font-medium text-(--charcoal)"
            >
              {title}
            </motion.h2>
          )}

          <motion.h1
            variants={fadeUp}
            className={`text-[50px] leading-tight ${headingTextColor}`}
          >
            {heading}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className={`font-medium ${descriptionTextColor}`}
          >
            {description}
          </motion.p>

          <motion.div
            variants={buttons}
            style={{ willChange: "transform, opacity" }}
            className="flex flex-row items-center gap-4"
          >
            <Link
              href="#"
              className="flex items-center gap-2 bg-(--brand-red) px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-pink-700"
            >
              <p>Book a Demo</p>
              <IoArrowForwardOutline />
            </Link>

            <Link
              href="#"
              className={`flex items-center gap-2 border ${buttonBorderColor} ${buttonBgcolor} px-6 py-3 text-sm font-medium ${buttonTextColor} transition-colors ${buttonHoverColor}`}
            >
              {secondbutton}
              <IoArrowForwardOutline />
            </Link>
          </motion.div>

          {extraText && (
            <motion.p
              variants={fadeUp}
              style={{ willChange: "transform, opacity" }}
              className="mt-10 font-medium text-(--less-white)"
            >
              {extraText}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex justify-center items-center"
        >
          <Image src={heroImage} alt="hero-image" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
