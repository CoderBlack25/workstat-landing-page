"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { IoArrowForwardOutline } from "react-icons/io5";

const imageStyles = {
  default: "w-full",
  large: "w-full lg:scale-120",
  offset: "w-full lg:scale-120 lg:translate-x-22",
} as const;

type ImageVariant = keyof typeof imageStyles;

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const buttons: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

type HeroProps = {
  title?: string;
  heading: string;
  description: string;

  primaryCta?: {
    label: string;
    href: string;
  };

  secondaryCta?: {
    label: string;
    href: string;
  };

  extraText?: string;

  heroImage?: StaticImageData;
  mobileImage?: StaticImageData;

  imageVariant?: ImageVariant;

  variant?: "default" | "centered";
  theme?: "light" | "dark";

  bgClass?: string;
};

const Hero = ({
  title,
  heading,
  description,
  primaryCta,
  secondaryCta,
  extraText,
  heroImage,
  mobileImage,
  variant = "default",
  theme = "light",
  bgClass,
  imageVariant = "default",
}: HeroProps) => {
  const isCentered = variant === "centered";
  const isDark = theme === "dark";

  return (
    <motion.section
      className={`${
        bgClass ?? (isDark ? "bg-(--midnight)" : "bg-(--soft-cloud)")
      } py-5 lg:py-40 overflow-hidden`}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-25">
        <div
          className={`grid ${
            isCentered ? "grid-cols-1 text-center" : "grid-cols-12"
          } gap-8 items-center`}
        >
          <motion.div
            variants={container}
            className={`flex flex-col gap-6 max-w-xl items-start md:items-center md:mx-auto lg:items-start lg:mx-0 ${
              isCentered ? "items-center" : "col-span-12 lg:col-span-7"
            }`}
          >
            {title && (
              <motion.h2
                variants={fadeUp}
                className={`font-medium text-sm md:text-base ${
                  isDark ? "text-white/70" : "text-(--charcoal)"
                }`}
              >
                {title}
              </motion.h2>
            )}

            <motion.h1
              variants={fadeUp}
              className={`text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-snug text-left md:text-center lg:text-left ${
                isDark ? "text-white" : "text-(--midnight)"
              }`}
            >
              {heading}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className={`font-medium text-sm md:text-base text-left md:text-center lg:text-left ${
                isCentered ? "text-center" : ""
              } ${isDark ? "text-white/70" : "text-(--slate-gray)"}`}
            >
              {description}
            </motion.p>

            {(primaryCta || secondaryCta) && (
              <motion.div
                variants={buttons}
                className={`flex flex-col gap-4 w-full md:w-full md:items-stretch lg:flex lg:flex-row lg:gap-4 ${isCentered ? "justify-center" : ""}`}
              >
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="inline-flex w-full md:w-full lg:w-auto items-center justify-center gap-2 bg-(--brand-red) px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-rose-800"
                  >
                    <span>{primaryCta.label}</span>
                    <IoArrowForwardOutline aria-hidden />
                  </Link>
                )}

                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex w-full md:w-full lg:w-auto items-center justify-center gap-2 border px-6 py-3 text-sm font-medium transition-colors ${
                      isDark
                        ? "border-white/20 text-white hover:bg-white/10"
                        : "border-(--light-gray) text-(--slate-gray) hover:bg-slate-50"
                    }`}
                  >
                    <span>{secondaryCta.label}</span>
                    <IoArrowForwardOutline aria-hidden />
                  </Link>
                )}
              </motion.div>
            )}

            {extraText && (
              <motion.p
                variants={fadeUp}
                className="mt-0 lg:mt-6 text-base lg:text-xl font-normal md:font-medium text-center lg:text-left text-white md:text-(--less-white) leading-tight lg:leading-normal italic"
              >
                {extraText}
              </motion.p>
            )}
          </motion.div>

          {heroImage && !isCentered && (
            <motion.div
              variants={fadeUp}
              className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className={imageStyles[imageVariant]}>
                {mobileImage && (
                  <Image
                    src={mobileImage}
                    alt="Hero image mobile"
                    priority
                    className="w-full h-auto block lg:hidden"
                    sizes="100vw"
                  />
                )}

                <Image
                  src={heroImage}
                  alt="Hero image"
                  priority
                  className="w-full h-auto hidden lg:block"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
