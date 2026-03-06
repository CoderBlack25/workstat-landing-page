const clarity = () => {
  return (
    <section className="w-full bg-(--primary-blue) py-20 text-white">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-stretch gap-14">
        <h1 className="text-[44px] text-center">
          Clarity, structure, and control across your <br /> organization
        </h1>

        <div className="grid grid-cols-2 gap-4 text-[18px]">
          <div className="bg-(--medium-blue) p-6">
            <p>Maintain accurate employee records</p>
          </div>

          <div className="bg-(--medium-blue) p-6">
            <p>Organize teams with clear structure</p>
          </div>

          <div className="bg-(--medium-blue) p-6">
            <p>Manage employee lifecycle efficiently</p>
          </div>

          <div className="bg-(--medium-blue) p-6">
            <p>Reduce manual data handling</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default clarity;
