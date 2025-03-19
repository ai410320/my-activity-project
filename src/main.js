import { createApp } from 'vue'
// import './test.css'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

// setupLayouts(generatedRoutes)
const app = createApp(App)
// createApp(App).mount('#app')
const routes = setupLayouts(generatedRoutes)
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    },
})
console.log(generatedRoutes)

// const modules050 = import.meta.glob('@/pages/050/ff_promo_*/index.vue', { eager: true })
// const modules050 = import.meta.glob('@/pages/050/ff_promo_*/index.vue')
// function generateComponentMap(modules) {
//     return Object.keys(modules).reduce((acc, path) => {
//         const name = path.match(/ff_promo_\d+/)?.[0] // 取得 `ff_promo_XX`
//         if (name) acc[name] = modules[path].default
//         return acc
//     }, {})
// }

// async function loadComponent(name) {
//     // 只載入符合 `ff_promo_XX` 的模組

//     const match = Object.keys(modules050).find((path) => path.includes(name))
//     console.log('wewewewewe', modules050, match, name, modules050[match]())
//     const module = await modules050[match]()
//     console.log('wewewewewe', module.default)
//     return match ? modules050[match].default : null
// }

// console.log('wewewe', generateComponentMap(modules050))
// console.log('wewewe', loadComponent('ff_promo_04'))

// app.mount("#app");
app.use(router)
router.isReady().then(() => {
    app.mount('#app')
})
export { App }
