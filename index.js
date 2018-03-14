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

const loadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = (err) => reject(err)
    img.src = src
  })
}

const isObject = obj => obj && typeof obj === 'object'

const hasKey = (obj, key) => key in obj

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

const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}
