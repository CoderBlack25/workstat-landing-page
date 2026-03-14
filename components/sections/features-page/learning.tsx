import Image from "next/image";
import dashboard from "@/public/images/learning-dashboard.png";
import { Check } from "lucide-react";

const Learning = () => {
  return (
    <section
      id="learning"
      className="w-full bg-white py-30 scroll-mt-30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-[2fr_1.5fr] items-start gap-10">
        <div className="bg-(--extra-light)  flex justify-center items-center pt-20">
          <Image src={dashboard} alt="" className="w-150" />
        </div>

        <div className="flex flex-col space-y-4">
          <p className="font-medium text-(--slate-gray)">
            Learning &ndash; Training & Orientation
          </p>

          <h1 className="text-[32px] text-(--dark-gray) leading-snug">
            Support employee growth through structured learning
          </h1>

          <h2 className="text-(--slate-gray)">
            Workstat enables organizations to create and manage training
            programs that support onboarding, skill development, and
            professional growth.
          </h2>

          <h3 className="text-lg font-medium text-(--charcoal)">
            Encourage continuous learning across your workforce
          </h3>

          <div className="flex space-x-10 items-center justify-center">
            <ul className="space-y-4 mb-12 grow text-sm text-(--dark-gray)">
              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Create and assign training programs</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Support effective onboarding processes</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Develop skills needed for success</span>
              </li>
            </ul>

            <ul className="space-y-4 mb-12 grow text-sm text-(--dark-gray)">
              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Track employee progress and completion</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Provide access to learning resources</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Monitor professional development</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learning;
