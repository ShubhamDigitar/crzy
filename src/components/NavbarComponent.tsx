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

import Logo from "../../public/CoLogo.png";
import Image from "next/image";
import DesktopMenu from "./DesktopMenu";

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
    gridCols: 3,
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
  return (
    <div>
      <header className="h-16 text-[15px] fixed inset-0 flex items-center bg-slate-50">
        <nav className="px-3.5 flex items-center justify-between w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-x-3 z-[9999] relative">
            <Image src={Logo} alt="Logo" className="w-full h-8 -mr-3" />
            <h1 className="text-xl">CrazyOffers.in</h1>
          </div>
          <ul className="lg:flex lg:items-center hidden  gap-x-2 ">
            {Menus.map((menu) => (
              <DesktopMenu key={menu.name} menu={menu} />
            ))}
          </ul>
          <div className="flex items-center gap-x-5">
            <button className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex items-center">
              Sign In
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}
