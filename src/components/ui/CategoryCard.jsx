import { useNavigate } from "react-router-dom";

function CategoryIcon({ category }) {
  const icons = {
    "Electronics & Gadgets":  "🎧",
    "Fashion & Apparel":      "👕",
    "Beauty & Personal Care": "💄",
    "Home & Kitchen":         "🏠",
    "Health & Fitness":       "💪",
  };

  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
      style={{
        backgroundColor: "var(--color-special-text)",
        color:           "var(--color-secondary-icon)",
      }}
    >
      {icons[category] || "🛍️"}
    </div>
  );
}

export default function CategoryCard({ category, image }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products?category=${encodeURIComponent(category)}`)}
      className="flex flex-col items-center rounded-2xl overflow-hidden cursor-pointer transition-transform hover:-translate-y-1 w-40"
      style={{
        backgroundColor: "var(--color-product-box)",
        boxShadow:       "var(--color-product-shadow)",
      }}
    >
      {/* Top — product image */}
      <div className="w-full h-36 flex items-center justify-center p-3">
        {image ? (
          <img
            src={image}
            alt={category}
            className="w-full h-full object-contain"
            onError={(e) => { e.target.style.display = "none"; }}
          />
        ) : (
          <span className="text-5xl">🛍️</span>
        )}
      </div>

      {/* Bottom — icon badge + label */}
      <div className="flex flex-col items-center gap-2 pb-4">
        <CategoryIcon category={category} />
        <p
          className="text-xs font-semibold text-center px-2"
          style={{ color: "var(--color-primary-text)" }}
        >
          {category}
        </p>
      </div>
    </div>
  );
}
