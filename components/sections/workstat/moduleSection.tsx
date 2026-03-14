type Module = {
  title: string;
  subtitle: string;
  description: string;
};

const modules: Module[] = [
  {
    title: "Employee Management (HRIS)",
    subtitle:
      "Maintain complete employee records, manage onboarding and offboarding, and organize your workforce with structured data and workflows.",
    description: "",
  },
  {
    title: "Recruitment (ATS)",
    subtitle:
      "Create job postings, track candidates, manage interviews, and streamline hiring from application to onboarding.",
    description: "",
  },
  {
    title: "Time & Attendance (Timestat)",
    subtitle:
      "Track employee attendance, shifts, and working hours with real-time visibility and structured controls.",
    description: "",
  },
  {
    title: "Payroll",
    subtitle:
      "Automate payroll calculations, ensure compliance, and manage payments with accurate and auditable processes.",
    description: "",
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
              className="min-w-105 max-w-155 bg-(--extra-light) px-5 pt-5 pb-50"
            >
              <p className="font-medium text-(--charcoal)">{module.title}</p>

              <p className="mt-6 text-[28px] text-(--dark-gray)">
                {module.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModuleSelection;
