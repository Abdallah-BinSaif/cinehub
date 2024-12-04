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
      "gold": "#FFD700",
      "gold-seco": "#FFFADF",
      "back": "#F5F5F5"
    }
  },
  plugins: [
    require('daisyui'),
  ],
}