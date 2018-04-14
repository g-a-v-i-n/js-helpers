
// Arrays
// make an empty array of any length
const empty = length => [...Array(length)]

const sequence = num => Array.from(Array(num), (nada, i) => i)


// get an item at an index in array
const at = array => i => array[i]

// Return the first item in an array.
const head = ([x]) => x

// Return all but the first item in an array.
const tail = ([x, ...xs]) => xs

// Return all but the first item in an array.
const end = ([...xs, x]) => x

// is this the last array elem?
const atEnd = list => i => i + 1 === length(list)

// is this the first array elem?
const atStart = list => i => i === 0

const fromRight = arr => i => arr.slice(0, i)

const fromLeft = arr => i => arr.reverse().slice(0, i).reverse()

// copy an array
const copyArr = a => [...a]

// execute a function on an item in array, then change the acc with another function
const by = a => f => g => reduce((acc, x) => g(acc, f(x)) )

// reverse an array
const reverse = ([x, ...xs]) => def(x)
  ? [...reverse(xs), x]
  : []

// recursively get the length of an array
const length = ([x, ...xs], len = 0) => def(x)
  ? length(xs, len + 1)
  : len

//
const filter = ([x, ...xs], fn) => def(x)
    ? fn(x)
        ? [x, ...filter(xs, fn)] : [...filter(xs, fn)]
    : []

// opposite of filter, return falsy items against predicate
const reject = arr => f => reduce(arr, (acc, a) => f(a)
  ? [...acc]
  : [...acc, a], [])

// take a nested array and make it into one flat array
const flatten = ([x, ...xs]) => def(x)
  ? isArray(x) ? [...flatten(x), ...flatten(xs)] : [x, ...flatten(xs)]
  : []

// reduce as a function
const reduce = ([x, ...xs], f, acc, i = 0) => def(x)
  ? reduce(xs, fn, f(acc, x, i), i + 1)
  : acc

// map as a function
const map = ([x, ...xs], f) => def(x)
  ? [f(x), ...map(xs, f)]
  : []

// return a section of an array defined by starting and ending indicies
const slice = ([x, ...xs], i, y, curr = 0) => def(x)
  ? curr === i
    ? [y, x, ...slice(xs, i, y, curr + 1)]
    : [x, ...slice(xs, i, y, curr + 1)]
  : []

// sway two items at two indices in an array
const swap = (arr, i, j) => (
  map(arr, (x, y) => {
    if(y === i) return a[j]
    if(y === j) return a[i]
    return x
  })
)

const chunk = arr => mod => arr.reduce((acc, a, i) => {
  const offset = Math.floor(i / mod)
  if(!acc[offset]) { acc[offset] = [] }
  acc[offset].push(a)
  return acc
}, [])

// gets the next item in array if not at end of array
const next = list => index => !atEnd(list, index)
  ? at(list, index + 1)
  : at(list, index)

// gets the previous item in array if not at beginning of array
const prev = list => index => !atStart(list, index)
  ? at(list, index - 1)
  : at(list, index)

const partition = (xs, fn) => [filter(xs, fn), reject(xs, fn)]

const indexOf = arr => k => arr.indexOf(k)

const fromRight = arr => i => arr.slice(0, i)

const fromLeft = arr => i => arr.reverse().slice(0, i).reverse()
