"use client";
import CardIndex from "./CardIndex";
import Carousel from "./Carousel";

const SliderMain = () => {
  const images = [
    "/image1.png",
    "/image2.png",
    "/image1.png",
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 md:p-5">
      <div className="w-full md:w-4/5 h-[300px]"> {/* Added fixed height */}
        <Carousel images={images} autoPlayInterval={5000} />
      </div>
      <div className="hidden md:block md:w-1/5 rounded-xl">
        <CardIndex />
      </div>
    </div>
  );
};

export default SliderMain;
