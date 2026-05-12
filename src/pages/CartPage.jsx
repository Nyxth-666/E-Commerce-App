import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../api/product";

const PROMO_CODES = {
  LUME10: 0.1,
  SAVE20: 0.2,
  STUDENT: 0.15,
};

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  const [promoInput, setPromoInput] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [promoError, setPromoError] = useState("");
  const [shipping, setShipping] = useState("cod");
  const [checkoutDone, setCheckoutDone] = useState(false);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const discount = appliedPromo ? subtotal * PROMO_CODES[appliedPromo] : 0;
  const total = subtotal - discount;
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleApplyPromo = () => {
    const code = promoInput.trim().toUpperCase();
    if (PROMO_CODES[code]) {
      setAppliedPromo(code);
      setPromoError("");
    } else {
      setAppliedPromo(null);
      setPromoError("Invalid promo code.");
    }
  };

  const handleCheckout = () => {
    clearCart();
    setCheckoutDone(true);
  };

  // --- Empty cart ---
  if (cartItems.length === 0 && !checkoutDone) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 text-center">
        <div className="bg-white rounded-2xl shadow p-10 max-w-sm w-full">
          <div className="flex justify-center mb-4">
            <div className="bg-red-100 rounded-full p-5">
              <svg
                className="w-10 h-10 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Looks like you haven't added anything yet.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl transition-colors"
          >
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  // --- Checkout success ---
  if (checkoutDone) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 text-center">
        <div className="bg-white rounded-2xl shadow p-10 max-w-sm w-full">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 rounded-full p-5">
              <svg
                className="w-10 h-10 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Order Placed!
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Thank you for shopping with Lumé. Your order is being processed.
          </p>
          <button
            onClick={() => navigate("/")}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* ── LEFT: Shopping Cart ── */}
          <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between mb-1">
              <h1 className="text-2xl font-black text-gray-900">
                Shopping Cart
              </h1>
              <span className="text-lg font-semibold text-gray-700">
                {itemCount} {itemCount === 1 ? "item" : "items"}
              </span>
            </div>
            <hr className="border-gray-200 mb-5" />

            {/* Column labels */}
            <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr_1fr] text-sm text-gray-500 font-medium mb-3 px-1">
              <span>Product Details</span>
              <span className="text-center">Quantity</span>
              <span className="text-center">Price</span>
              <span className="text-right">Total</span>
            </div>

            {/* Cart Items */}
            <div className="space-y-4">
              {cartItems.map((item) => {
                const lineTotal = item.price * item.quantity;
                return (
                  <div
                    key={item.id}
                    className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr_1fr] items-center gap-3 py-4 border-b border-gray-100 last:border-0"
                  >
                    {/* Product Info */}
                    <div className="flex items-center gap-3">
                      <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded-xl overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain p-1"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-sm leading-snug line-clamp-2">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5 capitalize">
                          {item.category}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 text-xs font-semibold mt-1 hover:text-red-700 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Quantity stepper */}
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                        className="w-7 h-7 flex items-center justify-center rounded border border-gray-300 text-gray-600 font-bold hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-lg leading-none"
                      >
                        −
                      </button>
                      <span className="w-8 text-center border border-gray-300 rounded py-1 text-sm font-semibold text-gray-800">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-7 h-7 flex items-center justify-center rounded border border-gray-300 text-gray-600 font-bold hover:bg-gray-100 transition-colors text-lg leading-none"
                      >
                        +
                      </button>
                    </div>

                    {/* Unit Price */}
                    <p className="text-sm text-gray-700 text-center font-medium">
                      {formatPrice(item.price)}
                    </p>

                    {/* Line Total */}
                    <p className="text-sm font-bold text-gray-900 text-right">
                      {formatPrice(lineTotal)}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Continue shopping */}
            <button
              onClick={() => navigate("/products")}
              className="mt-6 flex items-center gap-2 text-sm text-gray-500 hover:text-red-500 transition-colors font-medium"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              Continue Shopping
            </button>
          </div>

          {/* ── RIGHT: Order Summary ── */}
          <div className="lg:w-80 bg-gray-200 rounded-2xl p-6 shadow-sm h-fit">
            <h2 className="text-2xl font-black text-gray-900 mb-1">
              Order Summary
            </h2>
            <hr className="border-gray-400 mb-5" />

            {/* Items subtotal */}
            <div className="flex justify-between items-center mb-5 text-sm">
              <span className="text-gray-700">Items {itemCount}</span>
              <span className="font-semibold text-gray-900">
                {formatPrice(subtotal)}
              </span>
            </div>

            {/* Shipping */}
            <div className="mb-5">
              <p className="font-bold text-gray-800 text-sm mb-2">Shipping</p>
              <div className="relative">
                <select
                  value={shipping}
                  onChange={(e) => setShipping(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-lg py-2.5 px-3 text-sm text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-red-400 cursor-pointer"
                >
                  <option value="cod">Cash on delivery</option>
                  <option value="gcash">GCash</option>
                  <option value="card">Credit / Debit Card</option>
                </select>
                <svg
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>

            {/* Promo Code */}
            <div className="mb-5">
              <p className="font-bold text-gray-800 text-sm mb-2">Promo Code</p>
              <input
                type="text"
                value={promoInput}
                onChange={(e) => {
                  setPromoInput(e.target.value);
                  setPromoError("");
                }}
                onKeyDown={(e) => e.key === "Enter" && handleApplyPromo()}
                placeholder="Enter your code"
                className="w-full bg-white border border-gray-300 rounded-lg py-2.5 px-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 mb-2"
              />
              {promoError && (
                <p className="text-red-500 text-xs mb-2">{promoError}</p>
              )}
              {appliedPromo && (
                <p className="text-green-600 text-xs mb-2 font-medium">
                  ✓ "{appliedPromo}" applied —{" "}
                  {Math.round(PROMO_CODES[appliedPromo] * 100)}% off!
                </p>
              )}
              <button
                onClick={handleApplyPromo}
                className="w-full bg-red-400 hover:bg-red-500 text-white text-sm font-bold py-2.5 rounded-lg transition-colors tracking-wide"
              >
                APPLY
              </button>
            </div>

            <hr className="border-gray-400 mb-4" />

            {/* Discount row */}
            {appliedPromo && (
              <div className="flex justify-between items-center mb-2 text-sm">
                <span className="text-green-600 font-medium">Discount</span>
                <span className="text-green-600 font-semibold">
                  − {formatPrice(discount)}
                </span>
              </div>
            )}

            {/* Total */}
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-gray-900 text-base">
                Total Cost
              </span>
              <span className="font-black text-gray-900 text-lg">
                {formatPrice(total)}
              </span>
            </div>

            {/* Checkout */}
            <button
              onClick={handleCheckout}
              className="w-full bg-red-400 hover:bg-red-500 text-white text-sm font-bold py-3.5 rounded-xl transition-colors tracking-widest"
            >
              CHECKOUT
            </button>

            {/* Payment hints */}
            <p className="text-xs text-gray-500 text-center mt-3">
              {shipping === "cod" && "Pay when your order arrives."}
              {shipping === "gcash" &&
                "You'll be prompted for your GCash number."}
              {shipping === "card" && "Secure card payment at checkout."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
