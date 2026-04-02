import Link from "next/link";
import Image from "next/image";
import { LuLinkedin, LuInstagram } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";
import workstat from "@/public/icons/workstat-logo.svg";

const date = new Date();

const productLinks = [
  { label: "Workstat", href: "/" },
  { label: "Paystat", href: "/paystat" },
  { label: "Timestat", href: "/timestat" },
];

const featuresLinks = [
  { label: "Employee Self-Service", href: "/features-page#employee" },
  { label: "Human Resource Management ", href: "/features-page#HRM" },
  { label: "Payroll Processing", href: "/features-page#payroll" },
  {
    label: "Learning- Training & Orientation",
    href: "/features-page#learning",
  },
  {
    label: "Time and Attendance Management",
    href: "/features-page#attendance",
  },
  { label: "Leave and Holiday Management", href: "/features-page#holiday" },
];

const companyLinks = [{ label: "About Us", href: "/about" }];

const supportLinks = [{ label: "Contact Us", href: "/contact-us" }];

const socialLinks = [
  { icon: LuLinkedin, href: "https://www.linkedin.com/company/workstat/" },
  { icon: RiTwitterXLine, href: "https://x.com/Workstatco" },
  { icon: LuInstagram, href: "https://www.instagram.com/workstatco/" },
];

const Footer = () => {
  return (
    <footer className="bg-(--midnight) text-(--light-overlay)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 sm:pt-16 lg:pt-20 pb-10 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[3fr_1fr_1fr_1fr_1fr] gap-8 sm:gap-10">
          <div className="space-y-5 sm:space-y-6 max-w-sm">
            <Image src={workstat} alt="Logo" className="w-28 sm:w-32" />

            <p className="leading-relaxed text-(--white-semi) text-sm sm:text-base">
              Workstat brings together employee management, attendance tracking,
              payroll processing, recruitment, and performance tools into one
              connected system.
            </p>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-(--ash) text-white hover:bg-(--deep-teal) transition"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 sm:mb-6">Product</h3>
            <ul className="space-y-3 sm:space-y-4 text-sm">
              {productLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-(--white-semi) hover:text-white transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 sm:mb-6">Features</h3>
            <ul className="space-y-3 sm:space-y-4 text-sm">
              {featuresLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-(--white-semi) hover:text-white transition wrap-break-word"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 sm:mb-6">Company</h3>
            <ul className="space-y-3 sm:space-y-4 text-sm">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-(--white-semi) hover:text-white transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 sm:mb-6">Support</h3>
            <ul className="space-y-3 sm:space-y-4 text-sm">
              {supportLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-(--white-semi) hover:text-white transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600/30 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-(--white-semi) text-center md:text-left">
          <p>© {date.getFullYear()} Workstat. All rights reserved.</p>

          <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6">
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
