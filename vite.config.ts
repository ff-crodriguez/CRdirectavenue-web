import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteUserConfig } from 'vitest/config';

// Configuración de Vite con Vitest para pruebas
export default defineConfig({
  plugins: [react()],  // Plugin de React para manejar JSX/TSX
  test: {
    globals: true,  // Permite usar las funciones globales como `describe`, `it`, `expect`
    environment: 'jsdom',  // Utiliza un entorno de jsdom para simular el navegador
    setupFiles: './src/tests/setup.tsx',  // Archivo de configuración opcional para configurar el entorno de pruebas
  },
} as ViteUserConfig);