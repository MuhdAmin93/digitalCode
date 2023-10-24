/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: { "2xl": "1400px", },
      colors: {
        blueBtn: "#1E9EE5",
        successGreen: "#74DA7F",
        dangerRed: "EE404C"
      }
    },
  },
  plugins: [],
}
