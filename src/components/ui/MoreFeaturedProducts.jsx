import React, { useEffect, useState } from 'react';

function Stars({ rating = 4, reviewCount = 0 }) {
  const r = Math.max(0, Math.min(5, Math.round(Number(rating) || 0)));
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < r ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
        </svg>
      ))}
      <span className="text-xs text-gray-500">({reviewCount})</span>
    </div>
  );
}

export default function MoreFeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = import.meta.env.VITE_API_URL;
    if (!url) return;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) setProducts(data);
        else if (Array.isArray(data.products)) setProducts(data.products);
        else setProducts([data]);
      })
      .catch((err) => {
        setError(err.message);
        console.error('Failed to load products', err);
      });
  }, []);

  const pickList = products.slice(0, 9);

  return (
    <section className="w-full px-4 py-8 bg-[#f0f2f5]">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">More Featured Picks</h3>

        {error && <div className="text-red-500 mb-3">Error loading products: {error}</div>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {pickList.map((item, idx) => {
            const img = item.image || item.imageUrl || item.images?.[0] || '';
            const title = item.name || item.title || item.productName || `Product ${idx + 1}`;
            const price = item.price || item.displayPrice || item.priceCents
              ? (item.price || item.displayPrice || (item.priceCents ? `₱${Math.round(item.priceCents / 100)}` : ''))
              : '';
            const rating = item.rating?.stars ?? item.rating ?? item.stars ?? 4;
            const reviewCount = item.rating?.count ?? item.reviewCount ?? item.reviews ?? 0;

            return (
              <div key={item.id ?? idx} className="bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-3">
                <div className="relative rounded-xl p-3 flex items-center justify-center h-36 bg-transparent">
                  {img ? (
                    <img src={img} alt={item.alt || title} className="h-full object-contain" />
                  ) : (
                    <div className="text-gray-400">No image</div>
                  )}
                  <button
                    aria-label="Add to wishlist"
                    className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center rounded-full bg-white shadow text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                    </svg>
                  </button>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold text-gray-900 leading-snug">{title}</p>
                  <Stars rating={rating} reviewCount={reviewCount} />
                  <p className="text-base font-bold text-gray-900">{price}</p>
                </div>

                <div className="flex gap-2 mt-auto">
                  <button className="flex-1 flex items-center justify-center gap-1.5 border border-gray-300 text-gray-700 text-xs font-semibold py-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13M7 13L5.4 5M10 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z" />
                    </svg>
                    Add To Cart
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-1.5 bg-red-500 text-white text-xs font-semibold py-2 rounded-lg hover:bg-red-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13M7 13L5.4 5M10 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z" />
                    </svg>
                    Buy now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4">
        <details>
          <summary className="text-sm text-gray-600">Raw product data (first 5 items)</summary>
          <pre className="mt-2 max-h-64 overflow-auto text-xs bg-white p-3 rounded">{JSON.stringify(products.slice(0, 5), null, 2)}</pre>
        </details>
      </div>
    </section>
  );
}
