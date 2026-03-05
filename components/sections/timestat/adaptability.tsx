import adapt1 from "@/public/images/adapt1.png";
import adapt2 from "@/public/images/adapt2.png";
import adapt3 from "@/public/images/adapt3.png";
import Image from "next/image";

const adaptability = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[44px] text-(--dark-gray) mb-16 text-center">
          Timestat works and adapts to organizations at all levels
        </h2>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col gap-6 bg-(--extra-light) px-10 pt-10">
            <p className="font-medium text-(--charcoal)">
              SMEs (Small Medium Enterprises)
            </p>

            <h3 className="text-[32px] text-(--dark-gray)">
              Timestat offers scalable attendance solutions with enterprise
              features for small and medium-sized businesses.
            </h3>

            <div className="flex items-center justify-center">
              <Image src={adapt1} alt="" className="w-100" />
            </div>
          </div>

          <div className="flex flex-col gap-6 bg-(--extra-light) px-10 pt-10">
            <p className="font-medium text-(--charcoal)">Large Enterprises</p>

            <h3 className="text-[32px] text-(--dark-gray)">
              Timestat streamlines business management with bulk employee
              handling and advanced scheduling.
            </h3>

            <div className="flex items-center justify-center">
              <Image src={adapt2} alt="" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 bg-(--extra-light) px-10 pt-10">
          <p className="font-medium text-(--charcoal)">
            Government Organisations
          </p>

          <h3 className="text-[32px] text-(--dark-gray)">
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
