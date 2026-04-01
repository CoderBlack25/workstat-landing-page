import MainNavbar from "@/components/layouts/mainNavbar";
import FeaturesNavbar from "@/components/layouts/featuresNavbar";
import Hero from "@/components/layouts/heroSection";
import Whatweoffer from "@/components/sections/features-page/whatweoffer";
import EmployeeSelfService from "@/components/sections/features-page/employeeSelfService";
import HumanResource from "@/components/sections/features-page/humanResource";
import PayrollProcessing from "@/components/sections/features-page/payrollProcessing";
import Learning from "@/components/sections/features-page/learning";
import AttendanceManagement from "@/components/sections/features-page/attendanceManagement";
import Holiday from "@/components/sections/features-page/holiday";
import PerformanceManagement from "@/components/sections/features-page/performanceManagement";
import BookDemo from "@/components/layouts/bookDemo";
import workstat from "@/public/icons/workstat-logo2.svg";
import heroImage from "@/public/images/feature-hero-image.png";

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
        hoverButtonColor="hover:bg-[#15465c]"
      />
      <FeaturesNavbar />
      <Hero
        imageVariant="offset"
        title="Flexible HR Solutions"
        heading="Choose the Features You Actually Need"
        description="Subscribe to individual features or get the complete suite. Workstat gives you the flexibility to build the perfect HR solution for your organization."
        primaryCta={{ label: "Book a demo", href: "#" }}
        secondaryCta={{ label: "Get Started", href: "#" }}
        heroImage={heroImage}
      />
      <Whatweoffer />
      <EmployeeSelfService />
      <HumanResource />
      <PayrollProcessing />
      <Learning />
      <AttendanceManagement />
      <Holiday />
      <PerformanceManagement />
      <BookDemo
        title="Ready to Transform Your HR Management?"
        description="Subscribe to individual features or get the complete Workstat suite. Experience the flexibility of choosing exactly what your organization needs."
        getStartedHref=""
        bookDemoHref=""
      />
    </div>
  );
};

export default page;
