import Image from "next/image";
import article from "@/public/images/article.png";

const platformOverview = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-180">
          <p className="font-medium text-(--charcoal) mb-4">
            Platform Overview
          </p>

          <h2 className="text-[44px] leading-11 text-(--dark-gray) mb-6">
            One platform. Multiple workforce solutions.
          </h2>

          <p className="leading-6 text-(--slate-gray) max-w-155">
            Workstat is designed as a modular system where each function works
            independently but becomes more powerful when combined.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-[24px] font-medium text-(--midnight)">
                Manage employees and organizational structure
              </h3>

              <div className="flex items-center">
                <div className="mt-4 h-0.5 w-82.5 bg-(--brand-red)" />
                <div className="mt-4 h-0.5 w-70 bg-(--cool-light)" />
              </div>

              <p className="mt-6 leading-6 text-(--slate-gray) max-w-130">
                Oversee the management of employees while ensuring a
                well-structured organization. This includes defining roles,
                responsibilities, and reporting lines to enhance productivity
                and collaboration within the team.
              </p>
            </div>

            <div className="space-y-6">
              <div className="pb-4 border-b-2 border-(--cool-light)">
                <h3 className="text-[24px] text-(--midnight)">
                  Track attendance and working hours in real time
                </h3>
              </div>

              <div className="pb-4 border-b-2 border-(--cool-light)">
                <h3 className="text-[24px] text-(--midnight)">
                  Process payroll with accuracy and compliance
                </h3>
              </div>

              <div className="pb-4 border-b-2 border-(--cool-light)">
                <h3 className="text-[24px] text-(--midnight)">
                  Recruit, onboard, and develop talent
                </h3>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <Image src={article} alt="" priority />
          </div>
        </div>
      </div>
    </section>
  );
};

export default platformOverview;
