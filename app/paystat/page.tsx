import MainNavbar from "@/components/layouts/mainNavbar";
import Hero from "@/components/layouts/hero";
import FeatureGrid from "@/components/layouts/featureGrid";
import ValueProp from "@/components/layouts/valueProp";
import PayrollFeatures from "@/components/sections/paystat/payrollFeatures";
import Setup from "@/components/sections/paystat/setup";
import SetupDetails from "@/components/sections/paystat/setupDetails";
import BookDemo from "@/components/layouts/bookDemo";
import workstat from "@/public/icons/workstat-logo2.svg";
import paystat from "@/public/icons/paystat-logo2.svg";
import StatNavbar from "@/components/layouts/statNavbar";

const page = () => {
  return (
    <div>
      <MainNavbar
        logo={workstat}
        logoAlt="logo"
        textColor="text-(--slate-gray)"
        bgColor="bg-white"
        buttonBgColor="bg-(--primary-blue)"
        buttonTextColor="text-white"
      />
      <StatNavbar logo={paystat} logoAlt="logo" href="" />
      <Hero
        title="Paystat"
        heading="Run payroll with accuracy and complete control"
        description="Paystat helps you process payroll faster, reduce errors, and maintain clear, reliable compensation records—so you can focus on running your organization, not fixing payroll issues."
        secondbutton="Get Started"
      />
      <ValueProp
        eyebrow="A simpler way to manage payroll"
        title="Paystat brings all your payroll operations into one structured system. From employee compensation to monthly payroll processing, everything is organized, consistent, and easy to manage."
      />
      <FeatureGrid
        heading="Spend less time on payroll. Gain more confidence in every cycle."
        items={[
          {
            label: "SMEs (Small Medium Enterprises)",
            title: "Process payroll faster without manual calculations",
          },
          {
            label: "Large Enterprises",
            title: "Maintain accurate and consistent employee records",
            bgColor: "bg-(--soft-pink)",
          },
          {
            label: "Large Enterprises",
            title: "Keep full visibility into every payment made",
            bgColor: "bg-(--soft-pink)",
          },
          {
            label: "SMEs (Small Medium Enterprises)",
            title: "Reduce costly errors and rework",
          },
        ]}
      />
      <PayrollFeatures />
      <Setup />
      <SetupDetails />
      <BookDemo
        title="Take control of your payroll process"
        description="Start using Paystat to run payroll faster, reduce errors, and maintain complete visibility into employee compensation."
        getStartedHref=""
        bookDemoHref=""
      />
    </div>
  );
};

export default page;
