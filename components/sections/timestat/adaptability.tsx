import adapt1 from "@/public/images/adapt1.png";
import adapt2 from "@/public/images/adapt2.png";
import adapt3 from "@/public/images/adapt3.png";
import Image from "next/image";

const adaptability = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[36px] font-normal text-center text-[#2b2b2b] mb-16">
          Timestat works and adapts to organizations at all levels
        </h2>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col gap-6 bg-[#e9e9e9] px-10 pt-10">
            <p className="text-[14px] text-[#5c5c5c]">
              SMEs (Small Medium Enterprises)
            </p>

            <h3 className="text-[24px] text-[#2b2b2b] leading-[1.4]">
              Timestat offers scalable attendance solutions with enterprise
              features for small and medium-sized businesses.
            </h3>

            <div className="flex items-center justify-center">
              <Image src={adapt1} alt="" className="w-100" />
            </div>
          </div>

          <div className="flex flex-col gap-6 bg-[#e6d7db] px-10 pt-10">
            <p className="text-[14px] text-[#5c5c5c]">Large Enterprises</p>

            <h3 className="text-[24px] text-[#2b2b2b] leading-[1.4]">
              Timestat streamlines business management with bulk employee
              handling and advanced scheduling.
            </h3>

            <div className="flex items-center justify-center">
              <Image src={adapt2} alt="" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 bg-[#e9e9e9] px-10 pt-10">
          <p className="text-[14px] text-[#5c5c5c]">Government Organisations</p>

          <h3 className="text-[24px] text-[#2b2b2b] leading-[1.4]">
            Government organizations need secure data handling and thorough{" "}
            <br />
            documentation. Timestat offers on-premise deployment, access <br />
            control, and efficient employee management.
          </h3>

          <div className="flex items-center justify-center">
            <Image src={adapt3} alt="" className="w-150" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default adaptability;
