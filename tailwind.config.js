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
      "dark-primary": "#3c388a",
      "dark-secondary": "#020024",
      "dark-accent": "#0600c2",
      "dark-text": "#eae9fc",

      "light-primary": "#2f27ce",
      "light-secondary": "#dedcff",
      "light-accent": "#4843bd",
      "light-text": "#050315",
    }
  },
  plugins: [
    require('daisyui'),
  ],
}