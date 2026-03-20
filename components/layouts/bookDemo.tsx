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
      <div className="mx-auto max-w-7xl p-6">
        <div className="flex justify-between gap-6 items-center">
          <div className="max-w-4xl flex flex-col gap-2">
            <h1 className="text-[28px] font-medium leading-snug">{title}</h1>

            <p className="font-medium">{description}</p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={getStartedHref}
              className="border border-(--primary-blue) px-6 py-3 text-sm font-medium transition-colors hover:bg-white/10 text-nowrap"
            >
              Get Started
            </Link>

            <Link
              href={bookDemoHref}
              className="flex items-center gap-2 bg-(--brand-red) px-6 py-3 text-sm font-medium transition-colors hover:bg-rose-800 text-nowrap"
            >
              <p>Book a Demo</p>
              <IoArrowForwardOutline />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;
