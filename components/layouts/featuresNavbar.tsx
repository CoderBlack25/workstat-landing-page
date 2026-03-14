"use client";

import Link from "next/link";
//import Image, { StaticImageData } from "next/image";

type FeaturesNavbarProps = {
  //logo: StaticImageData;
  //logoAlt: string;
  textColor?: string;
  bgColor?: string;
  //href: string;
};

const FeaturesNavbar = ({
  //logo,
  //logoAlt,
  textColor = "text-(--slate-gray)",
  bgColor = "bg-(--soft-cloud)",
  //href,
}: FeaturesNavbarProps) => {
  return (
    <nav
      className={`sticky top-18 left-0 w-full z-50 ${bgColor} ${textColor} py-4`}
    >
      <div className="max-w-screen-2xl px-25 mx-auto flex items-center justify-between">
        <Link
          href="/features-page"
          className="text-lg text-(--primary-blue) font-semibold"
        >
          {/* <Image src={logo} alt={logoAlt} /> */}
          Features
        </Link>

        <div className="flex gap-8 text-sm font-medium">
          <Link
            href="#employee"
            className="hover:text-(--primary-blue) transition-colors duration-200"
          >
            Self Service
          </Link>
          <Link
            href="#HRM"
            className="hover:text-(--primary-blue) transition-colors duration-200"
          >
            HRMS
          </Link>
          <Link
            href="#payroll"
            className="hover:text-(--primary-blue) transition-colors duration-200"
          >
            Payroll
          </Link>
          <Link
            href="#learning"
            className="hover:text-(--primary-blue) transition-colors duration-200"
          >
            Learning
          </Link>
          <Link
            href="#attendance"
            className="hover:text-(--primary-blue) transition-colors duration-200"
          >
            Time & Attendance
          </Link>
          <Link
            href="#holiday"
            className="hover:text-(--primary-blue) transition-colors duration-200"
          >
            Leave Management
          </Link>
          <Link
            href="#performance"
            className="hover:text-(--primary-blue) transition-colors duration-200"
          >
            Performance
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default FeaturesNavbar;
