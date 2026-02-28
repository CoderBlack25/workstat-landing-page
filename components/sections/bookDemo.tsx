import Link from "next/link";

const bookDemo = () => {
  return (
    <section className="w-full bg-(--deep-teal)">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h1 className="text-3xl font-medium leading-snug text-white">
            Bring structure, clarity, and control to your workforce
          </h1>

          <div className="flex flex-row items-center gap-4">
            <Link
              href="#"
              className="border border-(--primary-blue) px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Get Started
            </Link>

            <Link
              href="#"
              className="flex items-center gap-2 bg-(--brand-red) px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-pink-700"
            >
              Book a Demo
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default bookDemo;
