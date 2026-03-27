"use client";

import { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import image1 from "@/public/images/manage-employees.png";
import image2 from "@/public/images/track-attendance.png";
import image3 from "@/public/images/process-payroll.png";
import image4 from "@/public/images/recruit-talent.png";

type Slide = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "Manage employees and organizational structure",
    description:
      "Oversee the management of employees while ensuring a well-structured organization. This includes defining roles, responsibilities, and reporting lines to enhance productivity and collaboration within the team.",
    image: image1,
    alt: "employee management",
  },
  {
    id: 2,
    title: "Track attendance and working hours in real time",
    description:
      "Use real-time tracking to monitor employee attendance, ensuring accurate records of their working hours and time-off.",
    image: image2,
    alt: "attendance tracking",
  },
  {
    id: 3,
    title: "Process payroll with accuracy and compliance",
    description:
      "Ensure accurate payroll by automating calculations, tax deductions, and compliance checks.",
    image: image3,
    alt: "payroll processing",
  },
  {
    id: 4,
    title: "Recruit, onboard, and develop talent",
    description:
      "Streamline your hiring process with our applicant tracking system, automate onboarding tasks, and offer continuous learning opportunities to foster employee development.",
    image: image4,
    alt: "talent recruit",
  },
];

export default function TimedSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // 1. Intersection Observer to fade in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // 2. Autoplay Timer Logic
  useEffect(() => {
    // Don't start the timer until the component is visible on screen
    if (!isVisible) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 7000);

    // Cleanup: clears the interval if the user clicks an item or unmounts
    return () => clearInterval(timer);
  }, [isVisible, activeIndex]); // Re-run when activeIndex changes to reset the 7s countdown

  return (
    <section
      ref={containerRef}
      className={`max-w-7xl mx-auto px-6 py-20 bg-white transition-opacity duration-700 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col space-y-4 mb-14">
        <h2 className="font-medium tracking-wide text-(--charcoal)">
          Platform Overview
        </h2>
        <h3 className="text-[40px] leading-tight text-(--dark-gray)">
          One platform. Multiple workforce solutions.
        </h3>
        <p className="text-(--slate-gray)">
          Workstat is designed as a modular system where each function works
          independently but becomes <br /> more powerful when combined.
        </p>
      </div>

      {/* Slider Grid Layout */}
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        {/* Left Side: Text Accordions */}
        <div className="flex flex-col justify-center">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            // Add a new variable that ensures the component is also visible
            const isAnimating = isActive && isVisible;
            return (
              <div
                key={slide.id}
                className="py-2 cursor-pointer"
                onClick={() => setActiveIndex(index)}
              >
                {/* Accordion Trigger */}
                <h4
                  className={`text-[22px] font-medium transition-colors ${isActive ? "text-(--midnight)" : "text-gray-500"}`}
                >
                  {slide.title}
                </h4>

                {/* Progress Bar Container */}
                <div className="w-full h-1 bg-(--cool-light) mt-3 mb-4 rounded-full overflow-hidden">
                  <div
                    // Use the new `isAnimating` variable for the key and class
                    key={
                      isAnimating
                        ? `active-${slide.id}`
                        : `inactive-${slide.id}`
                    }
                    className={`h-full bg-(--brand-red) rounded-full ${isAnimating ? "animate-load-progress" : "w-0"}`}
                  ></div>
                </div>

                {/* Accordion Body (Animated Height) */}
                <div
                  className={`grid transition-all duration-400 ease-in-out ${
                    isActive
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-(--slate-gray) mt-2 mb-10 leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Image Crossfade */}
        <div className="relative w-full aspect-square md:aspect-auto min-h-100 lg:min-h-125 flex items-center justify-center">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-contain"
                priority={index === 0} // Preload the first image for better LCP
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
