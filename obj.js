// Objects
// The in operator returns true if the specified property is in the specified object or its prototype chain.
const has = obj => key => key in obj

// forcefully copy an entire object. Expensive!
const deepClone = obj => compose(JSON.parse, JSON.stringify)(obj)

// idk if this is really nessecary to include here
const unKnot = s => s.toString().split('.')

// get the value of an object with an array of keys forming a path
const propPath = path => obj => path.reduce((acc, p) => (acc && acc[p])
  ? acc[p]
  : null, obj)

// set a value in an object with an array of keys forming a path
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

// yep
const entries = obj => Object.entries(obj)

// takes a depth=1 shallow object and applies a function to each key/val, returns obejct copy
const mapOver = obj => f => Object.entries(obj).reduce((acc, [k, v]) => (acc[k] = f(v), acc), {} )
