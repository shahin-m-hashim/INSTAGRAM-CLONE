import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      hooks: "/src/hooks",
      utils: "/src/utils",
      icons: "/src/Icons",
      pages: "/src/pages",
      routes: "/src/routes",
      components: "/src/components",
    },
  },
  server: {
    port: 3000,
  },
});
