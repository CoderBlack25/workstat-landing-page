import MainNavbar from "@/components/layouts/mainNavbar";
import StatNavbar from "@/components/layouts/statNavbar";
import Hero from "@/components/layouts/hero";
import TryTimestat from "@/components/sections/timestat/tryTimestat";
import QuickSetup from "@/components/sections/timestat/quickSetup";
import Adaptability from "@/components/sections/timestat/adaptability";
import Deployment from "@/components/sections/timestat/deployment";
import BookDemo from "@/components/layouts/bookDemo";
import workstat from "@/public/icons/workstat-logo.svg";
import timestat from "@/public/icons/timestat-logo4.svg";

const page = () => {
  return (
    <div>
      <MainNavbar
        logo={workstat}
        logoAlt="logo"
        hoverTextColor="hover:text-white/70"
        hoverButtonColor="hover:bg-gray-200"
      />
      <StatNavbar
        logo={timestat}
        logoAlt="logo"
        href="/timestat"
        bgColor="bg-(--midnight)"
        textColor="text-white"
        hoverTextColor="hover:text-white/70"
      />
      <Hero
        heading="Accurate & Efficient Employee Attendance tracking & Management Solution"
        description="Say goodbye to manual tracking, employee inefficiency, ghost employees, low productivity, and unaccountability in your workplace. Timestat simplifies how organizations track and manage employees' attendance, leaves, shifts, and more."
        secondbutton="Get Started"
        bgColor="bg-(--midnight)"
        headingTextColor="text-white"
        descriptionTextColor="text-(--light-white)"
        buttonBgcolor="bg-(--midnight)"
        buttonBorderColor="border-(--primary-blue)"
        buttonHoverColor="hover:bg-white/10"
        buttonTextColor="text-white"
      />
      <TryTimestat />
      <QuickSetup />
      <Adaptability />
      <Deployment />
      <BookDemo
        title="Bring structure and accuracy to attendance tracking"
        description="Monitor working hours with confidence and feed accurate data into payroll."
        getStartedHref=""
        bookDemoHref=""
      />
    </div>
  );
};

export default page;
