"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { Check } from "lucide-react";
import {
  container,
  fadeUp,
  imageRevealRight,
  imageRevealLeft,
  list,
  listItem,
} from "@/lib/featuresPageAnimation";

type FeatureItem = {
  text: string;
};

type FeatureSectionProps = {
  id?: string;
  tag: string;
  title: string;
  description: string;
  subheading?: string;
  features: FeatureItem[][];
  tagColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  subheadingColor?: string;
  featuresColor?: string;
  checkBgColor?: string;
  image: StaticImageData;
  mobileImage?: StaticImageData;
  imageAlt: string;
  reverse?: boolean;
  bgColor?: string;
  imageBgColor?: string;
  imageAnimation?: "left" | "right";
};

const FeatureSection = ({
  id,
  tag,
  title,
  description,
  subheading,
  features,
  tagColor = "text-(--slate-gray)",
  titleColor = "text-(--dark-gray)",
  descriptionColor = "text-(--slate-gray)",
  subheadingColor = "text-(--charcoal)",
  featuresColor = "text-(--dark-gray)",
  checkBgColor = "bg-(--primary-blue)",
  image,
  mobileImage,
  imageAlt,
  reverse = false,
  bgColor = "bg-white",
  imageBgColor = "bg-(--extra-light)",
  imageAnimation = "right",
}: FeatureSectionProps) => {
  const imageVariant =
    imageAnimation === "left" ? imageRevealLeft : imageRevealRight;

  return (
    <motion.section
      id={id}
      className={`w-full ${bgColor} py-20 md:py-30 scroll-mt-30 overflow-hidden`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div
        className={`max-w-7xl px-6 mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] items-center gap-12 lg:gap-10 ${
          reverse ? "lg:grid-cols-[2fr_1.5fr]" : ""
        }`}
      >
        <motion.div
          variants={container}
          className={`flex flex-col space-y-4 ${reverse ? "lg:order-2" : ""}`}
        >
          <motion.p variants={fadeUp} className={`font-medium ${tagColor}`}>
            {tag}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className={`text-2xl sm:text-3xl lg:text-[32px] ${titleColor} leading-snug`}
          >
            {title}
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            className={`text-sm sm:text-base ${descriptionColor}`}
          >
            {description}
          </motion.h2>

          {subheading && (
            <motion.h3
              variants={fadeUp}
              className={`text-base sm:text-lg font-medium ${subheadingColor}`}
            >
              {subheading}
            </motion.h3>
          )}

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 sm:gap-10 items-start justify-center lg:justify-start"
          >
            {features.map((column, colIndex) => (
              <motion.ul
                key={colIndex}
                variants={list}
                className={`space-y-4 text-sm ${featuresColor}`}
              >
                {column.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={listItem}
                    className="flex items-center gap-3"
                  >
                    <div className={`${checkBgColor} p-0.5 text-white`}>
                      <Check size={14} />
                    </div>
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={imageVariant}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={`${imageBgColor} flex justify-center items-center pt-5 px-5 md:pt-16 md:px-0 lg:pt-20 ${
            reverse ? "lg:order-1" : "order-last lg:order-0"
          }`}
        >
          {mobileImage && (
            <Image
              src={mobileImage}
              alt={imageAlt}
              className="w-full max-w-md block md:hidden"
            />
          )}

          <Image
            src={image}
            alt={imageAlt}
            className={`w-full max-w-md md:max-w-lg lg:max-w-none lg:w-150 ${
              mobileImage ? "hidden md:block" : ""
            }`}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeatureSection;
