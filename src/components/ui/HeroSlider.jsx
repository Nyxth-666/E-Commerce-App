import { useState, useEffect } from "react";
import { formatPrice } from "../../api/product.js";

const slides = [
  {
    id: 1,
    label: "Trending Accessories",
    title: "MODERN SUNGLASSES",
    description:
      "Premium eyewear designed for comfort, style, and UV protection.",
    priceCents: 1400,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
    bg: "bg-blue-50",
  },
  {
    id: 2,
    label: "Top Pick",
    title: "GAMING MOUSE PRO",
    description: "Precision tracking, ergonomic grip, built for long sessions.",
    priceCents: 58000,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
    bg: "bg-purple-50",
  },
  {
    id: 3,
    label: "New Arrival",
    title: "WIRELESS EARBUDS",
    description: "Crystal clear sound with active noise cancellation.",
    priceCents: 299900,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
    bg: "bg-red-50",
  },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [paused]);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <>
      {/* MAIN CONTAINER */}
      <div
        className="relative w-full overflow-hidden rounded-2xl mx-auto my-6 max-w-5xl shadow-md"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`
            ${index === current ? "block" : "hidden"}
            ${slide.bg}
            flex flex-col md:flex-row items-center
            justify-between px-10 py-10 gap-6
          `}
          >
            {/* LEFT SIDE */}
            <div className="flex-1 space-y-4">
              <span className="text-red-500  font-semibold text-sm flex items-center gap-1">
                ★ {slide.label}
              </span>

              <h2 className="text-3xl font-black text-gray-900 leading-tight">
                {slide.title}
              </h2>

              <p className="text-gray-500 text-sm max-w-xs">
                {slide.description}
              </p>

              <p className="text-sm text-gray-500">
                starting at{" "}
                <span className="text-red-500 font-bold text-base">
                  {formatPrice(slide.priceCents)}
                </span>
              </p>

              <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors">
                Get it now
              </button>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex-1 flex justify-center">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-64 h-64 object-contain drop-shadow-lg select-none touch-none"
              />
            </div>
          </div>
        ))}

        {/* BUTTONS */}
        <button
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full text-gray-600 hover:bg-gray-100"
          onClick={prev}
        >
          ‹
        </button>
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full text-gray-600 hover:bg-gray-100"
          onClick={next}
        >
          ›
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`
              w-2.5 h-2.5 rounded-full transition-all
              ${index === current ? "bg-red-500 w-5" : "bg-gray-400"}
            `}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default HeroSlider;
