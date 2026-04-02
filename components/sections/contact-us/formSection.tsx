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
    <section className="bg-(--deep-teal) py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col items-center">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 lg:mb-12 max-w-2xl"
        >
          <p
            className="text-white font-medium 
            text-xl sm:text-2xl md:text-3xl lg:text-4xl 
            leading-snug"
          >
            Tell us about your needs
          </p>
        </motion.div>

        <div className="w-full flex justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default FormSection;
