import SubNavbar from "@/components/layouts/subNavbar";
import Hero from "@/components/layouts/hero";
import ValueProp from "@/components/layouts/valueProp";
import FeatureGrid from "@/components/layouts/featureGrid";
import OrganizeEmployee from "@/components/sections/human-resource/organizeEmployee";
import BookDemo from "@/components/layouts/bookDemo";
import workstat from "@/public/icons/workstat-logo2.svg";
import QuadLayout from "@/components/layouts/quadLayout";

const page = () => {
  return (
    <div>
      <SubNavbar logo={workstat} logoAlt="logo" />
      <Hero
        title="HRMS"
        heading="Manage your entire workforce from a single system"
        description="Workstat's HRMS gives you full control over employee data, structure, and lifecycle management—from onboarding to offboarding."
        secondbutton="Get Started"
      />
      <ValueProp
        eyebrow="Centralize and organize your workforce data"
        title="Keep all employee information structured, up to date, and easy to manage across departments, roles, and reporting lines."
        bgColor="bg-(--deep-teal)"
      />
      <QuadLayout
        heading="Clarity, structure, and control across your organization"
        items={[
          "Maintain accurate employee records",
          "Organize teams with clear structure",
          "Manage employee lifecycle efficiently",
          "Reduce manual data handling",
        ]}
      />
      <FeatureGrid
        heading="All employee data is centralized and connected across the system."
        subheading="Workstat allows you to:"
        items={[
          {
            label: "Onboard employees",
            title: "Add employees individually or in bulk with structured data",
          },
          {
            label: "Manage records",
            title: "Keep all employee information up to date and accessible",
          },
          {
            label: "Assign roles",
            title: "Define positions, departments, and reporting relationships",
          },
          {
            label: "Track relationships",
            title: "Monitor reporting lines across your organization",
          },
        ]}
      />
      <OrganizeEmployee />
      <ValueProp
        eyebrow="Simple for employees. Structured for organizations."
        title="Employees interact with a clean and intuitive interface, while administrators maintain full control over access, permissions, and data visibility."
      />
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
