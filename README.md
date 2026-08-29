# Kavinisha Kannan — Software Developer & UI/UX Engineer Portfolio (v2.0)

A high-performance, dark-themed, developer-focused portfolio web application built with **React**, **Vite**, and **Tailwind CSS**.

![Portfolio Architecture](https://img.shields.io/badge/Stack-React_18_%7C_Vite_%7C_Tailwind_CSS-06b6d4?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production_Ready-10b981?style=for-the-badge)

---

## 🚀 Key Highlights & Architecture

- **⚡ Fast Modern Toolchain**: Built with React 18 & Vite for lightning-fast HMR and optimized production bundles.
- **🖥️ Interactive Dev Terminal**: Integrated interactive command-line simulator (`cli.sh`, `profile.json`, `git-log`) capable of running commands such as `help`, `skills`, `projects`, `contact`, `stack`, and `clear`.
- **🎯 Deep-Dive Project Case Studies**: Structured breakdown of problems, engineering solutions, technical highlights, and system architectures with interactive modals.
- **🛠️ Categorized Skills Matrix**: Evidence-based technical skills organized by domain (Frontend, Backend & Cloud, Databases, Developer Tools, Engineering Practices) with instant search and filter capabilities.
- **📐 System Capabilities & Architecture**: Clear communication of real software engineering strengths (Component lifecycle, API integration, State management, Performance optimization).
- **📱 Fully Responsive & Accessible**: Fluid layouts engineered for mobile, tablet, and desktop with zero horizontal overflow, keyboard navigation (`Cmd+K` command palette), and `prefers-reduced-motion` support.
- **📬 Production Contact System**: Integrated contact form via Formspree (`https://formspree.io/f/xzzpnjvd`) with 1-click email copy to clipboard.

---

## 📂 Project Structure

```
├── index.html                  # HTML5 entry with Inter & JetBrains Mono typography
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite bundler configuration
├── tailwind.config.js          # Dark developer theme tokens & animations
├── postcss.config.js           # PostCSS configuration
├── assets/                     # Portfolio image assets & media
└── src/
    ├── main.jsx                # React root entry point
    ├── App.jsx                 # Main application layout
    ├── index.css               # Global styles, scanlines, and grid backgrounds
    ├── data/
    │   └── portfolioData.js    # Single-source data for profile, projects, skills, and timeline
    └── components/
        ├── Navbar.jsx          # Sticky glassmorphism header with active section tracking
        ├── Hero.jsx            # Developer hero with telemetry stats and CTAs
        ├── DevTerminal.jsx     # Interactive CLI and JSON profile viewer
        ├── About.jsx           # Engineering mindset and core pillars
        ├── Skills.jsx          # Interactive categorized skills with search & filter
        ├── Projects.jsx        # Project showcase with category filters
        ├── ProjectModal.jsx    # Accessible modal for deep architecture reviews
        ├── EngineeringHighlights.jsx # System capabilities & "What I Build"
        ├── Experience.jsx      # Career and growth journey timeline
        ├── Contact.jsx         # Contact form and copy-to-clipboard actions
        ├── Footer.jsx          # Technical footer with system status & back-to-top
        └── CommandPalette.jsx  # Keyboard shortcut command palette (Cmd+K)
```

---

## 🛠️ Development & Build Scripts

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 👤 Author

**Kavinisha Kannan**
- **Email**: [kavinisha283@gmail.com](mailto:kavinisha283@gmail.com)
- **LinkedIn**: [kavinisha-kannan](https://www.linkedin.com/in/kavinisha-kannan-1992a6276/)
- **GitHub**: [@Kavinisha01](https://github.com/Kavinisha01)
