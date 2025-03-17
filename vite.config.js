import { defineConfig } from 'vite'
import Layouts from 'vite-plugin-vue-layouts'
import Pages from 'vite-plugin-pages'
import vue from '@vitejs/plugin-vue'
import postcssPresetEnv from 'postcss-preset-env'
import cssnano from 'cssnano'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'

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
        visualizer({
            // open: true, // 讓分析結果自動打開瀏覽器
            filename: 'stats.html', // 產生的分析報告
            gzipSize: true, // 顯示 gzip 後的大小
            brotliSize: true, // 顯示 brotli 後的大小
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
            entry: {
                main: './src/index.js', // 入口檔案
                module050: './src/modules/module050.js', // 確保 module050.js 被輸出
                moduleH5poker: './src/modules/moduleH5poker.js', // 確保 moduleH5poker.js
            },
            name: 'TaskModule',
            formats: ['es', 'cjs'], // 輸出 ES Module
            // fileName: 'task-module',
            fileName: (format, entryName) => `${entryName}.${format}.js`, // 讓 module050.js 有自己的輸出檔案
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
