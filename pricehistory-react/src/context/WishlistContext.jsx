import { createContext, useContext, useEffect, useState } from "react";
import { getAllProducts } from "../data/products";

/**
 * WishlistContext - stores the list of wishlisted product ids in
 * localStorage so it survives page reloads. Any component can read
 * or update the wishlist via the useWishlist() hook below instead of
 * passing props down through every page.
 */
const STORAGE_KEY = "priceHistoryWishlist";
const WishlistContext = createContext(null);

function readStoredIds() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function WishlistProvider({ children }) {
  const [ids, setIds] = useState(readStoredIds);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  }, [ids]);

  function toggleWishlist(productId) {
    setIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  }

  function isWishlisted(productId) {
    return ids.includes(productId);
  }

  const wishlistProducts = getAllProducts().filter((product) => ids.includes(product.id));

  const value = { ids, toggleWishlist, isWishlisted, wishlistProducts };

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used inside a WishlistProvider");
  }
  return context;
}
