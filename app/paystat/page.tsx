import PaystatNavbar from "@/components/sections/navbars/paystatNavbar";
import Hero from "@/components/layouts/hero";
import ManagePayroll from "@/components/sections/paystat/managePayroll";
import Payroll from "@/components/sections/paystat/payroll";
import PayrollFeatures from "@/components/sections/paystat/payrollFeatures";
import Setup from "@/components/sections/paystat/setup";
import SetupDetails from "@/components/sections/paystat/setupDetails";
import BookDemo from "@/components/layouts/bookDemo";

const page = () => {
  return (
    <div>
      <PaystatNavbar />
      <Hero
        title="Paystat"
        heading="Run payroll with accuracy and complete control"
        description="Paystat helps you process payroll faster, reduce errors, and maintain clear, reliable compensation records—so you can focus on running your organization, not fixing payroll issues."
        secondbutton="Get Started"
      />
      <Payroll />
      <ManagePayroll />
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
