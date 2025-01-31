"use client";
import Image from "next/image";
import { FC, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import productImg from "../../public/product.png";

interface Product {
  link: string;
  image: string;
}

interface ProductDealsCarouselProps {
  title: string;
  products: Product[];
}

const ProductDealsCarousel: FC<ProductDealsCarouselProps> = ({
  title,
  products,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
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
    <div className="w-full bg-white px-4 py-6 md:px-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Top deals on {title}
      </h2>

      <div className="relative group">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hover:bg-gray-50"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hover:bg-gray-50"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        <div
          ref={scrollContainerRef}
          className="w-full overflow-x-auto no-scrollbar scroll-smooth pt-6"
        >
          <div className="flex gap-6 pb-4 min-w-min px-2">
            {products.map((product, index) => (
              <a
                key={index}
                href={product.link}
                className="flex-shrink-0 group/item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative w-72 h-48 md:w-80 md:h-56 lg:w-96 lg:h-64 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 p-[0px] bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] animate-border-move">
                  <div className="w-full h-full rounded-lg overflow-hidden bg-white relative">
                    <div className="w-full h-full rounded-lg overflow-hidden border-2 border-transparent hover:border-white transition-all duration-300">
                      <Image
                        src={productImg}
                        alt={`Deal on ${title}`}
                        fill
                        sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                        className="object-cover rounded-lg"
                        priority={index < 3}
                      />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDealsCarousel;
