import { Check, Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const pricing = () => {
  return (
    <section className="py-16 bg-(--white)">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-4 items-center justify-center my-14">
          <p className="font-medium text-(--charcoal)">Pricing</p>
          <h1 className="text-[44px] text-(--dark-gray)">
            Choose the right plan that works for you
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col bg-(--soft-blue) p-6">
            <div className="flex flex-col gap-2">
              <p className="font-medium text-(--charcoal)">Basic Plan</p>
              <h3 className="text-[32px] text-(--dark-gray)">
                Experience the power of timestat
              </h3>
            </div>

            <div className="flex gap-4 bg-(--primary-blue) my-12 p-4">
              <div className="bg-(--medium-blue) flex items-center justify-center p-6">
                <Image
                  src="/icons/basic.svg"
                  alt="logo"
                  width={32}
                  height={32}
                />
              </div>
              <div>
                <h1 className="text-[32px] text-white">30 Days free</h1>
                <p className="font-medium text-white">Full feature access</p>
              </div>
            </div>

            <ul className="space-y-4 mb-12 grow text-[20px] text-(--slate-gray)">
              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>30 Days Free Access</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>10 Employee Seat Limit</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Full Premium Feature Set</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-(--primary-blue) p-0.5 text-white">
                  <Check size={14} />
                </div>
                <span>Mobile, Web & Kiosk Access</span>
              </li>
            </ul>

            <div className="p-px bg-(--tone-gray) my-14" />

            <Link
              href="/start"
              className="w-full py-4 mb-8 bg-(--primary-blue) text-white font-medium hover:bg-slate-700 transition-colors text-center"
            >
              Start
            </Link>
          </div>

          <div className="relative flex flex-col text-white bg-(--primary-blue) p-6 overflow-hidden">
            <div className="absolute top-0 right-0">
              <div className="bg-(--brand-red) font-medium py-1 px-8 transform rotate-45 translate-x-10 translate-y-7">
                Recommended
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-medium">Pro Plan</p>
              <h3 className="text-[32px]">
                Scale your business with confidence
              </h3>
            </div>

            <div className="flex gap-4 bg-(--medium-blue) my-12 p-4">
              <div className="bg-(--primary-blue) flex items-center justify-center p-6">
                <Image src="/icons/pro.svg" alt="logo" width={32} height={32} />
              </div>
              <div>
                <h1 className="text-[32px] font-medium">
                  Enterprise-grade features
                </h1>
                <p className="">Optimise for growth</p>
              </div>
            </div>

            <ul className="space-y-4 mb-12 grow text-[20px]">
              <li className="flex items-center gap-3 text-white">
                <div className="bg-(--brand-red) p-0.5 text-white">
                  <Plus size={14} />
                </div>
                <span>Unlimited Employee Scaling</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="bg-(--brand-red) p-0.5 text-white">
                  <Plus size={14} />
                </div>
                <span>Full Premium Feature Set</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="bg-(--brand-red) p-0.5 text-white">
                  <Plus size={14} />
                </div>
                <span>Mobile, Web & Kiosk Access</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="bg-(--brand-red) p-0.5 text-white">
                  <Plus size={14} />
                </div>
                <span>Priority Technical Support</span>
              </li>
            </ul>

            <div className="p-px bg-(--medium-blue) my-14" />

            <Link
              href="/upgrade"
              className="w-full py-4 mb-8 bg-white text-(--deep-teal) font-medium hover:bg-slate-100 transition-colors text-center"
            >
              Upgrade to Pro
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default pricing;
