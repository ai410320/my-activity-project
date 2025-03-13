import { defineConfig } from 'vite'
import Layouts from 'vite-plugin-vue-layouts'
import Pages from 'vite-plugin-pages'
import vue from '@vitejs/plugin-vue'
import postcssPresetEnv from 'postcss-preset-env'
import cssnano from 'cssnano'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Layouts({
            layoutsDirs: 'src/layouts',
            defaultLayout: 'default',
        }),
        Pages({
            dirs: 'src/pages',
            extensions: ['vue'],
        }),
    ],
    css: {
        postcss: {
            plugins: [
                postcssPresetEnv(),
                cssnano({ preset: 'default' }), // 改用 cssnano 來壓縮 CSS
            ],
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    base: '/my-activity-project/',
    build: {
        cssCodeSplit: false, // 確保 CSS 不是分割的
        lib: {
            entry: './src/index.js', // 專案入口
            name: 'TaskModule',
            formats: ['es', 'cjs'], // 輸出 ES Module
            fileName: 'task-module',
        },
        rollupOptions: {
            external: ['vue'], // 將 Vue 排除，防止打包到輸出文件中
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
})
