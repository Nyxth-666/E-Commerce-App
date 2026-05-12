import HeroSlider from "../components/ui/HeroSlider";
import TrustBar from "../components/ui/TrustBar";
import ProductCard from "../components/ui/ProductCard";
import { useProducts } from "../hooks/useProducts";

function HomePage() {
  const { products, loading, error } = useProducts();

  return (
    <>
      <div className="w-full">
        <HeroSlider />
      </div>

      <div className="px-17.5">
        {/* Trust bar */}
        <TrustBar />

        {/* Products grid */}
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
