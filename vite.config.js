import { fileURLToPath, URL } from 'node:url'

import { VitePWA } from 'vite-plugin-pwa'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default ({mode}) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [
      vue(),
      VitePWA({
        registerType: 'autoUpdate',
        injectRegister: 'auto',
        workbox: {
          cleanupOutdatedCaches: false,
          globPatterns: ['**/*.{js,css,png,svg,html,txt}'],
        },
        manifest: {
          name: 'Attendance Management',
          short_name: 'MyAttendance',
          description: 'Attendance system for HR management',
          theme_color: '#f5f7f9',
          background_color: '#f5f7f9',
          display: 'standalone',
          icons: [
            {
              src: 'myattendancefix.png',
              sizes: '192x192',
              type: 'image/png'
            }
          ]
        }
      })
    ],
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
    base: process.env.NODE_ENV == 'production' ? '/Attendance-Management' : '',
});
}
