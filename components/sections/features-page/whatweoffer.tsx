import Image, { StaticImageData } from "next/image";
import image1 from "@/public/icons/cancel-anytime.svg";
import image2 from "@/public/icons/core-features.svg";
import image3 from "@/public/icons/individual-subscription.svg";

type WhatWeOffer = {
  description: string;
  icon: StaticImageData;
};

const offers: WhatWeOffer[] = [
  {
    description: "7 Core Features",
    icon: image2,
  },
  {
    description: "Individual Subscriptions",
    icon: image3,
  },
  {
    description: "Cancel Anytime",
    icon: image1,
  },
];

const whatweoffer = () => {
  return (
    <section className="w-full bg-(--deep-teal) py-20 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-14">
        <h1 className="text-[40px] text-center">What we offer</h1>
        <div className="grid grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="flex items-center space-x-5 bg-(--secondary-blue) pl-5 py-5 pr-25"
            >
              <Image src={offer.icon} alt="" />
              <p className="text-lg">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default whatweoffer;
