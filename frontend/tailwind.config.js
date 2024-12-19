/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: "486px",
      },
      colors: {
        link: "rgb(0, 149, 246)",
        "link-hover": "rgb(24, 119, 242)",
      },
      textColor: {
        primary: "var(--text)",
        button: "rgb(245, 245, 245)",
        tertiary: "rgb(224, 241, 255)",
        secondary: "rgb(168, 168, 168)",
      },
      backgroundColor: {
        primary: "var(--bg)",
        field: "var(--field)",
        widget: "var(--widget)",
        button: "var(--button)",
        secondary: "var(--text)",
        "pill-on": "var(--pill-on)",
        "pill-off": "var(--pill-off)",
        separator: "var(--separator)",
        tertiary: "var(--bg-tertiary)",
        "widget-hover": "var(--widget-hover)",
        "button-hover": "var(--button-hover)",
        "sidebar-hover": "var(--sidebar-hover)",
      },
      borderColor: {
        field: "rgb(85, 85, 85)",
        primary: "var(--border)",
        secondary: "rgb(219, 219, 219)",
      },
      boxShadow: {
        primary: "rgba(0, 0, 0, 0.15) 0px 4px 12px 0px",
      },
    },
  },
  plugins: [],
};
