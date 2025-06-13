import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/WordScrambleGame/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});