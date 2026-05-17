import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useCategories } from "../hooks/useCategories";
import ProductCard from "../components/ui/ProductCard";
import ProductModal from "../components/ui/ProductModal";

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "All";
  const query = searchParams.get("search") || "";

  const { products, loading, error } = useProducts({ category, query });
  const { categories } = useCategories();

  // Modal state
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCategoryClick = (cat) => {
    setSearchParams(cat === "All" ? {} : { category: cat });
  };

  return (
    <div className="px-[70px] py-8">
      {/* Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Page Title */}
      <h1
        className="text-2xl font-black mb-6"
        style={{ color: "var(--color-primary-text)" }}
      >
        {query
          ? `Search results for "${query}"`
          : category === "All"
            ? "All Products"
            : category}
      </h1>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all"
            style={{
              backgroundColor:
                category === cat
                  ? "var(--color-primary-button)"
                  : "var(--color-secondary-button)",
              color:
                category === cat
                  ? "var(--color-secondary-icon)"
                  : "var(--color-primary-text)",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* States */}
      {loading && (
        <p
          className="text-center py-20"
          style={{ color: "var(--color-secondary-text)" }}
        >
          Loading products...
        </p>
      )}
      {error && (
        <p
          className="text-center py-20"
          style={{ color: "var(--color-special-text)" }}
        >
          Error: {error}
        </p>
      )}
      {!loading && !error && products.length === 0 && (
        <p
          className="text-center py-20"
          style={{ color: "var(--color-secondary-text)" }}
        >
          No products found.
        </p>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onCardClick={() => setSelectedProduct(product)} // ← opens modal
          />
        ))}
      </div>
    </div>
  );
}
