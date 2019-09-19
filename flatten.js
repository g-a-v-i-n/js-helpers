/**
 * Takes a nD nested array and converts it to a 1D array
 * @param  {[type]} a
 * @return {[type]}
 */
 const flatten = a => a.reduce((b, v) => b.concat(Array.isArray(v) ? flatten(v) : v), []);
