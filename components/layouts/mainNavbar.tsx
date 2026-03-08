"use client";

// import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import ProductDropdown from "../sections/workstat/productDropdown";

type MainNavbarProps = {
  logo: StaticImageData;
  logoAlt: string;
  textColor?: string;
  bgColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
};

const MainNavbar = ({
  logo,
  logoAlt,
  textColor = "text-white",
  bgColor = "bg-(--midnight)",
  buttonBgColor = "bg-white",
  buttonTextColor = "text-(--midnight)",
}: MainNavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-50 ${bgColor} ${textColor} py-4`}
    >
      <div className="max-w-screen-2xl px-25 mx-auto flex items-center justify-between">
        <div className="hidden md:flex items-center gap-10">
          <Link href="/">
            <Image src={logo} alt={logoAlt} />
          </Link>

          <div className="flex gap-8 text-sm font-medium">
            <Link href="#">Home</Link>

            <div
              className="relative"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <button className="hover:text-gray-300 transition cursor-pointer">
                Products
              </button>

              <ProductDropdown isOpen={isOpen} />
            </div>

            <Link href="#">Features</Link>
            <Link href="#">About</Link>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Link href="#" className="text-sm">
            Sign In
          </Link>

          <Link
            href="#"
            className={`${buttonBgColor} ${buttonTextColor} px-6 py-2 text-sm font-medium`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
