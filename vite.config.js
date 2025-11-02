import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// Github pages deploy Guide: https://www.vd-developer.online/blog/vite-react-deploy-github
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/react-word-game/"
})
