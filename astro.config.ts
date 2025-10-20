// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import solidJs from '@astrojs/solid-js';
import tailwindcss from '@tailwindcss/vite'
import viteTsConfigPaths from "vite-tsconfig-paths"
import { tanstackStart } from '@tanstack/solid-start/plugin/vite'
import viteSolid from 'vite-plugin-solid'


// https://astro.build/config
export default defineConfig({
    server: {
        port: 42322
    },
    output: "server",
    vite: {
        plugins: [
            tanstackStart({
                srcDirectory: "./src/app",
            }),
            viteTsConfigPaths(),
            tailwindcss(),
            viteSolid({ ssr: true }),
        ]
    },
    integrations: [react(), solidJs()],
});