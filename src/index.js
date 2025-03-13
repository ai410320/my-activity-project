// import ff_promo_04 from './pages/ff_promo_04/index.vue'
// import ff_promo_05 from './pages/ff_promo_05/index.vue'
// import ff_promo_06 from './pages/ff_promo_06/index.vue'
// import ff_promo_07 from './pages/ff_promo_07/index.vue'
// import ff_promo_08 from './pages/ff_promo_08/index.vue'
// import ff_promo_09 from './pages/ff_promo_09/index.vue'
// import ff_promo_10 from './pages/ff_promo_10/index.vue'

// export { ff_promo_04, ff_promo_05, ff_promo_06, ff_promo_07, ff_promo_08, ff_promo_09, ff_promo_10 }

const modules = import.meta.glob('./pages/ff_promo_*/index.vue', { eager: true })
const modules050 = import.meta.glob('./pages/050/ff_promo_*/index.vue', { eager: true })
const modulesKY = import.meta.glob('./pages/ky/ff_promo_*/index.vue', { eager: true })

function generateComponentMap(modules) {
    return Object.keys(modules).reduce((acc, path) => {
        const name = path.match(/ff_promo_\d+/)?.[0] // 取得 `ff_promo_XX`
        if (name) acc[name] = modules[path].default
        return acc
    }, {})
}

const module050 = generateComponentMap(modules050)
const moduleKY = generateComponentMap(modulesKY)
// console.log('4646464', module050)

export { module050, moduleKY }
// export default { module050, moduleKY }
