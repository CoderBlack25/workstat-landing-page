"use client";

import ContactForm from "./contactForm";
import { motion, Variants } from "framer-motion";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const FormSection = () => {
  return (
    <section className="bg-(--deep-teal) py-30 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-[32px] text-white">Tell us about your needs</p>
        </motion.div>
        <ContactForm />
      </div>
    </section>
  );
};

export default FormSection;
