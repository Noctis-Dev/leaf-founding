import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {

  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  preview: {
    port: 3000,
    host: true,
  },
  plugins: [svgr(), react(), NodeGlobalsPolyfillPlugin()],
  assetsInclude: ['**/*.wasm?inline', '**/*.txt?inline'],
  build: { outDir: 'build' },
  
});
