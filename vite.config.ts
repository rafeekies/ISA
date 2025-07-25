import { defineConfig } from 'vite'

export default defineConfig({
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react'
  },
  server: {
    port: 3000,
    host: true
  },
  build: {
    target: 'es2020'
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})
