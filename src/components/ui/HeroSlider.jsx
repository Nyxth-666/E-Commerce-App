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
}
