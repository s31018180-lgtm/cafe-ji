# ☕ Aura Café & Roastery — Premium Website

> *"Where Every Sip Feels Like Home."*

A modern, luxurious, and fully responsive website designed and developed for **Aura Café & Roastery** — an artisanal haven known for small-batch single-origin brews, fresh patisserie, and a warm, inviting ambience.

---

## 🎨 Design System & Theme

- **Aesthetic Palette:**
  - **Espresso & Roast Brown:** `#160d08`, `#24160f`, `#382217`
  - **Warm Coffee:** `#5c3a28`, `#8c5d42`
  - **Cream & Beige:** `#fdfbf7`, `#f7f2ea`, `#ece3d3`, `#d8c8b2`
  - **Golden Accents:** `#c59b27`, `#e5be53`, `#9e7914`
  - **Crisp White & Black:** `#ffffff`, `#000000`
- **Typography:**
  - Display / Headings: `Playfair Display` (Classic editorial serif)
  - Body & UI: `Plus Jakarta Sans` (Clean, modern geometric sans-serif)
- **Visual Touches:** Subtle glassmorphism, gold glow micro-interactions, responsive mobile drawer, smooth category filtering, interactive lightbox modal, and feedback toast notifications.

---

## 📂 Project Structure

```text
Cafe ji/
├── index.html          # Main HTML5 semantic structure & all sections
├── css/
│   └── style.css       # Complete custom responsive styles & theme tokens
├── js/
│   └── script.js       # Filtering, modals, toast notifications, sticky nav
├── vercel.json         # Vercel deployment configuration & caching headers
├── .gitignore          # Git exclusion rules
└── README.md           # Documentation, GitHub & Vercel deployment guide
```

---

## ✨ Features by Section

1. **Header & Navigation:**
   - Sticky glassmorphism bar with blur effect (`backdrop-filter: blur(16px)`).
   - SVG logo with coffee bean & steam emblem.
   - Smooth navigation links with scroll-spy active state highlighting.
   - "Book a Table" header CTA button + mobile hamburger drawer.

2. **Hero Section:**
   - Cinematic background image with luxury warm overlay.
   - Award badge: *"Voted Best Artisan Café 2026"*.
   - Headline: *"Where Every Sip Feels Like Home."*
   - Dual CTAs: *Explore Our Menu* (smooth scroll) & *Book a Table* (modal).
   - Key highlights strip: 100% Arabica, Artisan Bakes, Cozy Ambience, 4.9★ Rating.

3. **About Us Section:**
   - Authentic heritage story from shade-grown estates of Coorg & Chikmagalur to in-house small-batch roasting.
   - Offset badge with animated counter (*8 Years of Roasting*).
   - 4 Feature Pillars: Single-Origin Beans, Master Baristas, Artisanal Patisserie, and Serene Workspace.

4. **Interactive Menu Section:**
   - Category filter tabs:
     - All Items
     - ☕ Hot Coffee (Mocha, Flat White, Spanish Saffron Latte)
     - 🧊 Cold Coffee (Nitro Cold Brew, Iced Vanilla Latte, Chocolate Frappé)
     - 🍵 Tea & Refreshments (Kashmiri Kahwa, Matcha, Hibiscus Cooler)
     - 🍰 Desserts (Tiramisu, French Croissant, Biscoff Cheesecake)
     - 🥪 Snacks & Fast Food (Truffle Toast, Pesto Panini, Parmesan Fries)
   - Every card includes: High-res photo, veg/dietary indicator, calorie count, item description, price in Indian Rupees (`₹`), and quick add feedback.

5. **Special Offers Section:**
   - 4 promotional cards:
     - **Buy 1 Get 1 Free** (Happy hours 4–7 PM on weekdays, code `BOGO2026`)
     - **Weekend Coffee Special** (Complimentary pastry with 2 coffees, code `WEEKENDVIBES`)
     - **Gourmet Combo Meals** (Artisan Panini + Nitro Cold Brew for ₹399, code `COMBO399`)
     - **Student & Co-worker Pass** (Flat 20% off with ID + Free WiFi, code `STUDY20`)
   - One-click "Copy Code" with instant toast feedback.

