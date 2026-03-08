import Deployment from "@/components/sections/timestat/deployment";
import Adaptability from "@/components/sections/timestat/adaptability";
import QuickSetup from "@/components/sections/timestat/quickSetup";
import TryTimestat from "@/components/sections/timestat/tryTimestat";
import MainNavbar from "@/components/layouts/mainNavbar";
import Hero from "@/components/layouts/hero";
import BookDemo from "@/components/layouts/bookDemo";
import workstat from "@/public/icons/workstat-logo2.svg";

const page = () => {
  return (
    <div>
      <MainNavbar
        logo={workstat}
        logoAlt="logo"
        textColor="text-(--slate-gray)"
        bgColor="bg-white"
        buttonBgColor="bg-(--primary-blue)"
        buttonTextColor="text-white"
      />
      <Hero
        title="Timestat"
        heading="Accurate & Efficient Employee Attendance tracking & Management Solution"
        description="Say goodbye to manual tracking, employee inefficiency, ghost employees, low productivity, and unaccountability in your workplace. Timestat simplifies how organizations track and manage employees’ attendance, leaves, shifts, and more."
        secondbutton="Talk to Sales"
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
