const modules050 = import.meta.glob('@/pages/050/ff_promo_*/index.vue', { eager: true })
// const modules050 = import.meta.glob('@/pages/050/ff_promo_*/index.vue')
// function generateComponentMap(modules) {
//     return Object.keys(modules).reduce((acc, path) => {
//         const name = path.match(/ff_promo_\d+/)?.[0] // 取得 `ff_promo_XX`
//         if (name) acc[name] = modules[path].default
//         return acc
//     }, {})
// }

// const module050 = generateComponentMap(modules050)
// export default module050

// export const module050 = generateComponentMap(modules050)
function loadComponent(name) {
    // 只載入符合 `ff_promo_XX` 的模組

    const match = Object.keys(modules050).find((path) => path.includes(name))
    console.log('wewewewewe', modules050, match, name, modules050[match], modules050[match].default)
    return match ? modules050[match].default : null
}

export { loadComponent }
