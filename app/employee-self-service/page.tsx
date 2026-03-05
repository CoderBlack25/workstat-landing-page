import Navbar from "@/components/sections/navbars/navbar";
import Hero from "@/components/sections/employee-self-service/hero";
import EmployeeNeed from "@/components/sections/employee-self-service/employeeNeed";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <EmployeeNeed />
    </div>
  );
};

export default page;
