import AnimSection from "@/components/AnimSection";
import BestSiteCarousel from "@/components/BestSiteCarousel";
import CircleCategories from "@/components/CircleCategories";
import Footer from "@/components/Footer";
import PopularOffersCarousel from "@/components/PopularOffersCarousel";
import PopularStore from "@/components/PopularStore";
import ProductListPage from "@/components/ProductListPage";
import ReferSection from "@/components/ReferSection";
import SliderMain from "@/components/SliderMain";
import Typewriter from "@/components/text/Typewriter";

const HomePage = () => {
  return (
    <div className="px-2 md:px-4 lg:px-8 xl:px-12 2xl:px-32 ">
      <SliderMain />
      <CircleCategories />
      <ProductListPage />
      {/* <AnimSection /> */}
      <PopularStore/>
      <ReferSection/>
      <BestSiteCarousel/>
      <PopularOffersCarousel/>
      </div>
  );
};

export default HomePage;
