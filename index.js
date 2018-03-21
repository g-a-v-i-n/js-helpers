//  Basically a Gist


const incrementInList = (list, currentIndex) => {
  const listLength = list.length
  if (currentIndex + 1 < listLength) {
    return list[currentIndex + 1]
  }
  return false
}

const decrementInList = (list, currentIndex) => {
  if (currentIndex > 0) {
    return list[currentIndex - 1]
  }
  return false
}

const updateInObject = (originalObject, key, val) => {
  return {
    ...originalObject,
    [key]: val
  }
}

const loadImage = src => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = (err) => reject(err)
    img.src = src
  })
}

const isObject = a => a && typeof a === 'object' && a.constructor === Object

const isString = a => typeof a === 'string' || a instanceof String

const isNumber = a => typeof a === 'number' && isFinite(a)

const isFunction = a => typeof a === 'function'

const isNull = a => a === null

const isUndefined = a => typeof a === 'undefined'

const isBoolean = a => typeof a === 'boolean'

const isRegExp = a => a && typeof a === 'object' && a.constructor === RegExp

const isError = a => a instanceof Error && typeof a.message !== 'undefined'

const isDate = a => a instanceof Date

const isSymbol = a => typeof a === 'symbol'

const hasKey = (obj, key) => key in obj

const deepClone = obj => JSON.parse(JSON.stringify(obj))

const identity = a => a

const assignWithStringPath = (obj, prop, value) => {
  if (typeof prop === 'string') {
    prop = prop.split('.')
  }
  if (prop.length > 1) {
    const key = prop.shift()
    obj[key] = Object.prototype.toString.call(obj[key]) === "[object Object]"
      ? obj[key]
      : {}
    assignWithStringPath(obj, prop, value)
  } else obj[prop[0]] = value
}
