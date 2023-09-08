import react from '@vitejs/plugin-react'
import { defineConfig, } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react(), ],
  resolve: {
    alias: {
      components: "src/components",
      model: "src/model",
      pages: "src/pages",
      share: "src/share",
    },
  },
},)
