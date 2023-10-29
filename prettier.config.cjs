/** @type {import("prettier").Config} */
module.exports = {
  plugins: ["prettier-plugin-astro"],
  tabWidth: 2,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
