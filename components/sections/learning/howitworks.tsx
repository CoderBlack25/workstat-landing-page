const howitworks = () => {
  return (
    <section className="bg-white py-30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-(--dark-gray) text-[44px] text-center mb-10">
          How it works
        </h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 bg-(--extra-light) px-10 pt-10 pb-50">
              <p className="font-medium text-(--charcoal)">Provide resources</p>
              <h1 className="text-[32px] text-(--dark-gray)">
                Give access to learning materials and content
              </h1>
            </div>

            <div className="flex flex-col gap-2 bg-(--extra-light) px-10 pt-10 pb-50">
              <p className="font-medium text-(--charcoal)">Track progress</p>
              <h1 className="text-[32px] text-(--dark-gray)">
                Monitor completion and learning outcomes
              </h1>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-2 bg-(--extra-light) p-10">
            <p className="font-medium text-(--charcoal)">
              Create training programs
            </p>
            <h1 className="text-[32px] text-(--dark-gray)">
              Design orientation and training programs for your organization
            </h1>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 bg-(--extra-light) px-10 pt-10 pb-50">
              <p className="font-medium text-(--charcoal)">Enroll employees</p>
              <h1 className="text-[32px] text-(--dark-gray)">
                Assign employees to relevant learning programs
              </h1>
            </div>

            <div className="flex flex-col gap-2 bg-(--extra-light) px-10 pt-10 pb-50">
              <p className="font-medium text-(--charcoal)">Collect feedback</p>
              <h1 className="text-[32px] text-(--dark-gray)">
                Gather evaluations and improve programs
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default howitworks;
