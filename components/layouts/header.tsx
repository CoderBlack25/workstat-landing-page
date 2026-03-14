import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-(--primary-blue) text-white flex items-center justify-center py-4 font-inter text-sm overflow-hidden">
      <div className="flex gap-1.5 text-nowrap">
        <h1>
          Introducing our new Employee Management System: Discover how it
          streamlines workflows and enhances team collaboration!
        </h1>
        <Link href="#" className="underline hover:text-white/70">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Header;
