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

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import SearchBar from "./SearchBar";
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

interface MenuItem {
  name: string;
  subMenu?: {
    name: string;
    desc: string;
    icon: React.ComponentType<{ size: number }>;
  }[];
  gridCols: number;
}

interface MobMenuProps {
  Menus: MenuItem[];
}

export default function MobMenu({ Menus }: MobMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState<number | null>(null);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  return (
    <div>
      <button className="lg:hidden z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>
      
      <motion.div
        className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-white backdrop-blur text-black p-6 pb-20"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul>
        <SearchBar />
          {Menus.map(({ name, subMenu }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length;
            return (
              <li key={name} className="">
                <span
                  className="flex items-center justify-between p-4 hover:bg-black/5 rounded-md cursor-pointer relative"
                  onClick={() => setClicked(isClicked ? null : i)}
                >
                  {name}
                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto ${isClicked && "rotate-180"} `}
                    />
                  )}
                </span>
                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {subMenu.map(({ name, icon: Icon }) => (
                      <li
                        key={name}
                        className="p-2 flex-center hover:bg-black/5 rounded-md gap-x-2 cursor-pointer"
                      >
                        <Icon size={17} />
                        {name}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
