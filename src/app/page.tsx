import AnimSection from "@/components/AnimSection";
import CircleCategories from "@/components/CircleCategories";
import Footer from "@/components/Footer";
import PopularStore from "@/components/PopularStore";
import ProductListPage from "@/components/ProductListPage";
import SliderMain from "@/components/SliderMain";
import Typewriter from "@/components/text/Typewriter";

const HomePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <SliderMain />
      <CircleCategories />
      <ProductListPage />
      <PopularStore/>
      <AnimSection />
      </div>
  );
};

export default HomePage;
