import ProductCard from "./ProductCard";
import { Product } from "../types/product";

interface CategoryGridProps {
  products: Product[];
}

export default function CategoryGrid({ products }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}