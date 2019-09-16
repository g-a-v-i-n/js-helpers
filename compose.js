const compose = (...fns) => fns.reduce((f, g) => (...xs) => {
  const r = g(...xs);
  return Array.isArray(r) ? f(...r) : f(r);
});

export default compose;
