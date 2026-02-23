"use client";

import { useRouter } from "next/navigation";

export default function useProductDetailPage(product) {
  const router = useRouter();

  const handleAddToCart = () => {
    const existingCart = JSON.parse(sessionStorage.getItem("cart") || "[]");
    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === product.id,
    );
    if (existingProductIndex > 0) {
      existingCart[existingProductIndex].quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }
    sessionStorage.setItem("cart", JSON.stringify(existingCart));
    router.push("/cart");
  };

  return {
    handleAddToCart,
  };
}
