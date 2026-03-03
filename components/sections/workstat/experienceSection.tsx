const experienceSection = () => {
  return (
    <section className="w-full bg-(--primary-blue-alt)">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="grid grid-cols-2 gap-12">
          <div className="flex flex-col">
            <p className="text-white font-medium mb-4">Admin experience</p>

            <h2 className="text-white text-4xl leading-tight mb-10">
              Built for control and flexibility
            </h2>

            <div className="w-full px-10 py-40 bg-(--medium-blue)" />
          </div>

          <div className="flex flex-col">
            <p className="text-white font-medium mb-4">Employee experience</p>

            <h2 className="text-white text-4xl leading-tight mb-10">
              Simple, structured, and accessible
            </h2>

            <div className="w-full px-10 py-40 bg-(--medium-blue)" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default experienceSection;
