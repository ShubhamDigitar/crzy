import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import NavbarIcons from "./NavbarIcons";
import SearchBar from "./SearchBar";
import logo from "../../public/logos/logo.png";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* Mobile */}
      <div className="flex justify-between items-center h-full md:hidden">
        <Link href="#">
          <div className="text-2xl tracking-wide">CrazyOffers.in</div>
        </Link>
        <Menu />
      </div>
      {/* Big Screens */}
      <div className="hidden md:flex items-center h-full justify-between gap-8">
        {/* Left */}
        <div className="w-2/4 xl:w-3/5 flex items-center">
          <Link href="#" className="flex items-center gap-4 pr-6">
            <Image src={logo} alt="" height={64}></Image>
          </Link>
          <SearchBar />
        </div>
        {/* Right */}
        <div className="w-2/4 flex items-center justify-end gap-8 xl:w-2/5">
          <div className="hidden xl:flex gap-2 ps-12 text-sm">
            {['Coupons', 'Top Stores', 'Categories'].map((item, index) => (
              <Link
                key={index}
                href="/"
                className="relative px-2 py-2 transition-all duration-300 transform hover:scale-105 block group"
              >
                <span className="relative z-10 block px- py-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-red-500 after:via-purple-500 after:to-blue-500 after:transition-all after:duration-300 group-hover:after:w-full">{item}</span>
              </Link>
            ))}
          </div>
          <NavbarIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
