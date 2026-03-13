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
      className="flex items-center justify-center w-full min-h-50 overflow-hidden"
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
        <div className="absolute -top-6 -right-6 w-8 h-8 border-t-10 border-r-10 border-(--brand-red)"></div>

        <div className="bg-(--secondary-blue) p-8 text-center">
          <p className="text-white text-lg">
            Review and approve payroll before finalizing, then export or proceed
            with payments confidently.
          </p>
        </div>

        <div className="absolute -bottom-6 -left-6 w-8 h-8 border-b-10 border-l-10 border-(--brand-red)"></div>
      </motion.div>
    </div>
  );
};

export default PayrollReveal;
