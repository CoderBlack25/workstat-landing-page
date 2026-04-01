import Link from "next/link";

type Feature = {
  title: string;
  description: string;
  href: string;
};

export const features: Feature[] = [
  {
    title: "Employee Self-Service",
    description:
      "Empower your workforce with easy access to their data, boosting engagement and productivity.",
    href: "/features-page#employee",
  },
  {
    title: "Human Resource Management",
    description:
      "Centralize employee data, organize your team, and manage every stage of the employee lifecycle.",
    href: "/features-page#HRM",
  },
  {
    title: "Payroll Processing",
    description:
      "Empower your workforce with easy access to their data, boosting engagement and productivity.",
    href: "/features-page#payroll",
  },
  {
    title: "Learning- Training & Orientation",
    description:
      "Empower your workforce with easy access to their data, boosting engagement and productivity.",
    href: "/features-page#learning",
  },
  {
    title: "Time and Attendance Management",
    description:
      "Empower your workforce with easy access to their data, boosting engagement and productivity.",
    href: "/features-page#attendance",
  },
  {
    title: "Leave and Holiday Management",
    description:
      "Empower your workforce with easy access to their data, boosting engagement and productivity.",
    href: "/features-page#holiday",
  },
];

interface FeaturesDropdownProps {
  isOpen: boolean;
}

const FeatureDropdown = ({ isOpen }: FeaturesDropdownProps) => {
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

export default FeatureDropdown;
