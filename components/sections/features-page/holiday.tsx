import Image from "next/image";
import dashboard from "@/public/images/leave-dashboard.png";
import { Check } from "lucide-react";

const holiday = () => {
  return (
    <section
      id="holiday"
      className="w-full bg-white py-30 scroll-mt-30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-[2fr_1.5fr] items-start gap-10">
        <div className="bg-(--extra-light)  flex justify-center items-center pt-20">
          <Image src={dashboard} alt="" className="w-150" />
        </div>

        <div className="flex flex-col space-y-4">
          <p className="font-medium text-(--slate-gray)">
            Leave & Holiday Management
          </p>

          <h1 className="text-[32px] text-(--dark-gray) leading-snug">
            Manage leave requests with clarity and control
          </h1>

          <h2 className="text-(--slate-gray)">
            Workstat provides a structured system for submitting, reviewing, and
            tracking employee leave across the organization.
          </h2>

          <h3 className="text-lg font-medium text-(--charcoal)">
            Simplify approvals and maintain accurate records
          </h3>

          <div className="flex space-x-10 items-center justify-center">
            <ul className="space-y-4 mb-12 grow text-sm text-(--dark-gray)">
              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Digital leave application process</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Clear visibility into team availability</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Maintain comprehensive leave history</span>
              </li>
            </ul>

            <ul className="space-y-4 mb-12 grow text-sm text-(--dark-gray)">
              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Manager review and approval workflow</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Track leave balances automatically</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Plan resource allocation effectively</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default holiday;
