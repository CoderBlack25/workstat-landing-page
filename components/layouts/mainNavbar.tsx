"use client";

import { useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import ProductDropdown from "./productDropdown";
import FeatureDropdown from "./featureDropdown";
import { IoChevronDown } from "react-icons/io5";

type MainNavbarProps = {
  logo: StaticImageData;
  logoAlt: string;
  textColor?: string;
  bgColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
  hoverTextColor?: string;
  hoverButtonColor?: string;
};

const MainNavbar = ({
  logo,
  logoAlt,
  textColor = "text-white",
  bgColor = "bg-(--midnight)",
  buttonBgColor = "bg-white",
  buttonTextColor = "text-(--midnight)",
  hoverTextColor = "hover:text-(--primary-blue)",
  hoverButtonColor = "",
}: MainNavbarProps) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-100 ${bgColor} ${textColor} py-4`}
    >
      <div className="max-w-screen-2xl px-30 mx-auto flex items-center justify-between">
        <div className="hidden md:flex items-center gap-10">
          <Link href="/">
            <Image src={logo} alt={logoAlt} />
          </Link>

          <div className="flex gap-8 text-sm font-medium">
            <Link
              href="/"
              className={`${hoverTextColor} transition-colors duration-200 cursor-pointer`}
            >
              Home
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("products")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`${hoverTextColor} transition-colors duration-200 cursor-pointer flex space-x-2 items-center`}
              >
                <p>Products</p>
                <IoChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
              </button>

              <ProductDropdown isOpen={activeDropdown === "products"} />
            </div>

            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("features")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`${hoverTextColor} transition-colors duration-200 cursor-pointer flex space-x-2 items-center`}
              >
                <p>Features</p>
                <IoChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
              </button>

              <FeatureDropdown isOpen={activeDropdown === "features"} />
            </div>

            <Link
              href="/about"
              className={`${hoverTextColor} transition-colors duration-200 cursor-pointer`}
            >
              About
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="#"
            className={`group text-sm ${hoverTextColor} flex space-x-2 items-center`}
          >
            <p>Sign In</p>
            <IoChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
          </Link>

          <Link
            href="/contact-us"
            className={`${buttonBgColor} ${buttonTextColor} ${hoverButtonColor} hover:scale-[1.02] transition-all duration-200 px-6 py-2 text-sm font-medium`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
