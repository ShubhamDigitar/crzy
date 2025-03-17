"use client";
import { useRouter } from "next/navigation";

export const useNavigateToCategory = () => {
  const router = useRouter();

  const navigateToCategory = (category: string) => {
    if (category) {
      router.push(`/categories?category=${category.toLowerCase().replace(/ /g, "-")}`);
    }
  };

  return navigateToCategory;
};
