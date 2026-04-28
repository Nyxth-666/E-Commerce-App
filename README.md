# Lumé — E-Commerce Website

A multi-page React e-commerce site powered by a free products API.

## Tech Stack

- React 18 + Vite
- React Router v6
- Context API (Cart + Wishlist)
- No external state library needed

## Getting Started

```bash
# 1. Clone the repo
git clone <your-repo-url>
cd <project-folder>

# 2. Install dependencies
npm install

# 3. Install react-router-dom if not already listed
npm install react-router-dom

# 4. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── api/
│   └── products.js          # All API fetch functions + formatPrice helper
│
├── hooks/
│   ├── useProducts.js        # Fetch list (with category/search filter)
│   ├── useProduct.js         # Fetch single product by id
│   └── useCategories.js      # Fetch all unique categories
│
├── context/
│   ├── CartContext.jsx        # Cart state, add/remove/update/clear
│   └── WishlistContext.jsx    # Wishlist toggle + persist
│
├── components/
│   ├── layout/
│   │   ├── Layout.jsx         # Navbar + Outlet + Footer wrapper
│   │   ├── Navbar.jsx         # Top nav with search, cart, wishlist icons
│   │   └── Footer.jsx         # Links, contact info, social icons
│   │
│   ├── ui/
│   │   ├── ProductCard.jsx    # Card with image, name, price, Add to Cart
│   │   ├── CategoryCard.jsx   # Category image + icon + label
│   │   ├── FeaturedBanner.jsx # Top Pick hero banner
│   │   ├── HeroSlider.jsx     # Homepage hero with pagination dots
│   │   ├── TrustBar.jsx       # Quality / Delivery / Returns / Support bar
│   │   └── StarRating.jsx     # Reusable star display
│   │
│   └── common/
│       ├── Button.jsx         # Primary, secondary, icon button variants
│       └── SearchBar.jsx      # Search input with icon
│
├── pages/
│   ├── HomePage.jsx
│   ├── ProductsPage.jsx
│   ├── ProductDetailPage.jsx
│   ├── AboutPage.jsx
│   ├── ContactPage.jsx
│   ├── CartPage.jsx
│   └── NotFoundPage.jsx
│
├── App.jsx                    # Routes + Provider wrappers
├── App.css
├── main.jsx
└── index.css
```

## API

All product data comes from:

```
https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json
```

Set via `.env`:

```
VITE_API_URL=https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json
```

## Available API Functions (`src/api/products.js`)

| Function                     | Description                             |
| ---------------------------- | --------------------------------------- |
| `getProducts()`              | Returns all 50 products                 |
| `getProductById(id)`         | Returns one product by id               |
| `getProductsByCategory(cat)` | Filters by category name                |
| `searchProducts(query)`      | Searches name, category, keywords       |
| `getCategories()`            | Returns `["All", ...unique categories]` |
| `getFeaturedProducts(limit)` | Top-rated products, default 4           |
| `formatPrice(priceCents)`    | Formats to `₱1,234`                     |

## Using Cart & Wishlist in any component

```jsx
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const { addToCart, totalItems, isInCart } = useCart();
const { toggleWishlist, isWishlisted } = useWishlist();
```

## Team

| Member | Assigned Pages/Components  |
| ------ | -------------------------- |
| —      | HomePage                   |
| —      | ProductsPage + ProductCard |
| —      | ProductDetailPage          |
| —      | CartPage                   |
| —      | Navbar + Footer            |
| —      | AboutPage + ContactPage    |
