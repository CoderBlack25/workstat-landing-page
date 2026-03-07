const organizeEmployee = () => {
  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 mb-14">
          <p className="font-medium text-(--charcoal)">
            Workstat organizes employees
          </p>
          <h2 className="text-[44px] text-(--dark-gray) leading-tight">
            Built around how organizations actually operate
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-(--soft-cloud) px-5 pt-5 pb-60">
            <h2 className="text-[24px] text-(--midnight)">
              Positions and reporting lines
            </h2>
            <p className="text-(--slate-gray)">Clear hierarchical structure</p>
          </div>

          <div className="bg-(--soft-pink) px-5 pt-5 pb-60">
            <h2 className="text-[24px] text-(--midnight)">
              Department and units
            </h2>
            <p className="text-(--slate-gray)">Organized team structure</p>
          </div>

          <div className="bg-(--soft-cloud) px-5 pt-5 pb-60">
            <h2 className="text-[24px] text-(--midnight)">
              Organizational hierarchy
            </h2>
            <p className="text-(--slate-gray)">Structured relationships</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default organizeEmployee;
