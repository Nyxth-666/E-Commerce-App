import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCategories } from "../../hooks/useCategories";

const CATEGORY_ICONS = {
  "electronics & gadgets": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
      <path
        fillRule="evenodd"
        d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clipRule="evenodd"
      />
    </svg>
  ),
  "fashion & apparel": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path
        fillRule="evenodd"
        d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
        clipRule="evenodd"
      />
    </svg>
  ),
  cosmetics: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path
        fillRule="evenodd"
        d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
        clipRule="evenodd"
      />
      <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
    </svg>
  ),
  "home appliances": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
    </svg>
  ),
  "health & fitness": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

const DEFAULT_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path
      fillRule="evenodd"
      d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z"
      clipRule="evenodd"
    />
  </svg>
);

const CATEGORY_IMAGES = {
  "electronics & gadgets":
    "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=200&q=80",
  "fashion & apparel":
    "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=200&q=80",
  cosmetics:
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&q=80",
  "home appliances":
    "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=200&q=80",
  "health & fitness":
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&q=80",
};

export default function Categories() {
  const { categories, loading } = useCategories();
  const navigate = useNavigate();

  const displayCategories = categories.filter((c) => c !== "All");

  const getIcon = (cat) => CATEGORY_ICONS[cat.toLowerCase()] ?? DEFAULT_ICON;

  const getImage = (cat) =>
    CATEGORY_IMAGES[cat.toLowerCase()] ??
    `https://via.placeholder.com/200x160?text=${encodeURIComponent(cat)}`;

  const handleCategoryClick = (cat) => {
    navigate(`/products?category=${encodeURIComponent(cat)}`);
  };

  if (loading) {
    return (
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Categories</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex-shrink-0 w-36 bg-white rounded-2xl border border-gray-200 p-3 animate-pulse"
            >
              <div className="bg-gray-200 rounded-xl h-28 mb-3" />
              <div className="bg-gray-200 h-8 w-8 rounded-full mx-auto mb-2" />
              <div className="bg-gray-200 h-3 rounded w-3/4 mx-auto" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Categories</h2>

      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {displayCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className="flex-shrink-0 w-36 bg-white rounded-2xl border border-gray-200 p-3 hover:shadow-md hover:border-red-300 transition-all duration-200 text-left group"
          >
            {/* Category Image */}
            <div className="rounded-xl overflow-hidden h-28 bg-gray-50 mb-3">
              <img
                src={getImage(cat)}
                alt={cat}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Icon Badge */}
            <div className="flex justify-center mb-2">
              <div className="bg-red-500 text-white rounded-full p-2 shadow-sm">
                {getIcon(cat)}
              </div>
            </div>

            {/* Label */}
            <p className="text-xs font-semibold text-gray-700 text-center leading-snug">
              {cat}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}
