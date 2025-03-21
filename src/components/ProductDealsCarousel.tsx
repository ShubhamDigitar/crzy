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
      const scrollAmount = 300; // Smaller scroll amount
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
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
        Crazy deals on&nbsp;
        <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 inline-block text-transparent bg-clip-text">
          {title}
        </span>
      </h2>

      <div className="relative group">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hover:bg-gray-50"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hover:bg-gray-50"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>

        <div
          ref={scrollContainerRef}
          className="w-full overflow-x-auto no-scrollbar scroll-smooth pt-4"
        >
          <div className="flex gap-4 pb-4 min-w-min">
            {products.map((product, index) => (
              <a
                key={index}
                href={product.link}
                className="flex-shrink-0 group/item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative w-52 h-36 md:w-60 md:h-44 lg:w-72 lg:h-52 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <div className="w-full h-full rounded-lg overflow-hidden bg-white relative">
                    <div className="w-full h-full rounded-lg overflow-hidden border-2 border-transparent hover:border-gray-300 transition-all duration-300">
                      <Image
                        src={productImg}
                        alt={`Deal on ${title}`}
                        fill
                        sizes="(max-width: 768px) 208px, (max-width: 1024px) 240px, 288px"
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
