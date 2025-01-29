'use client';

import React from 'react';
import amazonLogo from "../../../public/logos/amazon-logo.png";

export const IconCloud = () => {
  const [hoveredIcon, setHoveredIcon] = React.useState<number | null>(null);

  // Each logo is repeated 6 times for this example
  // Replace with different logos when you have them
  const logos = [
    {
      image: amazonLogo,
      alt: "Amazon"
    },
    {
      image: amazonLogo,
      alt: "Amazon"
    },
    {
      image: amazonLogo,
      alt: "Amazon"
    },
    {
      image: amazonLogo,
      alt: "Amazon"
    },
    {
      image: amazonLogo,
      alt: "Amazon"
    },
    {
      image: amazonLogo,
      alt: "Amazon"
    }
  ];

  // Log the logos array to check if the images are imported correctly
  console.log('Logos array:', logos);

  return (
    <div className="relative h-64 w-64 bg-white rounded-xl">
      {logos.map((logo, index) => {
        const angle = (360 / logos.length) * index;
        const radius = 80;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        console.log(`Logo ${index}:`, logo);

        return (
          <div
            key={index}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out"
            style={{
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${hoveredIcon === index ? 1.5 : 1})`,
            }}
            onMouseEnter={() => setHoveredIcon(index)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <img 
              src={logo.image.src}
              alt={logo.alt}
              width={58}
              height={58}
              className={`transition-all duration-300 ${hoveredIcon === index ? 'brightness-110 scale-160' : ''}`}
            />
          </div>
        );
      })}
    </div>
  );
};