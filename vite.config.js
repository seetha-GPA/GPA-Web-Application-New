import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/GPA-Web-Application-New/',
  server: {
    port: 4200,
    host: true,
  },
})
