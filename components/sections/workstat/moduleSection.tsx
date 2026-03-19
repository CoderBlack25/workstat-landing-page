import Image, { StaticImageData } from "next/image";
import hris from "@/public/images/hris2.png";
import ats from "@/public/images/ats.png";
import timestat from "@/public/images/timestat.png";
import paystat from "@/public/images/paystat.png";
import performance from "@/public/images/performance.png";
import leave from "@/public/images/leave.png";
import training from "@/public/images/training.png";
import organogram from "@/public/images/organogram.png";
import employee from "@/public/images/employee.png";

type Module = {
  image: StaticImageData;
};

const modules: Module[] = [
  {
    image: hris,
  },
  {
    image: ats,
  },
  {
    image: timestat,
  },
  {
    image: paystat,
  },

  {
    image: performance,
  },
  {
    image: leave,
  },
  {
    image: training,
  },
  {
    image: organogram,
  },
  {
    image: employee,
  },
];

const ModuleSelection = () => {
  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center font-medium text-(--charcoal)">
          Module selection
        </p>

        <h2 className="mt-6 text-center text-[40px] text-(--dark-gray)">
          Start with what you need. Expand when you’re ready.
        </h2>
      </div>

      <div className="mt-20 marquee">
        <div className="marquee-track gap-8 px-6">
          {[...modules, ...modules].map((module, index) => (
            <div key={index}>
              <Image src={module.image} alt="" className="w-150" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModuleSelection;
