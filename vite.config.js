import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@assets', replacement: '/src/assets' },
      { find: '@homecomponents', replacement: '/src/components/homeComponents' },
      { find: '@productscomponents', replacement: '/src/components/productsComponents' },
      { find: '@productcomponents', replacement: '/src/components/productComponents' },
      { find: '@components', replacement: '/src/components' },
      { find: '@styles', replacement: '/src/styles' },
      { find: '@homestyles', replacement: '/src/styles/homestyles' },
      { find: '@productsstyles', replacement: '/src/styles/productsstyles' },
      { find: '@productstyles', replacement: '/src/styles/productstyles' },
      { find: '@hooks', replacement: '/src/hooks' },
    ],
  },
})
