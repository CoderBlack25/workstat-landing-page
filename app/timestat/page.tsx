import AboutUs from "@/components/sections/timestat/aboutUs";
import Pricing from "@/components/sections/timestat/pricing";
import Deployment from "@/components/sections/timestat/deployment";
import HowItWorks from "@/components/sections/timestat/howItworks";
import Adaptability from "@/components/sections/timestat/adaptability";
import QuickSetup from "@/components/sections/timestat/quickSetup";
import TryTimestat from "@/components/sections/timestat/tryTimestat";

const page = () => {
  return (
    <div>
      <TryTimestat />
      <QuickSetup />
      <Adaptability />
      <HowItWorks />
      <Deployment />
      <Pricing />
      <AboutUs />
    </div>
  );
};

export default page;
