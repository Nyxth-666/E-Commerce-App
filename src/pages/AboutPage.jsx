function AboutPage() {
  return (
    <>
      {/* ORIGINAL SECTION — untouched */}
      <section className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}
          <div>
            <p className="text-sm tracking-widest text-red-500 uppercase mb-4">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Find Your <span className="text-red-500">Perfect</span> Style, Every Day
            </h1>
            <p className="mt-6 text-gray-600 leading-relaxed">
              We're a one-stop destination for premium products across beauty,
              fashion, electronics, and more. Discover comfort, quality, and UV
              protection — all designed for modern living.
            </p>
            <div className="flex gap-10 mt-8">
              <div>
                <h3 className="text-2xl font-bold">50+</h3>
                <p className="text-gray-500 text-sm">Products</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">5</h3>
                <p className="text-gray-500 text-sm">Categories</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">4.6★</h3>
                <p className="text-gray-500 text-sm">Avg Rating</p>
              </div>
            </div>
            <button className="mt-8 px-6 py-2 border border-gray-400 rounded-md text-sm hover:bg-gray-100 transition">
              Explore Collection
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-72 h-72 bg-red-100 rounded-full -z-10"></div>
            <div className="absolute w-96 h-96 bg-blue-100 rounded-full -z-20"></div>
            <div className="w-[280px] h-[360px] bg-gray-200 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-gray-500 text-sm">Image Placeholder</span>
            </div>
          </div>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="w-full px-8 py-16" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left: Heading + Description */}
          <div className="pr-0 md:pr-10">
            <h2 className="text-white font-bold text-4xl md:text-5xl leading-tight">
              Premium quality,
            </h2>
            <h2 className="font-bold text-4xl md:text-5xl leading-tight" style={{ color: "#e63946" }}>
              built for everyone.
            </h2>
            <p className="mt-6 leading-relaxed text-sm" style={{ color: "#aaaaaa", maxWidth: "340px" }}>
              From skincare to smartphones, our curated catalog brings together
              the products you need — lightweight, durable, and built for modern
              style. Every item is hand-picked for quality and value.
            </p>
          </div>

          {/* Right: 2×2 Feature Cards */}
          <div className="grid grid-cols-2 gap-4">

            {/* Quality First */}
            <div className="rounded-2xl p-6 flex flex-col gap-3" style={{ backgroundColor: "#1c1c1c" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L14.09 8.26L21 9.27L16.5 13.14L17.82 20L12 16.77L6.18 20L7.5 13.14L3 9.27L9.91 8.26L12 2Z" fill="#e63946" />
              </svg>
              <h3 className="text-white font-semibold text-sm">Quality First</h3>
              <p className="text-xs leading-relaxed" style={{ color: "#888888" }}>
                Every product is curated for durability and performance.
              </p>
            </div>

            {/* Best Prices */}
            <div className="rounded-2xl p-6 flex flex-col gap-3" style={{ backgroundColor: "#1c1c1c" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93V18h-2v-1.07C9.39 16.64 8 15.45 8 14h2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-1.66 0-3-1.34-3-3 0-1.45 1.39-2.64 3-2.93V6h2v1.07C14.61 7.36 16 8.55 16 10h-2c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c1.66 0 3 1.34 3 3 0 1.45-1.39 2.64-3 2.93z" fill="#cccccc" />
              </svg>
              <h3 className="text-white font-semibold text-sm">Best Prices</h3>
              <p className="text-xs leading-relaxed" style={{ color: "#888888" }}>
                Premium products at accessible, fair pricing.
              </p>
            </div>

            {/* Fast Delivery */}
            <div className="rounded-2xl p-6 flex flex-col gap-3" style={{ backgroundColor: "#1c1c1c" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="#cccccc" strokeWidth="2" fill="none" />
              </svg>
              <h3 className="text-white font-semibold text-sm">Fast Delivery</h3>
              <p className="text-xs leading-relaxed" style={{ color: "#888888" }}>
                Get your orders delivered quickly, wherever you are.
              </p>
            </div>

            {/* Trusted Reviews */}
            <div className="rounded-2xl p-6 flex flex-col gap-3" style={{ backgroundColor: "#1c1c1c" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="5" fill="#cccccc" />
                <circle cx="12" cy="12" r="9" stroke="#cccccc" strokeWidth="1.5" fill="none" />
              </svg>
              <h3 className="text-white font-semibold text-sm">Trusted Reviews</h3>
              <p className="text-xs leading-relaxed" style={{ color: "#888888" }}>
                Real ratings from verified buyers, always.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;