import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5174
  },
  build: {
    // increase the chunk warning limit
    chunkSizeWarningLimit: 1000, // kB

    rollupOptions: {
      output: {
        manualChunks: {
          // separate all node_modules into a vendor chunk
          vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            'antd',
          ],
        },
      },
    },
  },
})
