"use client";

// import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type SubNavbarProps = {
  logo: StaticImageData;
  logoAlt: string;
  textColor?: string;
  bgColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
};

const SubNavbar = ({
  logo,
  logoAlt,
  textColor = "text-(--slate-gray)",
  bgColor = "bg-white",
  buttonBgColor = "bg-(--primary-blue)",
  buttonTextColor = "text-white",
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
            <Link href="#">Home</Link>
            <Link href="#">How it works</Link>
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
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SubNavbar;
