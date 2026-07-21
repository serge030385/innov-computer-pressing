/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#073B6F",
          blue: "#1597D3",
          sky: "#E8F6FC",
          orange: "#F57C20",
          orangeDark: "#C95E12",
          ink: "#14213D",
          mist: "#F5F8FB"
        }
      },
      boxShadow: {
        soft: "0 18px 55px rgba(7, 59, 111, 0.12)",
        card: "0 12px 36px rgba(20, 33, 61, 0.08)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
