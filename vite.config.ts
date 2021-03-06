import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteAliases } from 'vite-aliases';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/booking-app/',
  plugins: [react(), ViteAliases({ useTypescript: true, prefix: 'src/' })],
});
