"use client"; // Required in Next.js App Router for interactive components

import { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import image1 from "@/public/images/manage-employees.png";
import image2 from "@/public/images/track-attendance.png";
import image3 from "@/public/images/process-payroll.png";
import image4 from "@/public/images/recruit-talent.png";
import PlatformOverview from "./platformOverview";

type Feature = {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
};

const features: Feature[] = [
  {
    id: "management",
    title: "Manage employees and organizational structure",
    description:
      "Oversee the management of employees while ensuring a well-structured organization. This includes defining roles, responsibilities, and reporting lines to enhance productivity and collaboration within the team.",
    image: image1,
  },
  {
    id: "attendance",
    title: "Track attendance and working hours in real time",
    description:
      "Use real-time tracking to monitor employee attendance, ensuring accurate records of their working hours and time-off.",
    image: image2,
  },
  {
    id: "payroll",
    title: "Process payroll with accuracy and compliance",
    description:
      "Ensure accurate payroll by automating calculations, tax deductions, and compliance checks.",
    image: image3,
  },
  {
    id: "recruitment",
    title: "Recruit, onboard, and develop talent",
    description:
      "Streamline your hiring process with our applicant tracking system, automate onboarding tasks, and offer continuous learning opportunities to foster employee development.",
    image: image4,
  },
];

export default function FeatureScroll() {
  // State to track which feature is currently active
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  // Refs to observe the right-side image containers
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 1, // Trigger when 50% of the image is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveFeature(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all image sections
    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-30">
      <PlatformOverview />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-16 relative">
        <div className="w-full md:w-5/12 sticky top-32 flex flex-col gap-8">
          {features.map((feature) => {
            const isActive = activeFeature === feature.id;

            return (
              <div
                key={feature.id}
                className="cursor-pointer transition-opacity duration-500"
                onClick={() => {
                  const element = document.getElementById(feature.id);
                  element?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
              >
                <h3 className="text-[22px] text-(--midnight) font-medium mb-3 transition-colors duration-500">
                  {feature.title}
                </h3>

                <div
                  className={`h-0.5 w-full transition-colors duration-500 ease-out ${
                    isActive ? "bg-(--brand-red)" : "bg-(--cool-light)"
                  }`}
                />

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isActive ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr] mt-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-(--slate-gray) leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-full md:w-7/12 flex flex-col">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              id={feature.id}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              className="min-h-[80vh] flex items-center justify-center py-10"
            >
              <div className="relative w-full aspect-4/3 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
