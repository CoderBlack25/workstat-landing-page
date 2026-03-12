import Link from "next/link";
import Image from "next/image";
import workstat from "@/public/icons/workstat-logo2.svg";
import paystat from "@/public/icons/paystat-logo.svg";
import timestat from "@/public/icons/timestat-logo2.svg";
import { StaticImageData } from "next/image";

type Product = {
  image: StaticImageData;
  name: string;
  description: string;
  href: string;
};

const products: Product[] = [
  {
    image: workstat,
    name: "Workstat",
    description: "Employee data management and payment platform",
    href: "/",
  },
  {
    image: paystat,
    name: "Paystat",
    description: "Employee payment tool to ensure timely salary disbursement",
    href: "/paystat",
  },
  {
    image: timestat,
    name: "Timestat",
    description: "Accurate & Efficient Employee Attendance tracking",
    href: "/timestat",
  },
];

interface ProductDropdownProps {
  isOpen: boolean;
}

const productDropdown = ({ isOpen }: ProductDropdownProps) => {
  return (
    <div
      className={`
        absolute 
        z-200
        top-full 
        -right-250
        w-287.5
        bg-white 
        shadow-2xl 
        border border-gray-100
        transform transition-all duration-300 ease-out
        origin-top
        ${
          isOpen
            ? "opacity-100 scale-100 translate-y-3 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-3 pointer-events-none"
        }
      `}
    >
      <div className="absolute -top-5 left-0 w-full h-5 bg-transparent" />

      <div className="p-10">
        <h3 className="font-medium text-(--dark-gray) mb-6">Product Suite</h3>

        <div className="grid grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group flex gap-5 items-stretch h-20"
            >
              <div className="bg-(--soft-blue) w-35 shrink-0 flex items-center justify-center transition-colors group-hover:bg-[#e4ebf1]">
                <Image src={product.image} alt={`${product.name} logo`} />
              </div>

              <div className="flex flex-col justify-between flex-1">
                <h4 className="font-medium text-(--midnight) group-hover:text-teal-700 transition-colors">
                  {product.name}
                </h4>

                <p className="text-(--slate-gray) text-sm pr-4">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default productDropdown;
