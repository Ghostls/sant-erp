import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Protocolo de Despliegue Valkyron - Operación SANT-ERP
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    // Eliminamos 'lib' y 'rollupOptions.external' para que 
    // todo se compile como una aplicación web lista para producción.
    rollupOptions: {
      output: {
        // Asegura que los archivos generados tengan nombres limpios
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`
      }
    }
  },
  // Definimos la raíz para asegurar que index.html sea el punto de entrada
  root: './',
});