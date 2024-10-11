/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        jomolhari: ['Jomolhari', 'serif'],
      },

      backgroundImage: {
        'custom-pattern': "url('./assets/img/headerImg.webp')",  
        'Business-Coaching': "url('./assets/img/BusinessCoaching.webp')",  
        "slider-img":"url(./assets/img/sliderImg.png) "
      },
    },
  },
  plugins: [],
}

