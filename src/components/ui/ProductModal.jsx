// src/components/ui/ProductModal.jsx

import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { formatPrice } from "../../api/product";
import StarRating from "./StarRating";

function CartIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function ProductModal({ product, onClose }) {
  const navigate = useNavigate();
  const { addToCart, isInCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  if (!product) return null;

  const handleBuyNow = () => {
    addToCart(product);
    onClose();
    navigate("/cart");
  };

  // Close modal when clicking the dark backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    // BACKDROP
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      onClick={handleBackdropClick}
    >
      {/* MODAL BOX */}
      <div
        className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl"
        style={{ backgroundColor: "var(--color-product-box)" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-1 rounded-full transition-opacity hover:opacity-70"
          style={{ color: "var(--color-secondary-text)" }}
        >
          <CloseIcon />
        </button>

        <div className="flex flex-col md:flex-row gap-0">
          {/* LEFT — Image */}
          <div
            className="flex items-center justify-center p-8 md:w-64 shrink-0"
            style={{ backgroundColor: "var(--color-bg)" }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-44 h-44 object-contain"
              onError={(e) => {
                e.target.src = "/placeholder.png";
              }}
            />
          </div>

          {/* RIGHT — Details */}
          <div className="flex flex-col gap-3 p-6 flex-1">
            {/* Category badge */}
            <span
              className="text-xs font-semibold"
              style={{ color: "var(--color-special-text)" }}
            >
              {product.subCategory || product.category}
            </span>

            {/* Name */}
            <h2
              className="text-xl font-black leading-tight"
              style={{ color: "var(--color-primary-text)" }}
            >
              {product.name}
            </h2>

            {/* Rating */}
            <StarRating
              stars={product.rating.stars}
              count={product.rating.count}
            />

            {/* Price */}
            <p
              className="text-2xl font-black"
              style={{ color: "var(--color-primary-text)" }}
            >
              {formatPrice(product.priceCents)}
            </p>

            {/* Description */}
            <div>
              <p
                className="text-xs font-semibold mb-1"
                style={{ color: "var(--color-secondary-text)" }}
              >
                Description:
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-secondary-text)" }}
              >
                {product.description ||
                  "No description available for this product."}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-2">
              <button
                onClick={() => addToCart(product)}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80"
                style={{
                  backgroundColor: "var(--color-secondary-button)",
                  color: "var(--color-primary-text)",
                }}
              >
                <CartIcon />
                {isInCart(product.id) ? "Added ✓" : "Add To Cart"}
              </button>

              <button
                onClick={handleBuyNow}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80"
                style={{
                  backgroundColor: "var(--color-primary-button)",
                  color: "var(--color-secondary-icon)",
                }}
              >
                <CartIcon />
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
