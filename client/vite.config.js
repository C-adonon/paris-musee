import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Get the environment variables
const { VUE_APP_API_URL } = process.env;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  define: {
    // Pass the environment variables to the app
    "process.env": {
      VUE_APP_API_URL: JSON.stringify(VUE_APP_API_URL),
    },
  },
});
