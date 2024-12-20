import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { ViteUserConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.tsx',
  },
} as ViteUserConfig);
