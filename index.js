function incrementInList(list, currentIndex) {
  const listLength = list.length
  if (currentIndex + 1 < listLength) {
    return list[currentIndex + 1]
  }
  return false
}

function decrementInList(list, currentIndex) {
  if (currentIndex > 0) {
    return list[currentIndex - 1]
  }
  return false
}

function updateInObject(originalObject, key, val) {
  return {
    ...originalObject,
    [key]: val
  }
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = (err) => reject(err)
    img.src = src
  })
}

// maybe
module.exports = {
  incrementInList,
  decrementInList,
  updateInObject,
  loadImage,
}
