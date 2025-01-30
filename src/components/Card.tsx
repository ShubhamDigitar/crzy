import { PanInfo, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CardProps } from "../types/index";
import Image from "next/image"; // Import Image from Next.js
import img from "../../public/product.png"; // Import the background image

const Card: React.FC<CardProps> = ({ card, removeCard, active }) => {
  const [leaveX, setLeaveX] = useState(0);
  const [leaveY, setLeaveY] = useState(0);

  useEffect(() => {
    if (active) {
      const timer = setTimeout(() => {
        setLeaveX(1000); // Auto-swipe right (like)
        removeCard(card, "like");
      }, 3000); // 3-second delay

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [active, card, removeCard]);

  const onDragEnd = (_e: any, info: PanInfo) => {
    if (info.offset.y < -100) {
      setLeaveY(-2000);
      removeCard(card, "superlike");
      return;
    }
    if (info.offset.x > 100) {
      setLeaveX(1000);
      removeCard(card, "like");
    }
    if (info.offset.x < -100) {
      setLeaveX(-1000);
      removeCard(card, "nope");
    }
  };

  return (
    <>
      {active ? (
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          onDragEnd={onDragEnd}
          initial={{ scale: 1, opacity: 1 }}
          animate={{
            scale: 1.05,
            rotate: `${card.name.length % 2 === 0 ? 6 : -6}deg`,
          }}
          exit={{
            x: leaveX,
            y: leaveY,
            opacity: 0,
            scale: 0.5,
            transition: { duration: 0.2 },
          }}
          className="absolute h-[82%] w-[92%] rounded-2xl p-[3px] bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] animate-border-move"
          data-testid="active-card"
        >
          <div
            className="h-full w-full bg-white shadow-xl rounded-2xl flex flex-col justify-center items-center cursor-grab"
            style={{
              backgroundImage: `url(${img.src})`, // Set the background image for the white layer
              backgroundSize: "cover", // Ensure the image covers the whole white area
              backgroundPosition: "center", // Center the background image
            }}
          >
            {/* Only Image */}
           
          </div>
        </motion.div>
      ) : (
        <div
          className={`absolute h-[82%] w-[92%] p-[3px] rounded-2xl bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] animate-border-move ${
            card.name.length % 2 === 0 ? "rotate-6" : "-rotate-6"
          }`}
        >
          <div
            className="h-full w-full bg-white shadow-xl rounded-2xl flex flex-col justify-center items-center"
            style={{
              backgroundImage: `url(${img.src})`, // Set the background image for the white layer
              backgroundSize: "cover", // Ensure the image covers the whole white area
              backgroundPosition: "center", // Center the background image
            }}
          >
            {/* Only Image */}
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
