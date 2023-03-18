import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

process.env.NODE_ENV = 'production';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    host: "0.0.0.0",
    hmr: {
      clientPort: 3001,
    },
    port: 5173,
    watch: {
      usePolling: true,
    }
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  pwa: {
    name: 'Attendance Management System',
    
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'dev/sw.js',
    }
  },
  base: '/Attendance-Management'
})
