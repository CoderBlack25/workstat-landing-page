"use client";

import Image from "next/image";
import image1 from "@/public/images/organizational-model.png";
import image2 from "@/public/images/configurable-workflow.png";
import image3 from "@/public/images/cloud-deployment.png";
import image4 from "@/public/images/hybrid-deployment.png";
import { motion, Variants } from "framer-motion";

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
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const cardAnimation: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const CoreDifferentiatorSection = () => {
  return (
    <motion.section
      className="w-full bg-white py-28 overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={fadeUp}
          style={{ willChange: "transform, opacity" }}
          className="text-center"
        >
          <p className="font-medium text-(--charcoal)">Core Differentiator</p>

          <h2 className="mt-6 text-[40px] leading-11 text-(--dark-gray)">
            A system that reflects how organizations
            <br />
            actually work
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          className="mt-20 grid gap-6 grid-cols-2"
        >
          <motion.div
            variants={cardAnimation}
            style={{ willChange: "transform, opacity" }}
            className="bg-(--extra-light) p-7 flex flex-col justify-between"
          >
            <div className="flex flex-col space-y-4">
              <p className="font-medium text-(--charcoal)">
                Organizational model
              </p>
              <h2 className="text-(--dark-gray) text-[28px]">
                Hierarchical organizational modeling (Executive → Management →
                Department)
              </h2>
            </div>

            <Image src={image1} alt="" />
          </motion.div>

          <motion.div
            variants={cardAnimation}
            style={{ willChange: "transform, opacity" }}
            className="bg-(--extra-light) p-7 flex flex-col justify-between"
          >
            <div className="flex flex-col space-y-4">
              <p className="font-medium text-(--charcoal)">
                Configurable workflow
              </p>
              <h2 className="text-(--dark-gray) text-[28px]">
                Configurable approval workflows across modules
              </h2>
            </div>

            <Image src={image2} alt="" />
          </motion.div>

          <motion.div
            variants={cardAnimation}
            style={{ willChange: "transform, opacity" }}
            className="bg-(--extra-light) p-7 flex flex-col justify-between"
          >
            <div className="flex flex-col space-y-4">
              <p className="font-medium text-(--charcoal)">Cloud Deployment</p>
              <h2 className="text-(--dark-gray) text-[28px]">
                Centralized employee data powering all features
              </h2>
            </div>

            <Image src={image3} alt="" />
          </motion.div>

          <motion.div
            variants={cardAnimation}
            style={{ willChange: "transform, opacity" }}
            className="bg-(--extra-light) p-7 flex flex-col justify-between"
          >
            <div className="flex flex-col space-y-4">
              <p className="font-medium text-(--charcoal)">
                Hybrid On-Premise Deployment & Training
              </p>
              <h2 className="text-(--dark-gray) text-[28px]">
                Audit trails and system integrity controls
              </h2>
            </div>

            <Image src={image4} alt="" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CoreDifferentiatorSection;
