// Lenses
const assoc = key => val => obj => { obj[key] = val; return obj }
const lens = get => set => ({ get, set })
const view = lens => obj => lens.get(obj)
const set = lens => val => obj => lens.set(val)(obj)
const over = lens => fn => obj => set(lens)(fn(view(lens)(obj)))(obj)
const lensProp = key => lens(prop(key))(assoc(key))
const prop = key => obj => obj[key]

const assocPath = path => val => obj => {
  if (path.length === 0) {
    return val
  }
  let idx = path[0]
  if (path.length > 1) {
    const nextObj = (!isNil(obj) && _has(idx, obj)) ? obj[idx] : _isInteger(path[1]) ? [] : {}
    val = assocPath(Array.prototype.slice.call(path, 1), val, nextObj)
  }
  if (_isInteger(idx) && _isArray(obj)) {
    let arr = [].concat(obj)
    arr[idx] = val
    return arr
  } else {
    return assoc(idx, val, obj)
  }
})


// Objects
const has = obj => key => key in obj
const deepClone = obj => compose(JSON.parse, JSON.stringify)(obj)

const unKnot = s => s.toString().split('.')

const propPath = paths => obj => path.reduce((acc, p) => (acc && acc[p])
  ? acc[p]
  : null, obj)
