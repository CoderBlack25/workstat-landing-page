import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-(--primary-blue) text-white py-3 px-4 font-inter">
      <div className="max-w-7xl mx-auto text-center text-[12px] md:text-sm leading-tight">
        <p className="inline">
          Introducing our new Employee Management System: Discover how it
          streamlines workflows and enhances team collaboration!{" "}
        </p>
        <Link
          href="#"
          className="underline hover:text-white/70 whitespace-nowrap"
        >
          Learn More
        </Link>
      </div>
    </header>
  );
};

export default Header;
