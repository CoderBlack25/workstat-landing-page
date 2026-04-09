import MainNavbar from "@/components/layouts/mainNavbar";
import StatNavbar from "@/components/layouts/statNavbar";
import Hero from "@/components/layouts/heroSection";
import TryTimestat from "@/components/sections/timestat/tryTimestat";
import ValueProp from "@/components/layouts/valueProp";
import QuickSetup from "@/components/sections/timestat/quickSetup";
import Adaptability from "@/components/sections/timestat/adaptability";
import Deployment from "@/components/sections/timestat/deployment";
import BookDemo from "@/components/layouts/bookDemo";
import workstat from "@/public/icons/workstat-logo2.svg";
import timestat from "@/public/icons/timestat-logo3.svg";
import heroImage from "@/public/images/timestat-hero-image.png";
import mobileHero from "@/public/images/mobile-timestat.png";

const page = () => {
  return (
    <main>
      <MainNavbar
        logo={workstat}
        logoAlt="logo"
        textColor="text-(--slate-gray)"
        bgColor="bg-white"
        buttonBgColor="bg-(--primary-blue)"
        buttonTextColor="text-white"
        hoverButtonColor="hover:bg-[#15465c]"
      />
      <StatNavbar logo={timestat} logoAlt="logo" href="/timestat" />
      <Hero
        imageVariant="offset"
        heading="Accurate & Efficient Employee Attendance tracking & Management Solution"
        description="Say goodbye to manual tracking, employee inefficiency, ghost employees, low productivity, and unaccountability in your workplace. Timestat simplifies how organizations track and manage employees' attendance, leaves, shifts, and more."
        primaryCta={{ label: "Book a demo", href: "#" }}
        secondaryCta={{ label: "Get Started", href: "https://timestat.workstat.io/" }}
        heroImage={heroImage}
        mobileImage={mobileHero}
      />
      <ValueProp
        eyebrow="A more reliable way to track employees attendance"
        title="Move beyond manual tracking and unreliable records. Timestat provides a dependable system for capturing attendance, helping you maintain accountability and improve overall workforce discipline."
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
    </main>
  );
};

export default page;
