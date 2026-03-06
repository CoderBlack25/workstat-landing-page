import Navbar from "@/components/sections/navbars/navbar";
import Hero from "@/components/sections/learning/hero";
import Improvement from "@/components/sections/learning/improvement";
import Howitworks from "@/components/sections/learning/howitworks";

const page = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Improvement />
      <Howitworks />
    </div>
  );
};

export default page;
