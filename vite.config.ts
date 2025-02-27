import { defineConfig } from 'vite'
import dts from "vite-plugin-dts";
import { resolve } from "path";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'BuffWebComponents',
            fileName: "index",
            formats: ["es"],
        },
        rollupOptions: {
            external: ["lit"],
            output: {
                globals: {
                    lit: "lit",
                },
            },
        }
    },
    plugins: [
        dts(),
        tailwindcss()
    ],
});
