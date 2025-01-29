import ProductDealsCarousel from "./ProductDealsCarousel";

const products = [
  { link: "https://amazon.com/product1", image: "/product1.jpg" },
  { link: "https://amazon.com/product2", image: "/product2.jpg" },
  { link: "https://amazon.com/product3", image: "/product3.jpg" },
  { link: "https://amazon.com/product4", image: "/product4.jpg" },
  { link: "https://amazon.com/product5", image: "/product5.jpg" },
  { link: "https://amazon.com/product5", image: "/product5.jpg" },
  { link: "https://amazon.com/product5", image: "/product5.jpg" },
  { link: "https://amazon.com/product5", image: "/product5.jpg" },
  { link: "https://amazon.com/product5", image: "/product5.jpg" },
  // Add more products...
];

const ProductListPage = () => {
  return (
    <div>
      <ProductDealsCarousel title="Amazon" products={products} />
      <ProductDealsCarousel title="Flipkart" products={products} />
      <ProductDealsCarousel title="Reliance Digital" products={products} />
      <ProductDealsCarousel title="Chroma" products={products} />
    </div>
  );
};

export default ProductListPage;
