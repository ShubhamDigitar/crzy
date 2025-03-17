import HorizontalCarousel from "@/components/HorizontalCarousel";
import React from "react";

const images = [
  "https://asset22.ckassets.com/wp/wp-content/themes/CashKaro_WP_V1/img/cashback-coupon-codes-one.png",
  "https://asset22.ckassets.com/wp/wp-content/themes/CashKaro_WP_V1/img/cashback-coupon-codes-two.png",
  "https://asset22.ckassets.com/wp/wp-content/themes/CashKaro_WP_V1/img/cashback-coupon-codes-three.png",

];

export default function BestSiteCarousel() {
  return (
    <div className="p-4 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 relative w-fit after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-red-500 after:via-purple-500 after:to-blue-500">
      India&nbsp;s Best Cashback & Coupons Site
      </h2>

      <HorizontalCarousel images={images} />
    </div>
  );
}
