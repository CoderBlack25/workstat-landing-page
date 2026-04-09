import MainNavbar from "@/components/layouts/mainNavbar";
import Hero from "@/components/layouts/heroSection";
import SolutionSection from "@/components/sections/workstat/solutionSection";
import TimedSlider from "@/components/sections/workstat/timedSlider";
import ModuleSelection from "@/components/sections/workstat/moduleSection";
import WorkflowAccordion from "@/components/sections/workstat/workflowAccordion";
import CoreDifferentiatorSection from "@/components/sections/workstat/coreDifferentiatorSection";
import ExperienceSection from "@/components/sections/workstat/experienceSection";
import IntegrationSection from "@/components/sections/workstat/integrationSection";
import Pricing from "@/components/sections/workstat/pricing";
import BookDemo from "@/components/layouts/bookDemo";
import workstat from "@/public/icons/workstat-logo.svg";
import heroImage from "@/public/images/workstat-tea.png";
import mobileHero from "@/public/images/mobile-tea.png";

const page = () => {
  return (
    <main>
      <MainNavbar
        logo={workstat}
        logoAlt="logo"
        hoverTextColor="hover:text-white/70"
        hoverButtonColor="hover:bg-gray-200"
        mobileDropdown="text-gray-300"
      />
      <Hero
        imageVariant="large"
        theme="dark"
        heading="Bring calm and control to your team operations"
        description="Workstat brings together employee management, attendance tracking,
            payroll processing, recruitment, and performance tools into one
            connected system—so your team can operate efficiently from hire to
            retirement."
        primaryCta={{ label: "Book a demo", href: "#" }}
        secondaryCta={{ label: "Get Started", href: "https://timestat.workstat.io/" }}
        extraText="Stay focused. Stay in control. WorkStat handles the rest."
        heroImage={heroImage}
        mobileImage={mobileHero}
      />

      <SolutionSection />
      <TimedSlider />
      <ModuleSelection />
      <WorkflowAccordion />
      <CoreDifferentiatorSection />
      <ExperienceSection />
      <IntegrationSection />
      <Pricing />
      <BookDemo
        title="Bring structure, clarity, and control to your workforce"
        description="Start with a single module or deploy the full Workstat platform."
        getStartedHref=""
        bookDemoHref=""
      />
    </main>
  );
};

export default page;
