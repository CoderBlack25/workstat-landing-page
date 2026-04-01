"use client";

import { useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { IoChevronDownOutline } from "react-icons/io5";

type StatNavbarProps = {
  logo: StaticImageData;
  logoAlt: string;
  textColor?: string;
  bgColor?: string;
  href: string;
  hoverTextColor?: string;
};

const StatNavbar = ({
  logo,
  logoAlt,
  textColor = "text-(--slate-gray)",
  bgColor = "bg-(--soft-cloud)",
  href,
  hoverTextColor = "hover:text-(--primary-blue)",
}: StatNavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`sticky top-18 left-0 w-full z-50 ${bgColor} ${textColor} py-4`}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-3 lg:px-30">
        {/* Logo */}
        <Link href={href}>
          <Image src={logo} alt={logoAlt} className="" priority />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link
            href="#overview"
            className={`${hoverTextColor} transition-colors duration-200`}
          >
            Overview
          </Link>
          <Link
            href="#features"
            className={`${hoverTextColor} transition-colors duration-200`}
          >
            Features
          </Link>
          <Link
            href="#howitworks"
            className={`${hoverTextColor} transition-colors duration-200`}
          >
            How it works
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <IoChevronDownOutline
            className={`text-2xl transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className={`md:hidden ${bgColor} px-6 py-4`}>
          <div className="flex flex-col gap-4 text-sm font-medium">
            <Link
              href="#overview"
              className={`${hoverTextColor} transition-colors duration-200`}
              onClick={() => setIsOpen(false)}
            >
              Overview
            </Link>
            <Link
              href="#features"
              className={`${hoverTextColor} transition-colors duration-200`}
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#howitworks"
              className={`${hoverTextColor} transition-colors duration-200`}
              onClick={() => setIsOpen(false)}
            >
              How it works
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default StatNavbar;
