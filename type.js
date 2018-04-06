
const isObject = a => a && typeof a === 'object' && a.constructor === Object
const isString = a => typeof a === 'string' || a instanceof String
const isNumber = a => typeof a === 'number' && isFinite(a)
const isArray = a => Array.isArray(a)
const isFunction = a => typeof a === 'function'
const isNull = a => a === null
const isUndefined = a => typeof a === 'undefined'
const isBoolean = a => typeof a === 'boolean'
const isRegExp = a => a && typeof a === 'object' && a.constructor === RegExp
const isError = a => a instanceof Error && typeof a.message !== 'undefined'
const isDate = a => a instanceof Date
const isSymbol = a => typeof a === 'symbol'
