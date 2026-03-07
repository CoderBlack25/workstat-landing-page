import Navbar from "@/components/sections/navbars/navbar";
import Hero from "@/components/sections/holiday-management/hero";
import Management from "@/components/sections/holiday-management/management";
import LeaveWorkflow from "@/components/sections/holiday-management/leaveWorkflow";
import BookDemo from "@/components/layouts/bookDemo";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Management />
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
