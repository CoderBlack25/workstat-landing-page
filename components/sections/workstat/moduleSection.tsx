import Image, { StaticImageData } from "next/image";
import hris from "@/public/images/hris.png";
import ats from "@/public/images/ats.png";
import timestat from "@/public/images/timestat.png";
import paystat from "@/public/images/paystat.png";
import performance from "@/public/images/performance.png";
import leave from "@/public/images/leave.png";
import training from "@/public/images/training.png";
import organogram from "@/public/images/organogram.png";
import employee from "@/public/images/employee.png";

type Module = {
  title: string;
  subtitle: string;
  image: StaticImageData;
};

const modules: Module[] = [
  {
    title: "Employee Management (HRIS)",
    subtitle:
      "Maintain complete employee records, manage onboarding and offboarding, and organize your workforce with structured data and workflows.",
    image: hris,
  },
  {
    title: "Recruitment (ATS)",
    subtitle:
      "Create job postings, track candidates, manage interviews, and streamline hiring from application to onboarding.",
    image: ats,
  },
  {
    title: "Time & Attendance (Timestat)",
    subtitle:
      "Track employee attendance, shifts, and working hours with real-time visibility and structured controls.",
    image: timestat,
  },
  {
    title: "Payroll",
    subtitle:
      "Automate payroll calculations, ensure compliance, and manage payments with accurate and auditable processes.",
    image: paystat,
  },

  {
    title: "Performance Management",
    subtitle:
      "Track employee performance, evaluate progress, and support growth with measurable insights.",
    image: performance,
  },
  {
    title: "Leave & Holiday Management",
    subtitle:
      "Manage leave requests, approvals, and employee availability across your organization.",
    image: leave,
  },
  {
    title: "Learning & Training",
    subtitle:
      "Assign training programs, track progress, and support employee development through structured learning systems.",
    image: training,
  },
  {
    title: "Organogram",
    subtitle:
      "Visualize and manage your entire organizational structure with a dynamic, interactive hierarchy.",
    image: organogram,
  },
  {
    title: "Employee Self-Service",
    subtitle:
      "Give employees access to their records, payroll, attendance, and communication tools in one place.",
    image: employee,
  },
];

const ModuleSelection = () => {
  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl">
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
            <div
              key={index}
              className="flex flex-col space-y-4 min-w-105 max-w-155 bg-(--extra-light) px-5 pt-5"
            >
              <p className="font-medium text-(--charcoal)">{module.title}</p>

              <p className="text-[28px] text-(--dark-gray)">
                {module.subtitle}
              </p>
              <div className="flex justify-center items-center mt-8">
                <Image src={module.image} alt="" className="w-30 h-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModuleSelection;
