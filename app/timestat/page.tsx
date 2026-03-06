// import AboutUs from "@/components/sections/timestat/aboutUs";
// import Pricing from "@/components/sections/workstat/pricing";
import Deployment from "@/components/sections/timestat/deployment";
// import HowItWorks from "@/components/sections/workstat/howItworks";
import Adaptability from "@/components/sections/timestat/adaptability";
import QuickSetup from "@/components/sections/timestat/quickSetup";
import TryTimestat from "@/components/sections/timestat/tryTimestat";
import TimestatNavbar from "@/components/sections/navbars/timestatNavbar";
import Hero from "@/components/sections/timestat/hero";

const page = () => {
  return (
    <div className="">
      <TimestatNavbar />
      <Hero />
      <TryTimestat />
      <QuickSetup />
      <Adaptability />
      {/* <HowItWorks /> */}
      <Deployment />
      {/* <Pricing /> */}
      {/* <AboutUs /> */}
    </div>
  );
};

export default page;
