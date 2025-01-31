"use client";
import Image from "next/image";
import { FC, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image from "../../public/comp_logo.jpg";

interface Company {
  name: string;
  logo: string;
}

const CircleCategories: FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const companies: Company[] = [
    { name: "Company", logo: "/api/placeholder/80/80" },
    { name: "Company", logo: "/api/placeholder/80/80" },
    { name: "Company", logo: "/api/placeholder/80/80" },
    { name: "Company", logo: "/api/placeholder/80/80" },
    { name: "Company", logo: "/api/placeholder/80/80" },
    { name: "Company", logo: "/api/placeholder/80/80" },
    { name: "Company", logo: "/api/placeholder/80/80" },
    { name: "Company", logo: "/api/placeholder/80/80" },
    { name: "Company", logo: "/api/placeholder/80/80" },
    { name: "Company", logo: "/api/placeholder/80/80" },
    { name: "Company", logo: "/api/placeholder/80/80" },
    { name: "Company", logo: "/api/placeholder/80/80" },
    { name: "Company", logo: "/api/placeholder/80/80" },
    { name: "Company", logo: "/api/placeholder/80/80" },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      const newScrollPosition =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full px-4 py-4 md:px-8 relative">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 relative w-fit after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-red-500 after:via-purple-500 after:to-blue-500">
        Top Brands
      </h2>

      <div className="relative group">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>

        <div
          ref={scrollContainerRef}
          className="w-full overflow-x-auto no-scrollbar scroll-smooth"
        >
          <div className="flex gap-4 pb-4 min-w-min px-2 md:gap-10">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex flex-col items-center flex-shrink-0 group/item pt-2 cursor-pointer"
              >
                {/* Gradient border container */}
                <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 p-[3px] mb-2 transition-transform duration-300 ease-in-out group-hover/item:scale-105">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={image}
                      alt={`${company.name} logo`}
                      fill
                      sizes="(max-width: 768px) 64px, (max-width: 1024px) 80px, 96px"
                      className="object-cover rounded-full scale-95" // Scale down the image
                      priority={index < 4}
                    />
                  </div>
                </div>
                <p className="text-sm md:text-base text-center text-gray-800 group-hover/item:text-gray-600 cursor-pointer">
                  {company.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleCategories;
