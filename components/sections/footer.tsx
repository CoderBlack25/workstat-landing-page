import Link from "next/link";
import Image from "next/image";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

type FooterLink = {
  label: string;
  href: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

type FooterColumn = {
  sections: FooterSection[];
};

const footerColumns: FooterColumn[] = [
  {
    sections: [
      {
        title: "Products",
        links: [
          { label: "Business Verification", href: "#" },
          { label: "Verify", href: "#" },
          { label: "Signal", href: "#" },
          { label: "TIN Match", href: "#" },
        ],
      },
      {
        title: "Credit Assessment",
        links: [
          { label: "Assess", href: "#" },
          { label: "Lien Filing", href: "#" },
        ],
      },
      {
        title: "Entity Management",
        links: [{ label: "Tax Registration", href: "#" }],
      },
    ],
  },

  {
    sections: [
      {
        title: "Solutions",
        links: [
          { label: "Use Cases", href: "#" },
          { label: "Business Verification", href: "#" },
          { label: "Credit Assessment", href: "#" },
          { label: "Entity Management", href: "#" },
        ],
      },
      {
        title: "Industries",
        links: [
          { label: "Banks", href: "#" },
          { label: "Fintechs", href: "#" },
          { label: "Lenders", href: "#" },
          { label: "Payments", href: "#" },
          { label: "Equipment Finance", href: "#" },
          { label: "Marketplaces", href: "#" },
        ],
      },
    ],
  },

  {
    sections: [
      {
        title: "Resources",
        links: [
          { label: "Resource Hub", href: "#" },
          { label: "Blog", href: "#" },
          { label: "Customer Stories", href: "#" },
          { label: "Guides", href: "#" },
          { label: "Events", href: "#" },
          { label: "Product Updates", href: "#" },
          { label: "Our Data", href: "#" },
          { label: "Help Center", href: "#" },
          { label: "Secretary of State Portals", href: "#" },
        ],
      },
      {
        title: "For Developers",
        links: [
          { label: "Overview Documentation", href: "#" },
          { label: "API Reference", href: "#" },
          { label: "API Status", href: "#" },
        ],
      },
    ],
  },

  {
    sections: [
      {
        title: "Capabilities",
        links: [
          { label: "Business Verification API", href: "#" },
          { label: "EIN Database Search", href: "#" },
          { label: "EIN Lookup API", href: "#" },
          { label: "OFAC List Search", href: "#" },
          { label: "Sanction Screening", href: "#" },
          { label: "NAICS Code Finder", href: "#" },
          { label: "SIC Code Finder", href: "#" },
          { label: "OFAC API", href: "#" },
          { label: "KYB Software", href: "#" },
          { label: "SOS Business Search", href: "#" },
          { label: "Watchlist & Sanctions API", href: "#" },
          { label: "NAICS Code API", href: "#" },
          { label: "TIN Matching Tool", href: "#" },
          { label: "PEP API", href: "#" },
          { label: "TIN Matching API", href: "#" },
          { label: "Tax Lien & UCC API", href: "#" },
          { label: "SIC Code API", href: "#" },
          { label: "Perpetual KYB", href: "#" },
          { label: "SOS API", href: "#" },
        ],
      },
    ],
  },

  {
    sections: [
      {
        title: "Company",
        links: [
          { label: "About", href: "#" },
          { label: "Careers", href: "#" },
          { label: "Partners", href: "#" },
          { label: "Contact", href: "#" },
          { label: "Press", href: "#" },
          { label: "Security", href: "#" },
        ],
      },
    ],
  },
];

const footer = () => {
  return (
    <footer className="bg-(--midnight) text-(--light-overlay)">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 font-inter text-sm">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
          <div>
            <Image
              src="/icons/timestat-logo.svg"
              alt="logo"
              width={127}
              height={127}
            />
          </div>

          {footerColumns.map((column, colIndex) => (
            <div key={colIndex} className="space-y-8">
              {column.sections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-(--off-white) mb-4 font-medium">
                    {section.title}
                  </h3>
                  <ul className="space-y-3 text-xs">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="hover:text-white hover:underline transition-colors duration-200"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="border-t border-gray-600/30 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-(--white-semi)">
          <p>© 2026 Timestat. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition">
              Terms
            </Link>
            <Link href="#" className="hover:text-white transition">
              Privacy
            </Link>
          </div>

          <div className="flex items-center gap-4 text-gray-400">
            <Link
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-(--deep-teal) hover:border-white hover:text-white transition"
            >
              <FaXTwitter size={16} />
            </Link>

            <Link
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-(--deep-teal) hover:border-white hover:text-white transition"
            >
              <FaLinkedinIn size={16} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
