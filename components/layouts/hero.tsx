import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";

type HeroProps = {
  title: string;
  heading: string;
  description: string;
  secondbutton: string;
};

const Hero = ({ title, heading, description, secondbutton }: HeroProps) => {
  return (
    <section className="bg-(--soft-cloud) py-40 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-20 grid grid-cols-2">
        <div className="flex flex-col gap-6">
          <h2 className="font-medium text-(--charcoal)">{title}</h2>
          <h1 className="text-[52px] leading-tight text-(--midnight)">
            {heading}
          </h1>
          <p className="font-medium text-(--slate-gray)">{description}</p>
          <div className="flex flex-row items-center gap-4">
            <Link
              href="#"
              className="flex items-center gap-2 bg-(--brand-red) px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-pink-700"
            >
              <p>Book a Demo</p>

              <IoArrowForwardOutline />
            </Link>

            <Link
              href="#"
              className="flex items-center gap-2 border border-(--light-gray) bg-white px-6 py-3 text-sm font-medium text-(--slate-gray) transition-colors hover:bg-white/10"
            >
              {secondbutton}

              <IoArrowForwardOutline />
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Hero;
