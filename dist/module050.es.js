const t = /* @__PURE__ */ Object.assign({});
function c(e) {
  const n = Object.keys(t).find((o) => o.includes(e));
  return n ? t[n]() : null;
}
export {
  c as loadComponent
};
