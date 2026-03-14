import Image from "next/image";
import dashboard from "@/public/images/performance-dashboard.png";
import { Check } from "lucide-react";

const PerformanceManagement = () => {
  return (
    <section
      id="performance"
      className="w-full bg-(--primary-blue) py-30 scroll-mt-30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-[1.5fr_2fr] items-start gap-10 text-white">
        <div className="flex flex-col space-y-4">
          <p className="font-medium">Performance Management</p>

          <h1 className="text-[32px] leading-snug">
            Track performance and support employee growth
          </h1>

          <h2 className="">
            Workstat helps organisations evaluate employee performance and
            monitor development across teams.
          </h2>

          <h3 className="text-lg font-medium">
            Make informed workforce decisions
          </h3>

          <div className="flex space-x-10 items-center justify-center">
            <ul className="space-y-4 mb-12 grow text-sm">
              <li className="flex items-center gap-3">
                <div className="bg-(--brand-red) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Structured performance evaluation process</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--brand-red) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Support employee growth initiatives</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--brand-red) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>
                  Align individual goals with organizational objectives
                </span>
              </li>
            </ul>

            <ul className="space-y-4 mb-12 grow text-sm">
              <li className="flex items-center gap-3">
                <div className="bg-(--brand-red) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Monitor development across teams</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--brand-red) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Track key performance indicators</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--brand-red) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Generate insights for better workforce decisions</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-(--tertiary-blue) flex justify-center items-center pt-20">
          <Image src={dashboard} alt="" className="w-150" />
        </div>
      </div>
    </section>
  );
};

export default PerformanceManagement;
