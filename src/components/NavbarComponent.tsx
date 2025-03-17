"use client";
import {
  BookOpen,
  Car,
  CircleHelp,
  Dumbbell,
  Home,
  MessageCircle,
  PawPrint,
  Plane,
  Puzzle,
  Shirt,
  Smartphone,
  Sparkles,
  TriangleAlert,
  Utensils,
} from "lucide-react";
import { useState, useEffect } from "react";
import LogoCO from "../../public/CrazyOffersLogo.png";
import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";
import SearchBar from "./SearchBar";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Menus = [
  {
    name: "Categories",
    subMenu: [
      {
        name: "Electronics",
        desc: "Latest gadgets & devices",
        icon: Smartphone,
      },
      { name: "Fashion", desc: "Trendy & stylish wear", icon: Shirt },
      { name: "Health & Beauty", desc: "Skincare & wellness", icon: Sparkles },
      { name: "Home & Garden", desc: "Furniture & decor", icon: Home },
      { name: "Sports & Outdoors", desc: "Gear & activewear", icon: Dumbbell },
      { name: "Toys & Games", desc: "Fun for all ages", icon: Puzzle },
      { name: "Food & Beverages", desc: "Groceries & gourmet", icon: Utensils },
      { name: "Travel & Leisure", desc: "Luggage & accessories", icon: Plane },
      { name: "Automotive", desc: "Car parts & accessories", icon: Car },
      { name: "Books & Media", desc: "Read, watch & listen", icon: BookOpen },
      { name: "Pet Supplies", desc: "Care for your pets", icon: PawPrint },
    ],
    gridCols: 2,
  },
  {
    name: "Support",
    subMenu: [
      {
        name: "Help",
        desc: "Center",
        icon: CircleHelp,
      },
      {
        name: "Community",
        desc: "Project help",
        icon: MessageCircle,
      },
      {
        name: "Emergency",
        desc: "Urgent issues",
        icon: TriangleAlert,
      },
    ],
    gridCols: 1,
  },
  {
    name: "Coupons",
    gridCols: 1,
  },
  {
    name: "Contact",
    gridCols: 1,
  },
];

export default function NavbarComponent() {
  const router = useRouter();

  const navigateToCategory = (category: string) => {
    if (category) {
      router.push(
        `/categories?category=${category.toLowerCase().replace(/ /g, "-")}`
      );
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <header
        className={`h-16 text-[15px] transition-all duration-300 ${
          isScrolled
            ? "bg-opacity-50 backdrop-blur-sm bg-slate-50/50"
            : "bg-slate-50"
        }`}
      >
        <nav className="h-full px-4 flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center flex-shrink-0 mr-4">
            <Image src={LogoCO} alt="Crazy Offers Logo" />
          </div>
          <div className="hidden md:block flex-grow max-w-2xl mx-4">
            <SearchBar />
          </div>
          <ul className="hidden lg:flex items-center space-x-6 flex-shrink-0">
            {Menus.map((menu) => (
              <li key={menu.name} className="cursor-pointer">
                <DesktopMenu
                  menu={menu}
                  onSubMenuClick={(
                    category: string,
                    e: React.MouseEvent<HTMLDivElement>
                  ) => {
                    e.stopPropagation(); 
                    navigateToCategory(category);
                  }}
                />
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-x-4 flex-shrink-0 ml-4">
            <button
              className={`px-4 py-2 rounded-lg shadow-sm hover:shadow whitespace-nowrap ${
                isScrolled ? "bg-white/80" : "bg-white"
              }`}
            >
              Login
            </button>
            <MobMenu Menus={Menus as any} />
          </div>
        </nav>
      </header>
    </div>
  );
}
