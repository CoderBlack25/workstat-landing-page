import Image from "next/image";
import dashboard from "@/public/images/dashboard3.png";
import { Check } from "lucide-react";

const attendanceManagement = () => {
  return (
    <section
      id="attendance"
      className="w-full bg-white py-30 scroll-mt-30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-[1.5fr_2fr] items-start gap-10">
        <div className="flex flex-col space-y-4">
          <p className="font-medium text-(--slate-gray)">
            Time & Attendance Management
          </p>

          <h1 className="text-[32px] text-(--dark-gray) leading-snug">
            Track attendance with accuracy and real-time visibility
          </h1>

          <h2 className="text-(--slate-gray)">
            Timestat helps organizations monitor employee attendance and working
            hours while maintaining reliable workforce records.
          </h2>

          <h3 className="text-lg font-medium text-(--charcoal)">
            Improve workforce accountability
          </h3>

          <div className="flex space-x-10 items-center justify-center">
            <ul className="space-y-4 mb-12 grow text-sm text-(--dark-gray)">
              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Real-time clock-in and clock-out tracking</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Maintain accurate time records</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Improve operational oversight</span>
              </li>
            </ul>

            <ul className="space-y-4 mb-12 grow text-sm text-(--dark-gray)">
              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Monitor attendance across all teams</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Support payroll calculations</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Generate attendance reports</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-(--extra-light) flex justify-center items-center pt-20">
          <Image src={dashboard} alt="" className="w-150" />
        </div>
      </div>
    </section>
  );
};

export default attendanceManagement;
