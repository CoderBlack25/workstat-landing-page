import PaystatNavbar from "@/components/sections/navbars/paystatNavbar";
import Hero from "@/components/sections/paystat/hero";
import ManagePayroll from "@/components/sections/paystat/managePayroll";
import Payroll from "@/components/sections/paystat/payroll";
import PayrollFeatures from "@/components/sections/paystat/payrollFeatures";

const page = () => {
  return (
    <div>
      <PaystatNavbar />
      <Hero />
      <Payroll />
      <ManagePayroll />
      <PayrollFeatures />
    </div>
  );
};

export default page;
