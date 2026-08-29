/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#090d16',
          secondary: '#0d1322',
          tertiary: '#131c31',
          card: 'rgba(15, 23, 42, 0.75)',
          'card-hover': 'rgba(26, 38, 66, 0.85)',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          strong: 'rgba(255, 255, 255, 0.16)',
          glow: 'rgba(56, 189, 248, 0.3)',
        },
        accent: {
          DEFAULT: '#06b6d4',
          hover: '#22d3ee',
          subtle: 'rgba(6, 182, 212, 0.12)',
          glow: 'rgba(6, 182, 212, 0.3)',
        },
      },
      fontFamily: {
        sans: ['Lexend', 'Poppins', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
