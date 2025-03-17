"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

interface CarouselProps {
  images: string[];
}

const HorizontalCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [visibleImages, setVisibleImages] = useState(3);
  const controls = useAnimation();

  useEffect(() => {
    const updateVisibility = () => {
      setVisibleImages(window.innerWidth < 640 ? 1 : 3);
    };

    updateVisibility();
    window.addEventListener("resize", updateVisibility);
    return () => window.removeEventListener("resize", updateVisibility);
  }, []);

  const canDrag = images.length > visibleImages;
  const dragConstraints = canDrag
    ? { left: -((images.length - visibleImages) * 300), right: 0 }
    : { left: 0, right: 0 };

  return (
    <div className="overflow-hidden flex justify-center w-full">
      <motion.div
        className="flex gap-4"
        drag={canDrag ? "x" : false} // Enable swipe only if more images exist
        dragConstraints={dragConstraints}
        animate={controls}
      >
        {images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`Slide ${i}`}
            width={300}
            height={240}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default HorizontalCarousel;
