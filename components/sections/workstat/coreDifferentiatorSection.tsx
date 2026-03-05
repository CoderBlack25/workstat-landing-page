const CoreDifferentiatorSection = () => {
  return (
    <section className="w-full bg-white py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-medium text-(--charcoal)">Core Differentiator</p>

          <h2 className="mt-6 text-[44px] leading-11 text-(--dark-gray)">
            A system that reflects how organizations
            <br />
            actually work
          </h2>
        </div>

        <div className="mt-20 grid gap-8 grid-cols-2">
          <div className="bg-(--extra-light) px-10 pt-10 pb-60">
            <p className="font-medium text-(--charcoal)">
              Organizational model
            </p>

            <h3 className="mt-6 text-[32px] leading-8 text-(--dark-gray)">
              Hierarchical organizational modeling
              <br />
              (Executive → Management → Department)
            </h3>
          </div>

          <div className="bg-(--rose-light) px-10 pt-10 pb-60">
            <p className="font-medium text-(--charcoal)">
              Configurable workflow
            </p>

            <h3 className="mt-6 text-[32px] leading-8 text-(--dark-gray)">
              Configurable approval workflows
              <br />
              across modules
            </h3>
          </div>

          <div className="bg-(--rose-light) px-10 pt-10 pb-60">
            <p className="font-medium text-(--charcoal)">Cloud Deployment</p>

            <h3 className="mt-6 text-[32px] leading-8 text-(--dark-gray)">
              Centralized employee data powering all features
            </h3>
          </div>

          <div className="bg-(--extra-light) px-10 pt-10 pb-60">
            <p className="font-medium text-(--charcoal)">
              On-Premise Deployment & Training
            </p>

            <h3 className="mt-6 text-[32px] leading-8 text-(--dark-gray)">
              Audit trails and system integrity controls
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreDifferentiatorSection;
