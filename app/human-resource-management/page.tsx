import Navbar from "@/components/sections/navbars/navbar";
import Hero from "@/components/sections/human-resource/hero";
import Centralize from "@/components/sections/human-resource/centralize";
import Clarity from "@/components/sections/human-resource/clarity";
import EmployeeData from "@/components/sections/human-resource/emloyeeData";
import OrganizeEmployee from "@/components/sections/human-resource/organizeEmployee";
import Simple from "@/components/sections/human-resource/simple";

const page = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Centralize />
      <Clarity />
      <EmployeeData />
      <OrganizeEmployee />
      <Simple />
    </div>
  );
};

export default page;
