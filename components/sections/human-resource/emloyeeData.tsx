const employeeData = () => {
  return (
    <section className="w-full bg-white py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 justify-center items-center text-center">
          <h2 className="mt-6 text-[42px] leading-11 text-(--dark-gray)">
            All employee data is centralized and connected across the system.
          </h2>

          <p className="font-medium text-(--charcoal)">
            Workstat allows you to:
          </p>
        </div>

        <div className="mt-20 grid gap-6 grid-cols-2">
          <div className="bg-(--extra-light) px-10 pt-10 pb-60">
            <p className="font-medium text-(--charcoal)">Onboard employees</p>

            <h3 className="mt-6 text-[32px] leading-8 text-(--dark-gray)">
              Add employees individually or in bulk with structured data
            </h3>
          </div>

          <div className="bg-(--extra-light) px-10 pt-10 pb-60">
            <p className="font-medium text-(--charcoal)">Manage records</p>

            <h3 className="mt-6 text-[32px] leading-8 text-(--dark-gray)">
              Keep all employee information up to date and accessible
            </h3>
          </div>

          <div className="bg-(--extra-light) px-10 pt-10 pb-60">
            <p className="font-medium text-(--charcoal)">Assign roles</p>

            <h3 className="mt-6 text-[32px] leading-8 text-(--dark-gray)">
              Define positions, departments, and reporting relationships
            </h3>
          </div>

          <div className="bg-(--extra-light) px-10 pt-10 pb-60">
            <p className="font-medium text-(--charcoal)">Track relationships</p>

            <h3 className="mt-6 text-[32px] leading-8 text-(--dark-gray)">
              Monitor reporting lines across your organization
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default employeeData;
