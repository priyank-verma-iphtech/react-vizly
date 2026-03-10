import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({ include: ['src'], insertTypesEntry: true }) // Generates .d.ts files
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'), // Corrected to .ts
      name: 'ReactVizly',
      fileName: 'react-vizly',
    },
   // ... inside rollupOptions
   rollupOptions: {
    // Keep react external so we don't have duplicate instances
    external: ['react', 'react-dom'], 
    output: {
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        // Remove apexcharts from here
      },
    },
  },
  },
});