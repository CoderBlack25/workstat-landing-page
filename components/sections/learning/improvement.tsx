const improvement = () => {
  return (
    <section className="w-full bg-(--primary-blue) py-20 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-stretch gap-14">
        <h1 className="text-[44px] text-center">
          Build a culture of continuous improvement
        </h1>

        <div className="grid grid-cols-2 gap-4 text-[18px]">
          <div className="bg-(--medium-blue) p-6">
            <p>Improve employee onboarding experience</p>
          </div>

          <div className="bg-(--medium-blue) p-6">
            <p>Track training progress across teams</p>
          </div>

          <div className="bg-(--medium-blue) p-6">
            <p>Provide structured learning resources</p>
          </div>

          <div className="bg-(--medium-blue) p-6">
            <p>Support long-term employee development</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default improvement;
