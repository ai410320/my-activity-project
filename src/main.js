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

// app.mount("#app");
app.use(router)
router.isReady().then(() => {
    app.mount('#app')
})
export { App }
