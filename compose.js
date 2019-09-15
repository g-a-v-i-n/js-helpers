const compose = (...fns) => fns.reduce((fn, g) => (...args) => fn(g(...args)));
export default compose;
