import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

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
  plugins: [react()],
});
