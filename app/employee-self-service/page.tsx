import SubNavbar from "@/components/layouts/subNavbar";
import Hero from "@/components/layouts/hero";
import ValueProp from "@/components/layouts/valueProp";
import FeatureGrid from "@/components/layouts/featureGrid";
import Organized from "@/components/sections/employee-self-service/orgainized";
import BookDemo from "@/components/layouts/bookDemo";
import workstat from "@/public/icons/workstat-logo2.svg";

const page = () => {
  return (
    <div>
      <SubNavbar logo={workstat} logoAlt="logo" />
      <Hero
        title="Employee Self Service"
        heading="Give employees direct access to what they need"
        description="Employee Self-Service allows your team to manage their records, track activity, and access important information—without relying on HR for every request."
        secondbutton="Get Started"
      />
      <ValueProp
        eyebrow="Everything employees need in one place"
        title="Workstat provides employees with a centralized space where they can access personal records, track attendance, view payments, and stay updated with company communication."
      />

      <FeatureGrid
        heading="Reduce dependency. Improve efficiency."
        items={[
          {
            label: "SMEs (Small Medium Enterprises)",
            title: "Minimize repetitive HR requests",
          },
          {
            label: "SMEs (Small Medium Enterprises)",
            title: "Give employees visibility into their own data",
          },
          {
            label: "SMEs (Small Medium Enterprises)",
            title: "Reduce costly errors and rework",
          },
          {
            label: "SMEs (Small Medium Enterprises)",
            title: "Reduce costly errors and rework",
          },
        ]}
      />
      <Organized />
      <ValueProp
        eyebrow="Simple for employees. Structured for organizations."
        title="Employees interact with a clean and intuitive interface, while administrators maintain full control over access, permissions, and data visibility."
      />
      <BookDemo
        title="Empower your employees with direct access"
        description="Give your team the tools they need to stay informed, independent, and productive."
        getStartedHref=""
        bookDemoHref=""
      />
    </div>
  );
};

export default page;
