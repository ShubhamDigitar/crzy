import AnimSection from "@/components/AnimSection";
import CircleCategories from "@/components/CircleCategories";
import Footer from "@/components/Footer";
import PopularStore from "@/components/PopularStore";
import ProductListPage from "@/components/ProductListPage";
import SliderMain from "@/components/SliderMain";
import Typewriter from "@/components/text/Typewriter";

const HomePage = () => {
  return (
    <div className="px-2 md:px-4 lg:px-8 xl:px-12 2xl:px-32 ">
      <SliderMain />
      <CircleCategories />
      <ProductListPage />
      <PopularStore/>
      <AnimSection />
      </div>
  );
};

export default HomePage;
