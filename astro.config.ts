// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite'
import viteTsConfigPaths from "vite-tsconfig-paths"
import { tanstackStart } from '@tanstack/react-start/plugin/vite';

// https://astro.build/config
export default defineConfig({
    output: "server",
    vite: {
        plugins: [
            tanstackStart({
                srcDirectory: "./src/app",
            }),
            viteTsConfigPaths(),
            tailwindcss()
        ]
    },
    integrations: [react()],
});
