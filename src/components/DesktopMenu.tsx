import { useState, useRef, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

interface SubMenu {
  icon?: React.ComponentType;
  name: string;
  desc: string;
}

interface Menu {
  name: string;
  gridCols: number;
  subMenu?: SubMenu[];
}

export default function DesktopMenu({ menu }: { menu: Menu }) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false); // Instant close - no timeout
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.3,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const hasSubMenu = menu.subMenu && menu.subMenu.length > 0;

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
        {hasSubMenu && (
          <ChevronDown
            className={`mt-[0.6px] transition-transform duration-200 ${
              isHover ? "rotate-180" : ""
            }`}
          />
        )}
      </span>
      {hasSubMenu && (
        <motion.div
          className={`absolute left-0 top-full mt-1 p-4 rounded-lg bg-white shadow-lg z-50 ${getMinWidth()}`}
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="absolute -top-2 left-0 right-0 h-4 bg-transparent" />
          <div
            className={`grid gap-6 ${
              menu.gridCols === 3
                ? "grid-cols-3"
                : menu.gridCols === 2
                ? "grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {menu.subMenu?.map((submenu, i) => (
              <div
                key={i}
                className="group/item hover:bg-gray-50 rounded-lg p-3 transition-colors duration-200"
              >
                <div className="flex items-center gap-x-4">
                  {submenu.icon && (
                    <div className="bg-gray-100 p-2.5 rounded-md group-hover/item:bg-white group-hover/item:shadow-sm transition-all duration-200 flex-shrink-0">
                      <div className="w-5 h-5 text-gray-700">
                        <submenu.icon />
                      </div>
                    </div>
                  )}
                  <div className="min-w-0">
                    <h6 className="font-medium text-gray-900 truncate">
                      {submenu.name}
                    </h6>
                    <p className="text-sm text-gray-500 truncate">
                      {submenu.desc}
                    </p>
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
