"use client";

import { useState } from "react";
import Link from "next/link";
import { IoChevronDownOutline } from "react-icons/io5";

type FeaturesNavbarProps = {
  textColor?: string;
  bgColor?: string;
};

const FeaturesNavbar = ({
  textColor = "text-(--slate-gray)",
  bgColor = "bg-(--soft-cloud)",
}: FeaturesNavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`sticky top-18 left-0 w-full z-50 ${bgColor} ${textColor} py-4`}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-6 lg:px-30">
        <Link
          href="/features-page"
          className="text-lg text-(--primary-blue) font-semibold"
        >
          Features
        </Link>

        <div className="hidden lg:flex gap-8 text-sm font-medium">
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

        <button
          className="lg:hidden flex items-center justify-center"
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

      {isOpen && (
        <div className={`lg:hidden ${bgColor} px-6 py-4`}>
          <div className="flex flex-col gap-4 text-sm font-medium">
            <Link
              href="#employee"
              onClick={() => setIsOpen(false)}
              className="hover:text-(--primary-blue) transition-colors duration-200"
            >
              Self Service
            </Link>
            <Link
              href="#HRM"
              onClick={() => setIsOpen(false)}
              className="hover:text-(--primary-blue) transition-colors duration-200"
            >
              HRMS
            </Link>
            <Link
              href="#payroll"
              onClick={() => setIsOpen(false)}
              className="hover:text-(--primary-blue) transition-colors duration-200"
            >
              Payroll
            </Link>
            <Link
              href="#learning"
              onClick={() => setIsOpen(false)}
              className="hover:text-(--primary-blue) transition-colors duration-200"
            >
              Learning
            </Link>
            <Link
              href="#attendance"
              onClick={() => setIsOpen(false)}
              className="hover:text-(--primary-blue) transition-colors duration-200"
            >
              Time & Attendance
            </Link>
            <Link
              href="#holiday"
              onClick={() => setIsOpen(false)}
              className="hover:text-(--primary-blue) transition-colors duration-200"
            >
              Leave Management
            </Link>
            <Link
              href="#performance"
              onClick={() => setIsOpen(false)}
              className="hover:text-(--primary-blue) transition-colors duration-200"
            >
              Performance
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default FeaturesNavbar;
