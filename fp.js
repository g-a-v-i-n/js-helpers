
const assoc = key => val => obj => { obj[key] = val return obj }
const lens = get => set => ({ get, set })
const view = lens => obj => lens.get(obj)
const set = lens => val => obj => lens.set(val)(obj)
const over = lens => fn => obj => set(lens)(fn(view(lens)(obj)))(obj)
const lensProp = key => lens(prop(key))(assoc(key))
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))
const composeTwo = (f, g) => x => f(g(x))
const curryTwo = f => a => b => f(a, b)
const uncurryTwo = f => (a, b) => f(a)(b)
const papply = (f, a) => b => f(a, b)

const at = index => array => array[index]

const invert = a => !a
const identity = a => a

const hasKey = (obj, key) => key in obj
const deepClone = obj => compose(JSON.parse, JSON.stringify)(obj)

const noop = () => {}
