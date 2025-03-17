"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

interface CarouselProps {
  images: string[];
}

const HorizontalCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [visibleImages, setVisibleImages] = useState(3); 
  const controls = useAnimation();

  useEffect(() => {
    const updateVisibility = () => {
      if (window.innerWidth < 640) {
        setVisibleImages(1); 
      } else {
        setVisibleImages(3); 
      }
    };

    updateVisibility();
    window.addEventListener("resize", updateVisibility);
    return () => window.removeEventListener("resize", updateVisibility);
  }, []);

  return (
    <div className="overflow-hidden flex justify-center w-full">
      <motion.div
        className="flex gap-4"
        drag={images.length > visibleImages ? "x" : false} // Enable swipe only if more images exist
        dragConstraints={{ left: -((images.length - visibleImages) * 300), right: 0 }}
        animate={controls}
      >
        {images.map((src, i) => (
          <motion.div key={i} className="w-[300px] h-60 flex-shrink-0">
            <img
              src={src}
              alt={`Slide ${i}`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HorizontalCarousel;
