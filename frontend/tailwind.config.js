/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: "486px",
      },
      colors: {
        note: "var(--note)",
        success: "rgb(88,195,34)",
        error: "rgb(237, 73, 86)",
        "link-primary": "rgb(0, 149, 246)",
        "link-secondary": "var(--text-link-s)",
        "link-primary-hover": "rgb(24, 119, 242)",
        "link-secondary-hover": "var(--text-link-s-hover)",
      },
      textColor: {
        primary: "var(--text-p)",
        tertiary: "var(--text-t)",
        secondary: "var(--text-s)",
        button: "rgb(255, 255, 255)",
      },
      backgroundColor: {
        primary: "var(--bg-p)",
        widget: "var(--widget)",
        button: "var(--button)",
        tertiary: "var(--bg-t)",
        secondary: "var(--bg-s)",
        "pill-on": "var(--pill-on)",
        "pill-off": "var(--pill-off)",
        separator: "var(--separator)",
        "widget-hover": "var(--widget-hover)",
        "button-hover": "var(--button-hover)",
        "sidebar-hover": "var(--sidebar-hover)",
      },
      borderColor: {
        primary: "var(--border-p)",
      },
      boxShadow: {
        primary: "rgba(0, 0, 0, 0.15) 0px 4px 12px 0px",
      },
    },
  },
  plugins: [],
};
