import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import sassDts from 'vite-plugin-sass-dts';
import svgr from 'vite-plugin-svgr';
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {

        importer(...args) {
          if (args[0] !== '@/styles') {
            return
          }

          return {
            file: `${path.resolve(__dirname, './src/style/sass')}`,
          }
        },
      },
    },
  },
  plugins: [
    react(),
    svgr(),
    sassDts({
      enabledMode: ['development', 'production'],
      sourceDir: path.resolve(__dirname, './src'),
      outputDir: path.resolve(__dirname, './dist'),
    }),
  ],
})