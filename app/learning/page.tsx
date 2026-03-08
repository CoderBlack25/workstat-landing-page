import SubNavbar from "@/components/layouts/subNavbar";
import Hero from "@/components/layouts/hero";
import Improvement from "@/components/sections/learning/improvement";
import Howitworks from "@/components/sections/learning/howitworks";
import BookDemo from "@/components/layouts/bookDemo";
import workstat from "@/public/icons/workstat-logo2.svg";

const page = () => {
  return (
    <div>
      <SubNavbar logo={workstat} logoAlt="logo" />
      <Hero
        title="Learning and training"
        heading="Support employee growth with structured learning"
        description="Workstat helps you create, assign, and manage training programs that support onboarding, upskilling, and continuous development."
        secondbutton="Get Started"
      />
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
