
import CardIndex from "./CardIndex";
import Carousel from "./Carousel";

const SliderMain = () => {
  const images = [
    "/image1.png",
    "/image2.png",
    "/image1.png",

    // Add more image paths
  ];
  return (
    <div className="h-auto flex flex-col md:flex-row gap-20 p-5 mt-2 overflow-hidden">
      <div className="w-full md:w-4/5  h-[50vh]">
        <Carousel images={images} autoPlayInterval={5000} />
      </div>
      <div className="hidden md:block w-full md:w-1/5  rounded-xl h-[50vh]">
        {/* <Slider/> */}
        <CardIndex />
      </div>
    </div>
  );
};

export default SliderMain;
