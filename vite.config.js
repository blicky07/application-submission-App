import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@": "./src/frontend/main.jsx"
      // If you have any specific aliases for paths
      // Example: 'my-components': '/src/components'
      // Add them here
    },
  },
})
