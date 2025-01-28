import { useState } from "react";
import { Frame, useMotionValue, useTransform, useAnimation } from "framer-motion";

// Example card data
const cards = [
  {
    id: 1,
    title: "Tech Gadgets",
    image: "https://img.icons8.com/color/452/GeeksforGeeks.png",
  },
  {
    id: 2,
    title: "Fashion Deals",
    image: "https://img.icons8.com/color/452/GeeksforGeeks.png",
  },
  {
    id: 3,
    title: "Vacation Packages",
    image: "https://img.icons8.com/color/452/GeeksforGeeks.png",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const motionValue = useMotionValue(0); // For drag movement
  const rotateValue = useTransform(motionValue, [-200, 200], [-50, 50]); // For rotation
  const opacityValue = useTransform(motionValue, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]); // For opacity
  const animControls = useAnimation(); // For animations

  const handleDragEnd = (event, info) => {
    // If dragged within 150px, reset the card to its center
    if (Math.abs(info.point.x) <= 150) {
      animControls.start({ x: 0 });
    } else {
      // If dragged further than 150px, make the card disappear
      animControls.start({ x: info.point.x < 0 ? -200 : 200 });

      // After a swipe, set the next card (to simulate moving to the next card in a stack)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length); // Loop through the cards
      }, 500); // Delay for smooth transition
    }
  };

  const card = cards[currentIndex];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Frame
        center
        drag="x"
        x={motionValue}
        rotate={rotateValue}
        opacity={opacityValue}
        dragConstraints={{ left: -1000, right: 1000 }}
        style={{
          backgroundImage: `url(${card.image})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="w-80 h-80 shadow-lg rounded-xl cursor-grab"
        onDragEnd={handleDragEnd}
        animate={animControls}
      >
        <div className="absolute top-4 left-4 text-xl font-bold text-white">{card.title}</div>
      </Frame>
    </div>
  );
};

export default Home;
