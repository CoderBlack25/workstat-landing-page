import Navbar from "@/components/sections/navbar";
import IntegrationSection from "@/components/sections/integrationSection";
import CoreDifferentiatorSection from "@/components/sections/coreDifferentiatorSection";
import ExperienceSection from "@/components/sections/experienceSection";
import ModuleSelection from "@/components/sections/moduleSection";

const page = () => {
  return (
    <div>
      <Navbar />
      <ModuleSelection />
      <CoreDifferentiatorSection />
      <ExperienceSection />
      <IntegrationSection />
    </div>
  );
};

export default page;
