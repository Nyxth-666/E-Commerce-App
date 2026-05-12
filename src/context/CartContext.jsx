import { createContext, useContext, useReducer, useEffect } from "react";

const CART_KEY = "lume_cart";

function cartReducer(state, action) {
  switch (action.type) {

    case "ADD": {
      const existing = state.find((item) => item.id === action.product.id);

      if (existing) {
        return state.map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + (action.quantity || 1) }
            : item
        );
      }

      return [...state, { ...action.product, quantity: action.quantity || 1 }];
    }

    case "REMOVE":
      return state.filter((item) => item.id !== action.id);

    case "UPDATE_QTY":
      if (action.quantity <= 0) {
        return state.filter((item) => item.id !== action.id);
      }
      return state.map((item) =>
        item.id === action.id
          ? { ...item, quantity: action.quantity }
          : item
      );

    case "CLEAR":
      return [];

    default:
      return state;
  }
}

const CartContext = createContext(null);

export function CartProvider({ children }) {

  const [items, dispatch] = useReducer(cartReducer, [], () => {
    try {
      const stored = localStorage.getItem(CART_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(items));
    } catch {
      console.error("Could not save cart to localStorage");
    }
  }, [items]);

  const addToCart = (product, quantity = 1) =>
    dispatch({ type: "ADD", product, quantity });

  const removeFromCart = (id) =>
    dispatch({ type: "REMOVE", id });

  const updateQuantity = (id, quantity) =>
    dispatch({ type: "UPDATE_QTY", id, quantity });

  const clearCart = () =>
    dispatch({ type: "CLEAR" });


  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.priceCents * item.quantity, 0
  );

  const isInCart = (id) => items.some((item) => item.id === id);

  return (
    <CartContext.Provider value={{
      items,         
      addToCart,      
      removeFromCart,  
      updateQuantity,  
      clearCart,      
      totalItems,   
      totalPrice,     
      isInCart,    
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
