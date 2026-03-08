import SubNavbar from "@/components/layouts/subNavbar";
import workstat from "@/public/icons/workstat-logo2.svg";

const page = () => {
  return (
    <div>
      <SubNavbar logo={workstat} logoAlt="logo" />
    </div>
  );
};

export default page;
