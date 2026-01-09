/**
 * Mobile-specific Vite configuration
 * 
 * This file provides configuration for building a mobile app using Capacitor or similar.
 * To use this configuration, rename it to vite.config.ts or import it.
 * 
 * Prerequisites:
 * - Install Capacitor: npm install @capacitor/core @capacitor/cli
 * - Install platform-specific packages: npm install @capacitor/ios @capacitor/android
 * 
 * Initialize Capacitor:
 * - npx cap init
 * - npx cap add ios
 * - npx cap add android
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    server: {
        host: "::",
        port: 8080,
    },
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        outDir: "dist",
        // Optimize for mobile
        minify: mode === "production" ? "esbuild" : false,
        sourcemap: mode === "development",
        // Increase chunk size warning limit for mobile bundles
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            output: {
                // Better code splitting for mobile
                manualChunks: {
                    vendor: ['react', 'react-dom', 'react-router-dom'],
                    ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
                },
            },
        },
    },
    // For Capacitor, you may need to set the base path
    base: mode === "production" ? "./" : "/",
}));
