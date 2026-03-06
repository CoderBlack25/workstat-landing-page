import Navbar from "@/components/sections/navbars/navbar";
import Hero from "@/components/sections/employee-self-service/hero";
import EmployeeNeed from "@/components/sections/employee-self-service/employeeNeed";
import Efficiency from "@/components/sections/employee-self-service/efficiency";
import Organized from "@/components/sections/employee-self-service/orgainized";
import Simple from "@/components/sections/employee-self-service/simple";

const page = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <EmployeeNeed />
      <Efficiency />
      <Organized />
      <Simple />
    </div>
  );
};

export default page;
