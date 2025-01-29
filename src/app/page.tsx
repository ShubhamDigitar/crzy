import AnimSection from "@/components/AnimSection";
import CircleCategories from "@/components/CircleCategories";
import Footer from "@/components/Footer";
import ProductListPage from "@/components/ProductListPage";
import SliderMain from "@/components/SliderMain";
import Typewriter from "@/components/text/Typewriter";

const HomePage = () => {
  return (
    <>
      <SliderMain />
      <CircleCategories />
      <ProductListPage />
      <AnimSection />
      </>
  );
};

export default HomePage;
