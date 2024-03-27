const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '340px'
      },
      colors: {
        'pinklight': "#f9a8d4",
        'roselight': "#fda4af",
        "fuchsialight": "#f0abfc",
        "purplelight": "#d8b4fe",
        "vilotlight": "#c4b5fd",
        "indigolight": "#a5b4fc",
        "bluelight": "#93c5fd"
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

