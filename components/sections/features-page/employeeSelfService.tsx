import Image from "next/image";
import dashboard from "@/public/images/dashboard.png";
import { Check } from "lucide-react";

const employeeSelfService = () => {
  return (
    <section
      id="employee"
      className="w-full bg-white py-30 scroll-mt-30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-[1.5fr_2fr] items-start gap-10">
        <div className="flex flex-col space-y-4">
          <p className="font-medium text-(--slate-gray)">
            Employee Self-Service
          </p>

          <h1 className="text-[32px] text-(--dark-gray) leading-snug">
            Give employees direct access to the information they need
          </h1>

          <h2 className="text-(--slate-gray)">
            Workstat&apos;s Employee Self-Service allows employees to access
            their records, track activity, and stay informed without relying on
            HR for routine requests.
          </h2>

          <h3 className="text-lg font-medium text-(--charcoal)">
            Reduce manual requests and improve transparency
          </h3>

          <div className="flex space-x-10 items-center justify-center">
            <ul className="space-y-4 mb-12 grow text-sm text-(--dark-gray)">
              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>View personal records instantly</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Access payment history and payslips</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Receive company updates directly from dashboard</span>
              </li>
            </ul>

            <ul className="space-y-4 mb-12 grow text-sm text-(--dark-gray)">
              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Track attendance and work hours</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Manage leave requests digitally</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Update personal information independently</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-(--extra-light) flex justify-center items-center pt-20">
          <Image src={dashboard} alt="" className="w-50" />
        </div>
      </div>
    </section>
  );
};

export default employeeSelfService;
