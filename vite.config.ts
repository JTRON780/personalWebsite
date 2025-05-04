import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // Changed from '/personalWebsite/' to '/' for custom domain
  plugins: [react()],
})
