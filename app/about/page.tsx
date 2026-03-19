import MainNavbar from "@/components/layouts/mainNavbar";
import SecondHero from "@/components/layouts/secondHero";
import PowerPoint from "@/components/layouts/powerPoint";
import Lifecycle from "@/components/sections/about/lifecycle";
import Structure from "@/components/sections/about/structure";
import BookDemo from "@/components/layouts/bookDemo";
import workstat from "@/public/icons/workstat-logo.svg";
import heroImage from "@/public/images/about-hero-image.png";

const page = () => {
  return (
    <div>
      <MainNavbar
        logo={workstat}
        logoAlt="logo"
        hoverTextColor="hover:text-white/70"
        hoverButtonColor="hover:bg-gray-200"
      />
      <SecondHero
        heading="Building structured systems for managing people at scale"
        description="Workstat exists to help organizations move from fragmented processes to a clear, structured way of managing their workforce."
        secondbutton="Get Started"
        bgColor="bg-(--midnight)"
        headingTextColor="text-white"
        descriptionTextColor="text-(--light-white)"
        buttonBgcolor="bg-(--midnight)"
        buttonBorderColor="border-(--primary-blue)"
        buttonHoverColor="hover:bg-white/10"
        buttonTextColor="text-white"
        heroImage={heroImage}
        marginLeft="ml-5"
      />
      <PowerPoint
        title="A better way to manage people"
        description="Managing people is one of the most important parts of any
          organization, yet many teams still rely on disconnected tools, manual
          processes, and inconsistent systems."
        secondaryDescription="Workstat was built to bring everything together—employee data,
          attendance, payroll, performance, and structure—into one connected
          platform that reflects how organizations actually operate."
      />
      <Lifecycle />
      <Structure />
      <PowerPoint
        title="Simple to start. Powerful as you grow."
        description="Organizations can start with a single solution like attendance or payroll and expand into a complete system over time."
        secondaryDescription="This flexibility ensures that Workstat remains useful at every stage—from early growth to large-scale operations."
      />
      <PowerPoint
        title="To provide structured systems for modern organizations"
        description="Workstat is designed to support organizations that want to operate with clarity, efficiency, and control—whether they are growing teams, established companies, or large institutions."
        bgColor="bg-(--primary-blue)"
        titleTextColor="text-white"
        desTextColor="text-white"
      />
      <BookDemo
        title="Build a more structured way to manage your team"
        description="Start using Workstat to bring clarity, consistency, and control to your organization."
        getStartedHref=""
        bookDemoHref=""
      />
    </div>
  );
};

export default page;
