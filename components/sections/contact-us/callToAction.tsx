import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";

const CallToAction = () => {
  return (
    <section className="w-full bg-(--deep-teal) text-white overflow-hidden">
      <div className="mx-auto max-w-7xl p-6">
        <div className="flex justify-between gap-6 items-center">
          <div className="max-w-4xl flex flex-col gap-2">
            <h1 className="text-[28px] font-medium leading-snug">
              Need help with an existing account?
            </h1>

            <p className="font-medium">
              If you&apos;re already a Workstat customer and need assistance,
              visit our help center or contact your dedicated support team.
            </p>
          </div>

          <div className="flex items-center">
            <Link
              href=""
              className="flex items-center gap-2 bg-(--brand-red) px-6 py-3 text-sm font-medium transition-colors hover:bg-rose-800 text-nowrap"
            >
              <p>Contact Support</p>
              <IoArrowForwardOutline />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
