# Premium QR Digital Restaurant Menu

A high-performance, mobile-first digital restaurant menu web application built with **React**, **Vite**, and **Tailwind CSS**. Designed for effortless scanning via QR codes placed on dining tables.

---

## 🚀 Features

- **Olive Green & Warm Cream Aesthetic**: Organic, warm theme matching the restaurant's physical menu board with subtle gold accents and dark charcoal typography.
- **Complete Menu Fidelity**: All 29 categories and 130 items transcribed with 100% price and portion accuracy.
- **Dual Crust Pricing**: Seamless side-by-side Pan & Thin crust prices for 9" Pizzas.
- **Mobile-First Sticky Navigation**:
  - Horizontal sticky category pill bar with auto-centering on scroll.
  - Active category scroll-spy tracker (`IntersectionObserver`).
  - Top-level macro category filters (*Tea & Coffee*, *Shakes*, *Chaat & Snacks*, *Fast Food*, *Pizza & Pasta*, *Mains & Desserts*).
- **Instant Search**: Real-time filtering by item name, description, category, or portion with empty search state handler.
- **Jain Dietary Filter**: One-tap toggle to filter items suitable for Jain dietary preferences.
- **Statutory & Dietary Notices**: Prominent display of *"Jain Food Available"* and *"GST 5% Extra Applicable"*.
- **Data Audit Checklist**: In-app modal auditing all special items, MRP goods, and verified spellings.
- **Zero AI-Gimmicks**: No fake checkout, carts, logins, or ratings. Pure, fast, accessible digital menu.

---

## 🛠️ How to Customize

### Change Restaurant Name & Details
Open [`src/data/restaurantConfig.js`](file:///c:/Users/RAHUL/Desktop/Projects/web/src/data/restaurantConfig.js):
```javascript
export const restaurantConfig = {
  name: "YOUR RESTAURANT NAME",   // Replace [RESTAURANT NAME]
  subtitle: "Digital Menu",
  tagline: "Your custom tagline here",
  currency: "₹",
  // ...
};
```

### Edit Menu Items & Prices
Open [`src/data/menuData.js`](file:///c:/Users/RAHUL/Desktop/Projects/web/src/data/menuData.js) to adjust items, add descriptions, or update prices at any time.

---

## 💻 Development & Deployment

### Run Locally
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### Build for Production
```bash
npm run build
```
The optimized static bundle will be generated in `/dist` (~58 kB gzipped), ready for instant deployment to Vercel, Netlify, Cloudflare Pages, or GitHub Pages.
