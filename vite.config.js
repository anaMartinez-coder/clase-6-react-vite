// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx', // Configura esbuild para interpretar archivos .js con JSX
    include: /src\/.*\.js$/, // Solo afecta archivos .js en la carpeta src
  },
});
