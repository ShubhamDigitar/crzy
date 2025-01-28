import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import SliderMain from "@/components/SliderMain";

const HomePage = () => {
  return (
    <>
      <SliderMain />
      <div className="mt-24">
        <ProductList />
      </div>
    </>
  );
};

export default HomePage;
