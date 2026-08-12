import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lithe.dev',
  output: 'static',
  compressHTML: true,
  prefetch: true,
});
