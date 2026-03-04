import Link from "next/link";

// import { ArrowRight } from "lucide-react";

const hero = () => {
  return (
    <section className="bg-(--soft-cloud)">
      <div className="max-w-7xl mx-auto grid grid-cols-2 pb-30 pt-20">
        <div className="flex flex-col gap-6">
          <h1 className="text-[52px] leading-tight text-(--midnight)">
            Accurate & Efficient Employee Attendance tracking & Management
            Solution
          </h1>
          <p className="font-medium text-(--slate-gray)">
            Say goodbye to manual tracking, employee inefficiency, ghost
            employees, low productivity, and unaccountability in your workplace.
            Timestat simplifies how organizations track and manage employees’
            attendance, leaves, shifts, and more.
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
              className="border border-(--light-gray) bg-white px-6 py-3 text-sm font-medium text-(--slate-gray) transition-colors hover:bg-white/10"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default hero;
