import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({ 
      include: ['src'], 
      rollupTypes: true // This will clean up those extra folders in dist
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ReactVizly',
      fileName: 'react-vizly',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      // ENSURE THESE ARE EXACTLY AS SHOWN
      external: [
        'react', 
        'react-dom', 
        'react/jsx-runtime', 
        'apexcharts'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
          apexcharts: 'ApexCharts'
        },
      },
    },
  },
});