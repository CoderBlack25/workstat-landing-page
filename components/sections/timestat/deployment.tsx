import Image from "next/image";
import deploy1 from "@/public/images/deploy1.png";
import deploy2 from "@/public/images/deploy2.png";
import deploy3 from "@/public/images/deploy3.png";
import deploy4 from "@/public/images/deploy4.png";

const deployment = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 items-center justify-center my-14 text-center">
          <p className="font-medium text-(--charcoal)">Deployment</p>
          <h1 className="text-[44px] text-(--dark-gray)">
            Secure cloud-based or On-premise <br /> deployment and training
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-(--extra-light) pt-6 pl-6">
            <div className="flex flex-col gap-2">
              <p className="font-medium text-(--charcoal)">Cloud Deployment</p>
              <h1 className="text-[32px] text-(--dark-gray)">
                Faster setup, secure hosting and subscription model
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-20 ml-5">
              <Image src={deploy1} alt="" />
              <Image src={deploy2} alt="" />
              <Image src={deploy3} alt="" />
              <Image src={deploy4} alt="" />
            </div>
          </div>

          <div className="bg-(--extra-light) p-6">
            <div className="flex flex-col gap-2">
              <p className="font-medium text-(--charcoal)">
                On-Premise Deployment & Training
              </p>
              <h1 className="text-[32px] text-(--dark-gray)">
                Dedicated server with hardware installation. Offering staff{" "}
                <br />
                onboarding & SLA
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default deployment;
