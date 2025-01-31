"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PopularStore = () => {
  const dummyStores = [
    {
      id: 1,
      name: "Amazon",
      imageUrl: "/logos/amazon.svg",
    },
    {
      id: 2,
      name: "Flipkart",
      imageUrl: "/logos/flipkart.svg",
    },
    {
      id: 3,
      name: "Walmart",
      imageUrl: "/logos/walmart.svg",
    },
    {
      id: 4,
      name: "Myntra",
      imageUrl: "/logos/myntra.svg",
    },
    {
      id: 5,
      name: "Best Buy",
      imageUrl: "/logos/best-buy.svg",
    },
    {
      id: 6,
      name: "eBay",
      imageUrl: "/logos/ebay.svg",
    },
    {
      id: 7,
      name: "Costco",
      imageUrl: "/logos/costco.svg",
    },
    {
      id: 8,
      name: "Nike",
      imageUrl: "/logos/nike.svg",
    },
    {
      id: 9,
      name: "Toyrist",
      imageUrl: "/logos/toyristLogo.png",
    },
  ];

  return (
    <div className="w-full bg-white px-4 py-6 md:px-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 relative w-fit after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-red-500 after:via-purple-500 after:to-blue-500">
        Popular Stores
      </h2>

      <div className="flex flex-col lg:flex-row px-4 gap-6">
        {/* Featured Store - Hidden on mobile */}
        <div className="hidden lg:block lg:w-1/4 my-2 rounded-lg h-[25em] bg-gradient-to-br from-gray-800 to-gray-600">
          <p className="text-white font-bold text-sm pt-4 px-4">MOST POPULAR</p>
          <p className="text-white font-bold text-3xl px-4 capitalize">
            store of the month
          </p>
          <div className="w-[70%] h-[8em] rounded-r-2xl mt-24 bg-black">
            {/* Featured store image will go here */}
            <div className="text-white flex items-center justify-start pt-10 pl-4 text-3xl  ">
              Myntra
            </div>
          </div>
        </div>

        {/* Grid of Stores */}
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
            {dummyStores.map((store) => (
              <motion.div
                key={store.id}
                className="flex flex-col items-center cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  className="relative xl:w-[14em] 2xl:w-[18em] h-24 rounded-lg shadow-lg border-2 border-gray-200 overflow-hidden bg-white"
                  whileHover={{
                    borderColor: "#9CA3AF",
                    boxShadow:
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  }}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="relative w-[10em] h-16">
                      <Image
                        src={store.imageUrl}
                        alt={store.name}
                        fill
                        style={{
                          objectFit: "contain",
                          objectPosition: "center",
                          // scale: 1.5,
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="mt-2 text-center font-semibold text-gray-700"
                  whileHover={{ color: "#1F2937" }}
                >
                  {store.name}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularStore;
