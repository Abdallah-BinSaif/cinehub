/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      // Configure your color palette here
      "pri": "#00BFFF",
      "seco": "#2C3E50",
      "third": "#e7f9ff",
      "footer": "#8b8a0b",
      "gold": "#FFD700",
      "gold-seco": "#ffe9b8",
      "back": "#F5F5F5",
      "red": "rgb(255,87,87)"
    }
  },
  plugins: [
    require('daisyui'),
  ],
}