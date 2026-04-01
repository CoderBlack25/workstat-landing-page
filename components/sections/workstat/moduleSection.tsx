import Image, { StaticImageData } from "next/image";
import image1 from "@/public/images/image1.png";
import image2 from "@/public/images/image2.png";
import image3 from "@/public/images/image3.png";
import image4 from "@/public/images/image4.png";
import image5 from "@/public/images/image5.png";
import image6 from "@/public/images/image6.png";
import image7 from "@/public/images/image7.png";
import image8 from "@/public/images/image8.png";
import image9 from "@/public/images/image9.png";

type Module = {
  title: string;
  description: string;
  image: StaticImageData;
  width: number;
  height: number;
};

const modules: Module[] = [
  {
    title: "Employee Management (HRIS)",
    description:
      "Maintain complete employee records, manage onboarding and offboarding, and organize your workforce with structured data and workflows.",
    image: image1,
    width: 147,
    height: 147,
  },
  {
    title: "Recruitment (ATS)",
    description:
      "Create job postings, track candidates, manage interviews, and streamline hiring from application to onboarding.",
    image: image2,
    width: 137,
    height: 137,
  },
  {
    title: "Time & Attendance (Timestat)",
    description:
      "Track employee attendance, shifts, and working hours with real-time visibility and structured controls.",
    image: image3,
    width: 109,
    height: 109,
  },
  {
    title: "Payroll Processing (Paystat)",
    description:
      "Automate payroll calculations, manage compensation, and ensure compliance with structured payroll workflows.",
    image: image4,
    width: 109,
    height: 109,
  },

  {
    title: "Performance Management",
    description:
      "Track employee performance, evaluate progress, and support growth with measurable insights.",
    image: image5,
    width: 148,
    height: 148,
  },
  {
    title: "Leave & Holiday Management",
    description:
      "Manage leave requests, approvals, and employee availability across your organization.",
    image: image6,
    width: 173,
    height: 173,
  },
  {
    title: "Learning & Training",
    description:
      "Assign training programs, track progress, and support employee development through structured learning systems.",
    image: image7,
    width: 182,
    height: 182,
  },
  {
    title: "Organogram",
    description:
      "Visualize and manage your entire organizational structure with a dynamic, interactive hierarchy.",
    image: image8,
    width: 168,
    height: 168,
  },
  {
    title: "Employee Self-Service",
    description:
      "Give employees access to their records, payroll, attendance, and communication tools in one place.",
    image: image9,
    width: 196,
    height: 196,
  },
];

const ModuleSelection = () => {
  return (
    <section className="w-full bg-white py-12 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm md:text-base text-left md:text-center font-medium text-(--charcoal)">
          Module selection
        </p>

        <h2 className="mt-4 md:mt-6 text-left md:text-center text-2xl md:text-4xl lg:text-[40px] leading-tight text-(--dark-gray)">
          Start with what you need.Expand when you’re ready.
        </h2>
      </div>

      <div className="mt-10 md:mt-20 marquee group">
        <div className="marquee-track gap-6 md:gap-8 px-6 group-hover:[animation-play-state:paused]">
          {[...modules, ...modules].map((module, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-6 md:pl-7 md:pr-20 md:py-7 bg-(--extra-light) rounded-2xl"
            >
              <div>
                <p className="font-medium text-xs md:text-sm uppercase tracking-wider text-(--charcoal) mb-2">
                  {module.title}
                </p>
                <h3 className="text-lg md:text-2xl lg:text-[28px] leading-snug text-(--dark-gray) max-w-70 md:max-w-xl">
                  {module.description}
                </h3>
              </div>

              <div className="flex justify-center items-center mt-8 md:mt-12">
                <Image
                  src={module.image}
                  width={module.width}
                  height={module.height}
                  alt={module.title}
                  sizes="(max-width: 768px) 280px, 500px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModuleSelection;
