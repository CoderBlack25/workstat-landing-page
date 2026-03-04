import PaystatNavbar from "@/components/sections/navbars/paystatNavbar";
import Hero from "@/components/sections/paystat/hero";
import ManagePayroll from "@/components/sections/paystat/managePayroll";
import Payroll from "@/components/sections/paystat/payroll";
import PayrollFeatures from "@/components/sections/paystat/payrollFeatures";
import Setup from "@/components/sections/paystat/setup";
import SetupDetails from "@/components/sections/paystat/setupDetails";

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
    </div>
  );
};

export default page;
