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
          <div className="bg-(--soft-blue) px-10 pt-10 pb-30 flex flex-col justify-start gap-4">
            <span className="text-sm text-(--slate-gray)">
              Complex staff/people management
            </span>
            <h3 className="text-2xl text-(--midnight)">
              Managing people shouldn’t require multiple disconnected tools
            </h3>
            <p className="text-(--slate-gray)">
              Most organizations rely on separate systems for HR, attendance,
              payroll, and performance—leading to duplicated data, manual
              processes, and costly errors.
            </p>
          </div>

          <div className="bg-(--rose-light) px-10 pt-10 pb-30 flex flex-col justify-start gap-4">
            <span className="text-sm text-(--slate-gray)">Multiple Tools</span>
            <h3 className="text-2xl text-(--midnight)">
              Workstat replaces fragmented systems with a single, connected
              platform
            </h3>
            <p className="text-(--slate-gray)">
              From onboarding new employees to processing payroll and tracking
              performance, every workflow is structured, automated, and
              centralized.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default solutionSection;
