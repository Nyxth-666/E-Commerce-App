import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { getFeaturedProducts, formatPrice } from "../../api/product";
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

export default function FeaturedBanner() {
  const navigate = useNavigate();
  const { addToCart, isInCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const [featured, setFeatured] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFeaturedProducts(1)
      .then((data) => setFeatured(data[0]))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div
        className="flex items-center justify-center h-48"
        style={{ color: "var(--color-secondary-text)" }}
      >
        Loading featured product...
      </div>
    );

  if (!featured) return null;

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl px-10 py-8 my-6"
      style={{
        backgroundColor: "var(--color-product-box)",
        boxShadow: "var(--color-product-shadow)",
      }}
    >
      <div className="flex-1 flex flex-col gap-3">
        <span
          className="text-xs font-bold px-3 py-1 rounded-full w-fit"
          style={{
            backgroundColor: "var(--color-special-text)",
            color: "var(--color-secondary-icon)",
          }}
        >
          ★ Top Pick
        </span>

        <h2
          className="text-2xl font-black leading-tight"
          style={{ color: "var(--color-primary-text)" }}
        >
          {featured.name}
        </h2>

        <StarRating
          stars={featured.rating.stars}
          count={featured.rating.count}
        />

        <p
          className="text-3xl font-black"
          style={{ color: "var(--color-primary-text)" }}
        >
          {formatPrice(featured.priceCents)}
        </p>

        <div className="flex gap-3 mt-2">
          <button
            onClick={() => addToCart(featured)}
            className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80"
            style={{
              backgroundColor: "var(--color-secondary-button)",
              color: "var(--color-primary-text)",
            }}
          >
            <CartIcon />
            {isInCart(featured.id) ? "Added ✓" : "Add To Cart"}
          </button>

          <button
            onClick={() => {
              addToCart(featured);
              navigate("/cart");
            }}
            className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold transition-opacity hover:opacity-80"
            style={{
              backgroundColor: "var(--color-primary-button)",
              color: "var(--color-secondary-icon)",
            }}
          >
            <CartIcon />
            View Product
          </button>
        </div>
      </div>

      {/* RIGHT — image */}
      <div
        className="flex items-center justify-center rounded-xl p-6"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <img
          src={featured.image}
          alt={featured.name}
          className="w-48 h-48 object-contain"
          onError={(e) => {
            e.target.src = "/placeholder.png";
          }}
        />
      </div>
    </div>
  );
}
