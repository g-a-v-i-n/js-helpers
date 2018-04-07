// uncurried equality functions

const equal = (a, b) => a === b

const deeplyEqual = (a, b) => isEqual(a, b)

const beSameAs = (a, b) => Object.is(a, b)

const beCloseTo = (a, b) => Math.abs(a - b) < 0.00000001

const equalAnyOf = (a, b) => !isArray(a)
  ? def(null)
  : includes(a, b)

const deeplyEqualAnyOf = (a, b) => !isArray(a)
  ? def(null)
  : a.some(valueInA => valueInA.isEqual(b))

const beSameAsAnyOf = (a, b) => !isArray(a)
  ? def(null)
  : a.some(valueInA => Object.is(valueInA, b))
