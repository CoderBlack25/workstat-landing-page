const organized = () => {
  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 mb-14">
          <p className="font-medium text-(--charcoal)">
            Everything is organized and accessible in one place.
          </p>
          <h2 className="text-[44px] text-(--dark-gray) leading-tight">
            Employees can log in to their personal dashboard and access
          </h2>
        </div>

        <div className="grid grid-cols-3 grid-row-2 gap-6">
          <div className="bg-(--soft-cloud) px-5 pt-5 pb-60">
            <h2 className="text-[24px] text-(--midnight)">
              Profile and personal records
            </h2>
            <p className="text-(--slate-gray)">
              View and update personal information anytime
            </p>
          </div>

          <div className="bg-(--soft-pink) px-5 pt-5 pb-60">
            <h2 className="text-[24px] text-(--midnight)">
              Attendance tracking and history
            </h2>
            <p className="text-(--slate-gray)">
              Track working hours and attendance records
            </p>
          </div>

          <div className="bg-(--soft-cloud) px-5 pt-5 pb-60">
            <h2 className="text-[24px] text-(--midnight)">
              Payment and payroll records
            </h2>
            <p className="text-(--slate-gray)">
              Access payslips and payment history
            </p>
          </div>

          <div className="bg-(--soft-pink) px-5 pt-5 pb-60">
            <h2 className="text-[24px] text-(--midnight)">
              Leave requests and status updates
            </h2>
            <p className="text-(--slate-gray)">
              Apply for leave and track approval status
            </p>
          </div>

          <div className="bg-(--soft-cloud) px-5 pt-5 pb-60">
            <h2 className="text-[24px] text-(--midnight)">
              Training and onboarding materials
            </h2>
            <p className="text-(--slate-gray)">
              Access learning resources and programs
            </p>
          </div>

          <div className="bg-(--soft-pink) px-5 pt-5 pb-60">
            <h2 className="text-[24px] text-(--midnight)">
              Messages and company-wide updates
            </h2>
            <p className="text-(--slate-gray)">
              Stay informed with organizational communication
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default organized;
