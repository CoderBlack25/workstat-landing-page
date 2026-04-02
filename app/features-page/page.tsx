import MainNavbar from "@/components/layouts/mainNavbar";
import FeaturesNavbar from "@/components/layouts/featuresNavbar";
import Hero from "@/components/layouts/heroSection";
import Whatweoffer from "@/components/sections/features-page/whatweoffer";
import EmployeeSelfService from "@/components/sections/features-page/employee";
import FeatureSection from "@/components/layouts/featureSection";
import BookDemo from "@/components/layouts/bookDemo";
import workstat from "@/public/icons/workstat-logo2.svg";
import heroImage from "@/public/images/feature-hero-image.png";
import dashboard2 from "@/public/images/human-resource.png";
import dashboard3 from "@/public/images/all-payroll.png";
import dashboard4 from "@/public/images/learning-dashboard.png";
import dashboard5 from "@/public/images/time-management.png";
import dashboard6 from "@/public/images/leave-dashboard.png";
import dashboard7 from "@/public/images/performance-dashboard.png";

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
      <FeatureSection
        id="HRM"
        tag="Human Resource Management System"
        title="Manage your workforce with clarity and structure"
        description="Workstat's Human Resource Management System centralizes employee data and helps organizations maintain clear records, roles, and reporting structures."
        subheading="Keep employee information organized and accessible"
        image={dashboard2}
        imageAlt="Human Resource Management System dashboard"
        reverse
        bgColor="bg-white"
        imageAnimation="left"
        features={[
          [
            { text: "Centralized employee database" },
            { text: "Manage employee records and transitions" },
            { text: "Maintain consistent workforce data" },
          ],
          [
            { text: "Streamlined onboarding process for new hires" },
            { text: "Clear organizational structure and reporting lines" },
            { text: "Easy access across the organization" },
          ],
        ]}
      />
      <FeatureSection
        id="payroll"
        tag="Payroll Processing"
        title="Run payroll with accuracy and confidence"
        description="Paystat simplifies payroll operations by organizing employee compensation and generating payroll records within a structured system."
        subheading="Process payroll faster with fewer errors"
        image={dashboard3}
        tagColor="text-white"
        titleColor="text-white"
        descriptionColor="text-white"
        subheadingColor="text-white"
        featuresColor="text-white"
        checkBgColor="bg-(--brand-red)"
        imageAlt="Payroll Processing dashboard"
        bgColor="bg-(--deep-teal)"
        imageBgColor="bg-(--secondary-blue)"
        imageAnimation="right"
        features={[
          [
            { text: "Manage salaries and allowances in one place" },
            { text: "Generate accurate payment records" },
            { text: "Reduce manual calculation errors" },
          ],
          [
            { text: "Calculate and track deductions automatically" },
            { text: "Maintain clear payroll documentation" },
            { text: "Streamlined month-end processing" },
          ],
        ]}
      />
      <FeatureSection
        id="learning"
        tag="Learning – Training & Orientation"
        title="Support employee growth through structured learning"
        description="Workstat enables organizations to create and manage training programs that support onboarding, skill development, and professional growth."
        subheading="Encourage continuous learning across your workforce"
        image={dashboard4}
        imageAlt="Learning dashboard"
        reverse
        bgColor="bg-white"
        imageAnimation="left"
        features={[
          [
            { text: "Create and assign training programs" },
            { text: "Support effective onboarding processes" },
            { text: "Develop skills needed for success" },
          ],
          [
            { text: "Track employee progress and completion" },
            { text: "Provide access to learning resources" },
            { text: "Monitor professional development" },
          ],
        ]}
      />
      <FeatureSection
        id="attendance"
        tag="Time & Attendance Management"
        title="Track attendance with accuracy and real-time visibility"
        description="Timestat helps organizations monitor employee attendance and working hours while maintaining reliable workforce records."
        subheading="Improve workforce accountability"
        image={dashboard5}
        imageAlt="Time & Attendance Management dashboard"
        bgColor="bg-white"
        imageAnimation="right"
        features={[
          [
            { text: "Real-time clock-in and clock-out tracking" },
            { text: "Maintain accurate time records" },
            { text: "Improve operational oversight" },
          ],
          [
            { text: "Monitor attendance across all teams" },
            { text: "Support payroll calculations" },
            { text: "Generate attendance reports" },
          ],
        ]}
      />
      <FeatureSection
        id="holiday"
        tag="Leave & Holiday Management"
        title="Manage leave requests with clarity and control"
        description="Workstat provides a structured system for submitting, reviewing, and tracking employee leave across the organization."
        subheading="Simplify approvals and maintain accurate records"
        image={dashboard6}
        imageAlt="Leave & Holiday Management dashboard"
        reverse
        bgColor="bg-white"
        imageAnimation="left"
        features={[
          [
            { text: "Digital leave application process" },
            { text: "Clear visibility into team availability" },
            { text: "Maintain comprehensive leave history" },
          ],
          [
            { text: "Manager review and approval workflow" },
            { text: "Track leave balances automatically" },
            { text: "Plan resource allocation effectively" },
          ],
        ]}
      />
      <FeatureSection
        id="performance"
        tag="Performance Management"
        title="Track performance and support employee growth"
        description="Workstat helps organizations evaluate employee performance and monitor development across teams."
        subheading="Make informed workforce decisions"
        image={dashboard7}
        tagColor="text-white"
        titleColor="text-white"
        descriptionColor="text-white"
        subheadingColor="text-white"
        featuresColor="text-white"
        checkBgColor="bg-(--brand-red)"
        imageAlt="Performance Management dashboard"
        bgColor="bg-(--primary-blue)"
        imageBgColor="bg-(--tertiary-blue)"
        imageAnimation="right"
        features={[
          [
            { text: "Structured performance evaluation process" },
            { text: "Support employee growth initiatives" },
            { text: "Align individual goals with organizational objectives" },
          ],
          [
            { text: "Monitor development across teams" },
            { text: "Track key performance indicators" },
            { text: "Generate insights for better workforce decisions" },
          ],
        ]}
      />
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
