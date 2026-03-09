"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type SubNavbarProps = {
  logo: StaticImageData;
  logoAlt: string;
  textColor?: string;
  hoverTextColor?: string;
  bgColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
  hoverButtonColor?: string;
};

const SubNavbar = ({
  logo,
  logoAlt,
  textColor = "text-(--slate-gray)",
  hoverTextColor = "hover:text-(--primary-blue)",
  bgColor = "bg-white",
  buttonBgColor = "bg-(--primary-blue)",
  buttonTextColor = "text-white",
  hoverButtonColor = "hover:bg-[#15465c]",
}: SubNavbarProps) => {
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
            <Link
              href="#"
              className={`${hoverTextColor} transition-colors duration-200 cursor-pointer`}
            >
              Home
            </Link>
            <Link
              href="#"
              className={`${hoverTextColor} transition-colors duration-200 cursor-pointer`}
            >
              How it works
            </Link>
            <Link
              href="#"
              className={`${hoverTextColor} transition-colors duration-200 cursor-pointer`}
            >
              About
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="#"
            className={`${hoverTextColor} transition-colors duration-200 cursor-pointer text-sm`}
          >
            Sign In
          </Link>

          <Link
            href="#"
            className={`${buttonBgColor} ${buttonTextColor} ${hoverButtonColor} hover:scale-[1.02] transition-all duration-200 px-6 py-2 text-sm font-medium`}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SubNavbar;
