const setupDetails = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="flex flex-col gap-30 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-[44px] text-(--dark-gray) leading-tight">
              Built for control, without complexity
            </h1>
            <p className="font-medium text-(--charcoal)">
              Manage payroll from a single dashboard. Designed to give you
              clarity when it matters most.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col gap-4">
              <p className="font-medium text-(--charcoal)">
                Review and Approve
              </p>
              <h2 className="text-[32px] text-(--charcoal)">
                Catch errors before they happen. Review every detail and approve
                payments with a single click before processing begins.
              </h2>
            </div>

            <div className="p-px bg-(--light-gray) my-20" />

            <div className="flex flex-col gap-4">
              <p className="font-medium text-(--charcoal)">History Access</p>
              <h2 className="text-[32px] text-(--charcoal)">
                Access detailed payroll history anytime. Deep dive into past
                cycles with comprehensive filtering and export tools.
              </h2>
            </div>

            <div className="p-px bg-(--light-gray) my-20" />

            <div className="flex flex-col gap-4">
              <p className="font-medium text-(--charcoal)">
                Financial Accuracy
              </p>
              <h2 className="text-[32px] text-(--charcoal)">
                Maintain accurate financial records across cycles. Our system
                automatically reconciles data to keep your books balanced.
              </h2>
            </div>

            <div className="p-px bg-(--light-gray) my-20" />

            <div className="flex flex-col gap-4">
              <p className="font-medium text-(--charcoal)">Compliance Sync</p>
              <h2 className="text-[32px] text-(--charcoal)">
                Stay ahead of regulations. Automated updates ensure your payroll
                adheres to the latest local and federal tax laws.
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-2 gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-4 bg-(--extra-light) px-10 pt-10 pb-55">
              <p className="font-medium text-(--charcoal)">
                Clear, transparent access to earnings
              </p>
              <h3 className="text-[32px] text-(--charcoal)">
                Employees can easily view their payment history and understand
                their compensation without needing to request information.
              </h3>
            </div>

            <div className="flex flex-col gap-4 bg-(--extra-light) px-10 pt-10 pb-55">
              <p className="font-medium text-(--charcoal)">
                Designed for organizations that need reliable payroll operations
              </p>
              <h3 className="text-[32px] text-(--charcoal)">
                Whether you&apos;re managing a growing team or a large
                workforce, Paystat gives you the structure and consistency
                needed to run payroll with confidence.
              </h3>
            </div>
          </div>

          <div className="flex flex-col gap-4 bg-(--extra-light) px-10 pt-10 pb-55">
            <p className="font-medium text-(--charcoal)">
              Stronger when connected to your full workforce system
            </p>
            <h2 className="text-[32px] text-(--charcoal)">
              When used with Workstat, Paystat becomes part of a fully connected
              system where employee data, attendance, and payroll work together
              seamlessly.
            </h2>
            <h3 className="text-[32px] text-(--charcoal)">
              Attendance data flows into payroll, employee records stay
              consistent, and approval processes follow your organizational
              structure automatically.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default setupDetails;
