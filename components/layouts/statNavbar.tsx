"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";

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
  return (
    <nav
      className={`sticky top-18 left-0 w-full z-50 ${bgColor} ${textColor} py-4`}
    >
      <div className="max-w-screen-2xl px-30 mx-auto flex items-center justify-between">
        <Link href={href}>
          <Image src={logo} alt={logoAlt} />
        </Link>

        <div className="flex gap-8 text-sm font-medium">
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
      </div>
    </nav>
  );
};

export default StatNavbar;
