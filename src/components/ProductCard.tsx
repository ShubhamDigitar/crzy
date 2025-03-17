import Image from "next/image";
import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48 mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
      <div className="flex justify-between items-center mt-3">
        <span className="text-blue-600 font-bold">${product.price.toFixed(2)}</span>
        <span className="text-xs bg-gray-100 px-2 py-1 rounded">{product.store}</span>
      </div>
    </div>
  );
}