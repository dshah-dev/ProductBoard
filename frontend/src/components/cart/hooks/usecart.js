import { useEffect, useState } from "react";

export default function useCart() {

  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const data = sessionStorage.getItem("cart");
    if (data) {
      try {
        setCartItems(JSON.parse(data));
      } catch (e) {
        console.error("Failed to parse cart data", e);
      }
    }
  }, []);

  const removeItem = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    sessionStorage.setItem("cart", JSON.stringify(updated));
  };
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 1), 0);

  return {
    removeItem,
    cartItems,
    totalPrice,
  };
}
