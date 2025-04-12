import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react', 'react-dom'],
    esbuildOptions: {
      target: 'esnext',
      supported: {
        'top-level-await': true
      },
    }
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
});