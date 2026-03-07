import Image from "next/image";
import article1 from "@/public/images/article1.png";
import article2 from "@/public/images/article2.png";

const quickSetup = () => {
  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 mb-10">
          <p className="font-medium text-(--charcoal)">
            Features for Quick Setup
          </p>
          <h2 className="text-[44px] text-(--dark-gray) leading-tight">
            Hit the ground running fast powerful yet intuitive admin features
          </h2>
          <p className="text-(--slate-gray)">
            Timestat is designed to be easy to set up and manage for admins, and
            just as simple for employees to use, with features like:
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <Image src={article1} alt="" />
          </div>
          <div>
            <Image src={article2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default quickSetup;
