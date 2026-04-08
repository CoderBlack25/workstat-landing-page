import MainNavbar from "@/components/layouts/mainNavbar";
import StatNavbar from "@/components/layouts/statNavbar";
import Hero from "@/components/layouts/heroSection";
import ValueProp from "@/components/layouts/valueProp";
import FeatureGrid from "@/components/layouts/featureGrid";
import PayrollFeatures from "@/components/sections/paystat/payrollFeatures";
import Setup from "@/components/sections/paystat/setup";
import SetupDetails from "@/components/sections/paystat/setupDetails";
import BookDemo from "@/components/layouts/bookDemo";
import workstat from "@/public/icons/workstat-logo2.svg";
import paystat from "@/public/icons/paystat-logo2.svg";
import heroImage from "@/public/images/paystat-hero.png";
import mobileHero from "@/public/images/mobile-paystat.png";
import frame1 from "@/public/images/frame1.png";
import frame2 from "@/public/images/frame2.png";
import frame3 from "@/public/images/frame3.png";
import frame4 from "@/public/images/frame4.png";

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
      <StatNavbar logo={paystat} logoAlt="logo" href="/paystat" />
      <Hero
        imageVariant="offset"
        heading="Run payroll with accuracy and complete control"
        description="Paystat helps you process payroll faster, reduce errors, and maintain clear, reliable compensation records—so you can focus on running your organization, not fixing payroll issues."
        primaryCta={{ label: "Book a demo", href: "#" }}
        secondaryCta={{ label: "Get Started", href: "#" }}
        heroImage={heroImage}
        mobileImage={mobileHero}
      />
      <ValueProp
        eyebrow="A simpler way to manage payroll"
        title="Paystat brings all your payroll operations into one structured system. From employee compensation to monthly payroll processing, everything is organized, consistent, and easy to manage."
      />
      <FeatureGrid
        heading="Spend less time on payroll. Gain more confidence in every cycle."
        items={[
          {
            title: "Process payroll faster without manual calculations",
            image: frame1,
          },
          {
            title: "Maintain accurate and consistent employee records",
            image: frame2,
          },
          {
            title: "Keep full visibility into every payment made",
            image: frame3,
          },
          {
            title: "Reduce costly errors and rework",
            image: frame4,
          },
        ]}
      />
      <PayrollFeatures />
      <Setup />
      <SetupDetails />
      <BookDemo
        title="Take control of your payroll process"
        description="Start using Paystat to run payroll faster, reduce errors, and maintain complete visibility into employee compensation."
        getStartedHref=""
        bookDemoHref=""
      />
    </main>
  );
};

export default page;
