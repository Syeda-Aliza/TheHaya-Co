# 🌸 Haya&Co — Premium Hijab & Modest Wear Store

> *Elegantly Draped, Effortlessly Breathable.*

A modern, full-featured e-commerce storefront for **Haya&Co**, a premium hijab brand from Pakistan. Built with **Next.js 16**, **React 19**, and **TypeScript**, featuring a floating AI chatbot assistant, cart system, search modal, and more.

🔗 **Live Repo:** [github.com/Syeda-Aliza/TheHaya-Co](https://github.com/Syeda-Aliza/TheHaya-Co)

---

## 📸 Brand

- **Brand:** Haya&Co Modest Wear
- **Email:** thehayaandco@gmail.com
- **Instagram:** @thehaya&Co
- **Currency:** PKR (Pakistani Rupee)
- **Products:** Luxury Silk Chiffon · Premium Cotton Jersey · Soft Modal Cotton Hijabs

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | **Next.js 16.2.10** (App Router) |
| Language | **TypeScript** + JavaScript |
| Styling | **Tailwind CSS v4** + CSS Modules |
| State Management | **React Context API** |
| Runtime | **React 19** |
| Fonts | Poppins + Roboto (Google Fonts) |

---

## 🗂️ Project Structure

```
store/
├── src/
│   ├── app/
│   │   ├── page.js                    # Homepage (hero + bestsellers)
│   │   ├── layout.js                  # Root layout (Header, Footer, Cart, Chatbot)
│   │   ├── globals.css                # Global design system & CSS variables
│   │   ├── ClientComponents.tsx       # Lazy-loaded client-only components
│   │   ├── about/page.tsx             # About page
│   │   ├── contact/page.tsx           # Contact form page
│   │   └── collections/all/page.tsx   # Shop all products with category filter
│   └── components/
│       ├── Header.tsx                 # Glassmorphism sticky header
│       ├── Footer.tsx                 # 3-column footer
│       ├── CartContext.tsx            # Global cart state + localStorage
│       ├── CartDrawer.tsx             # Slide-in cart drawer
│       ├── SearchModal.tsx            # Full-screen search overlay
│       └── Chatbot.tsx                # 🤖 Floating AI chat assistant
└── public/                            # Static assets & product images
```

---

## ✨ Features

### 🛍️ Shopping Experience
- **Homepage** — Full-width hero banner + bestsellers product grid
- **Collections Page** — All 3 hijab products with category filter buttons
- **Add to Bag** — One-click add to cart with auto-open drawer
- **Cart Drawer** — Slide-in panel with quantity control, item removal, subtotal
- **Cart Persistence** — Cart saved to `localStorage` across page refreshes
- **Search Modal** — Full-screen live search with popular tag suggestions

### 🤖 AI Chatbot (Signature Feature)
A custom floating chatbot assistant with:
- **12 FAQ categories** — Pricing, Fabrics, Sizing, Colors, Shipping, Returns, Care, Styling, Contact, Gifting, Greetings, Thanks
- **Typing indicator** — Animated 3-dot bounce while "thinking"
- **Quick reply buttons** — Pre-set common questions
- **Markdown formatting** — Bold text rendering in responses
- **Islamic greeting** — Responds with "As-salamu alaykum 🌸"
- **Unread notification dot** — On the floating button

### 📄 Pages
| Route | Description |
|-------|-------------|
| `/` | Homepage with hero & bestsellers |
| `/collections/all` | Full product listing with fabric filter |
| `/about` | Brand story, mission & values |
| `/contact` | Contact form + support info |

---

## 🎨 Design System

**Color Palette:**

| Token | Color | Preview |
|-------|-------|---------|
| `--text-primary` | `#351408` | Deep Warm Brown |
| `--text-secondary` | `#7C3A23` | Terracotta |
| `--accent-color` | `#C67240` | Warm Clay Orange |
| `--bg-secondary` | `#F4E0C9` | Blush Cream |
| `--gold` | `#C1A36B` | Golden Tan |

**Design Effects:**
- Glassmorphism sticky header (`backdrop-filter: blur`)
- Smooth cubic-bezier transitions
- Box-shadow hover states on cards
- CSS Modules for scoped component styles

---

## 🤖 Chatbot FAQ Topics

The chatbot answers questions on:
- 💰 Pricing (PKR 600–800)
- 🧵 Fabric types (Silk Chiffon, Cotton Jersey, Modal Cotton)
- 📐 Sizing (175cm × 70cm standard)
- 🎨 Colors (10+ shades available)
- 📦 Shipping (Standard 5–7 days, Express 2–3 days)
- ↩️ Returns (30-day hassle-free policy)
- 🌿 Care instructions per fabric type
- 🎀 Styling & wrap tutorials
- 📧 Contact info
- 🎁 Gift wrapping options

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/Syeda-Aliza/TheHaya-Co.git

# Navigate to store
cd TheHaya-Co

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 🛒 Products

| Product | Fabric | Price | Color |
|---------|--------|-------|-------|
| Luxury Silk Chiffon Hijab | Silk Chiffon | PKR 790 | Grape Purple |
| Premium Cotton Jersey Hijab | Cotton Jersey | PKR 800 | Muted Lilac |
| Soft Modal Cotton Hijab | Modal Cotton | PKR 600 | Dusty Rose |

**Free shipping** on orders over **PKR 2,000** 📦

---

## 📞 Contact

- 📧 **Email:** thehayaandco@gmail.com
- 📸 **Instagram:** @thehaya&Co
- 🕐 **Support Hours:** Monday–Saturday, 9:00 AM – 6:00 PM

---

## 📄 License

© 2026 Haya&Co Modest Wear. All rights reserved.
