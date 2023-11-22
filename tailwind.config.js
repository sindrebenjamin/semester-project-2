/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      "sans": ["DM Sans", "sans-serif"]
    },
    extend: {
      colors: {
        "primary": {
          100: "#7CE1BD",
          200: "#42B088",
          300: "#1F8862",
          400: "#096745",
          500: "#005838",
          600: "#083B29",
          700: "#043020",
          800: "#001A11",
        },
        "secondary": {
          50: "#CCD1D9",
          100: "#7E8C9F",
          200: "#4C5E79",
          300: "#34445A",
          400: "#263448",
          500: "#172539",
          600: "#0E1E34",
          700: "#0C1727",
          800: "#020D1D",
        },
        "neutral": {
          50: "#FFFFFF",
          100: "#F6F6F6",
          200: "#DEDEDE",
          300: "#BBBBBB",
          400: "#828282",
          500: "#595959",
          600: "#383838",
          700: "#242424",
          800: "#101010",
        },
        "red": "#B80000",
      }
    },
  },
  plugins: [],
}

