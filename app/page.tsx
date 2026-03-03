import WorkstatNavbar from "@/components/sections/navbars/workstatNavbar";
import IntegrationSection from "@/components/sections/workstat/integrationSection";
import CoreDifferentiatorSection from "@/components/sections/workstat/coreDifferentiatorSection";
import ExperienceSection from "@/components/sections/workstat/experienceSection";
import ModuleSelection from "@/components/sections/workstat/moduleSection";
import PlatformOverview from "@/components/sections/workstat/platfromOverview";
import SolutionSection from "@/components/sections/workstat/solutionSection";
import Hero from "@/components/sections/workstat/hero";

const page = () => {
  return (
    <div>
      <WorkstatNavbar />
      <Hero />
      <SolutionSection />
      <PlatformOverview />
      <ModuleSelection />
      <CoreDifferentiatorSection />
      <ExperienceSection />
      <IntegrationSection />
    </div>
  );
};

export default page;
