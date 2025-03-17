"use client";
import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import NavbarIcons from "./NavbarIcons";
import SearchBar from "./SearchBar";
import logo from "../../public/logos/logo.png";
import { Card } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu";
import { ReactNode } from "react";

const categories = [
  "Electronics",
  "Fashion",
  "Health & Beauty",
  "Home & Garden",
  "Sports & Outdoors",
  "Toys & Games",
  "Food & Beverages",
  "Travel & Leisure",
  "Automotive",
  "Books & Media",
  "Pet Supplies",
];

interface NavLinkProps {
  href: string;
  children: ReactNode;
}
const NavLink = ({ href, children }: NavLinkProps) => (
  <Link
    href={href}
    className="relative py-2 transition-all duration-300 transform hover:scale-105 block group"
  >
    <span className="relative z-10 block px-2 py-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-red-500 after:via-purple-500 after:to-blue-500 after:transition-all after:duration-300 group-hover:after:w-full">
      {children}
    </span>
  </Link>
);

const Navbar = () => {
  return (
    <div className="h-20 px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32 relative">
      {/* Mobile */}
      <div className="flex justify-between items-center h-full md:hidden">
        <Link href="#">
        </Link>
        <Menu />
      </div>
      {/* Big Screens */}
      <div className="hidden md:flex items-center h-full justify-between gap-8">
        {/* Left */}
        <div className="w-3/6  flex items-center justify-between">
          <Link href="#" className="flex items-center gap-0 pr-2">
            <Image src={logo} alt="" height={50}></Image>
          </Link>
          <SearchBar />
        </div>
        {/* Right */}
        <div className="w-3/6 flex items-center gap-8 justify-between">
          <div className="hidden xl:flex gap-2 text-sm ">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="relative  py-2 transition-all duration-300 transform hover:scale-105 group">
                    <span className="relative z-10 block  py-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-red-500 after:via-purple-500 after:to-blue-500 after:transition-all after:duration-300 group-hover:after:w-full">
                      Categories
                    </span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <Card className="p-4 w-[800px] max-w-[38vw] bg-white shadow-lg relative z-[50]">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {categories.map((category) => (
                          <div
                            key={category}
                            className="group relative px-2 py-2 transition-all duration-300 hover:scale-105 cursor-pointer"
                          >
                            <span className="relative z-100 block px-2 py-1 text-xs after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-red-500 after:via-purple-500 after:to-blue-500 after:transition-all after:duration-300 group-hover:after:w-full">
                              {category}
                            </span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavLink href="/">Top Stores</NavLink>
            <NavLink href="/">Coupons</NavLink>
            {/* <div className="mt-1 flex justify-center items-center">
              <div className="rounded px-3 py-1.5 text-sm font-bold tracking-wide bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 mb-1 bg-clip-text text-transparent transition-all duration-300 sm:mt-0 sm:w-auto sm:shrink-0 cursor-pointer hover:text-white hover:bg-clip-border hover:bg-gradient-to-r hover:from-red-500 hover:via-purple-500 hover:to-blue-500">
                Login
              </div>
            </div> */}

            {/* <NavLink href="/">Coupons</NavLink> */}
          </div>
          <div className="flex items-center justify-end">
            <NavbarIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
