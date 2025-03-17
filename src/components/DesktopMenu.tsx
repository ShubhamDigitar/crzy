"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigateToCategory } from "@/utils/useNavigateToCategory";

interface SubMenu {
  icon?: React.ComponentType<{ className?: string }>;
  name: string;
  desc: string;
}
interface DesktopMenuProps {
  menu: Menu;
  onSubMenuClick?: (
    category: string,
    e: React.MouseEvent<HTMLDivElement>
  ) => void; // Yeh Line
}

interface Menu {
  name: string;
  gridCols: number;
  subMenu?: SubMenu[];
}

export default function DesktopMenu({
  menu,
  onSubMenuClick,
}: DesktopMenuProps) {
  const [isHover, setIsHover] = useState(false);
  const router = useRouter();

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);
  const navigateToCategory = useNavigateToCategory();
  const handleSubMenuClick = (category: string) => {
    navigateToCategory(category);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.3 },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: { duration: 0.3 },
      transitionEnd: { display: "none" },
    },
  };

  const getMinWidth = () => {
    if (menu.gridCols === 3) return "min-w-[800px]";
    if (menu.gridCols === 2) return "min-w-[600px]";
    return "min-w-[300px]";
  };

  return (
    <motion.li
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="flex items-center gap-1 hover:bg-white/10 cursor-pointer px-3 py-1.5 rounded-xl">
        {menu.name}
        {menu.subMenu && (
          <ChevronDown
            className={`transition-transform ${isHover ? "rotate-180" : ""}`}
          />
        )}
      </span>

      {menu.subMenu && (
        <motion.div
          className={`absolute -left-12 top-full mt-1 p-4 rounded-lg bg-white shadow-lg z-50 border border-gray-200 ${getMinWidth()}`}
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          <div className="absolute -top-2 left-0 right-0 h-4 bg-transparent" />
          <div className={`grid gap-3 grid-cols-${menu.gridCols}`}>
            {menu.subMenu.map((submenu, i) => (
              <div
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  onSubMenuClick?.(submenu.name, e);
                }}
                className="cursor-pointer hover:bg-gray-100 rounded-lg p-3 transition-transform hover:scale-105"
              >
                <div className="flex items-center gap-3">
                  {submenu.icon && (
                    <div className="bg-gray-100 p-2 rounded-md">
                      <submenu.icon className="w-5 h-5 text-gray-700" />
                    </div>
                  )}
                  <div>
                    <h6 className="font-medium">{submenu.name}</h6>
                    <p className="text-sm text-gray-500">{submenu.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}
