import Image from "next/image";
import emptystate from "@/public/images/empty-state.png";
import { Check } from "lucide-react";

const humanResource = () => {
  return (
    <section
      id="HRM"
      className="w-full bg-white py-30 scroll-mt-30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-[2fr_1.5fr] items-start gap-10">
        <div className="bg-(--extra-light)  flex justify-center items-center pt-20">
          <Image src={emptystate} alt="" className="w-150" />
        </div>

        <div className="flex flex-col space-y-4">
          <p className="font-medium text-(--slate-gray)">
            Human Resource Management System
          </p>

          <h1 className="text-[32px] text-(--dark-gray) leading-snug">
            Manage your workforce with clarity and structure
          </h1>

          <h2 className="text-(--slate-gray)">
            Workstat&apos;s Human Resource Management System centralizes
            employee data and helps organizations maintain clear records, roles,
            and reporting structures.
          </h2>

          <h3 className="text-lg font-medium text-(--charcoal)">
            Keep employee information organized and accessible
          </h3>

          <div className="flex space-x-10 items-center justify-center">
            <ul className="space-y-4 mb-12 grow text-sm text-(--dark-gray)">
              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Centralized employee database</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Manage employee records and transitions</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Maintain consistent workforce data</span>
              </li>
            </ul>

            <ul className="space-y-4 mb-12 grow text-sm text-(--dark-gray)">
              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Streamlined onboarding process for new hires</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Clear organizational structure and reporting lines</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Easy access across the organization</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default humanResource;
