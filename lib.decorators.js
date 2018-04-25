const invert = bool => !bool

const invert = fn => (...args) => !fn(...args)
