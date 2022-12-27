import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({ 
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
    registerType: 'autoUpdate',
    devOptions: {
      enabled: true
    },
    manifest: {
      name: 'EazyApps',
      short_name: 'EazyApps',
      description: 'My Awesome App description',
      theme_color: '#ffffff',
      icons: [
        {
          src: "/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        }
      ]
    }
   })],
  // plugins: [
  //   react(),
  //   VitePWA(),
  //   VitePWA({
  //     manifest: {
  //       name: "vite-react-ts-100",
  //       short_name: "vite-react-ts-100",
  //       start_url: "/",
  //       display: "standalone",
  //       background_color: "#ffffff",
  //       lang: "en",
  //       scope: "/",
  //       icons: [
  //         {
  //           src: "/android-chrome-192x192.png",
  //           sizes: "192x192",
  //           type: "image/png",
  //           purpose: "any maskable",
  //         },
  //         {
  //           src: "/android-chrome-512x512.png",
  //           sizes: "512x512",
  //           type: "image/png",
  //           purpose: "any maskable",
  //         },
  //       ],
  //       theme_color: "#ffffff",
  //     },
  //   }),
  // ],
});
