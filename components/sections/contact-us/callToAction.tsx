import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";

const CallToAction = () => {
  return (
    <section className="w-full bg-(--deep-teal) text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div
          className="
      flex flex-col 
      lg:flex-row 
      lg:items-center 
      lg:justify-between 
      gap-6 lg:gap-10
    "
        >
          <div className="max-w-4xl flex flex-col gap-3 text-center lg:text-left">
            <h1 className="text-xl sm:text-2xl lg:text-[28px] font-medium leading-snug">
              Need help with an existing account?
            </h1>

            <p className="font-medium text-sm sm:text-base text-white/90">
              If you&apos;re already a Workstat customer and need assistance,
              visit our help center or contact your dedicated support team.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Link
              href=""
              className="
            flex items-center gap-2 
            bg-(--brand-red) 
            px-5 sm:px-6 
            py-2.5 sm:py-3 
            text-sm font-medium 
            transition-colors 
            hover:bg-rose-800 
            whitespace-nowrap
         
          "
            >
              <span>Contact Support</span>
              <IoArrowForwardOutline />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
