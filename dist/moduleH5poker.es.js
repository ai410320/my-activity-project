const r = /* @__PURE__ */ Object.assign({ "/src/pages/h5poker/ff_promo_04/index.vue": () => import("./ff_promo_bundle_h5poker.31b2e5ef.js").then((e) => e.i), "/src/pages/h5poker/ff_promo_10/index.vue": () => import("./ff_promo_bundle_h5poker.31b2e5ef.js").then((e) => e.a), "/src/pages/h5poker/ff_promo_11/index.vue": () => import("./ff_promo_bundle_h5poker.31b2e5ef.js").then((e) => e.b), "/src/pages/h5poker/ff_promo_12/index.vue": () => import("./ff_promo_bundle_h5poker.31b2e5ef.js").then((e) => e.c), "/src/pages/h5poker/ff_promo_1201/index.vue": () => import("./ff_promo_bundle_h5poker.31b2e5ef.js").then((e) => e.d), "/src/pages/h5poker/ff_promo_13/index.vue": () => import("./ff_promo_bundle_h5poker.31b2e5ef.js").then((e) => e.e), "/src/pages/h5poker/ff_promo_14/index.vue": () => import("./ff_promo_bundle_h5poker.31b2e5ef.js").then((e) => e.f), "/src/pages/h5poker/ff_promo_18/index.vue": () => import("./ff_promo_bundle_h5poker.31b2e5ef.js").then((e) => e.g), "/src/pages/h5poker/ff_promo_20/index.vue": () => import("./ff_promo_bundle_h5poker.31b2e5ef.js").then((e) => e.h), "/src/pages/h5poker/ff_promo_21/index.vue": () => import("./ff_promo_bundle_h5poker.31b2e5ef.js").then((e) => e.j), "/src/pages/h5poker/ff_promo_31/index.vue": () => import("./ff_promo_bundle_h5poker.31b2e5ef.js").then((e) => e.k) });
async function t(e) {
  const o = Object.keys(r).find((n) => n.includes(e));
  console.log("wewewewewe", r, o, e, r[o], r[o].default);
  const p = await r[o]();
  return o ? p.default : null;
}
export {
  t as h5pokerLoadComponent
};
