"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import ProductDropdown, { products } from "./productDropdown";
import FeatureDropdown, { features } from "./featureDropdown";
import { IoChevronDown, IoMenu, IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

type MainNavbarProps = {
  logo: StaticImageData;
  logoAlt: string;
  textColor?: string;
  bgColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
  hoverTextColor?: string;
  hoverButtonColor?: string;
  mobileDropdown?: string;
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
  mobileDropdown = "text-gray-600",
}: MainNavbarProps) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileOpen]);

  return (
    <>
      <nav
        className={`sticky top-0 left-0 w-full z-100 ${bgColor} ${textColor} py-4`}
      >
        <div className="max-w-screen-2xl px-6 lg:px-30 mx-auto flex items-center justify-between">
          <div className="hidden lg:flex items-center gap-14">
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

          <Link
            href="/"
            className="lg:hidden relative z-110"
            onClick={() => setIsMobileOpen(false)}
          >
            <Image
              src={logo}
              alt={logoAlt}
              className="h-10 w-auto object-contain"
            />
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-6">
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

            <button
              className="lg:hidden relative z-110 text-3xl focus:outline-none"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle Menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isMobileOpen ? "close" : "menu"}
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="flex items-center justify-center"
                >
                  {isMobileOpen ? <IoClose /> : <IoMenu />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 ${bgColor} ${textColor} z-90 lg:hidden flex flex-col pt-24 px-6 overflow-y-auto transition-transform duration-300 ease-in-out ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 font-medium mt-10">
          <Link href="/" onClick={() => setIsMobileOpen(false)}>
            Home
          </Link>

          <div className="border-b border-gray-700/50 pb-4">
            <button
              className="flex justify-between items-center w-full"
              onClick={() =>
                setMobileExpanded(
                  mobileExpanded === "products" ? null : "products",
                )
              }
            >
              <span>Products</span>
              <IoChevronDown
                className={`transition-transform duration-300 ${mobileExpanded === "products" ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${mobileExpanded === "products" ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="flex flex-col gap-4 pl-4 border-l-2 border-gray-600/50">
                {products.map((p) => (
                  <Link
                    key={p.name}
                    href={p.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`text-sm font-normal ${mobileDropdown}`}
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="border-b border-gray-700/50 pb-4">
            <button
              className="flex justify-between items-center w-full"
              onClick={() =>
                setMobileExpanded(
                  mobileExpanded === "features" ? null : "features",
                )
              }
            >
              <span>Features</span>
              <IoChevronDown
                className={`transition-transform duration-300 ${mobileExpanded === "features" ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${mobileExpanded === "features" ? "max-h-125 mt-4 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="flex flex-col gap-4 pl-4 border-l-2 border-gray-600/50">
                {features.map((f, i) => (
                  <Link
                    key={i}
                    href={f.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`text-sm font-normal ${mobileDropdown}`}
                  >
                    {f.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/about" onClick={() => setIsMobileOpen(false)}>
            About
          </Link>

          <div className="mt-4 flex flex-col gap-4">
            <Link
              href="#"
              onClick={() => setIsMobileOpen(false)}
              className="text-center py-3 font-medium"
            >
              Sign In
            </Link>
            <Link
              href="/contact-us"
              onClick={() => setIsMobileOpen(false)}
              className={`${buttonBgColor} ${buttonTextColor} w-full py-3 text-center font-medium`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNavbar;
