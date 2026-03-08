import FeatureGrid from "@/components/layouts/featureGrid";

const leaveWorkflow = () => {
  return (
    <section className="w-full bg-white pb-28 pt-10 overflow-hidden">
      <FeatureGrid
        heading="Simple leave workflow"
        preheading="How it works"
        items={[
          {
            label: "Employees submit leave requests",
            title: "Simple request submission through the system",
          },
          {
            label: "Managers review and approve or reject",
            title: "Follow your organizational approval workflows",
          },
          {
            label: "Leave is tracked within employee records",
            title: "Automatic updates to employee profiles",
          },
          {
            label: "Data reflects in attendance and reporting",
            title: "Connected across all workforce modules",
          },
        ]}
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-[1.5fr_2fr] gap-6 mt-40">
          <div className="flex flex-col gap-6">
            <p className="font-medium text-(--charcoal)">
              Complete visibility and control
            </p>
            <h1 className="text-[32px] text-(--dark-gray)">
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
            <h1 className="text-[32px] text-(--dark-gray)">
              Clear policies, consistent tracking
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default leaveWorkflow;
