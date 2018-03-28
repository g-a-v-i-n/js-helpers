// Composition
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))
const composeTwo = (f, g) => x => f(g(x))

// Curry
const curryTwo = f => a => b => f(a, b)
const uncurryTwo = f => (a, b) => f(a)(b)
const curryAll = fns => fns.reduce((obj, f) => ({ ...obj, [f.name]: curryTwo(f) }), {})

// Partial Application
const papply = (f, a) => b => f(a, b)

// Util
const noop = () => {}
const identity = a => typeof a !== 'undefined'
