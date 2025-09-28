import tailwindcss from "@tailwindcss/vite"
import { tanstackRouter } from "@tanstack/router-plugin/vite"
import viteReact from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { VitePWA as pwa } from "vite-plugin-pwa"
import tsConfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({ autoCodeSplitting: true }),
    viteReact(),
    tailwindcss(),
    tsConfigPaths(),
    pwa({
      base: "/",
      scope: "/",
      includeAssets: ["favicon.svg"],
      pwaAssets: {
        config: true,
      },
      manifest: {
        lang: "es",
        start_url: "/",
        name: "Sentiment Analysis | Quarkus Graalpy",
        short_name: "Sentiment Analysis",
        theme_color: "#18181b",
        background_color: "#18181b",
        display: "standalone",
      },
      selfDestroying: true,
      injectRegister: false,
      devOptions: {
        enabled: false,
        navigateFallbackAllowlist: [],
        suppressWarnings: false,
      },
    }),
  ],
  envPrefix: "PUBLIC_",
  server: {
    proxy: {
      "/api": "http://localhost:8080",
    },
  },
})
