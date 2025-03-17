"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function FilterSidebar() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");
  const [sortType, setSortType] = useState(searchParams.get("sortType") || "low");

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);
    params.set("sortType", sortType);
    router.push(`/categories?${params.toString()}`);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-3">Filters</h3>
      <div className="mb-3">
        <label className="block text-sm font-medium">Min Price</label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium">Max Price</label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium">Sort By</label>
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>
      <button onClick={applyFilters} className="w-full bg-blue-500 text-white p-2 rounded">
        Apply Filters
      </button>
    </div>
  );
}