6. **The Aura Gallery:**
   - Categorized photo showcase: Interior, Coffee Craft, Desserts & Bakes, and Gourmet Food.
   - Category filtering with smooth transitions.
   - Fullscreen **Interactive Lightbox Modal** with caption on click.

7. **Customer Reviews:**
   - 5-Star golden ratings with testimonials from verified guests, food critics, and remote nomads.
   - Realistic reviewer profile avatars and titles.

8. **Contact & Table Reservation:**
   - Left Panel: Address, phone numbers, email, opening hours (8:00 AM – 11:30 PM), and embedded interactive Google Map.
   - Right Panel: Full table booking & contact form with validation for name, phone, email, guests, date, time slot, and special requests.

9. **Footer:**
   - Brand logo and mission statement.
   - Social media buttons (Instagram, Facebook, X, Pinterest).
   - Quick navigation links.
   - Café operating hours & Happy Hours schedule.
   - Newsletter subscription form with 10% welcome discount.
   - Copyright line.

10. **Interactive Modals & Toasts:**
    - "Book a Table" modal with keyboard `Escape` dismiss and outside-click close.
    - Custom non-intrusive toast notifications for user interactions.

---

## 🚀 How to Run Locally

Because this project is built with vanilla HTML, CSS, and JavaScript without bloated frameworks, you can run it immediately:

### Option 1: Double-Click
Simply open `index.html` in any modern web browser (Chrome, Edge, Safari, Firefox).

### Option 2: VS Code Live Server
1. Open this folder in VS Code.
2. Right-click `index.html` and select **"Open with Live Server"**.

### Option 3: Local Node.js HTTP Server
```bash
# Using npx (no installation required)
npx serve .
```

---

## 📦 How to Push to GitHub

1. **Initialize Git** in your project directory:
   ```bash
   git init
   ```

2. **Add and commit all files**:
   ```bash
   git add .
   git commit -m "feat: initial commit of Aura Café & Roastery premium website"
   ```

3. **Create a new repository on GitHub**:
   - Go to [github.com/new](https://github.com/new).
   - Name your repository (e.g., `aura-cafe-website`).
   - Choose **Public** or **Private**.
   - Do **NOT** initialize with a README (one is already included).
   - Click **Create repository**.

4. **Link and push to GitHub**:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/aura-cafe-website.git
   git push -u origin main
   ```

---

## ⚡ How to Deploy on Vercel

Vercel provides instant zero-configuration hosting with global CDN delivery and automatic SSL certificates.

### Method 1: Deploy via Vercel Web Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and log in (or sign up with your GitHub account).
2. Click **"Add New..."** → **"Project"**.
3. Import your `aura-cafe-website` repository from GitHub.
4. Leave **Framework Preset** as **Other** (it will auto-detect plain HTML/CSS/JS).
5. Click **Deploy**.
6. Within seconds, your live production website URL will be ready!

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Run inside the project directory
vercel

# For production deployment:
vercel --prod
```

---

## ✏️ Customization Guide

- **Editing Menu Items & Prices:** Open `index.html` and search for `<div class="menu-card"`. Update item name, description, and price inside `<span class="menu-item-price">₹XXX</span>`.
- **Changing Café Address & Phone:** Search for `id="contact"` in `index.html` and replace the address, phone number, and email.
- **Updating Special Offers:** Search for `id="offers"` in `index.html` to adjust promo codes, discount percentages, and validity.
- **Colors & Styling:** Open `css/style.css` and modify the CSS variables in the `:root` block at the top.

---

© 2026 Aura Café & Roastery. Built with elegance and precision.
