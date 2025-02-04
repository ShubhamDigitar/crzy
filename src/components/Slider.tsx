"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Tech Gadgets Sale",
    description: "Up to 50% off on the latest gadgets!",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/tech-gadgets",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Fashion Flash Deals",
    description: "Up to 70% off on trendy outfits!",
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/fashion",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Vacation Getaways",
    description: "Exclusive deals on top vacation destinations!",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/vacation-getaways",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
      <div
        className="w-full h-full flex transition-transform duration-1000"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} min-w-full h-full flex flex-col xl:flex-row items-center`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div className="w-full xl:w-1/2 h-1/2 xl:h-full flex flex-col items-center justify-center gap-4 md:gap-8 text-center p-4">
              <h2 className="text-lg md:text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="rounded-md bg-black text-white py-2 px-4 md:py-3 md:px-6">
                  Offers
                </button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="w-full xl:w-1/2 h-1/2 xl:h-full relative">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        ))}
      </div>
      {/* Navigation Dots */}
      <div className="absolute left-1/2 bottom-4 -translate-x-1/2 flex gap-4">
        {slides.map((slide, index) => (
          <button
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center transition-transform ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slider;