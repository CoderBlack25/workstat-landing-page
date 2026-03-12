import Link from "next/link";

type Feature = {
  title: string;
  productPost?: string;
  description: string;
  href: string;
};

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

interface FeaturesDropdownProps {
  isOpen: boolean;
}

const featureDropdown = ({ isOpen }: FeaturesDropdownProps) => {
  return (
    <div
      className={`
        absolute 
        z-200
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

      <div className="p-10">
        <h3 className="font-medium text-(--dark-gray) mb-6">
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

export default featureDropdown;
