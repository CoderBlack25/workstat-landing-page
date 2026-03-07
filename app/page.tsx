import WorkstatNavbar from "@/components/sections/navbars/workstatNavbar";
import IntegrationSection from "@/components/sections/workstat/integrationSection";
import CoreDifferentiatorSection from "@/components/sections/workstat/coreDifferentiatorSection";
import ExperienceSection from "@/components/sections/workstat/experienceSection";
import ModuleSelection from "@/components/sections/workstat/moduleSection";
import PlatformOverview from "@/components/sections/workstat/platformOverview";
import SolutionSection from "@/components/sections/workstat/solutionSection";
import Hero from "@/components/sections/workstat/hero";
import HowItworks from "@/components/sections/workstat/howItworks";
import Pricing from "@/components/sections/workstat/pricing";
import AboutUs from "@/components/sections/timestat/aboutUs";
import BookDemo from "@/components/layouts/bookDemo";

const page = () => {
  return (
    <div>
      <WorkstatNavbar />
      <Hero />
      <SolutionSection />
      <PlatformOverview />
      <ModuleSelection />
      <HowItworks />
      <CoreDifferentiatorSection />
      <ExperienceSection />
      <IntegrationSection />
      <Pricing />
      <AboutUs />
      <BookDemo
        title="Bring structure, clarity, and control to your workforce"
        description="Start with a single module or deploy the full Workstat platform."
        getStartedHref=""
        bookDemoHref=""
      />
    </div>
  );
};

export default page;
