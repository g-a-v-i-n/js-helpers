// Using Paper JS
// makes a square grid of points
const squareGrid = (width, count) => {
  const pitch = width / count
  const unit = [...Array(count)]
  return unit.map((nada, iY) => unit.map((nada, iX) =>
    new Point(iX * pitch, iY * pitch))
  )
}

/**
 * generates a grid
 * @param  {point} origin [x, y]
 * @param  {size} unit    [x, y]
 * @param  {int} xL       [number of columns]
 * @param  {int} yL       [number of rows]
 * @return {[type]}       [nested array of points]
 */
const grid = (origin, size, xL, yL) => {
  const x = sequence(xL)
  const y = sequence(xY)
  return map(x, iX => map(y, iY => ({
    x: origin.x + (size.x * iX)
    y: origin.y + (size.y * iY)
  })
  ))
}

// applies a boolean operation to an array of paper.js path objects
const opPipe = arr => op => arr.reduce((acc, item) => acc[op](item), end(arr))

const intersectPaths = a => b => a.intersect(b)

const unitePaths = a => b => a.unite(b)

const excludePaths = a => b => a.exclude(b)

const subtractPaths = a => b => a.subtract(b)
