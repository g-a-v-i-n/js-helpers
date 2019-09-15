const initCanvas = (canvas, x, y, dpi) => {
  let ctx = canvas.getContext('2d')
  const ratio = window.devicePixelRatio * (dpi / 72)

  canvas.width = x * ratio
  canvas.height = y * ratio
  canvas.style.width = x + 'px'
  canvas.style.height = y + 'px'

  canvas.getContext('2d').scale(ratio, ratio)

  return canvas
}

export default initCanvas
