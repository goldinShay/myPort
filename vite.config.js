import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
    },
  },
  root: path.join(process.cwd(), 'client'),
  build: {
    outDir: path.join(process.cwd(), 'dist/public'),
    emptyOutDir: true,
  },
  server: {
    // Use Render's PORT if available, otherwise default to 3000 locally
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    allowedHosts: [
      'myport-y8v0.onrender.com' // 👈 Render host allowed
    ],
  },
});
