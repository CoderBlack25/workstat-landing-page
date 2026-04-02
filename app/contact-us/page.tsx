import MainNavbar from "@/components/layouts/mainNavbar";
import Hero from "@/components/layouts/heroSection";
import ValueProp from "@/components/layouts/valueProp";
import TalkToUs from "@/components/sections/contact-us/talkToUs";
import FormSection from "@/components/sections/contact-us/formSection";
//import CallToAction from "@/components/sections/contact-us/callToAction";
import workstat from "@/public/icons/workstat-logo2.svg";
import heroImage from "@/public/images/contact-us-hero.png";

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
      <Hero
        imageVariant="large"
        title="Contact us"
        heading="Get in touch with our team"
        description="Whether you have questions, need a demo, or want to explore how Workstat fits your organization, we're here to help."
        primaryCta={{ label: "Contact Support", href: "#" }}
        heroImage={heroImage}
      />
      <ValueProp
        eyebrow="Let's help you find the right setup"
        title="Tell us about your organization and what you're looking to achieve. Our team will guide you through the best way to get started with Workstat."
      />
      <TalkToUs />
      <FormSection />
      {/* <CallToAction /> */}
    </div>
  );
};

export default page;
