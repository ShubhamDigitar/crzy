// "use client";
// import { useSearchParams } from "next/navigation";
// import { useState, useEffect } from "react";
// import { products } from "../data/data";
// import CategoryGrid from "@/components/CategoryGrid";
// import FilterSidebar from "@/components/FilterSidebar";
// import SkeletonLoader from "../../components/SkeletonLoader";
// import { Product } from "../../types/product"; // Import the Product type from your types file

// export default function CategoryPage() {
//   const searchParams = useSearchParams();
//   const category = searchParams.get("category");
//   const minPrice = searchParams.get("minPrice");
//   const maxPrice = searchParams.get("maxPrice");
//   const sortType = searchParams.get("sortType");
//   const selectedStores = searchParams.getAll("stores");

//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 9;
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     setTimeout(() => setLoading(false), 1000); // Simulating API call delay
//   }, [category, minPrice, maxPrice, sortType, selectedStores]);

//   // Fix the filtering logic by adding proper type annotations
//   const filteredProducts = (products as any[])
//     .map((product) => ({
//       ...product,
//       name: product.name || "",
//       image: product.image || "/placeholder.jpg",
//       description: product.description || "No description available"
//     }))
//     .filter((product: Product) => 
//       category ? product.category.toLowerCase() === category.toLowerCase() : true
//     )
//     .filter((product: Product) => 
//       minPrice ? product.price >= Number(minPrice) : true
//     )
//     .filter((product: Product) => 
//       maxPrice ? product.price <= Number(maxPrice) : true
//     )
//     .filter((product: Product) =>
//       selectedStores.length > 0 ? selectedStores.includes(product.store) : true
//     ) as Product[];

//   const sortedProducts = [...filteredProducts].sort((a, b) =>
//     sortType === "low" ? a.price - b.price : b.price - a.price
//   );

//   // Pagination Logic
//   const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
//   const paginatedProducts = sortedProducts.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   return (
//     <div className="grid grid-cols-12 gap-4 p-4">
//       <div className="col-span-3">
//         <FilterSidebar />
//       </div>
//       <div className="col-span-9">
//         {loading ? (
//           <SkeletonLoader count={9} />
//         ) : paginatedProducts.length > 0 ? (
//           <>
//             <CategoryGrid products={paginatedProducts} />
//             {/* Pagination Controls */}
//             <div className="flex justify-center mt-6">
//               {Array.from({ length: totalPages }, (_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setCurrentPage(i + 1)}
//                   className={`px-4 py-2 mx-1 rounded ${
//                     currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
//                   }`}
//                 >
//                   {i + 1}
//                 </button>
//               ))}
//             </div>
//           </>
//         ) : (
//           <h1 className="text-center text-2xl text-red-600">
//             No Crazy Offers Found 🥲
//           </h1>
//         )}
//       </div>
//     </div>
//   );
// }
import React from 'react'

const page = () => {
  return (
    <div>Category</div>
  )
}

export default page