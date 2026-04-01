import Link from "next/link";
import Image from "next/image";
import { LuLinkedin, LuFacebook } from "react-icons/lu";
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
  { icon: RiTwitterXLine, href: "https://www.instagram.com/workstatco/" },
  { icon: LuFacebook, href: "https://x.com/Workstatco" },
];

const Footer = () => {
  return (
    <footer className="bg-(--midnight) text-(--light-overlay)">
      <div className="max-w-7xl mx-auto pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[3fr_1fr_1fr_1fr_1fr] gap-10">
          <div className="space-y-6 max-w-sm">
            <Image src={workstat} alt="Logo" className="w-32" />

            <p className="leading-relaxed text-(--white-semi)">
              Workstat brings together employee management, attendance tracking,
              payroll processing, recruitment, and performance tools into one
              connected system.
            </p>

            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-(--ash) text-white hover:bg-(--deep-teal) transition"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Product</h3>
            <ul className="space-y-4 text-sm">
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
            <h3 className="text-white font-semibold mb-6">Features</h3>
            <ul className="space-y-4 text-sm text-nowrap">
              {featuresLinks.map(({ label, href }) => (
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
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
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
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-4 text-sm">
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

        <div className="border-t border-gray-600/30 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-(--white-semi)">
          <p>© {date.getFullYear()} Workstat. All rights reserved.</p>

          <div className="flex gap-6">
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
