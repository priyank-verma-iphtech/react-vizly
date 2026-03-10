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
    rollupOptions: {
      external: ['react', 'react-dom', 'apexcharts'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          apexcharts: 'ApexCharts',
        },
      },
    },
  },
});