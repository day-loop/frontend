import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import tailwindcss from "tailwindcss"
import Checker from "vite-plugin-checker"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Checker({ typescript: true })],

  server: {
    port: 3000
  },

  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  }
})
