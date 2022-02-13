module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
      },
    },
    extend: {
      gridTemplateColumns: {
        cards: "repeat(auto-fill, minmax(500px, 1fr));",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
