import Navbar from "@/components/sections/navbar";
import IntegrationSection from "@/components/sections/integrationSection";
import CoreDifferentiatorSection from "@/components/sections/coreDifferentiatorSection";
import ExperienceSection from "@/components/sections/experienceSection";
import ModuleSelection from "@/components/sections/moduleSection";
import PlatformOverview from "@/components/sections/platfromOverview";
import SolutionSection from "@/components/sections/solutionSection";
import Hero from "@/components/sections/hero";

const page = () => {
  return (
    <div>
      <Navbar />
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
