/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-150%)" },
        },
        "slash-sweep": {
          "0%": { transform: "translateX(-160%) rotate(8deg)" },
          "100%": { transform: "translateX(260%) rotate(8deg)" },
        },
      },
      animation: {
        slide: "slide 20s linear infinite",
        "slash-sweep": "slash-sweep 1.2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
