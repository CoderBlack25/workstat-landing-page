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

type Feature = {
  // productPre?: string;
  title: string;
  productPost?: string;
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

const features: Feature[] = [
  {
    title: "Employee Self-Service",
    productPost: "Workstat",
    description:
      "Empower your workforce with easy access to their data, boosting engagement and productivity.",
    href: "/employee-self-service",
  },
  {
    title: "Human Resource Management",
    productPost: "Workstat",
    description: "Content here",
    href: "/human-resource-management",
  },
  {
    title: "Payroll Processing",
    productPost: "Paystat",
    description:
      "Empower your workforce with easy access to their data, boosting engagement and productivity.",
    href: "/payroll-processing",
  },
  {
    title: "Learning- Training & Orientation",
    productPost: "Workstat",
    description:
      "Empower your workforce with easy access to their data, boosting engagement and productivity.",
    href: "/learning",
  },
  {
    title: "Time and Attendance Management",
    productPost: "Timestat",
    description:
      "Empower your workforce with easy access to their data, boosting engagement and productivity.",
    href: "/time-management",
  },
  {
    title: "Leave and Holiday Management",
    productPost: "Timestat",
    description:
      "Empower your workforce with easy access to their data, boosting engagement and productivity.",
    href: "/holiday-management",
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
        z-100
        top-full 
        -right-225
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

      <div className="px-12 py-10">
        <h3 className="text-[22px] font-medium text-gray-800 mb-6">
          Product Suite
        </h3>

        <div className="grid grid-cols-3 gap-8 mb-12">
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

        <h3 className="font-medium text-(--dark-gray) mb-6 mt-4">
          Feature Highlight
        </h3>

        <div className="grid grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link
              key={index}
              href={feature.href}
              className="bg-(--lighter-gray) p-3 hover:bg-[#f1f3f5] transition-colors group"
            >
              <h4 className="text-[17px] mb-2 font-sans tracking-tight">
                <span className="text-(--dark-gray) font-semibold">
                  {feature.title}
                </span>

                <span className="text-(--slate-gray) ml-1.5">
                  {feature.productPost}
                </span>
              </h4>
              <p className="text-(--cool-gray) text-sm">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default productDropdown;
