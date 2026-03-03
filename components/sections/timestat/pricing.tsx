import { Check, Plus } from "lucide-react";
import Link from "next/link";

const pricing = () => {
  return (
    <section className="py-16 bg-(--white)">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col">
            <p>Basic Plan</p>
            <h3>Experience the power of timestat</h3>
            <div className="flex gap-4">
              <div></div>
              <div>
                <h1>30 Days free</h1>
                <p>Full feature access</p>
              </div>
            </div>
            <ul className="space-y-4 mb-12 grow">
              <li className="flex items-center gap-3 text-slate-700">
                <div className="bg-[#1D546C] p-0.5 rounded text-white">
                  <Check size={14} />
                </div>
                <span>30 Days Free Access</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="bg-[#1D546C] p-0.5 rounded text-white">
                  <Check size={14} />
                </div>
                <span>10 Employee Seat Limit</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="bg-[#1D546C] p-0.5 rounded text-white">
                  <Check size={14} />
                </div>
                <span>Full Premium Feature Set</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="bg-[#1D546C] p-0.5 rounded text-white">
                  <Check size={14} />
                </div>
                <span>Mobile, Web & Kiosk Access</span>
              </li>
            </ul>
            <Link
              href="/start"
              className="w-full py-4 bg-[#1D546C] text-white font-medium hover:bg-slate-700 transition-colors text-center"
            >
              Start
            </Link>
          </div>

          <div className="flex flex-col">
            <div className="absolute top-0 right-0">
              <div className="bg-[#C1103C] text-white text-[10px] font-bold py-1 px-10 transform rotate-45 translate-x-8 translate-y-4">
                Recommended
              </div>
            </div>
            <p>Pro Plan</p>
            <h3>Scale your business with confidence</h3>
            <div className="flex gap-4">
              <div></div>
              <div>
                <h1>Enterprise-grade features</h1>
                <p>Optimise for growth</p>
              </div>
            </div>
            <ul className="space-y-4 mb-12 grow">
              <li className="flex items-center gap-3 text-white">
                <div className="bg-[#C1103C] p-0.5 rounded text-white">
                  <Plus size={14} />
                </div>
                <span>Unlimited Employee Scaling</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="bg-[#C1103C] p-0.5 rounded text-white">
                  <Plus size={14} />
                </div>
                <span>Full Premium Feature Set</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="bg-[#C1103C] p-0.5 rounded text-white">
                  <Plus size={14} />
                </div>
                <span>Mobile, Web & Kiosk Access</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <div className="bg-[#C1103C] p-0.5 rounded text-white">
                  <Plus size={14} />
                </div>
                <span>Priority Technical Support</span>
              </li>
            </ul>
            <Link
              href="/upgrade"
              className="w-full py-4 bg-white text-slate-900 font-bold hover:bg-slate-100 transition-colors text-center"
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
