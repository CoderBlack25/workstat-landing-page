const managePayroll = () => {
  return (
    <section className="w-full bg-white py-28">
      <div className="mx-auto max-w-7xl">
        <div className="">
          <h2 className="mt-6 text-[44px] leading-11 text-(--dark-gray) text-center">
            Spend less time on payroll. Gain more confidence in every cycle.
          </h2>
        </div>

        <div className="mt-20 grid gap-6 grid-cols-2">
          <div className="bg-(--extra-light) px-10 pt-10 pb-60">
            <p className="font-medium text-(--charcoal)">
              SMEs (Small Medium Enterprises)
            </p>

            <h3 className="mt-6 text-[32px] leading-8 text-(--dark-gray)">
              Process payroll faster without manual calculations
            </h3>
          </div>

          <div className="bg-(--rose-light) px-10 pt-10 pb-60">
            <p className="font-medium text-(--charcoal)">Large Enterprises</p>

            <h3 className="mt-6 text-[32px] leading-8 text-(--dark-gray)">
              Maintain accurate and consistent employee records
            </h3>
          </div>

          <div className="bg-(--rose-light) px-10 pt-10 pb-60">
            <p className="font-medium text-(--charcoal)">Large Enterprises</p>

            <h3 className="mt-6 text-[32px] leading-8 text-(--dark-gray)">
              Keep full visibility into every payment made
            </h3>
          </div>

          <div className="bg-(--extra-light) px-10 pt-10 pb-60">
            <p className="font-medium text-(--charcoal)">
              SMEs (Small Medium Enterprises)
            </p>

            <h3 className="mt-6 text-[32px] leading-8 text-(--dark-gray)">
              Reduce costly errors and rework
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default managePayroll;
