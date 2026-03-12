import MainNavbar from "@/components/layouts/mainNavbar";
import Hero from "@/components/sections/workstat/hero";
import SolutionSection from "@/components/sections/workstat/solutionSection";
import PlatformOverview from "@/components/sections/workstat/platformOverview";
import ModuleSelection from "@/components/sections/workstat/moduleSection";
import HowItworks from "@/components/sections/workstat/howItworks";
import CoreDifferentiatorSection from "@/components/sections/workstat/coreDifferentiatorSection";
import ExperienceSection from "@/components/sections/workstat/experienceSection";
import IntegrationSection from "@/components/sections/workstat/integrationSection";
import Pricing from "@/components/sections/workstat/pricing";
import AboutUs from "@/components/sections/timestat/aboutUs";
import BookDemo from "@/components/layouts/bookDemo";
import Footer from "@/components/layouts/footer";
import workstat from "@/public/icons/workstat-logo.svg";

const page = () => {
  return (
    <div>
      <MainNavbar
        logo={workstat}
        logoAlt="logo"
        hoverTextColor="hover:text-white/70"
        hoverButtonColor="hover:bg-gray-200"
      />
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
      <Footer logo={workstat} />
    </div>
  );
};

export default page;
