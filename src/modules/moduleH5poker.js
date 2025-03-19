// const modulesH5poker = import.meta.glob('../pages/h5poker/ff_promo_*/index.vue', { eager: true })
const modulesH5poker = import.meta.glob('@/pages/050/ff_promo_*/index.vue')
// function generateComponentMap(modules) {
//     return Object.keys(modules).reduce((acc, path) => {
//         const name = path.match(/ff_promo_\d+/)?.[0] // 取得 `ff_promo_XX`
//         if (name) acc[name] = modules[path].default
//         return acc
//     }, {})
// }

// export const moduleH5poker = generateComponentMap(modulesH5poker)

async function h5pokerLoadComponent(name) {
    // 只載入符合 `ff_promo_XX` 的模組

    const match = Object.keys(modulesH5poker).find((path) => path.includes(name))
    console.log('wewewewewe', modulesH5poker, match, name, modulesH5poker[match], modulesH5poker[match].default)
    const module = await modulesH5poker[match]()
    return match ? module.default : null
}

export { h5pokerLoadComponent }
