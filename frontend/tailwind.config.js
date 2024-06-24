/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "light-white": "#F9F9F9",
        black: "#000",
        "heading-color": "#3D3D3D",
        "content-color": "#747474",
        yellow: "#F2A93E",
        orange: "#F07054",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          white: "#fff",
          "light-white": "#F9F9F9",
          black: "#000",
          "heading-color": "#3D3D3D",
          "content-color": "#747474",
          yellow: "#F2A93E",
          orange: "#F07054",
          warning: "#F2A93E",
        },
      },
    ],
  },
};
