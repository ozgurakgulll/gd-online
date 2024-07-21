module.exports = {
  content: ["./src/**/*.tsx"],
  plugins: [],
  darkMode: "class",
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      backgroundImage: {
        "cta-img": "url('/mic.png')",
      },
      colors: {
        primary: "#ED7F39",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
};
