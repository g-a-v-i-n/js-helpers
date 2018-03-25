// Lenses
const assoc = key => val => obj => { obj[key] = val; return obj }
const lens = get => set => ({ get, set })
const view = lens => obj => lens.get(obj)
const set = lens => val => obj => lens.set(val)(obj)
const over = lens => fn => obj => set(lens)(fn(view(lens)(obj)))(obj)
const lensProp = key => lens(prop(key))(assoc(key))

// Composition
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))
const composeTwo = (f, g) => x => f(g(x))

// Curry
const curryTwo = f => a => b => f(a, b)
const uncurryTwo = f => (a, b) => f(a)(b)

// Partial Application
const papply = (f, a) => b => f(a, b)

// Objects
const hasKey = obj => key => key in obj
const deepClone = obj => compose(JSON.parse, JSON.stringify)(obj)

// Util
const noop = () => {}
const identity = a => a

// Arrays
const at = array => i => array[i]
const atEnd = list => i => i + 1 === list.length
const atStart = list => i => i === 0
const next = arr => i => atEnd(arr, i) ? at(arr, i) : at(arr, i + 1)
const previous = arr => i => atStart(arr, i) ? at(arr, i) : at(arr, i - 1)
