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
        poppin: ["Poppins", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
      keyframes: {
        progress: {
          "0%": { width: "40px", transform: "translateX(-100%)" },
          "50%": { width: "80px", transform: "translateX(50%)" },
          "100%": { width: "100px", transform: "translateX(150%)" },
        },
      },
      animation: {
        progress: "progress 3s ease-in-out 1s infinite",
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
