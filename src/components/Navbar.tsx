import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import NavbarIcons from "./NavbarIcons";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative ">
      {/* Mobile */}
      <div className="flex justify-between items-center h-full md:hidden">
        <Link href="#">
          <div className="text-2x tracking-wide">CrazyOffers.in</div>
        </Link>
        <Menu />
      </div>
      {/* Big Screens */}
      <div className="hidden md:flex items-center h-full justify-between gap-8">
        {/* Left */}
        <div className="w-1/3 xl:w-1/2 flex items-center">
          <Link href="#" className="flex items-center gap-4">
            <Image src="/logo.png" alt="" width={24} height={24}></Image>
            <div className="text-2x tracking-wide">CrazyOffers.in</div>
          </Link>
          <div className="hidden xl:flex gap-4 ps-12 text-sm">
       
            <Link href="/">Coupons</Link>
            <Link href="/">Top Stores</Link>
            <Link href="/">Categories</Link>
     
          </div>
        </div>
        {/* Right */}
        <div className="w-2/3 flex items-center justify-between gap-8 xl:w-1/2">
          <SearchBar />
          <NavbarIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
