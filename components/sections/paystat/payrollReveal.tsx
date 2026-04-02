"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PayrollReveal = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <div
      ref={ref}
      className="flex items-center justify-center w-full min-h-45 sm:min-h-50 md:min-h-55 overflow-hidden"
    >
      <motion.div
        className="relative w-full max-w-4xl"
        initial={{ width: "80px", opacity: 0, y: 40 }}
        animate={isInView ? { width: "100%", opacity: 1, y: 0 } : {}}
        transition={{
          duration: 1.4,
          ease: "easeInOut",
        }}
      >
        <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 md:-top-6 md:-right-6 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 border-t-6 sm:border-t-8 md:border-t-10 border-r-6 sm:border-r-8 md:border-r-10 border-(--brand-red)" />

        <div className="bg-(--secondary-blue) px-4 py-6 sm:px-6 sm:py-7 md:p-8 text-center">
          <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
            Review and approve payroll before finalizing, then export or proceed
            with payments confidently.
          </p>
        </div>

        <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 md:-bottom-6 md:-left-6 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 border-b-6 sm:border-b-8 md:border-b-10 border-l-6 sm:border-l-8 md:border-l-10 border-(--brand-red)" />
      </motion.div>
    </div>
  );
};

export default PayrollReveal;
