import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
   build: {
    rollupOptions: {
      output: {
        manualChunks: {
                    'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'react-vendor': ['react', 'react-dom', 'react/jsx-runtime'],
          'i18n': ['i18next', 'react-i18next', 'i18next-browser-languagedetector', 'i18next-http-backend'],
          'framer': ['framer-motion'],
          'ui': ['sonner'],
        },
      },
    },
  },
    server: {
    host: "0.0.0.0", // REQUIRED
    port: 5173,
  },
})
