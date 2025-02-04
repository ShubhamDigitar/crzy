"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  images: string[];
  autoPlayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ 
  images, 
  autoPlayInterval = 3000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlayInterval, images.length]);

  // Modified slide variants to use a smaller translation distance
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,  // Reduced from 1000 to 300
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,  // Reduced from 1000 to 300
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      }
      return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
    });
  };

  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl"> {/* Added rounded-xl */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full h-full object-cover rounded-xl shadow-lg"
            alt={`Slide ${currentIndex + 1}`}
          />
        </AnimatePresence>

        <div className="absolute inset-0 flex items-center justify-between px-4 z-[6]">
          <button
            className="bg-white/50 hover:bg-white/80 rounded-full p-2 transition-colors duration-200"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="bg-white/50 hover:bg-white/80 rounded-full p-2 transition-colors duration-200"
            onClick={() => paginate(1)}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-[6]">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;