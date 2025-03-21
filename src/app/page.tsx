import AnimSection from "@/components/AnimSection";
import BestSiteCarousel from "@/components/BestSiteCarousel";
import CircleCategories from "@/components/CircleCategories";
import Footer from "@/components/Footer";
import PopularOffersCarousel from "@/components/PopularOffersCarousel";
import PopularStore from "@/components/PopularStore";
import ProductListPage from "@/components/ProductListPage";
import ReferSection from "@/components/ReferSection";
import ResponsiveCarousel from "@/components/ResponsiveCarousel";
import SliderAnim from "@/components/ResponsiveCarousel";
import SliderMain from "@/components/SliderMain";
import Typewriter from "@/components/text/Typewriter";

const HomePage = () => {
  const images = [
    { id: 1, src: "/images/slide1.jpg", alt: "Slide 1" },
    { id: 2, src: "/images/slide2.jpg", alt: "Slide 2" },
    { id: 3, src: "/images/slide3.jpg", alt: "Slide 3" },
    { id: 4, src: "/images/slide4.jpg", alt: "Slide 4" },
    { id: 5, src: "/images/slide5.jpg", alt: "Slide 5" },
  ];
  return (
    <div className="px-2 md:px-4 lg:px-8 xl:px-12 2xl:px-32 ">
      {/* <SliderMain /> */}
      <ResponsiveCarousel />
      <CircleCategories />
      <ProductListPage />
      <PopularStore />
      <ReferSection />
      <BestSiteCarousel />
      <PopularOffersCarousel />
    </div>
  );
};

export default HomePage;
