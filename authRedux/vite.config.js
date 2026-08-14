import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindccss from "@tailwindcss/vite"


export default defineConfig({
  plugins: [react(),tailwindccss()],
  base: './'
})
