const p = /* @__PURE__ */ Object.assign({ "/src/pages/h5poker/ff_promo_04/index.vue": () => import("./ff_promo_bundle_h5poker.86192bcb.js").then((e) => e.i), "/src/pages/h5poker/ff_promo_10/index.vue": () => import("./ff_promo_bundle_h5poker.86192bcb.js").then((e) => e.a), "/src/pages/h5poker/ff_promo_11/index.vue": () => import("./ff_promo_bundle_h5poker.86192bcb.js").then((e) => e.b), "/src/pages/h5poker/ff_promo_12/index.vue": () => import("./ff_promo_bundle_h5poker.86192bcb.js").then((e) => e.c), "/src/pages/h5poker/ff_promo_1201/index.vue": () => import("./ff_promo_bundle_h5poker.86192bcb.js").then((e) => e.d), "/src/pages/h5poker/ff_promo_13/index.vue": () => import("./ff_promo_bundle_h5poker.86192bcb.js").then((e) => e.e), "/src/pages/h5poker/ff_promo_14/index.vue": () => import("./ff_promo_bundle_h5poker.86192bcb.js").then((e) => e.f), "/src/pages/h5poker/ff_promo_18/index.vue": () => import("./ff_promo_bundle_h5poker.86192bcb.js").then((e) => e.g), "/src/pages/h5poker/ff_promo_20/index.vue": () => import("./ff_promo_bundle_h5poker.86192bcb.js").then((e) => e.h), "/src/pages/h5poker/ff_promo_21/index.vue": () => import("./ff_promo_bundle_h5poker.86192bcb.js").then((e) => e.j), "/src/pages/h5poker/ff_promo_31/index.vue": () => import("./ff_promo_bundle_h5poker.86192bcb.js").then((e) => e.k), "/src/pages/h5poker/ff_promo_35/index.vue": () => import("./ff_promo_bundle_h5poker.86192bcb.js").then((e) => e.l), "/src/pages/h5poker/ff_promo_36/index.vue": () => import("./ff_promo_bundle_h5poker.86192bcb.js").then((e) => e.m), "/src/pages/h5poker/ff_promo_37/index.vue": () => import("./ff_promo_bundle_h5poker.86192bcb.js").then((e) => e.n), "/src/pages/h5poker/ff_promo_38/index.vue": () => import("./ff_promo_bundle_h5poker.86192bcb.js").then((e) => e.o), "/src/pages/h5poker/ff_promo_39/index.vue": () => import("./ff_promo_bundle_h5poker.86192bcb.js").then((e) => e.p) });
async function t(e) {
  const o = Object.keys(p).find((n) => n.includes(e));
  console.log("wewewewewe", p, o, e, p[o], p[o].default);
  const r = await p[o]();
  return o ? r.default : null;
}
export {
  t as h5pokerLoadComponent
};
