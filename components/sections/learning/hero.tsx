import Link from "next/link";

// import { ArrowRight } from "lucide-react";

const hero = () => {
  return (
    <section className="bg-(--soft-cloud) py-40">
      <div className="max-w-7xl mx-auto grid grid-cols-2">
        <div className="flex flex-col gap-6">
          <h2 className="font-medium text-(--charcoal)">
            Learning and training
          </h2>
          <h1 className="text-[52px] leading-tight text-(--midnight)">
            Support employee growth with structured learning
          </h1>
          <p className="font-medium text-(--slate-gray)">
            Workstat helps you create, assign, and manage training programs that
            support onboarding, upskilling, and continuous development.
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
              Get Started
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default hero;
