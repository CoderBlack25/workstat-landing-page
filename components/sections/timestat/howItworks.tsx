const howItworks = () => {
  return (
    <section className="py-30 bg-(--primary-blue)">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-4 mb-14">
          <p className="font-medium text-white">How It Works</p>
          <h1 className="text-[44px] text-white">
            Deploy and Go Live in a Few Simple Steps
          </h1>
        </div>

        <div className="grid grid-cols-[2fr_1fr_1fr] gap-6">
          <div className="flex flex-col bg-(--medium-blue) text-white">
            <div className="px-6 pt-6 pb-12">
              <p className="font-medium">01</p>
              <div className="flex flex-col gap-2 pt-100">
                <h1 className="text-[32px] leading-none">
                  Faster setup, secure hosting and Subscription model
                </h1>
                <p className="font-medium">Cloud Deployment</p>
              </div>
            </div>
            <div className="bg-(--brand-pink) p-0.75 w-80" />
          </div>

          <div className="flex flex-col justify-end bg-(--medium-blue) px-6 pt-6 pb-12">
            <p className="text-[32px] text-(--white-semi) leading-none">
              Faster setup, secure hosting and Subscription model
            </p>
          </div>

          <div className="flex flex-col justify-end bg-(--medium-blue) px-6 pt-6 pb-12">
            <p className="text-[32px] text-(--white-semi) leading-none">
              Faster setup, secure hosting and Subscription model
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default howItworks;
