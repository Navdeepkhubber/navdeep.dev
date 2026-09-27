import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve('index.html'),
        about: resolve('about/index.html'),
        security: resolve('security/index.html'),
        engineering: resolve('engineering/index.html'),
        contact: resolve('contact/index.html'),
        projects: resolve('projects/index.html'),
      },
    },
  },
});
