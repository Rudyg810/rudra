const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // Enable dark mode with class-based approach
  content: [
    './pages/**/*.{js,jsx}', // Content paths for Tailwind to scan
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "", // Optional prefix for Tailwind classes
  theme: {
    container: {
      center: true, // Center the container
      padding: "2rem", // Padding for container
      screens: {
        "2xl": "1400px", // Custom breakpoint for 2xl screens
      },
    },
    extend: {
      colors: {
        yellow: {
          DEFAULT: '#FFD700', // Bright yellow
          dark: '#DAA520',    // Goldenrod for darker yellow
        },
        black: {
          DEFAULT: '#000', // Default black
          100: '#000319', // Custom black shade
        },
      },
      fontFamily: {
        'hm-sans': ['"HM Sans Regular"', 'sans-serif'],
        assistant:['Assistant', 'sans-serif']
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Add Tailwind CSS animation plugin
};
