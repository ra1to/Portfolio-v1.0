/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
import path from 'node:path';


export default defineConfig({
  plugins: [tailwindcss(), react()],
  test: {
    projects: [{
      extends: true,
      plugins: [],
      test: {
        browser: {
          enabled: true,
          headless: true,
          provider: 'playwright',
          instances: [{
            browser: 'chromium'
          }]
        },
      }
    }]
  },
    resolve: {
    alias: {'@': path.resolve(__dirname, './src'),},
  },
});