const u = /* @__PURE__ */ Object.assign({}), d = /* @__PURE__ */ Object.assign({});
function c(e) {
  return Object.keys(e).reduce((n, t) => {
    var s;
    const o = (s = t.match(/ff_promo_\d+/)) == null ? void 0 : s[0];
    return o && (n[o] = e[t].default), n;
  }, {});
}
const r = c(u), a = c(d), m = { module050: r, moduleKY: a };
export {
  m as default
};
