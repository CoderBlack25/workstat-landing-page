const integrationSection = () => {
  const items = [
    "Attendance feeds into payroll",
    "Organizational structure drives approvals",
    "Performance and training connect to employee growth",
  ];

  return (
    <section className="w-full bg-(--white) font-inter">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-40">
          <p className="text-(--dark-navy) font-medium mb-6">
            Integration of modules
          </p>

          <h1 className="text-[44px] leading-[1.1] text-(--dark-gray) mb-16">
            Everything works better together
          </h1>

          <p className="text-(--dark-navy) font-medium mb-8">
            Employee data flows across all modules:
          </p>

          <div className="space-y-0">
            {items.map((text, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-(--light-gray) py-6"
              >
                <div className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-[#8fa7b3] block" />

                  <span className="text-2xl text-(--dark-gray)">{text}</span>
                </div>

                <span className="text-(--dark-navy) font-medium whitespace-nowrap">
                  Employee data flows across all modules:
                </span>
              </div>
            ))}
          </div>

          <p className="mt-10 text-(--dark-navy)">
            No duplication. No inconsistencies.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-(--charcoal) font-medium">Who it&apos;s for</p>
          <h1 className="text-(--dark-gray) text-[44px]">
            Designed for organizations of all sizes
          </h1>
          <div className="flex gap-10">
            <div className="bg-(--almost-white) p-50" />
            <div className="bg-(--almost-white) p-50" />
            <div className="bg-(--almost-white) p-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default integrationSection;
