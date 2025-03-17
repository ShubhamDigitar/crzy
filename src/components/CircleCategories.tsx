"use client";
import Image from "next/image";
import { FC, useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Brand {
  category_name: string;
  image_url: string;
  view_priority: number;
}

const CircleCategories: FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/categories");
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }
        const data = await response.json();
        const sortedBrands = data.sort((a: Brand, b: Brand) => a.view_priority - b.view_priority);
        setBrands(sortedBrands);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch brands");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBrands();
  }, []);

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

        <div ref={scrollContainerRef} className="w-full overflow-x-auto no-scrollbar scroll-smooth">
          {isLoading ? (
            // Skeleton Loader
            <div className="flex gap-4 pb-4 min-w-min px-2 md:gap-10">
              {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="flex flex-col items-center flex-shrink-0 pt-2">
                  <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-gray-200 animate-pulse mb-2" />
                  <div className="w-16 h-4 bg-gray-200 animate-pulse rounded"></div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="flex justify-center items-center h-24">
              <p className="text-red-500">Error: {error}</p>
            </div>
          ) : (
            <div className="flex gap-4 pb-4 min-w-min px-2 md:gap-10">
              {brands.map((brand, index) => (
                <div key={index} className="flex flex-col items-center flex-shrink-0 group/item pt-2 cursor-pointer">
                  <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 p-[3px] mb-2 transition-transform duration-300 ease-in-out group-hover/item:scale-105">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <div className="relative w-full h-full">
                        <Image
                          src={brand.image_url}
                          alt={`${brand.category_name} logo`}
                          fill
                          sizes="(max-width: 768px) 64px, (max-width: 1024px) 80px, 96px"
                          className="object-contain rounded-full scale-95"
                          priority={index < 4}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-center text-gray-800 group-hover/item:text-gray-600 cursor-pointer">
                    {brand.category_name}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CircleCategories;
