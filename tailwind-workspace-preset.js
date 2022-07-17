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
        projects: "repeat(auto-fit, minmax(450px, 1fr));",
        projectContent: "250px 1fr",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
