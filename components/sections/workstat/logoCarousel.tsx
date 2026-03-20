"use client";

import Image from "next/image";
import { logos } from "@/components/sections/workstat/logos";

const LogoCarousel = () => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="max-w-lg bg-(--midnight) overflow-hidden">
      <div className="relative flex overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex items-center justify-center mx-0 w-37.5 shrink-0"
            >
              <Image
                src={logo.url}
                alt={logo.name}
                width={100}
                height={40}
                className="h-10 w-auto object-contain brightness-0 invert opacity-60"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
