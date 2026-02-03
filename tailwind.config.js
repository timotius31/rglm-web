
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Zalando Sans Expanded","system-ui", "sans-serif"], // Use the name from Google Fonts in quotes
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#1f2a5a",
        accent: "#6c4ab6"
      }
    },
  },
  plugins: [],
}
