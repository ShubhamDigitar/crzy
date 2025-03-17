import HorizontalCarousel from "@/components/HorizontalCarousel";
import React from "react";

const images = [
  "https://asset22.ckassets.com/resources/image/staticpage_images/amazon-sale-1740478243.jpg",
  "https://asset22.ckassets.com/resources/image/staticpage_images/flipkart-sale-1740478270.jpg",
  "https://pixelpod.in/admin/uploads/ToyristSale1742198157.png",
];

export default function PopularOffersCarousel() {
  return (
    <div className="p-4 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 relative w-fit after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-red-500 after:via-purple-500 after:to-blue-500">
        Popular Sales Online
      </h2>

      <HorizontalCarousel images={images} />
    </div>
  );
}
