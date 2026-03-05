const experienceSection = () => {
  return (
    <section className="w-full bg-(--deep-teal) py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-rows-2 gap-20">
          <div className="grid grid-cols-[1.5fr_2fr] gap-6">
            <div className="flex flex-col gap-6">
              <p className="text-white font-medium">
                Built for control and flexibility
              </p>

              <h2 className="text-white text-4xl leading-tight">
                Administrators have complete control over workflows, structure,
                and system configuration.
              </h2>

              <h3 className="text-white font-medium leading-loose">
                Configure workflows for payroll, leave, and approvals <br />
                Manage departments, units, and reporting lines <br />
                Modify organizational structure with full visibility <br />
                Maintain system integrity with validation and audit logs
              </h3>
            </div>

            <div className="bg-(--primary-blue) flex flex-col p-10">
              <p className="text-white font-medium mb-4">Admin Dashboard</p>

              <h2 className="text-white text-4xl leading-tight mb-10">
                Complete visibility and control over your entire workforce
                system
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-[2fr_1.5fr] gap-6">
            <div className="bg-(--primary-blue) flex flex-col p-10">
              <p className="text-white font-medium mb-4">Employee Portal</p>

              <h2 className="text-white text-4xl leading-tight mb-10">
                Simple, structured, and accessible for every team member
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-white font-medium">
                Simple, structured, and accessible
              </p>

              <h2 className="text-white text-4xl leading-tight">
                Employees can access everything they need without relying on HR
                for every request.
              </h2>

              <h3 className="text-white font-medium leading-loose">
                View and update personal records <br />
                Track attendance and working hours <br />
                Access payroll and payment history <br />
                Apply for leave <br />
                Participate in training programs <br />
                Receive updates via the message center
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experienceSection;
