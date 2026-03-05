const solutionSection = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="font-medium text-(--charcoal) block mb-4">
            Solutions
          </span>
          <h2 className="text-[44px] leading-11 text-(--dark-gray) max-w-2xl">
            Manage people through a single connected platform
          </h2>
        </div>

        <div className="grid grid-cols-[2fr_1fr] gap-6">
          <div className="bg-(--soft-blue) p-10 flex flex-col justify-start gap-4 text-(--slate-gray)">
            <span className="text-sm">Complex staff/people management</span>
            <h3 className="text-2xl text-(--midnight)">
              Managing people shouldn’t require multiple <br /> disconnected
              tools
            </h3>
            <p className="mb-4">
              Most organizations rely on separate systems for HR, attendance,
              payroll, and <br /> performance—leading to duplicated data, manual
              processes, and costly errors.
            </p>
            <p>Disconnected systems and data silos</p>
            <p>Manual processes and duplication</p>
            <p>Costly errors and inconsistencies</p>
          </div>

          <div className="bg-(--rose-light) p-10 flex flex-col justify-start gap-4 text-(--slate-gray)">
            <span className="text-sm">Multiple Tools</span>
            <h3 className="text-2xl text-(--midnight)">
              Workstat replaces fragmented systems with a single, connected
              platform
            </h3>
            <p className="mb-4">
              From onboarding new employees to processing payroll and tracking
              performance, every workflow is structured, automated, and
              centralized.
            </p>
            <p>Single, connected platform</p>
            <p>Structured and automated workflows</p>
            <p>Centralized data and processes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default solutionSection;
