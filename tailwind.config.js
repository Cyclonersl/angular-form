/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        casan: {
          DEFAULT: "#2e4196",
        },
        casanGreen: {
          DEFAULT: "#1ead9c",
        },
      },
    },
  },
  plugins: [],
};
