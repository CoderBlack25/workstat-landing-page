import Link from "next/link";
import Image from "next/image";
import timestat1 from "@/public/images/timestat1.png";
import timestat2 from "@/public/images/timestat2.png";
import timestat3 from "@/public/images/timestat3.png";
import timestat4 from "@/public/images/timestat4.png";
import timestat5 from "@/public/images/timestat5.png";
import timestat6 from "@/public/images/timestat6.png";

const tryTimestat = () => {
  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 mb-14">
          <p className="font-medium text-(--charcoal)">Solutions</p>
          <h2 className="text-[44px] text-(--dark-gray) leading-tight">
            Track Time Accurately. Improve Discipline. Increase Productivity.
          </h2>
        </div>

        <div className="grid grid-cols-3 grid-row-2 gap-6 mb-35">
          <div>
            <Image src={timestat1} alt="" />
          </div>
          <div>
            <Image src={timestat2} alt="" />
          </div>
          <div>
            <Image src={timestat3} alt="" />
          </div>
          <div>
            <Image src={timestat4} alt="" />
          </div>
          <div>
            <Image src={timestat5} alt="" />
          </div>
          <div>
            <Image src={timestat6} alt="" />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <p className="font-medium text-(--charcoal)">
            Dump the the manual registers
          </p>
          <h2 className="text-[36px] text-(--dark-gray) leading-tight">
            Adopt the modern and efficient <br /> way of tracking attendance
          </h2>
          <Link href="" className="font-medium text-(--charcoal) underline">
            Try Timestat
          </Link>
        </div>
      </div>
    </section>
  );
};

export default tryTimestat;
