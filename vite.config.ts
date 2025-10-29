import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    // Determine base path depending on environment:
    // - When building for GitHub Pages (default production here) use '/FakharProtfolio/'.
    // - When Netlify builds the site it sets process.env.NETLIFY=true, so use '/' in that case.
    const isNetlify = process.env.NETLIFY === 'true' || env.NETLIFY === 'true';
    const base = mode === 'production'
      ? (isNetlify ? '/' : '/FakharProtfolio/')
      : '/';

    return {
      base,
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
