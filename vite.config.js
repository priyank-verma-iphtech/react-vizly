import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.js",
      name: "ReactVizly",
      fileName: "react-vizly"
    },
    rollupOptions: {
      external: ["react", "react-dom"]
    }
  }
})