import { createContext, useContext, useReducer, useEffect } from "react";

const WISHLIST_KEY = "lume_wishlist";

function wishlistReducer(state, action) {
  switch (action.type) {

    case "TOGGLE": {
      const exists = state.find((item) => item.id === action.product.id);

      if (exists) {
        return state.filter((item) => item.id !== action.product.id);
      }

      return [...state, action.product];
    }

    case "REMOVE":
      return state.filter((item) => item.id !== action.id);

    case "CLEAR":
      return [];

    default:
      return state;
  }
}

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {

  const [items, dispatch] = useReducer(wishlistReducer, [], () => {
    try {
      const stored = localStorage.getItem(WISHLIST_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(items));
    } catch {
      console.error("Could not save wishlist to localStorage");
    }
  }, [items]);


  const toggleWishlist = (product) =>
    dispatch({ type: "TOGGLE", product });

  const removeFromWishlist = (id) =>
    dispatch({ type: "REMOVE", id });

  const clearWishlist = () =>
    dispatch({ type: "CLEAR" });


  const isWishlisted = (id) => items.some((item) => item.id === id);

  const totalWishlisted = items.length;

  return (
    <WishlistContext.Provider value={{
      items,             
      toggleWishlist,     
      removeFromWishlist, 
      clearWishlist,
      isWishlisted,     
      totalWishlisted, 
    }}>
      {children}
    </WishlistContext.Provider>
  );
}

function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used inside <WishlistProvider>");
  return ctx;
}

export default useWishlist;
