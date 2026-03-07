import Deployment from "@/components/sections/timestat/deployment";
import Adaptability from "@/components/sections/timestat/adaptability";
import QuickSetup from "@/components/sections/timestat/quickSetup";
import TryTimestat from "@/components/sections/timestat/tryTimestat";
import TimestatNavbar from "@/components/sections/navbars/timestatNavbar";
import Hero from "@/components/sections/timestat/hero";
import BookDemo from "@/components/layouts/bookDemo";

const page = () => {
  return (
    <div>
      <TimestatNavbar />
      <Hero />
      <TryTimestat />
      <QuickSetup />
      <Adaptability />
      <Deployment />
      <BookDemo
        title="Bring structure and accuracy to attendance tracking"
        description="Monitor working hours with confidence and feed accurate data into payroll."
        getStartedHref=""
        bookDemoHref=""
      />
    </div>
  );
};

export default page;
