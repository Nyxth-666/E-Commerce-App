import { useState, useEffect } from "react";
import {
  getProducts,
  getProductsByCategory,
  searchProducts,
} from "../api/products";

export function useProducts({ category = "All", query = "" } = {}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    const load = async () => {
      try {
        let data;
        if (query.trim()) {
          data = await searchProducts(query);
        } else if (category && category !== "All") {
          data = await getProductsByCategory(category);
        } else {
          data = await getProducts();
        }
        if (!cancelled) setProducts(data);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [category, query]);

  return { products, loading, error };
}
