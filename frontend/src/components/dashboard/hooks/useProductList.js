"use client";

import { useState, useMemo } from "react";
import { useDebounce } from "@/common/hooks/useDebounce";

export const useProductList = (initialProducts = []) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const debouncedSearch = useDebounce(search, 500);

   const formatCategory = (text) =>
    text
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const categories = useMemo(() => {
    const unique = new Set(initialProducts.map((p) => p?.category));
    return ["all", ...unique].map(formatCategory);
  }, [initialProducts]);

  const searchLower = debouncedSearch.toLowerCase();

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      const rawCategory = product?.category;
      const matchCategory = category.toLowerCase() === "all" || rawCategory === category.toLowerCase();

      const matchSearch = product?.title
        ?.toLowerCase()
        .includes(searchLower);

      return matchCategory && matchSearch;
    });
  }, [initialProducts, category, debouncedSearch]);

  return {
    products: filteredProducts,
    search,
    setSearch,
    category,
    setCategory,
    categories,
  };
};
