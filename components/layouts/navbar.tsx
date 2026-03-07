"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import workstatDark from "@/public/icons/workstat-logo.svg";
import workstatLight from "@/public/icons/workstat-logo3.svg";
import paystat from "@/public/icons/paystat-logo.svg";
import timestat from "@/public/icons/timestat-logo2.svg";

import ProductDropdown from "../sections/workstat/productDropdown";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const segment = pathname.split("/")[1] || "workstat";

  const isWorkstat = segment === "workstat" || segment === "";
  const isPaystat = segment === "paystat";
  const isTimestat = segment === "timestat";

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-50 py-4 overflow-hidden ${
        isWorkstat
          ? "bg-(--midnight) text-white"
          : "bg-white text-(--slate-gray) px-14"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between ${
          isWorkstat ? "max-w-7xl" : "max-w-full"
        }`}
      >
        {/* LEFT SIDE */}
        <div className="flex items-center gap-16">
          {/* LOGOS */}
          {isWorkstat ? (
            <Link href="/">
              <Image src={workstatDark} alt="logo" />
            </Link>
          ) : (
            <div className="flex items-center gap-24">
              <Link href="/">
                <Image src={workstatLight} alt="logo" />
              </Link>

              {isPaystat && (
                <Link href="">
                  <Image src={paystat} alt="logo" />
                </Link>
              )}

              {isTimestat && (
                <Link href="">
                  <Image src={timestat} alt="logo" />
                </Link>
              )}
            </div>
          )}

          {/* NAV ITEMS */}
          {isWorkstat ? (
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
          ) : (
            <div className="flex gap-8 text-sm font-medium">
              <Link href="#">Home</Link>
              <Link href="#">Solutions</Link>
              <Link href="#">How it works</Link>
              <Link href="#">Deployment</Link>
              <Link href="#">Pricing</Link>
              <Link href="#">About</Link>
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div
          className={`flex items-center gap-6 ${!isWorkstat ? "mr-25" : ""}`}
        >
          <Link href="#" className="text-sm">
            Sign In
          </Link>

          {isWorkstat ? (
            <Link
              href="#"
              className="bg-white text-(--midnight) px-6 py-2 text-sm font-medium"
            >
              Contact Us
            </Link>
          ) : (
            <Link
              href="#"
              className="bg-(--primary-blue) text-white px-6 py-2 text-sm font-medium"
            >
              Get Started
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
