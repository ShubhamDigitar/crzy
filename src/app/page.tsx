import AnimSection from "@/components/AnimSection";
import CircleCategories from "@/components/CircleCategories";
import Footer from "@/components/Footer";
import PopularStore from "@/components/PopularStore";
import ProductListPage from "@/components/ProductListPage";
import SliderMain from "@/components/SliderMain";
import Typewriter from "@/components/text/Typewriter";

const HomePage = () => {
  return (
    <>
      <SliderMain />
      <CircleCategories />
      <ProductListPage />
      <PopularStore/>
      <AnimSection />
      </>
  );
};

export default HomePage;
