import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // listen on all addresses
    port: Number(process.env.PORT) || 5173,
    strictPort: true, // throw if port is in use
  },
  preview: {
    host: true, // listen on all addresses
    port: Number(process.env.PORT) || 5173,
    strictPort: true, // throw if port is in use
  },
})
