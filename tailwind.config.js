/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],

        // rename this for clarity (optional but better)
        jacques: ['"Jacques Francois Shadow"', 'serif'],

        protest: ['"Protest Revolution"', 'cursive'],

        funky: ['Kranky', 'cursive'],
        script: ['Lily Script One', 'cursive'],
        island: ['"Island Moments"', "cursive"],
      },
    },
  },
  plugins: [],
};