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

const invert = a => !a

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
