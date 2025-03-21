"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useSWR from "swr";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Fetcher function
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ResponsiveCarousel = () => {
  const { data: images, error } = useSWR("/api/carousel-images", fetcher);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (images) {
      setLoading(false);
    }
  }, [images]);

  useEffect(() => {
    const updateVisibility = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // Tablet
      } else {
        setVisibleCards(3); // Desktop
      }
    };

    updateVisibility();
    window.addEventListener("resize", updateVisibility);
    return () => window.removeEventListener("resize", updateVisibility);
  }, []);

  if (error) return <div>Error loading images</div>;
  if (loading || !images) {
    return (
      <div className="flex gap-4 overflow-hidden">
        {[...Array(visibleCards)].map((_, index) => (
          <div
            key={index}
            className="w-full h-64 bg-gray-300 animate-pulse rounded-lg"
          />
        ))}
      </div>
    );
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, images.length - visibleCards)
    );
  };

  return (
    <div className="relative w-full overflow-hidden px-4 py-8">
      {/* Arrows */}
      {currentIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 text-gray-800 rounded-full p-2 shadow-md hover:bg-gray-200 z-10"
        >
          <ChevronLeft size={30} />
        </button>
      )}

      {currentIndex < images.length - visibleCards && (
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 text-gray-800 rounded-full p-2 shadow-md hover:bg-gray-200 z-10"
        >
          <ChevronRight size={30} />
        </button>
      )}

      <motion.div
        ref={containerRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
        }}
      >
        {images.map((img: any, index: number) => (
          <div
            key={index}
            className="min-w-[calc(100%/3)] sm:min-w-[calc(100%/2)] lg:min-w-[calc(100%/3)] px-2"
          >
            <Image
              src={img.image_link}
              alt={`Slide ${index + 1}`}
              width={1200}
              height={400}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ResponsiveCarousel;
