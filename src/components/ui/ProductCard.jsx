import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { formatPrice } from "../../api/product";
import StarRating from "./StarRating";

// ── ICONS ──────────────────────────────────────────────────────────
function HeartIcon({ filled }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
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

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart, isInCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const wishlisted = isWishlisted(product.id);
  const inCart = isInCart(product.id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleBuyNow = (e) => {
    e.stopPropagation();
    addToCart(product);
    navigate("/cart");
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleCardClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div
      className="product-box flex flex-col overflow-hidden cursor-pointer transition-transform hover:-translate-y-1"
      onClick={handleCardClick}
    >
      <div className="relative flex items-center justify-center p-4 rounded-xl m-3 bg-(--color-bg)">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-32 h-32 object-contain"
          onError={(e) => {
            e.target.src = "/placeholder.png";
          }}
        />

        {/* Wishlist Heart Button */}
        <button
          onClick={handleWishlist}
          className="absolute top-2 right-2 transition-opacity hover:opacity-70"
          style={{
            color: wishlisted
              ? "var(--color-special-text)"
              : "var(--color-secondary-text)",
          }}
        >
          <HeartIcon filled={wishlisted} />
        </button>
      </div>
      <div className="flex flex-col gap-1 px-4 pb-3 flex-1">
        {/* Product Name */}
        <p className="text-sm font-semibold leading-snug line-clamp-2 text-(--color-primary-text)">
          {product.name}
        </p>

        {/* Star Rating */}
        <StarRating stars={product.rating.stars} count={product.rating.count} />

        {/* Price */}
        <p className="text-xl font-black mt-1 text-(--color-primary-text)">
          {formatPrice(product.priceCents)}
        </p>
      </div>

      {/* ── BOTTOM: Buttons ── */}
      <div className="flex gap-2 px-3 pb-3">
        {/* Add To Cart */}
        <button
          onClick={handleAddToCart}
          className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80 text-(--color-primary-text) bg-(--color-secondary-button)"
        >
          <CartIcon />
          {inCart ? "Added ✓" : "Add To Cart"}
        </button>

        {/* Buy Now */}
        <button
          onClick={handleBuyNow}
          className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80 bg-(--color-primary-button) text-(--color-secondary-icon)"
        >
          <CartIcon />
          Buy now
        </button>
      </div>
    </div>
  );
}
