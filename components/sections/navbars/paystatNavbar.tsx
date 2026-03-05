import Link from "next/link";
import Image from "next/image";
import paystat from "@/public/icons/paystat-logo.svg";
import workstat from "@/public/icons/workstat-logo3.svg";

const PaystatNavbar = () => {
  return (
    <nav className="sticky top-0 left-0 w-full px-14 py-4 z-50 bg-white text-(--slate-gray)">
      <div className="max-w-full mx-auto flex items-center justify-between">
        <div className="flex items-center gap-16">
          <div className="flex items-center gap-24">
            <Link href="/">
              <Image src={workstat} alt="logo" />
            </Link>

            <Link href="">
              <Image src={paystat} alt="logo" />
            </Link>
          </div>

          <div className="flex gap-8 text-sm font-medium">
            <Link href="#">Home</Link>
            <Link href="#">Solutions</Link>
            <Link href="#">How it works</Link>
            <Link href="#">Deployment</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">About</Link>
          </div>
        </div>

        <div className="flex items-center gap-6 mr-25">
          <Link href="#" className="text-sm">
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

export default PaystatNavbar;
