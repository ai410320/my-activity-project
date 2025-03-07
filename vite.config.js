import { defineConfig } from 'vite'
import Layouts from 'vite-plugin-vue-layouts'
import Pages from 'vite-plugin-pages'
import vue from '@vitejs/plugin-vue'

import path from 'path'
import fs from 'fs'

const entries = {}
const pagesDir = path.resolve(__dirname, 'src/pages')

// 讀取 `src/pages` 下所有的資料夾，並將 `index.vue` 設為入口
fs.readdirSync(pagesDir).forEach((dir) => {
    const fullPath = path.join(pagesDir, dir, 'index.vue')
    if (fs.existsSync(fullPath)) {
        entries[dir] = fullPath
    }
})

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
    base: '/my-activity-project/',
    build: {
        lib: {
            entry: './src/index.js', // 專案入口
            name: 'TaskModule',
            formats: ['es', 'cjs'], // 輸出 ES Module 和 UMD 格式
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
