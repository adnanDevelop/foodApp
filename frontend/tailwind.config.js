/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00ADB5",
        "light-green": "#18B29633",
        yellow: "#FFB800",
        "light-yellow": "#FFB80033",
        pink: "#FF6A6D",
        "light-pink": "#FF6A6D33",
        "dark-color": "#343A40",
        "light-gray": "#343A4080",
        "light-color": "#868E96",
        "light-white": "#F5F5F5",
        "border-color": "#ADB5BD",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1500px",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00ADB5",
          yellow: "#FFB800",
          "light-yellow": "#FFB80033",
          pink: "#FF6A6D",
          "light-pink": "#FF6A6D33",
          "light-gray": "#343A4080",
          "dark-color": "#343A40",
          "light-color": "#868E96",
          "light-white": "#F5F5F5",
        },
      },
    ],
  },
};
