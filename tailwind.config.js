/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ja-black": "#314051",
        "ja-dark-blue": "#19191a",
        "ja-red": "#d8465b",
        "ja-light-violet": "#fefdff",
        "ja-gray": "#5d5f61",
        "ja-light-white-smoke": "#f6f5f8",
        "ja-white": "#ffffff",
        "ja-light-gray": "#7c7c7d",
        "ja-light-light-gray": "#e5e5e5",
        "ja-light-white": "#f5f5f5",
        "ja-blue": "#0000f7",
        "ja-light-blue": "#00007c",
        "ja-white-smoke": "#faf7f8",
        "ja-yellow": "#FFFF00",
      },
      screens: {
        mobile: "375px",
        "mobile-m": "425px",
        "mobile-l": "768px",
        tablet: "1024px",
        laptop: "1440px",
        "laptop-l": "1680px",
        "laptop-xl": "1920px",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      aushan: ["Kaushan Script", "cursive"],
      solitreo: ["Solitreo", "cursive"],
    },
  },
  plugins: [],
};
