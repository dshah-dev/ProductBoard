"use client";

import { useState, useMemo } from "react";
import { useDebounce } from "@/common/hooks/useDebounce";

export const useProductList = (initialProducts = []) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const debouncedSearch = useDebounce(search, 500);

  const categories = useMemo(() => {
    const unique = new Set(initialProducts.map((p) => p?.category));
    return ["all", ...unique];
  }, [initialProducts]);
  const searchLower = debouncedSearch.toLowerCase();
  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      const matchCategory = category === "all" || product?.category === category;

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
