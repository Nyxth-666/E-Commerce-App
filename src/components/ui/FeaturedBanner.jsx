// Image imports — featured banner assets
import mouseFeaturedImg from "../../assets/featured/mouse-featured.svg";
import monitorFeaturedImg from "../../assets/featured/monitor-featured.svg";

const morePicks = [
  {
    id: 1,
    title: "Monitor Full HD LCD monitor | Philips",
    image: monitorFeaturedImg,
    alt: "Philips Full HD LCD Monitor",
    rating: 5,
    reviewCount: 104,
    price: "₱5,690",
  },
  {
    id: 2,
    title: "Monitor Full HD LCD monitor | Philips",
    image: monitorFeaturedImg,
    alt: "Philips Full HD LCD Monitor",
    rating: 5,
    reviewCount: 104,
    price: "₱5,690",
  },
  {
    id: 3,
    title: "Monitor Full HD LCD monitor | Philips",
    image: monitorFeaturedImg,
    alt: "Philips Full HD LCD Monitor",
    rating: 5,
    reviewCount: 104,
    price: "₱5,690",
  },
];

function Stars({ rating, reviewCount }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
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

export default function FeaturedBanner() {
  return (
    <section className="w-full px-4 py-8 bg-[#f0f2f5]">

      {/* ── Top Row: Intro + Top Pick Card ── */}
      <div className="flex flex-col md:flex-row gap-6 mb-10">

        {/* Left — heading block */}
        <div className="flex flex-col justify-center gap-3 md:w-1/3">
          <p className="flex items-center gap-1 text-sm font-semibold text-red-500">
            <span>★</span> Featured
          </p>
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Hand picked items we think you'll love.<br />Top quality, great value.
          </p>
          <button className="mt-2 w-fit bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-gray-700 transition-colors">
            Shop All Products
          </button>
        </div>

        {/* Right — Top Pick highlight card */}
        <div className="md:w-2/3 bg-[#e8eaf6] rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
          {/* Text side */}
          <div className="flex flex-col gap-2 flex-1">
            {/* Top Pick badge */}
            <span className="flex items-center gap-1.5 w-fit bg-white text-red-500 text-xs font-semibold px-3 py-1 rounded-full border border-red-100">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
              </svg>
              Top Pick
            </span>
            <h3 className="text-xl font-bold text-gray-900 leading-snug">
              INZONE MOUSE-A |<br />Gaming Mouse
            </h3>
            <Stars rating={5} reviewCount="1.5k" />
            <p className="text-3xl font-bold text-red-500 mt-1">₱580</p>
            <a href="#" className="text-sm font-semibold text-red-500 hover:underline">
              View Product
            </a>
          </div>
          {/* Image side */}
          <div className="flex-shrink-0 w-48 h-36 flex items-center justify-center">
            <img
              src={mouseFeaturedImg}
              alt="INZONE Mouse-A Gaming Mouse"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* ── More Featured Picks ── */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">More Featured Picks</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {morePicks.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-3"
            >
              {/* Image + wishlist */}
              <div className="relative bg-blue-50 rounded-xl p-3 flex items-center justify-center h-36">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full object-contain"
                />
                <button
                  aria-label="Add to wishlist"
                  className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center rounded-full bg-white shadow text-gray-400 hover:text-red-500 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                  </svg>
                </button>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-gray-900 leading-snug">{item.title}</p>
                <Stars rating={item.rating} reviewCount={item.reviewCount} />
                <p className="text-base font-bold text-gray-900">{item.price}</p>
              </div>

              {/* Actions */}
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
          ))}
        </div>
      </div>

    </section>
  );
}
