/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "red-salmon": "#ac1558",
        "red-wrong": "#f70253",
      },
    },
  },
  plugins: [],
};
