import MainNavbar from "@/components/layouts/mainNavbar";
import Hero from "@/components/layouts/hero";
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
import anima from "@/public/images/anima.png";

const page = () => {
  return (
    <div>
      <MainNavbar
        logo={workstat}
        logoAlt="logo"
        hoverTextColor="hover:text-white/70"
        hoverButtonColor="hover:bg-gray-200"
      />
      <Hero
        heading="Manage your entire workforce from one unified platform"
        description={`Workstat brings together employee management, attendance tracking,
            payroll processing, recruitment, and performance tools into one
            connected system—so your team can operate efficiently from hire to
            retirement.`}
        secondbutton="Get Started"
        bgColor="bg-(--midnight)"
        headingTextColor="text-white"
        descriptionTextColor="text-(--light-white)"
        buttonBgcolor="bg-(--midnight)"
        buttonBorderColor="border-(--primary-blue)"
        buttonHoverColor="hover:bg-white/10"
        buttonTextColor="text-white"
        extraText={`Built for organizations that want clarity, control, and scale in
            workforce management.`}
        heroImage={anima}
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
    </div>
  );
};

export default page;
