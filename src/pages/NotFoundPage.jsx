import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NotFoundPage() {
  const navigate = useNavigate();
  const [count, setCount] = useState(10);

  // Auto-redirect countdown
  useEffect(() => {
    if (count <= 0) {
      navigate("/");
      return;
    }
    const timer = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [count, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-[-80px] right-[-80px] w-72 h-72 bg-red-100 rounded-full opacity-60 pointer-events-none" />
      <div className="absolute bottom-[-60px] left-[-60px] w-56 h-56 bg-red-50 rounded-full opacity-80 pointer-events-none" />

      {/* Main card */}
      <div className="relative z-10 bg-white rounded-3xl shadow-lg px-10 py-12 max-w-md w-full text-center">
        {/* Big 404 */}
        <div className="relative mb-2">
          <span className="text-[120px] font-black text-gray-100 leading-none select-none">
            404
          </span>
          {/* Floating cart icon overlapping the number */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-red-500 rounded-2xl p-4 shadow-md">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Oops! Page not found
        </h1>
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          Looks like this page wandered off. The item you're looking for might
          have been moved, deleted, or never existed.
        </p>

        {/* Countdown pill */}
        <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-500 text-xs font-medium px-4 py-2 rounded-full mb-6">
          <span className="w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
            {count}
          </span>
          Redirecting to homepage…
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => navigate(-1)}
            className="flex-1 flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-medium py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors text-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Go Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-xl transition-colors text-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Back to Home
          </button>
        </div>
      </div>

      {/* Suggestion links */}
      <div className="relative z-10 mt-8 flex flex-wrap justify-center gap-3">
        {[
          { label: "Shop All", path: "/products" },
          { label: "My Cart", path: "/cart" },
          { label: "About Us", path: "/about" },
          { label: "Contact", path: "/contact" },
        ].map((link) => (
          <button
            key={link.path}
            onClick={() => navigate(link.path)}
            className="text-sm text-gray-500 hover:text-red-500 underline underline-offset-2 transition-colors"
          >
            {link.label}
          </button>
        ))}
      </div>
    </div>
  );
}
