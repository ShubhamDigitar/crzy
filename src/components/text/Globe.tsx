"use client";

import IconCloud from "@/components/magicui/icon-cloud";

export default function Globe() {
  // Common technology icon slugs
  const iconSlugs = [
    // Frontend
    "react",
    "nextdotjs",
    "typescript",
    "javascript",
    "html5",
    "css3",
    "tailwindcss",
    
    // Backend
    "nodejs",
    "express",
    "mongodb",
    "postgresql",
    
    // Tools
    "git",
    "github",
    "visualstudiocode",
    "webpack",
    
    // Cloud
    "amazonaws",
    "googlecloud",
    "firebase",
    
    // Other popular tech
    "docker",
    "kubernetes",
    "redux",
    "graphql",
    "prisma"
  ];

  return (
    <div className="w-full h-[500px]">
      <IconCloud iconSlugs={iconSlugs} />
    </div>
  );
}