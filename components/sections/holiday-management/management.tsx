const management = () => {
  return (
    <section className="w-full bg-(--primary-blue) py-20 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-stretch gap-14">
        <h1 className="text-[44px] text-center">
          Handle leave management without confusion or <br /> delays
        </h1>

        <div className="grid grid-cols-2 gap-4 text-[18px]">
          <div className="bg-(--medium-blue) p-6">
            <p>Simplify leave requests and approvals</p>
          </div>

          <div className="bg-(--medium-blue) p-6">
            <p>Maintain clear records of employee availability</p>
          </div>

          <div className="bg-(--medium-blue) p-6">
            <p>Reduce manual tracking and errors</p>
          </div>

          <div className="bg-(--medium-blue) p-6">
            <p>Ensure consistent leave policies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default management;
