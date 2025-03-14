const modulesH5poker = import.meta.glob('./pages/h5poker/ff_promo_*/index.vue', { eager: true })

function generateComponentMap(modules) {
    return Object.keys(modules).reduce((acc, path) => {
        const name = path.match(/ff_promo_\d+/)?.[0] // 取得 `ff_promo_XX`
        if (name) acc[name] = modules[path].default
        return acc
    }, {})
}

export const moduleH5poker = generateComponentMap(modulesH5poker)
