import { useState, useEffect } from "react";
import { useNavigate }         from "react-router-dom";
import { getProducts }         from "../../api/product";
import CategoryCard            from "./CategoryCard";

export default function CategoriesSection() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]); // [{ name, image }]
  const [loading, setLoading]       = useState(true);

  useEffect(() => {
    getProducts()
      .then((products) => {
        const seen = {};
        products.forEach((p) => {
          if (!seen[p.category]) {
            seen[p.category] = p.image;
          }
        });

        const result = Object.entries(seen).map(([name, image]) => ({
          name,
          image,
        }));

        setCategories(result);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <div
      className="text-sm text-center py-6"
      style={{ color: "var(--color-secondary-text)" }}
    >
      Loading categories...
    </div>
  );

  return (
    <section className="my-8">

      {/* Section Header */}
      <h2
        className="text-xl font-black mb-6"
        style={{ color: "var(--color-primary-text)" }}
      >
        Categories
      </h2>

      {/* Cards Row */}
      <div className="flex gap-4 flex-wrap">
        {categories.map(({ name, image }) => (
          <CategoryCard
            key={name}
            category={name}
            image={image}
          />
        ))}
      </div>
    </section>
  );
}
