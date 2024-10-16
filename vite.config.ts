import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'slodash',
      formats: ['es'], 
      fileName: () => `index.js`, 
    },
    rollupOptions: {
      external: [], 
      plugins: [
      ],
    },
  },
})