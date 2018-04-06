const squareGrid = (width, count) => {
  const pitch = width / count
  const unit = [...Array(count)]
  return unit.map((nada, iY) => unit.map((nada, iX) =>
    new Point(iX * pitch, iY * pitch))
  )
}
