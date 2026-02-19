"use client";

import ProductList from "../productlist/index";
import { useProductList } from "../../hooks/useProductList";
import SearchBar from "./searchbar/index";
import CategoryFilter from "./filter/index";

export default function mainBoard({ products }) {
  const {
    products: filteredProducts,
    search,
    setSearch,
    category,
    setCategory,
    categories,
  } = useProductList(products);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 ">
        <SearchBar search={search} setSearch={setSearch} />
        <CategoryFilter
          category={category}
          setCategory={setCategory}
          categories={categories}
        />
      </div>

      <ProductList initialProducts={filteredProducts} />
    </div>
  );
}
