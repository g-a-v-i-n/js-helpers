// Composition
// compose any number of functions
const compose = (...fns) => fns.reduce((fn, g) => (...args) => fn(g(...args)))

// execute g(), then pass result to f()
const composeTwo = (fn, g) => x => fn(g(x))

// Curry
// curry a function with two arguments
const curryTwo = fn => a => b => fn(a, b)

// take a curried function and return a not-curried function
const uncurryTwo = fn => (a, b) => fn(a)(b)

// curry a function with any arity
const curry = fns => fns.reduce((acc, fn) => ({ ...acc, [fn.name]: curryTwo(fn) }), {})

// Util
// do nothing and return nothing
const noop = () => {}

// returns it's own argument if it is not undefined
const identity = a => typeof a !== 'undefined'

// alias of identity()
const def = identity

// don't use this
// takes a function, returns it's result and it's arguments in an array
const composite = fn => (...args) => [fn(...args)(), ...args]

// reverses the order of a function's arguments
const reverseArgs = fn => (...args) => fn(...reverse(args))

// convert function that takes an array to one that takes multiple arguments. This is useful when partially applying
const spreadArg = fn => (...args) => fn(args)

// partially apply a function by filling in any number of its arguments
const papply = (fn, ...args) => (...newArgs) => fn(...args, ...newArgs)
