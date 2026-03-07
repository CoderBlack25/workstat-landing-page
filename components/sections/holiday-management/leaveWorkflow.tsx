const leaveWorkflow = () => {
  return (
    <section className="w-full bg-white py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 justify-center items-center text-center">
          <p className="font-medium text-(--charcoal)">How it works</p>

          <h2 className="text-[42px] leading-11 text-(--dark-gray)">
            Simple leave workflow
          </h2>
        </div>

        <div className="mt-20 grid gap-6 grid-cols-2">
          <div className="bg-(--extra-light) px-10 pt-10 pb-60">
            <p className="font-medium text-(--charcoal)">
              Employees submit leave requests
            </p>

            <h3 className="mt-6 text-[32px] leading-8 text-(--dark-gray)">
              Simple request submission through the system
            </h3>
          </div>

          <div className="bg-(--extra-light) px-10 pt-10 pb-60">
            <p className="font-medium text-(--charcoal)">
              Managers review and approve or reject
            </p>

            <h3 className="mt-6 text-[32px] leading-8 text-(--dark-gray)">
              Follow your organizational approval workflows
            </h3>
          </div>

          <div className="bg-(--extra-light) px-10 pt-10 pb-60">
            <p className="font-medium text-(--charcoal)">
              Leave is tracked within employee records
            </p>

            <h3 className="mt-6 text-[32px] leading-8 text-(--dark-gray)">
              Automatic updates to employee profiles
            </h3>
          </div>

          <div className="bg-(--extra-light) px-10 pt-10 pb-60">
            <p className="font-medium text-(--charcoal)">
              Data reflects in attendance and reporting
            </p>

            <h3 className="mt-6 text-[32px] leading-8 text-(--dark-gray)">
              Connected across all workforce modules
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-[1.5fr_2fr] gap-6 mt-40">
          <div className="flex flex-col gap-6">
            <p className="font-medium text-(--charcoal)">
              Complete visibility and control
            </p>
            <h1 className="text-[32px] leading-8 text-(--dark-gray)">
              Track leave balances, approvals, and employee availability in real
              time. Everything is connected to your organizational structure and
              flows into attendance and payroll automatically.
            </h1>
            <h3 className="font-medium text-(--charcoal) leading-loose">
              Automated approval workflows <br />
              Leave balance tracking <br />
              Historical records and reporting
            </h3>
          </div>

          <div className="flex flex-col gap-6 bg-(--extra-light) p-10">
            <p className="font-medium text-(--charcoal)">
              Structured Leave Management
            </p>
            <h1 className="text-[32px] leading-8 text-(--dark-gray)">
              Clear policies, consistent tracking
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default leaveWorkflow;
