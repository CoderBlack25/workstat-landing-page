"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import meshnet from "@/public/images/mesh.png";
import { IoArrowForwardOutline } from "react-icons/io5";

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

const ContactUs = () => {
  return (
    <motion.section
      id="home"
      className="bg-(--soft-cloud) py-50 overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="relative flex flex-col space-y-4 justify-center items-center text-center z-100"
          variants={container}
        >
          <div className="absolute">
            <Image src={meshnet} alt="" />
          </div>

          <motion.h2
            variants={fadeUp}
            className="font-medium text-(--charcoal)"
          >
            Contact us
          </motion.h2>

          <motion.h1
            variants={fadeUp}
            className="text-[50px] text-(--midnight) leading-snug"
          >
            Get in touch with our team
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-medium text-(--slate-gray) max-w-xl"
          >
            Whether you have questions, need a demo, or want to explore how
            Workstat fits your organization, we&apos;re here to help.
          </motion.p>

          <motion.div
            variants={buttons}
            style={{ willChange: "transform, opacity" }}
            className="flex flex-row items-center gap-4 mt-4"
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
      </div>
    </motion.section>
  );
};

export default ContactUs;
