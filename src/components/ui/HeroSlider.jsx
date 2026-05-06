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
    lightBg: "#EFF6FF",
    darkBg: "#1A2333",
  },
  {
    id: 2,
    label: "Top Pick",
    title: "GAMING MOUSE PRO",
    description: "Precision tracking, ergonomic grip, built for long sessions.",
    priceCents: 58000,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
    lightBg: "#F5F3FF",
    darkBg: "#1E1A2E",
  },
  {
    id: 3,
    label: "New Arrival",
    title: "WIRELESS EARBUDS",
    description: "Crystal clear sound with active noise cancellation.",
    priceCents: 299900,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
    lightBg: "#FFF1F2",
    darkBg: "#2E1A1E",
  },
];

// ✅ Safer initialization with lazy useState
function useIsDark() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return isDark;
}

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const isDark = useIsDark();

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
    <div
      className="relative w-full overflow-hidden rounded-2xl mx-auto my-6 max-w-5xl shadow-md"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={[
            index === current ? "block" : "hidden",
            "flex flex-col md:flex-row items-center justify-between px-10 py-10 gap-6",
          ].join(" ")}
          style={{
            backgroundColor: isDark ? slide.darkBg : slide.lightBg,
          }}
        >
          {/* LEFT SIDE */}
          <div className="flex-1 space-y-4">
            <p
              className="font-semibold text-sm flex items-center gap-1"
              style={{ color: "var(--color-special-text)" }}
            >
              ★ {slide.label}
            </p>

            <h2
              className="text-3xl font-black leading-tight"
              style={{ color: "var(--color-primary-text)" }}
            >
              {slide.title}
            </h2>

            <p
              className="text-sm max-w-xs"
              style={{ color: "var(--color-secondary-text)" }}
            >
              {slide.description}
            </p>

            <p
              className="text-sm"
              style={{ color: "var(--color-secondary-text)" }}
            >
              starting at{" "}
              <span
                className="font-bold text-base"
                style={{ color: "var(--color-special-text)" }}
              >
                {formatPrice(slide.priceCents)}
              </span>
            </p>

            <button
              className="text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors"
              style={{
                backgroundColor: "var(--color-primary-button)",
                color: "var(--color-secondary-icon)",
              }}
            >
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

      {/* PREV BUTTON */}
      <button
        className="absolute left-3 top-1/2 -translate-y-1/2 shadow p-2 rounded-full transition-colors"
        style={{
          backgroundColor: "var(--color-product-box)",
          color: "var(--color-primary-icon)",
        }}
        onClick={prev}
      >
        ‹
      </button>

      {/* NEXT BUTTON */}
      <button
        className="absolute right-3 top-1/2 -translate-y-1/2 shadow p-2 rounded-full transition-colors"
        style={{
          backgroundColor: "var(--color-product-box)",
          color: "var(--color-primary-icon)",
        }}
        onClick={next}
      >
        ›
      </button>

      {/* DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className="h-2.5 rounded-full transition-all"
            style={{
              width: index === current ? "20px" : "10px",
              backgroundColor:
                index === current
                  ? "var(--color-primary-button)"
                  : "var(--color-secondary-button)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;
