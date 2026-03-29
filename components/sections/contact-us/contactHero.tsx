"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { IoArrowForwardOutline } from "react-icons/io5";

type HeroProps = {
  title?: string;
  heading: string;
  description: string;
  bgColor?: string;
  headingTextColor?: string;
  descriptionTextColor?: string;
  heroImage?: StaticImageData;
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
  bgColor = "bg-(--soft-cloud)",
  headingTextColor = "text-(--midnight)",
  descriptionTextColor = "text-(--slate-gray)",
  heroImage,
}: HeroProps) => {
  return (
    <motion.section
      id="home"
      className={`${bgColor} py-32 overflow-hidden`}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="max-w-screen-2xl mx-auto px-25 grid grid-cols-12 gap-20 items-center">
        <motion.div
          className="flex flex-col gap-6 col-span-5 max-w-md"
          variants={container}
        >
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
            className={`text-[50px] leading-snug ${headingTextColor}`}
          >
            {heading}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className={`font-medium max-w-2xl ${descriptionTextColor}`}
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
              className="flex items-center gap-2 bg-(--brand-red) px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-rose-800"
            >
              <p>Contact Support</p>
              <IoArrowForwardOutline />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex col-span-7 justify-center items-center"
        >
          {heroImage && (
            <Image
              src={heroImage}
              alt="hero-image"
              className="w-full h-auto"
              priority
            />
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
