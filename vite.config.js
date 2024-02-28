import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@material-ui/core'],
    },
  },
};
