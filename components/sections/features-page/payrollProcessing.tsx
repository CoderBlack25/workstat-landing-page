import Image from "next/image";
import dashboard from "@/public/images/dashboard2.png";
import { Check } from "lucide-react";

const payrollProcessing = () => {
  return (
    <section
      id="payroll"
      className="w-full bg-(--deep-teal) py-30 scroll-mt-30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-[1.5fr_2fr] items-start gap-10 text-white">
        <div className="flex flex-col space-y-4">
          <p className="font-medium">Payroll Processing</p>

          <h1 className="text-[32px] leading-snug">
            Run payroll with accuracy and confidence
          </h1>

          <h2 className="">
            Paystat simplifies payroll operations by organizing employee
            compensation and generating payroll records within a structured
            system.
          </h2>

          <h3 className="text-lg font-medium">
            Process payroll faster with fewer errors
          </h3>

          <div className="flex space-x-10 items-center justify-center">
            <ul className="space-y-4 mb-12 grow text-sm">
              <li className="flex items-center gap-3">
                <div className="bg-(--brand-red) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Manage salaries and allowances in one place</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--brand-red) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Generate accurate payment records</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--brand-red) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Reduce manual calculation errors</span>
              </li>
            </ul>

            <ul className="space-y-4 mb-12 grow text-sm">
              <li className="flex items-center gap-3">
                <div className="bg-(--brand-red) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Calculate and track deductions automatically</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--brand-red) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Maintain clear payroll documentation</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--brand-red) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Streamlined month-end processing</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-(--secondary-blue) flex justify-center items-center pt-20">
          <Image src={dashboard} alt="" className="w-150" />
        </div>
      </div>
    </section>
  );
};

export default payrollProcessing;
