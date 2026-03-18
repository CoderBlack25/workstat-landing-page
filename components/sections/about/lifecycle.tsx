import Image from "next/image";
import icon1 from "@/public/icons/lifecycle1.svg";
import icon2 from "@/public/icons/lifecycle2.svg";
import icon3 from "@/public/icons/lifecycle3.svg";
import icon4 from "@/public/icons/lifecycle4.svg";
import icon5 from "@/public/icons/lifecycle5.svg";
import hris from "@/public/images/hris.png";

const Lifecycle = () => {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col space-y-2 text-(--charcoal) font-medium">
          <p>A complete workforce management system</p>
          <h1 className="text-(--dark-gray) text-[40px]">
            Workstat provides a unified system that supports every stage of the
            employee lifecycle:
          </h1>
          <h3>
            Each part of the system works independently, but becomes more
            powerful when used together.
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-14 text-(--slate-gray) text-lg">
          <div className="grid grid-rows-2 gap-4">
            <div className="flex flex-col space-y-4 border border-[#E5E7EB] p-10">
              <Image src={icon1} alt="" />
              <p>Hiring and onboarding</p>
            </div>
            <div className="flex flex-col space-y-4 border border-[#E5E7EB] p-10">
              <Image src={icon4} alt="" />
              <p>Payroll processing and compensation</p>
            </div>
          </div>

          <div className="flex flex-col space-y-4 border border-[#E5E7EB] p-10">
            <Image src={icon2} alt="" />
            <p>Employee management and organization</p>
            <div className="flex justify-center items-center mt-10">
              <Image src={hris} alt="" className="w-35" />
            </div>
          </div>

          <div className="grid grid-rows-2 gap-4">
            <div className="flex flex-col space-y-4 border border-[#E5E7EB] p-10">
              <Image src={icon3} alt="" />
              <p>Attendance tracking and time management</p>
            </div>
            <div className="flex flex-col space-y-4 border border-[#E5E7EB] p-10">
              <Image src={icon5} alt="" />
              <p>Performance tracking and development</p>
            </div>
          </div>
        </div>
      </div>
      ;
    </section>
  );
};

export default Lifecycle;
