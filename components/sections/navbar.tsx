"use client";

// import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductDropdown from "./productDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-(--midnight) text-white relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between font-inter">
        <div className="hidden md:flex items-center gap-10">
          <Link href="/">
            <Image
              src="/icons/workstat-logo.svg"
              alt="logo"
              width={113}
              height={113}
            />
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
            className="bg-white text-(--midnight) px-6 py-2 text-sm font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
