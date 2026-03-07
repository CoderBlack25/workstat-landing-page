import Navbar from "@/components/sections/navbars/navbar";
import Hero from "@/components/layouts/hero";
import Centralize from "@/components/sections/human-resource/centralize";
import Clarity from "@/components/sections/human-resource/clarity";
import EmployeeData from "@/components/sections/human-resource/emloyeeData";
import OrganizeEmployee from "@/components/sections/human-resource/organizeEmployee";
import Simple from "@/components/sections/human-resource/simple";
import BookDemo from "@/components/layouts/bookDemo";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="HRMS"
        heading="Manage your entire workforce from a single system"
        description="Workstat's HRMS gives you full control over employee data, structure, and lifecycle management—from onboarding to offboarding."
        secondbutton="Get Started"
      />
      <Centralize />
      <Clarity />
      <EmployeeData />
      <OrganizeEmployee />
      <Simple />
      <BookDemo
        title="Build a structured foundation for your workforce"
        description="Manage your employees with clarity, consistency, and control."
        getStartedHref=""
        bookDemoHref=""
      />
    </div>
  );
};

export default page;
