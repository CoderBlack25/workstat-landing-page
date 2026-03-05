import Link from "next/link";

// import { ArrowRight } from "lucide-react";

const hero = () => {
  return (
    <section className="bg-(--midnight) text-white py-30">
      <div className="max-w-7xl mx-auto grid grid-cols-2">
        <div className="flex flex-col gap-6">
          <h1 className="text-[52px] leading-tight">
            Manage your entire workforce from one unified platform
          </h1>
          <p className="font-medium">
            Workstat brings together employee management, attendance tracking,
            payroll processing, recruitment, and performance tools into one
            connected system—so your team can operate efficiently from hire to
            retirement.
          </p>
          <div className="flex flex-row items-center gap-4">
            <Link
              href="#"
              className="flex items-center gap-2 bg-(--brand-red) px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-pink-700"
            >
              Book a Demo
            </Link>

            <Link
              href="#"
              className="border border-(--primary-blue) px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Get Started
            </Link>
          </div>
          <p className="mt-6 font-medium text-(--light-overlay)">
            Built for organizations that want clarity, control, and scale in
            workforce management.
          </p>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default hero;
