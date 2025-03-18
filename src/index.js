// const modules050 = import.meta.glob('./pages/050/ff_promo_*/index.vue', { eager: true })
// const modulesH5poker = import.meta.glob('./pages/h5poker/ff_promo_*/index.vue', { eager: true })

// function generateComponentMap(modules) {
//     return Object.keys(modules).reduce((acc, path) => {
//         const name = path.match(/ff_promo_\d+/)?.[0] // 取得 `ff_promo_XX`
//         if (name) acc[name] = modules[path].default
//         return acc
//     }, {})
// }

// const module050 = generateComponentMap(modules050)
// const moduleH5poker = generateComponentMap(modulesH5poker)

// export { module050, moduleH5poker }

// export { module050 } from './modules/module050.js'
export { loadComponent } from './modules/module050.js'
// export { module050 } from './modules/module050.js'
export { moduleH5poker } from './modules/moduleH5poker.js'
