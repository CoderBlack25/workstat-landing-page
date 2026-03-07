// import { ChevronDown } from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import workstat from "@/public/icons/workstat-logo2.svg";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white text-(--slate-gray) py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="hidden md:flex items-center gap-10">
          <Link href="/">
            <Image src={workstat} alt="" />
          </Link>

          <div className="flex gap-8 text-sm font-medium">
            <Link href="#">Home</Link>

            <Link href="#">How it works</Link>
            <Link href="#">About</Link>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Link href="#" className="text-sm text-(--slate-gray)">
            Sign In
          </Link>

          <Link
            href="#"
            className="bg-(--primary-blue) text-white px-6 py-2 text-sm font-medium"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
