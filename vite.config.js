import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "https://82b8-2405-204-3022-e7fd-ecd5-7772-b0ba-26fa.ngrok-free.app/",
  //       changeOrigin: true,
  //     },
  //   },
  // },
  plugins: [
    react(),
    
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifest: {
        name: "SV Ayurveda",
        short_name: "avayurved",
        theme_color: "#ffffff",
        background_color: "#000000",
      },
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
    }),
  ],

  build: {
    rollupOptions: {
      plugins: [
        {
          name: "image-webpack-loader",
          plugin: "image-webpack-loader",
        },
      ],
    },
  },
});
