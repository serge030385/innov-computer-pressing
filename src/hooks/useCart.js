import { useEffect, useMemo, useState } from "react";
import { CART_STORAGE_KEY, STOCK_STATUS } from "../utils/constants";

function getInitialCart() {
  try {
    const stored = window.localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function useCart(products) {
  const [cart, setCart] = useState(getInitialCart);

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const items = useMemo(
    () =>
      cart
        .map((item) => {
          const product = products.find((entry) => entry.id === item.productId);
          if (!product) {
            return null;
          }

          return {
            ...product,
            quantity: item.quantity,
            subtotal: product.price * item.quantity,
          };
        })
        .filter(Boolean),
    [cart, products]
  );

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.subtotal, 0),
    [items]
  );

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  function addToCart(product) {
    if (product.stock === STOCK_STATUS.OUT) {
      return false;
    }

    setCart((current) => {
      const existing = current.find((item) => item.productId === product.id);

      if (existing) {
        return current.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { productId: product.id, quantity: 1 }];
    });

    return true;
  }

  function updateQuantity(productId, quantity) {
    const nextQuantity = Math.max(1, Number(quantity) || 1);
    setCart((current) =>
      current.map((item) =>
        item.productId === productId
          ? { ...item, quantity: nextQuantity }
          : item
      )
    );
  }

  function removeFromCart(productId) {
    setCart((current) => current.filter((item) => item.productId !== productId));
  }

  function clearCart() {
    setCart([]);
  }

  return {
    addToCart,
    clearCart,
    itemCount,
    items,
    removeFromCart,
    total,
    updateQuantity,
  };
}
