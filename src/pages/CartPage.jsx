// src/pages/CartPage.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../api/product";

function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div
      className="flex items-center gap-4 py-4"
      style={{ borderBottom: "1px solid var(--color-secondary-button)" }}
    >
      {/* Image */}
      <div
        className="w-20 h-20 rounded-xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-contain"
          onError={(e) => {
            e.target.src = "/placeholder.png";
          }}
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p
          className="text-sm font-semibold line-clamp-2"
          style={{ color: "var(--color-primary-text)" }}
        >
          {item.name}
        </p>
        <p
          className="text-xs mt-0.5"
          style={{ color: "var(--color-secondary-text)" }}
        >
          {item.subCategory || item.category}
        </p>
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-xs font-semibold mt-1 transition-opacity hover:opacity-70"
          style={{ color: "var(--color-special-text)" }}
        >
          Remove
        </button>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-sm transition-opacity hover:opacity-70"
          style={{
            backgroundColor: "var(--color-secondary-button)",
            color: "var(--color-primary-text)",
          }}
        >
          −
        </button>
        <span
          className="w-8 text-center text-sm font-semibold"
          style={{ color: "var(--color-primary-text)" }}
        >
          {item.quantity}
        </span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-sm transition-opacity hover:opacity-70"
          style={{
            backgroundColor: "var(--color-secondary-button)",
            color: "var(--color-primary-text)",
          }}
        >
          +
        </button>
      </div>

      {/* Price */}
      <div className="text-right shrink-0">
        <p
          className="text-sm font-semibold"
          style={{ color: "var(--color-secondary-text)" }}
        >
          {formatPrice(item.priceCents)}
        </p>
        <p
          className="text-sm font-bold"
          style={{ color: "var(--color-primary-text)" }}
        >
          {formatPrice(item.priceCents * item.quantity)}
        </p>
      </div>
    </div>
  );
}

export default function CartPage() {
  const navigate = useNavigate();
  const { items, totalItems, totalPrice, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === "LUME10") {
      setPromoApplied(true);
    } else {
      alert("Invalid promo code. Try LUME10");
    }
  };

  const discount = promoApplied ? totalPrice * 0.1 : 0;
  const finalPrice = totalPrice - discount;

  // Empty cart state
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <span className="text-6xl">🛒</span>
        <h2
          className="text-xl font-bold"
          style={{ color: "var(--color-primary-text)" }}
        >
          Your cart is empty
        </h2>
        <p style={{ color: "var(--color-secondary-text)" }} className="text-sm">
          Add some products to get started
        </p>
        <button
          onClick={() => navigate("/products")}
          className="px-6 py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80"
          style={{
            backgroundColor: "var(--color-primary-button)",
            color: "var(--color-secondary-icon)",
          }}
        >
          Browse Products
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 px-[70px] py-8 min-h-[60vh]">
      {/* LEFT — Cart Items */}
      <div className="flex-1">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <h1
            className="text-2xl font-black"
            style={{ color: "var(--color-primary-text)" }}
          >
            Shopping Cart
          </h1>
          <span
            style={{ color: "var(--color-secondary-text)" }}
            className="text-sm"
          >
            {totalItems} {totalItems === 1 ? "item" : "items"}
          </span>
        </div>

        {/* Column Headers */}
        <div
          className="grid grid-cols-4 text-xs font-semibold py-2 mb-2"
          style={{
            color: "var(--color-secondary-text)",
            borderBottom: "1px solid var(--color-secondary-button)",
          }}
        >
          <span>Product Details</span>
          <span className="text-center">Quantity</span>
          <span className="text-center">Price</span>
          <span className="text-right">Total</span>
        </div>

        {/* Items */}
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}

        {/* Clear cart */}
        <button
          onClick={clearCart}
          className="mt-4 text-xs transition-opacity hover:opacity-70"
          style={{ color: "var(--color-special-text)" }}
        >
          Clear entire cart
        </button>
      </div>

      {/* RIGHT — Order Summary */}
      <div
        className="w-full md:w-80 rounded-2xl p-6 h-fit shrink-0"
        style={{
          backgroundColor: "var(--color-product-box)",
          boxShadow: "var(--color-product-shadow)",
        }}
      >
        <h2
          className="text-xl font-black mb-4"
          style={{ color: "var(--color-primary-text)" }}
        >
          Order Summary
        </h2>

        <div
          className="pb-4 mb-4"
          style={{ borderBottom: "1px solid var(--color-secondary-button)" }}
        >
          <div className="flex justify-between text-sm mb-2">
            <span style={{ color: "var(--color-secondary-text)" }}>
              Items {totalItems}
            </span>
            <span
              className="font-semibold"
              style={{ color: "var(--color-primary-text)" }}
            >
              {formatPrice(totalPrice)}
            </span>
          </div>

          {promoApplied && (
            <div className="flex justify-between text-sm">
              <span style={{ color: "var(--color-special-text)" }}>
                Discount (10%)
              </span>
              <span
                className="font-semibold"
                style={{ color: "var(--color-special-text)" }}
              >
                -{formatPrice(discount)}
              </span>
            </div>
          )}
        </div>

        {/* Shipping */}
        <p
          className="text-xs font-semibold mb-2"
          style={{ color: "var(--color-primary-text)" }}
        >
          Shipping
        </p>
        <div
          className="w-full px-3 py-2 rounded-lg text-sm mb-4"
          style={{
            backgroundColor: "var(--color-bg)",
            color: "var(--color-secondary-text)",
            border: "1px solid var(--color-secondary-button)",
          }}
        >
          Cash on delivery
        </div>

        {/* Promo Code */}
        <p
          className="text-xs font-semibold mb-2"
          style={{ color: "var(--color-primary-text)" }}
        >
          Promo Code
        </p>
        <input
          type="text"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          placeholder="Enter your code"
          className="w-full px-3 py-2 rounded-lg text-sm outline-none mb-2"
          style={{
            backgroundColor: "var(--color-bg)",
            color: "var(--color-primary-text)",
            border: "1px solid var(--color-primary-input-border)",
          }}
        />
        <button
          onClick={handleApplyPromo}
          className="w-full py-2 rounded-lg text-sm font-bold mb-4 transition-opacity hover:opacity-80"
          style={{
            backgroundColor: "var(--color-primary-button)",
            color: "var(--color-secondary-icon)",
          }}
        >
          APPLY
        </button>

        <div
          className="flex justify-between items-center pt-4 mb-4"
          style={{ borderTop: "1px solid var(--color-secondary-button)" }}
        >
          <span
            className="font-semibold"
            style={{ color: "var(--color-primary-text)" }}
          >
            Total Cost
          </span>
          <span
            className="text-lg font-black"
            style={{ color: "var(--color-primary-text)" }}
          >
            {formatPrice(finalPrice)}
          </span>
        </div>

        {/* Checkout */}
        <button
          onClick={() => navigate("/checkout")}
          className="w-full py-3 rounded-xl font-bold text-sm transition-opacity hover:opacity-80"
          style={{
            backgroundColor: "var(--color-primary-button)",
            color: "var(--color-secondary-icon)",
          }}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
}
