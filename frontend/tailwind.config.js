/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: "500px",
        touch: { raw: "(hover: none) and (pointer: coarse)" },
      },
    },
  },
  plugins: [],
};
