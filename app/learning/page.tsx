import Navbar from "@/components/sections/navbars/navbar";
import Hero from "@/components/sections/learning/hero";
import Improvement from "@/components/sections/learning/improvement";
import Howitworks from "@/components/sections/learning/howitworks";
import BookDemo from "@/components/layouts/bookDemo";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Improvement />
      <Howitworks />
      <BookDemo
        title="Build a culture of learning and continuous improvement"
        description="Support your team's growth with structured training and development programs."
        getStartedHref=""
        bookDemoHref=""
      />
    </div>
  );
};

export default page;
