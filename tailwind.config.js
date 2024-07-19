module.exports = {
  content: ["./src/**/*.tsx"],
  plugins: [],
  darkMode: "class",
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {

      gridTemplateRows: {
        12: "repeat(12, minmax(0, 1fr))",
      },
      gridRow: {
        "span-10": "span 10 / span 10",
      },
    },
  },
};