import { useSearchParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";

export default function ProductsPage() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "All";
  const query = searchParams.get("search") || "";

  const { products, loading, error } = useProducts({ category, query });

  return (
    <div className="px-[70px] py-6">
      <h2
        className="text-xl font-black mb-4"
        style={{ color: "var(--color-primary-text)" }}
      >
        {category === "All" ? "All Products" : category}
      </h2>

      {loading && (
        <p style={{ color: "var(--color-secondary-text)" }}>Loading...</p>
      )}
      {error && (
        <p style={{ color: "var(--color-special-text)" }}>Error: {error}</p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
