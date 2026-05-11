import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDarkMode } from "../../hooks/useDarkMode";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import Logo from "../../assets/logo/Logo.png";

const NAV_LINKS = [
  { label: "Home",       path: "/"         },
  { label: "Products",   path: "/products" },
  { label: "Contact Us", path: "/contact"  },
  { label: "About",      path: "/about"    },
];

function WishlistIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1"  x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22"  x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1"  y1="12" x2="3"  y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  );
}

export default function Navbar() {
  const location  = useLocation();
  const { isDark, toggleDark } = useDarkMode();
  const { totalItems }         = useCart();
  const { totalWishlisted }    = useWishlist();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <header>

      <div
        className="flex items-center justify-between px-[70px] py-3 gap-6"
        style={{ backgroundColor: "var(--color-bg)", borderBottom: "1px solid var(--color-secondary-button)" }}
      >

        {/* LOGO */}
        <Link to="/">
          <img src={Logo} alt="Lumé" className="h-10 w-auto" />
        </Link>

        {/* SEARCH BAR */}
        <form onSubmit={handleSearch} className="flex-1 max-w-xl relative">
          <span
            className="absolute left-3 top-1/2 -translate-y-1/2"
            style={{ color: "var(--color-secondary-text)" }}
          >
            <SearchIcon />
          </span>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for products....."
            className="w-full pl-9 pr-4 py-2 rounded-lg text-sm outline-none transition-colors"
            style={{
              border:           "1.5px solid var(--color-primary-search-border)",
              backgroundColor:  "var(--color-bg)",
              color:            "var(--color-primary-text)",
            }}
          />
        </form>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-5">

          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="relative transition-opacity hover:opacity-70"
            style={{ color: "var(--color-primary-icon)" }}
          >
            <WishlistIcon />
            {/* Badge — only shows if wishlist has items */}
            {totalWishlisted > 0 && (
              <span
                className="absolute -top-2 -right-2 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--color-primary-button)", color: "var(--color-secondary-icon)" }}
              >
                {totalWishlisted}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative transition-opacity hover:opacity-70"
            style={{ color: "var(--color-primary-icon)" }}
          >
            <CartIcon />
            {totalItems > 0 && (
              <span
                className="absolute -top-2 -right-2 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--color-primary-button)", color: "var(--color-secondary-icon)" }}
              >
                {totalItems}
              </span>
            )}
          </Link>

          {/* User / Profile */}
          <Link
            to="/profile"
            className="transition-opacity hover:opacity-70"
            style={{ color: "var(--color-primary-icon)" }}
          >
            <UserIcon />
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDark}
            className="transition-opacity hover:opacity-70"
            style={{ color: "var(--color-primary-icon)" }}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

        </div>
      </div>

      {/* ── BOTTOM BAR: Navigation Links ── */}
      <nav
        className="flex items-center justify-center gap-10 py-3"
        style={{ backgroundColor: "var(--color-primary-text)" }}
      >
        {NAV_LINKS.map(({ label, path }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className="text-sm font-medium transition-opacity hover:opacity-70"
              style={{
                color:      isActive ? "var(--color-secondary-icon)" : "var(--color-secondary-text)",
                fontWeight: isActive ? "700" : "400",
              }}
            >
              {label}
            </Link>
          );
        })}
      </nav>

    </header>
  );
}
