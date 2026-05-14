import HeroSlider from "../components/ui/HeroSlider";
import TrustBar from "../components/ui/TrustBar";
import ProductCard from "../components/ui/ProductCard";
import { useProducts } from "../hooks/useProducts";
import CategoriesSection from "../components/ui/CategoriesSection";

function HomePage() {
  const { products, loading, error } = useProducts();

  return (
    <>
      <div className="flex flex-col w-full px-17.5 self-stretch justify-center gap-5 items-center">
        <HeroSlider />
        <TrustBar />
        <CategoriesSection />

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
