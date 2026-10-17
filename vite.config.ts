import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'ensure-casing-compatibility',
      closeBundle() {
        const distDir = path.resolve(process.cwd(), 'dist');
        const infraUpper = path.join(distDir, 'Infra');
        const infraLower = path.join(distDir, 'infra');
        try {
          if (fs.existsSync(infraUpper) && !fs.existsSync(infraLower)) {
            fs.cpSync(infraUpper, infraLower, { recursive: true });
          }
        } catch {
          // Ignore on case-insensitive filesystems
        }
      },
    },
  ],
});
