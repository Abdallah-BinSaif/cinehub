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
      "gold": "#FFD700",
      "back": "#F5F5F5"
    }
  },
  plugins: [
    require('daisyui'),
  ],
}