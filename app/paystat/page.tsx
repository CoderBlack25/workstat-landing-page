import PaystatNavbar from "@/components/sections/navbars/paystatNavbar";
import Hero from "@/components/sections/paystat/hero";
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
      <Hero />
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
