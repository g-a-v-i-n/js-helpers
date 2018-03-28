
// Arrays
const at = array => i => array[i]

const head = ([x]) => x

const tail = ([x, ...xs]) => xs

const atEnd = list => i => i + 1 === length(list)

const atStart = list => i => i === 0

const copyArr = array => [...array]

const reverse = ([x, ...xs]) => def(x)
  ? [...reverse(xs), x]
  : []

const length = ([x, ...xs], len = 0) => def(x)
  ? length(xs, len + 1)
  : len

const next = arr => i =>
  atEnd(arr, i)
    ? at(arr, i)
    : at(arr, i + 1)

const previous = arr => i =>
  atStart(arr, i)
    ? at(arr, i)
    : at(arr, i - 1)

const reject = (arr, f) => reduce(arr, (acc, a) => f(a)
  ? [...acc]
  : [...acc, a], [])

const flatten = ([x, ...xs]) => identity(x)
  ? isArray(x) ? [...flatten(x), ...flatten(xs)] : [x, ...flatten(xs)]
  : []
