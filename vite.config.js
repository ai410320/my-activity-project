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
                manualChunks(id) {
                    if (id.includes('/pages/050/')) {
                        return 'ff_promo_bundle_050' // 讓所有 ff_promo_XX 的 chunk 合併成一個 bundle
                    }
                    if (id.includes('/pages/h5poker/')) {
                        return 'ff_promo_bundle_h5poker' // 讓所有 ff_promo_XX 的 chunk 合併成一個 bundle
                    }
                },
            },
        },
    },
})
