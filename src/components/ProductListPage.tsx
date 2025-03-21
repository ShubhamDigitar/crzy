"use client";
import { useEffect, useState } from "react";
import ProductDealsCarousel from "./ProductDealsCarousel";
import SkeletonCarousel from "./ProductCardSkeleton";

interface Product {
  id: number;
  company_id: number;
  title: string;
  description: string;
  price: string;
  link: string;
  image_url: string;
}

interface Company {
  id: number;
  name: string;
  image_url: string;
  products: Product[];
}

const ProductListPage = () => {
  const [carousels, setCarousels] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCarousels = async () => {
      try {
        const res = await fetch("/api/carousels");
        if (!res.ok) throw new Error("Failed to fetch data");

        const data = await res.json();
        setCarousels(data);
      } catch (err: any) {
        console.error("Error fetching carousel data:", err);
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchCarousels();
  }, []);

  if (loading) {
    return (
      <div className="space-y-12">
        {/* Render 3 skeleton loaders while loading */}
        <SkeletonCarousel />
        <SkeletonCarousel />
        <SkeletonCarousel />
      </div>
    );
  }

  if (error) return <p>{error}</p>;

  return (
    <div className="space-y-12">
      {carousels.map((carousel) => (
        <ProductDealsCarousel
          key={carousel.id}
          title={carousel.name}
          products={carousel.products.map((product) => ({
            link: product.link,
            image: product.image_url,
          }))}
        />
      ))}
    </div>
  );
};

export default ProductListPage;
