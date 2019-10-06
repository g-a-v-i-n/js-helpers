/**
 * Calls multiple functions in order, using the result of the previous function as the input for the next function.
 * @param  {Functions} fns  functions to call, in order from last -> first
 * @param  {Any} xs         arguments, n-ary. aridy must be the same across fns
 * @return {Any}            the result of the function pipelibe. Array if xs>1
 */
const compose = (...fns:Array<Function>) => fns.reduce((f, g) => (...xs:any) => {
  const r = g(...xs);
  return Array.isArray(r) ? f(...r) : f(r);
});

/*
Usage Example:

function inc(a) { return a + 1 };
function dec(a) { return a - 1 };
console.log(
  compose(inc, dec)(0)
)

>>> 0
*/

/*
// N-ary Usage Example:

function inc(a, b) { return  [a + b, b] };
console.log(
  compose(inc, inc, inc, inc)(0, 4)
)

>>> [16, 4]
*/
export default compose;
