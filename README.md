<h1 align="center">💻❤️ Lover as Developer</h1>

<p align="center">
  <em>"When words fail, code speaks — a developer's heartfelt apology, built one component at a time."</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite" />
  <img src="https://img.shields.io/badge/Framer_Motion-11-black?style=flat-square&logo=framer" />
  <img src="https://img.shields.io/badge/CSS_Modules-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" />
</p>

---

## 📖 Description

**Lover as Developer** is an interactive, animated web experience built with React + Vite — a digital love letter wrapped in code. Instead of flowers or chocolate, a developer pours his heart into components, animations, and typed messages.

The user opens the site to find four mysterious envelopes. Each one holds a personal letter with a photo and a heartfelt message. After reading all four, a climax screen appears with a final confession — ending with the ultimate question: *"Stay with me? 💕"*

---

## ✨ Features

| Feature | Description |
|---|---|
| 💌 **Animated Envelope System** | 4 envelopes fly in from screen corners, each clickable in any order |
| ⌨️ **Typewriter Effect** | Letters type themselves out character by character, line by line |
| 📸 **Dynamic Asset Injection** | Each envelope has its own personal photo — easily swappable |
| 🎭 **Climax Interaction** | A full-screen confession with auto-typing lines and a "Stay with me?" button |
| ❤️ **Final Love Screen** | A glowing yellow card zooms in with "I LOVE YOU ❤️" |
| 🎵 **Background Music** | Soft looping music plays from first user interaction |
| 🌸 **Floating Hearts** | Animated hearts float upward on landing, fall downward after tap |
| 📱 **Mobile Responsive** | Fully responsive layout — works on all screen sizes |
| 🚀 **Smooth Animations** | Powered by Framer Motion — fly, zoom, pop, fade transitions |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | Component architecture & state management |
| **Vite 5** | Lightning-fast dev server & production build |
| **Framer Motion 11** | Envelope fly animations, letter pop-ups, zoom transitions |
| **CSS Modules + Custom Properties** | Scoped styles with a single-source theme system |
| **Google Fonts** | Nunito · Special Elite · Dancing Script · Courier Prime |
| **Web Audio API** | Background music via `useRef` + native `Audio` |

---

## 📸 Screenshots

> *(Replace placeholder paths with actual screenshots after first build)*

| Screen | Preview |
|---|---|
| 🌸 Landing | Stacked envelopes + glowing "Something from my heart..." |
| 💌 Envelope Grid | 4 labelled envelopes in a 2×2 animated grid |
| 📄 Letter View | Yellow card with photo + auto-typing message |
| 🎭 Climax | Full-screen image with typed confession |
| ❤️ Final | "I LOVE YOU ❤️" glowing yellow box |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/Rashmiranjantandia/lover-as-developer.git
cd lover-as-developer

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🏗️ Build for Production

```bash
# Create optimised production build
npm run build

# Preview the production build locally
npm run preview
```

The built files will be in the `dist/` directory.

---

## 📁 Folder Structure

```
lover-as-developer/
├── public/
│   ├── favicon.svg          # Pink heart favicon
│   └── music.mp3            # Background music (looping)
│
├── src/
│   ├── assets/              # Personal photos (Img1.jpg – Img5.jpg)
│   │   ├── Img1.jpg         # Envelope 1: Just You ♥
│   │   ├── Img2.jpg         # Envelope 2: You Matter ✨
│   │   ├── Img3.jpg         # Envelope 3: A Memory ✨
│   │   ├── Img4.jpg         # Envelope 4: Still you 🧡
│   │   └── Img5.jpg         # Climax screen photo
│   │
│   ├── components/
│   │   ├── ClimaxScreen.jsx   # Final confession with auto-typing
│   │   ├── EnvelopeGrid.jsx   # 2×2 animated envelope grid
│   │   ├── FinalScreen.jsx    # I LOVE YOU card
│   │   ├── FloatingHearts.jsx # Animated heart particles
│   │   ├── Footer.jsx         # Fixed credit footer
│   │   ├── LandingScreen.jsx  # Initial landing (stacked envelope)
│   │   ├── LetterCard.jsx     # Letter popup with photo + typing
│   │   ├── TitleBar.jsx       # Black top bar
│   │   └── TypewriterText.jsx # Reusable typewriter component
│   │
│   ├── data/
│   │   └── envelopes.js     # ← Edit all messages & images HERE
│   │
│   ├── styles/
│   │   ├── theme.css        # ← Change fonts/colors HERE (global)
│   │   └── index.css        # All component styles
│   │
│   ├── App.jsx              # State machine + music controller
│   └── main.jsx             # React entry point
│
├── index.html               # Tab title + Google Fonts + favicon
├── vite.config.js           # Vite configuration
├── package.json
└── README.md
```

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect your GitHub repository directly at [vercel.com](https://vercel.com).

### Firebase Hosting

```bash
# Install Firebase CLI
npm i -g firebase-tools

# Login and initialise
firebase login
firebase init hosting

# Build and deploy
npm run build
firebase deploy
```

### GitHub Pages

Add `base` to `vite.config.js`:

```js
export default {
  base: '/lover-as-developer/',
}
```

Then deploy the `dist/` folder using `gh-pages`:

```bash
npm install -D gh-pages
npm run build
npx gh-pages -d dist
```

---

## 🎨 Customisation

All content lives in **one file** — `src/data/envelopes.js`:

```js
export const ENVELOPES = [
  {
    name: 'Just You ♥',
    image: Img1,           // swap with your photo
    message: 'Your message here...',
  },
  // ... 3 more envelopes
];
```

All fonts and colors live in **one file** — `src/styles/theme.css`:

```css
:root {
  --font-ui:     'Nunito', sans-serif;
  --font-letter: 'Courier Prime', monospace;
  --font-glow:   'Dancing Script', cursive;
  --font-climax: 'Special Elite', cursive;
  --color-bg:    #FADADD;
}
```

---

## 👤 Author

**Rashmi Ranjan**

> Built with love, late nights, and a lot of `console.log("I miss you")` 💻❤️

---

## 📄 License

MIT — feel free to fork and send your own love letter 💌

---

<p align="center">Made with ❤️ by Rashmi Ranjan · © 2026 Lover as Developer</p>
