const o = /* @__PURE__ */ Object.assign({ "/src/pages/050/ff_promo_04/index.vue": () => import("./index.b7fb06b7.js"), "/src/pages/050/ff_promo_05/index.vue": () => import("./index.979c03c4.js"), "/src/pages/050/ff_promo_06/index.vue": () => import("./index.bd8c01c9.js"), "/src/pages/050/ff_promo_07/index.vue": () => import("./index.f8630c29.js"), "/src/pages/050/ff_promo_08/index.vue": () => import("./index.508b0a0f.js"), "/src/pages/050/ff_promo_09/index.vue": () => import("./index.26158776.js"), "/src/pages/050/ff_promo_10/index.vue": () => import("./index.7e1fcf55.js"), "/src/pages/050/ff_promo_11/index.vue": () => import("./index.82671b1c.js"), "/src/pages/050/ff_promo_12/index.vue": () => import("./index.b611a985.js"), "/src/pages/050/ff_promo_13/index.vue": () => import("./index.539e4f5d.js"), "/src/pages/050/ff_promo_14/index.vue": () => import("./index.48c74a31.js"), "/src/pages/050/ff_promo_16/index.vue": () => import("./index.7c482a1f.js"), "/src/pages/050/ff_promo_18/index.vue": () => import("./index.4ab6b96d.js"), "/src/pages/050/ff_promo_21/index.vue": () => import("./index.a4cb7e3a.js"), "/src/pages/050/ff_promo_27/index.vue": () => import("./index.dcb9f67f.js"), "/src/pages/050/ff_promo_31/index.vue": () => import("./index.76a8e33f.js"), "/src/pages/050/ff_promo_32/index.vue": () => import("./index.0f86fc43.js"), "/src/pages/050/ff_promo_34/index.vue": () => import("./index.0d0e2da7.js"), "/src/pages/050/ff_promo_35/index.vue": () => import("./index.e59452de.js"), "/src/pages/050/ff_promo_36/index.vue": () => import("./index.960ed001.js"), "/src/pages/050/ff_promo_37/index.vue": () => import("./index.45db4819.js"), "/src/pages/050/ff_promo_38/index.vue": () => import("./index.c9ee1815.js") });
async function i(r) {
  const e = Object.keys(o).find((s) => s.includes(r));
  console.log("wewewewewe", o, e, r, o[e], o[e].default);
  const p = await o[e]();
  return e ? p.default : null;
}
export {
  i as loadComponent
};
