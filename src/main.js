import { createApp } from 'vue'
import './style.css'
import { createRouter,createWebHistory } from "vue-router";
import App from './App.vue'
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';


const app = createApp(App);
// createApp(App).mount('#app')
const routes = setupLayouts(generatedRoutes);
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
    },
});
console.log(generatedRoutes);
// app.mount("#app");
app.use(router);
router.isReady().then(() => {
    app.mount("#app");
});