import SubNavbar from "@/components/layouts/subNavbar";
import Hero from "@/components/layouts/hero";
import EmployeeNeed from "@/components/sections/employee-self-service/employeeNeed";
import Efficiency from "@/components/sections/employee-self-service/efficiency";
import Organized from "@/components/sections/employee-self-service/orgainized";
import Simple from "@/components/sections/employee-self-service/simple";
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
      <EmployeeNeed />
      <Efficiency />
      <Organized />
      <Simple />
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
