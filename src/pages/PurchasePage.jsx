// src/pages/PurchasePage.jsx  (Checkout)

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../api/product";

const PAYMENT_METHODS = [
  { id: "cod", label: "Cash On Delivery", icon: "💵" },
  { id: "ewallet", label: "E-wallet", icon: "📱" },
];

export default function PurchasePage() {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();

  const [payment, setPayment] = useState("cod");
  const [message, setMessage] = useState("");
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
  });
  const [placed, setPlaced] = useState(false);

  const handlePlaceOrder = () => {
    if (!address.name || !address.phone || !address.street || !address.city) {
      alert("Please fill in all address fields.");
      return;
    }
    setPlaced(true);
    clearCart();
  };

  // Order placed success screen
  if (placed) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-4">
        <span className="text-6xl">🎉</span>
        <h2
          className="text-2xl font-black"
          style={{ color: "var(--color-primary-text)" }}
        >
          Order Placed!
        </h2>
        <p
          className="text-sm max-w-xs"
          style={{ color: "var(--color-secondary-text)" }}
        >
          Thank you for your purchase. Your order is being processed and will be
          delivered soon.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80"
          style={{
            backgroundColor: "var(--color-primary-button)",
            color: "var(--color-secondary-icon)",
          }}
        >
          Back to Home
        </button>
      </div>
    );
  }

  // Empty cart guard
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <span className="text-5xl">🛒</span>
        <p style={{ color: "var(--color-secondary-text)" }}>
          Nothing to checkout.
        </p>
        <button
          onClick={() => navigate("/products")}
          className="px-6 py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80"
          style={{
            backgroundColor: "var(--color-primary-button)",
            color: "var(--color-secondary-icon)",
          }}
        >
          Shop Now
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 px-[70px] py-8">
      {/* LEFT — Delivery + Items + Payment */}
      <div className="flex-1 flex flex-col gap-5">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm w-fit transition-opacity hover:opacity-70"
          style={{ color: "var(--color-secondary-text)" }}
        >
          ← Back
        </button>

        <h1
          className="text-2xl font-black"
          style={{ color: "var(--color-primary-text)" }}
        >
          Checkout
        </h1>

        {/* Delivery Address */}
        <div
          className="rounded-2xl p-5 flex flex-col gap-3"
          style={{
            backgroundColor: "var(--color-product-box)",
            boxShadow: "var(--color-product-shadow)",
          }}
        >
          <p
            className="text-sm font-bold"
            style={{ color: "var(--color-primary-text)" }}
          >
            📍 Delivery Address
          </p>

          {["name", "phone", "street", "city"].map((field) => (
            <input
              key={field}
              type="text"
              placeholder={
                field === "name"
                  ? "Full Name"
                  : field === "phone"
                    ? "Phone Number"
                    : field === "street"
                      ? "Street Address"
                      : "City"
              }
              value={address[field]}
              onChange={(e) =>
                setAddress({ ...address, [field]: e.target.value })
              }
              className="w-full px-3 py-2 rounded-lg text-sm outline-none"
              style={{
                backgroundColor: "var(--color-bg)",
                color: "var(--color-primary-text)",
                border: "1px solid var(--color-primary-input-border)",
              }}
            />
          ))}
        </div>

        {/* Order Items */}
        <div
          className="rounded-2xl p-5 flex flex-col gap-3"
          style={{
            backgroundColor: "var(--color-product-box)",
            boxShadow: "var(--color-product-shadow)",
          }}
        >
          <p
            className="text-sm font-bold"
            style={{ color: "var(--color-primary-text)" }}
          >
            🛍️ Order Items
          </p>

          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-contain rounded-lg"
                style={{ backgroundColor: "var(--color-bg)" }}
                onError={(e) => {
                  e.target.src = "/placeholder.png";
                }}
              />
              <div className="flex-1 min-w-0">
                <p
                  className="text-xs font-semibold line-clamp-1"
                  style={{ color: "var(--color-primary-text)" }}
                >
                  {item.name}
                </p>
                <p
                  className="text-xs"
                  style={{ color: "var(--color-secondary-text)" }}
                >
                  {item.subCategory || item.category}
                </p>
                <p
                  className="text-xs font-bold"
                  style={{ color: "var(--color-primary-text)" }}
                >
                  {formatPrice(item.priceCents)}
                </p>
              </div>
              <span
                className="text-xs shrink-0"
                style={{ color: "var(--color-secondary-text)" }}
              >
                x{item.quantity}
              </span>
            </div>
          ))}

          {/* Message to seller */}
          <input
            type="text"
            placeholder="Message to seller (optional)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 rounded-lg text-sm outline-none mt-2"
            style={{
              backgroundColor: "var(--color-bg)",
              color: "var(--color-primary-text)",
              border: "1px solid var(--color-primary-input-border)",
            }}
          />
        </div>

        {/* Payment Methods */}
        <div
          className="rounded-2xl p-5 flex flex-col gap-3"
          style={{
            backgroundColor: "var(--color-product-box)",
            boxShadow: "var(--color-product-shadow)",
          }}
        >
          <p
            className="text-sm font-bold"
            style={{ color: "var(--color-primary-text)" }}
          >
            💳 Payment Methods
          </p>

          {PAYMENT_METHODS.map((method) => (
            <label
              key={method.id}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="radio"
                name="payment"
                value={method.id}
                checked={payment === method.id}
                onChange={() => setPayment(method.id)}
                style={{ accentColor: "var(--color-primary-button)" }}
              />
              <span
                className="text-sm"
                style={{ color: "var(--color-primary-text)" }}
              >
                {method.icon} {method.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* RIGHT — Payment Details */}
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
          Payment Details
        </h2>

        {/* Line items */}
        {[
          { label: "Merchandise Subtotal", value: formatPrice(totalPrice) },
          { label: "Shipping Subtotal", value: "₱0" },
          { label: "Shipping Discount", value: "-₱0" },
          { label: "Voucher Discount", value: "-₱0" },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="flex justify-between text-sm py-2"
            style={{ borderBottom: "1px solid var(--color-secondary-button)" }}
          >
            <span style={{ color: "var(--color-secondary-text)" }}>
              {label}
            </span>
            <span
              className="font-semibold"
              style={{ color: "var(--color-primary-text)" }}
            >
              {value}
            </span>
          </div>
        ))}

        {/* Total Payment */}
        <div className="flex justify-between text-sm font-black py-3">
          <span style={{ color: "var(--color-primary-text)" }}>
            Total Payment
          </span>
          <span style={{ color: "var(--color-primary-text)" }}>
            {formatPrice(totalPrice)}
          </span>
        </div>

        {/* Summary */}
        <div
          className="rounded-xl p-4 mb-4"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          <div className="flex justify-between text-sm mb-1">
            <span style={{ color: "var(--color-secondary-text)" }}>Total</span>
            <span
              className="font-bold"
              style={{ color: "var(--color-special-text)" }}
            >
              {formatPrice(totalPrice)}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span style={{ color: "var(--color-secondary-text)" }}>Saved</span>
            <span
              className="font-bold"
              style={{ color: "var(--color-special-text)" }}
            >
              ₱0
            </span>
          </div>
        </div>

        {/* Place Order */}
        <button
          onClick={handlePlaceOrder}
          className="w-full py-3 rounded-xl font-bold text-sm transition-opacity hover:opacity-80"
          style={{
            backgroundColor: "var(--color-primary-button)",
            color: "var(--color-secondary-icon)",
          }}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
