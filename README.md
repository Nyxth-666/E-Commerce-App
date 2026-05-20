# 🛍️ Lumé — E-Commerce Website

> A modern multi-page React e-commerce web application powered by a free products API. Designed to simulate a real-world online shopping experience with dynamic data, dark mode, and a responsive user interface.

🌐 **Live Demo:** [https://e-commerce-app-bice-beta.vercel.app/](https://e-commerce-dev072o1u-nyxths-projects.vercel.app/)

---

## 📦 Tech Stack

| Technology      | Purpose                            |
| --------------- | ---------------------------------- |
| React 18        | UI framework                       |
| Vite            | Build tool and dev server          |
| React Router v6 | Client-side routing                |
| Tailwind CSS v4 | Utility-first styling              |
| Context API     | Cart and Wishlist state management |
| localStorage    | Cart and Wishlist persistence      |

No external state library (Redux, Zustand) needed.

---

## ✨ Features

- 🛒 Add to Cart with quantity controls
- ❤️ Wishlist / Favorites page
- 🔍 Search and filter by category
- 🌙 Dark mode with system preference detection
- 📦 Checkout and purchase flow
- 🗂️ Product modal with description on click
- 💾 Cart and Wishlist persist after page refresh

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

Check your versions:

```bash
node -v
npm -v
```

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/Nyxth-666/E-Commerce-App.git

# 2. Move into the project folder
cd E-Commerce-App

# 3. Install all dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder.

### Netlify Deployment Note

If deploying to Netlify, make sure `public/_redirects` exists with:

```
/*    /index.html   200
```

This is required for React Router to work on Netlify.

---

## 🗂️ Project Structure

```
src/
├── api/
│   └── product.js             # All API fetch functions + formatPrice helper
│
├── hooks/
│   ├── useProducts.js         # Fetch list (with category/search filter)
│   ├── useProduct.js          # Fetch single product by id
│   ├── useCategories.js       # Fetch all unique categories
│   └── useDarkMode.js         # Toggle and persist dark mode
│
├── context/
│   ├── CartContext.jsx        # Cart state — add/remove/update/clear
│   └── WishlistContext.jsx    # Wishlist toggle + persist
│
├── components/
│   ├── layout/
│   │   ├── Layout.jsx         # Navbar + Outlet + Footer wrapper
│   │   ├── Navbar.jsx         # Top nav — search, cart, wishlist, dark mode
│   │   └── FooterBar.jsx      # Links, contact info, team, social icons
│   │
│   ├── ui/
│   │   ├── ProductCard.jsx    # Card — image, name, price, Add to Cart
│   │   ├── ProductModal.jsx   # Modal popup with full product description
│   │   ├── CategoryCard.jsx   # Category image + icon badge + label
│   │   ├── CategoriesSection.jsx # Full categories row pulled from API
│   │   ├── FeaturedBanner.jsx # Top Pick hero banner from API
│   │   ├── HeroSlider.jsx     # Auto-rotating homepage hero with dots
│   │   ├── TrustBar.jsx       # Quality / Delivery / Returns / Support
│   │   └── StarRating.jsx     # Reusable star rating display
│   │
│   └── common/
│       ├── Button.jsx         # Reusable button variants
│       └── SearchBar.jsx      # Search input with icon
│
├── pages/
│   ├── HomePage.jsx           # Landing page with hero, featured, categories
│   ├── ProductsPage.jsx       # All products with search + category filter
│   ├── AboutPage.jsx          # About the store
│   ├── ContactPage.jsx        # Contact form
│   ├── CartPage.jsx           # Shopping cart with promo code
│   ├── PurchasePage.jsx       # Checkout with address + payment
│   ├── WishlistPage.jsx       # Saved / liked products
│   └── NotFoundPage.jsx       # 404 fallback
│
├── App.jsx                    # Routes + Provider wrappers
├── main.jsx                   # React entry point
└── index.css                  # Tailwind + CSS variables (light/dark mode)
```

---

## 🌐 API

All product data is fetched from a free public JSON API:

```
https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json
```

Configure via `.env` in the root of your project:

```env
VITE_API_URL=https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json
```

### Available API Functions (`src/api/product.js`)

| Function                     | Description                             |
| ---------------------------- | --------------------------------------- |
| `getProducts()`              | Returns all 50 products                 |
| `getProductById(id)`         | Returns one product by id               |
| `getProductsByCategory(cat)` | Filters products by category name       |
| `searchProducts(query)`      | Searches by name, category, keywords    |
| `getCategories()`            | Returns `["All", ...unique categories]` |
| `getFeaturedProducts(limit)` | Top-rated products, default limit 4     |
| `formatPrice(priceCents)`    | Formats cents to `₱1,234`               |

### Product Categories

| Category               | Description                   |
| ---------------------- | ----------------------------- |
| Electronics & Gadgets  | Phones, monitors, peripherals |
| Fashion & Apparel      | Clothing, shoes, accessories  |
| Beauty & Personal Care | Skincare, cosmetics           |
| Home & Kitchen         | Appliances, home essentials   |
| Health & Fitness       | Equipment, supplements        |

---

## 🛒 Using Cart & Wishlist

Import and use in any component:

```jsx
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

// Cart
const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  items,
  totalItems,
  totalPrice,
  isInCart,
} = useCart();

// Wishlist
const {
  toggleWishlist,
  removeFromWishlist,
  clearWishlist,
  items,
  isWishlisted,
  totalWishlisted,
} = useWishlist();
```

### Example — ProductCard usage

```jsx
// Add to cart
addToCart(product); // quantity defaults to 1
addToCart(product, 3); // add 3 at once

// Check if already in cart
isInCart(product.id); // → true or false

// Toggle wishlist heart
toggleWishlist(product); // adds if not there, removes if already saved
isWishlisted(product.id); // → true or false
```

---

## 🤝 Contributing

We welcome contributions from all team members! Here's how to work on the project:

### Workflow

```bash
# 1. Always pull the latest changes before starting work
git pull origin main

# 2. Create a new branch for your feature or fix
git checkout -b feature/your-feature-name

# 3. Make your changes, then stage and commit
git add .
git commit -m "feat: describe what you did"

# 4. Push your branch
git push origin feature/your-feature-name

# 5. Open a Pull Request on GitHub — do NOT push directly to main
```

### Commit Message Format

```
feat: add new feature
fix:  fix a bug
style: change styling only
refactor: restructure code without changing behavior
docs: update documentation
```

### Rules

- Never push directly to `main`
- Always open a Pull Request for review
- Test locally with `npm run dev` before pushing
- Keep components small and focused — one job per file

---

## 📄 License

This project is licensed under the **MIT License**.

You are free to use, copy, modify, and distribute this project for personal or educational purposes.

See the [LICENSE](./LICENSE) file for full details.

---

## 👥 Team

| Member                                | Role / Assigned Section   |
| ------------------------------------- | ------------------------- |
| **Barotea**                           | 👑 Project Leader         |
| **Aguilera**                          | Navbar                    |
| **De Guzman**                         | Footer                    |
| **Lacuesta**                          | Contact Page              |
| **Hufana, Sepillo, Chua**             | About Page                |
| **Domanico, Elumba, Guiruela, Oabel** | Featured Section / Design |
| **Rances, Endozo**                    | Category Section          |
| **Orte, Camunag, Dalumpines**         | Products Section          |

---

<p align="center">Made with ❤️ by the Lumé Team</p>
