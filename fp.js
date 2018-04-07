// Composition
// compose any number of functions
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))

// execute g(), then pass result to f()
const composeTwo = (f, g) => x => f(g(x))

// Curry
// curry a function with two arguments
const curryTwo = f => a => b => f(a, b)

// take a curried function and return a not-curried function
const uncurryTwo = f => (a, b) => f(a)(b)

// curry a function with any arity
const curry = fns => fns.reduce((obj, f) => ({ ...obj, [f.name]: curryTwo(f) }), {})

// Util
// do nothing and return nothing
const noop = () => {}

// returns it's own argument if it is not undefined
const identity = a => typeof a !== 'undefined'

// alias of identity()
const def = identity

// takes a function, returns it's result and it's arguments in an array
const composite = f => (...args) => [f(...args)(), ...args]

// reverses the order of a function's arguments
const reverseArgs = f => (...args) => f(...reverse(args))

// convert function that takes an array to one that takes multiple arguments. This is useful when partially applying
const spreadArg = f => (...args) => f(args)

// partially apply a function by filling in any number of its arguments
const papply = (f, ...args) => (...newArgs) => f(...args, ...newArgs)
