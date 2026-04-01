import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";

type BookDemoProps = {
  title: string;
  description: string;
  getStartedHref: string;
  bookDemoHref: string;
};

const BookDemo = ({
  title,
  description,
  getStartedHref,
  bookDemoHref,
}: BookDemoProps) => {
  return (
    <section className="w-full bg-(--deep-teal) text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10">
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:items-center">
          <div className="max-w-4xl flex flex-col gap-2">
            <h1 className="text-xl sm:text-2xl lg:text-[28px] font-medium leading-snug">
              {title}
            </h1>

            <p className="font-medium text-sm sm:text-base">{description}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full lg:w-auto">
            <Link
              href={getStartedHref}
              className="border border-(--primary-blue) px-5 sm:px-6 py-3 text-sm font-medium transition-colors hover:bg-white/10 text-center whitespace-nowrap"
            >
              Get Started
            </Link>

            <Link
              href={bookDemoHref}
              className="flex items-center justify-center gap-2 bg-(--brand-red) px-5 sm:px-6 py-3 text-sm font-medium transition-colors hover:bg-rose-800 whitespace-nowrap"
            >
              <span>Book a Demo</span>
              <IoArrowForwardOutline />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;
