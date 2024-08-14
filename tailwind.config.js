/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "6rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",

        "primary-text": "var(--primary-text)",
        "secondary-text": "var(--secondary-text)",

        background: "var(--background)",
        "gradient-primary": "var(--primary-gradient)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}