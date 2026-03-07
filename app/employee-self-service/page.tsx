import Navbar from "@/components/sections/navbars/navbar";
import Hero from "@/components/sections/employee-self-service/hero";
import EmployeeNeed from "@/components/sections/employee-self-service/employeeNeed";
import Efficiency from "@/components/sections/employee-self-service/efficiency";
import Organized from "@/components/sections/employee-self-service/orgainized";
import Simple from "@/components/sections/employee-self-service/simple";
import BookDemo from "@/components/layouts/bookDemo";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
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
