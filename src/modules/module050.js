const modules050 = import.meta.glob('../pages/050/ff_promo_*/index.vue', { eager: true })

function generateComponentMap(modules) {
    return Object.keys(modules).reduce((acc, path) => {
        const name = path.match(/ff_promo_\d+/)?.[0] // 取得 `ff_promo_XX`
        if (name) acc[name] = modules[path].default
        return acc
    }, {})
}

// const module050 = generateComponentMap(modules050)
// export default module050

export const module050 = generateComponentMap(modules050)
