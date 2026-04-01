"use client";

import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import card1 from "@/public/images/card1.png";
import card2 from "@/public/images/card2.png";
import card3 from "@/public/images/card3.png";
import HowItWorks from "./howItworks";

type Slide = {
  id: string;
  step: string;
  title: string;
  description: string;
  image: StaticImageData;
};

const WorkflowAccordion = () => {
  const slides: Slide[] = useMemo(
    () => [
      {
        id: "01",
        step: "01",
        title: "Set up your organization",
        description:
          "Create your company account and complete your organization profile. Workstat guides you through a quick onboarding process so you can prepare your workspace for managing your workforce.",
        image: card1,
      },
      {
        id: "02",
        step: "02",
        title: "Add employees and organize your team",
        description:
          "Import your employees or add them individually, then assign roles, departments, and positions so your team structure is clearly organized inside Workstat.",
        image: card2,
      },
      {
        id: "03",
        step: "03",
        title: "Start managing your workforce",
        description:
          "Use Workstat to manage attendance, payroll, leave requests, performance tracking, and employee records from one connected platform.",
        image: card3,
      },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleChange = () => {
      setIsDesktop(mediaQuery.matches);
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  if (isDesktop === null) {
    return null;
  }

  return (
    <section className="w-full bg-(--deep-teal) py-20 lg:py-30">
      <HowItWorks />

      <div className="mx-auto flex flex-col lg:flex-row max-w-7xl px-6 gap-6 lg:gap-4">
        {slides.map((slide, index) => {
          const isActive = isDesktop ? activeIndex === index : true;

          return (
            <motion.button
              key={slide.id}
              type="button"
              onMouseEnter={() => isDesktop && setActiveIndex(index)}
              onFocus={() => isDesktop && setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              className="
                relative flex flex-col overflow-hidden bg-(--primary-blue) text-left outline-none
                p-6 lg:p-10
                h-auto lg:h-175
                min-w-0
              "
              initial={false}
              animate={{
                flex: isDesktop ? (isActive ? 1.9 : 0.72) : 1,
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex h-full flex-col">
                <div className="mb-6 lg:mb-8 text-sm lg:text-base font-medium leading-none text-white">
                  {slide.step}
                </div>

                <motion.div
                  className="relative w-full mb-6 border-4 border-[#4C859F]"
                  initial={false}
                  animate={{
                    opacity: isDesktop ? (isActive ? 1 : 0.4) : 1,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    className="block h-auto w-full object-contain"
                    priority={activeIndex === index}
                  />
                </motion.div>

                <div className="mt-auto flex flex-col">
                  <motion.h3
                    className="text-xl md:text-2xl lg:text-[30px] leading-tight text-white max-w-full lg:max-w-130"
                    initial={false}
                    animate={{
                      opacity: isDesktop ? (isActive ? 1 : 0.4) : 1,
                      y: isDesktop ? (isActive ? 0 : 10) : 0,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {slide.title}
                  </motion.h3>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isDesktop ? (isActive ? "auto" : 0) : "auto",
                      opacity: isDesktop ? (isActive ? 1 : 0) : 1,
                      marginTop: 16,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm md:text-base lg:text-base max-w-full lg:max-w-140 font-medium leading-relaxed text-white">
                      {slide.description}
                    </p>
                  </motion.div>
                </div>
              </div>

              {isDesktop && (
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-(--brand-pink)"
                  initial={false}
                  animate={{
                    width: isActive ? "58%" : "0%",
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </section>
  );
};

export default WorkflowAccordion;
