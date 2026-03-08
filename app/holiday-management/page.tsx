import SubNavbar from "@/components/layouts/subNavbar";
import Hero from "@/components/layouts/hero";
import LeaveWorkflow from "@/components/sections/holiday-management/leaveWorkflow";
import BookDemo from "@/components/layouts/bookDemo";
import workstat from "@/public/icons/workstat-logo2.svg";
import QuadLayout from "@/components/layouts/quadLayout";

const page = () => {
  return (
    <div>
      <SubNavbar logo={workstat} logoAlt="logo" />
      <Hero
        title="Leave Managment"
        heading="Manage employee leave with clarity and control"
        description="Workstat allows employees to apply for leave while giving administrators full control over approvals and tracking."
        secondbutton="Get Started"
      />
      <QuadLayout
        heading="Handle leave management without confusion or delays"
        items={[
          "Simplify leave requests and approvals",
          "Maintain clear records of employee availability",
          "Reduce manual tracking and errors",
          "Ensure consistent leave policies",
        ]}
      />
      <LeaveWorkflow />
      <BookDemo
        title="Handle leave management without confusion or delays"
        description="Give employees an easy way to request time off while maintaining full organizational control."
        getStartedHref=""
        bookDemoHref=""
      />
    </div>
  );
};

export default page;
