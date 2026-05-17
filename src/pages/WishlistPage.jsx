import { useNavigate } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../api/product";
import StarRating from "../components/ui/StarRating";
import { useState } from "react";
import ProductModal from "../components/ui/ProductModal";

function HeartIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      width="15"
      height="15"
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

export default function WishlistPage() {
  const navigate = useNavigate();
  const { items, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart, isInCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Add all wishlisted items to cart at once
  const handleAddAllToCart = () => {
    items.forEach((item) => addToCart(item));
  };

  // Empty wishlist state
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-5 text-center px-4">
        <span className="text-7xl">🤍</span>
        <h2
          className="text-2xl font-black"
          style={{ color: "var(--color-primary-text)" }}
        >
          Your wishlist is empty
        </h2>
        <p
          className="text-sm max-w-xs"
          style={{ color: "var(--color-secondary-text)" }}
        >
          Save items you love by tapping the heart icon on any product.
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
    <div className="px-[70px] py-8">
      {/* Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span style={{ color: "var(--color-special-text)" }}>
            <HeartIcon />
          </span>
          <h1
            className="text-2xl font-black"
            style={{ color: "var(--color-primary-text)" }}
          >
            My Wishlist
          </h1>
          <span
            className="text-sm ml-1"
            style={{ color: "var(--color-secondary-text)" }}
          >
            ({items.length} {items.length === 1 ? "item" : "items"})
          </span>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleAddAllToCart}
            className="px-4 py-2 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80"
            style={{
              backgroundColor: "var(--color-secondary-button)",
              color: "var(--color-primary-text)",
            }}
          >
            Add All to Cart
          </button>
          <button
            onClick={clearWishlist}
            className="px-4 py-2 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80"
            style={{
              backgroundColor: "var(--color-secondary-button)",
              color: "var(--color-special-text)",
            }}
          >
            Clear All
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((product) => (
          <div
            key={product.id}
            className="product-box flex flex-col overflow-hidden cursor-pointer transition-transform hover:-translate-y-1"
            onClick={() => setSelectedProduct(product)}
          >
            {/* Image + Remove heart */}
            <div
              className="relative flex items-center justify-center p-4 rounded-xl m-3"
              style={{ backgroundColor: "var(--color-bg)" }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-contain"
                onError={(e) => {
                  e.target.src = "/placeholder.png";
                }}
              />
              {/* Remove from wishlist */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeFromWishlist(product.id);
                }}
                className="absolute top-2 right-2 transition-opacity hover:opacity-70"
                style={{ color: "var(--color-special-text)" }}
              >
                <HeartIcon />
              </button>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-1 px-4 pb-3 flex-1">
              <p
                className="text-xs font-semibold"
                style={{ color: "var(--color-special-text)" }}
              >
                {product.subCategory || product.category}
              </p>
              <p
                className="text-sm font-semibold leading-snug line-clamp-2"
                style={{ color: "var(--color-primary-text)" }}
              >
                {product.name}
              </p>
              <StarRating
                stars={product.rating.stars}
                count={product.rating.count}
              />
              <p
                className="text-xl font-black mt-1"
                style={{ color: "var(--color-primary-text)" }}
              >
                {formatPrice(product.priceCents)}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 px-3 pb-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold transition-opacity hover:opacity-80"
                style={{
                  backgroundColor: "var(--color-secondary-button)",
                  color: "var(--color-primary-text)",
                }}
              >
                <CartIcon />
                {isInCart(product.id) ? "Added ✓" : "Add to Cart"}
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                  navigate("/cart");
                }}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold transition-opacity hover:opacity-80"
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
        ))}
      </div>
    </div>
  );
}
