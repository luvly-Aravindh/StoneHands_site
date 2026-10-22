import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from the site root on Netlify.
export default defineConfig({
  plugins: [react()],
});
