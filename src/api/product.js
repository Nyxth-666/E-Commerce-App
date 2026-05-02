const API_URL =
  "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json";

let cache = null;

async function fetchAll() {
  if (cache) return cache;

  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch products (status: ${response.status})`);
  }

  cache = await response.json();
  return cache;
}

export async function getProducts() {
  return fetchAll();
}

export async function getProductById(id) {
  const products = await fetchAll();
  const product = products.find((p) => String(p.id) === String(id));

  if (!product) throw new Error(`Product with id "${id}" not found`);
  return product;
}

export async function getProductsByCategory(category) {
  const products = await fetchAll();

  if (!category || category === "All") return products;

  return products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase(),
  );
}

export async function searchProducts(query) {
  const products = await fetchAll();
  const q = query.toLowerCase().trim();

  if (!q) return products;

  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.subCategory?.toLowerCase().includes(q) ||
      p.keywords?.some((k) => k.toLowerCase().includes(q)),
  );
}

export async function getCategories() {
  const products = await fetchAll();
  const unique = [...new Set(products.map((p) => p.category))];
  return ["All", ...unique];
}

export async function getFeaturedProducts(limit = 4) {
  const products = await fetchAll();
  return [...products]
    .sort((a, b) => b.rating.stars - a.rating.stars)
    .slice(0, limit);
}

export function formatPrice(priceCents) {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 0,
  }).format(priceCents / 100);
}
