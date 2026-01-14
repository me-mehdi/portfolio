# ⚡ Futuristic Developer Portfolio

A high-performance, immersive portfolio website built for **El Mehdi Nidaazzi**.
This project features a cutting-edge **Cyberpunk/Sci-Fi aesthetic** with neon glows, glassmorphism, and smooth interactive animations to showcase software engineering skills and projects.

## 🚀 Features

- **Dynamic Visuals**: Continuously shifting animated gradient background and "breathing" neon effects.
- **Interactive UI**:
  - **Typing Effect** Hero section ("System Online").
  - **Scroll Reveal**: Sections fade in and slide up gracefully as you scroll.
  - **Glassmorphism**: Premium frosted glass styling for cards, navigation, and overlays.
- **Fully Responsive**: Optimized for all devices, featuring a custom holographic hamburger menu for mobile.
- **Smooth Navigation**: One-click smooth scrolling to any section.

## 🛠️ Tech Stack

- **Core**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS3 (CSS Variables, Keyframes, Flexbox/Grid)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linting**: ESLint

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/me-mehdi/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Local Server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173` to view the application.

## 🚀 Deployment (GitHub Pages)

To deploy this project to GitHub Pages:

1. **Install gh-pages**
   ```bash
   npm install gh-pages --save-dev
   ```

2. **Update `vite.config.js`**
   Add your repository name as the base path:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/portfolio/', // Replace 'portfolio' with your repo name if different
   })
   ```

3. **Deploy Script**
   Add this to your `package.json` scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. **Publish**
   ```bash
   npm run deploy
   ```

## 👨‍💻 Author

**El Mehdi Nidaazzi**
- **Role**: Junior Software Engineer | Full-Stack Developer
- **Location**: London, UK
- **Contact**: nidaazzielmehdi@gmail.com
- **GitHub**: [me-mehdi](https://github.com/me-mehdi)

---
*© 2026 El Mehdi Nidaazzi. All Systems Functional.*
