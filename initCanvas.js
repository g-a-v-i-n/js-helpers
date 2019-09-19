/**
 * Resizes the canvas to the specified resolution. Useful for High DPI canvas, and any situation where the canvas content needs to be exported to an image of specific resolution - printing, etc.
 * @param  {HTMLCanvasElement} canvas
 * @param  {Number} x         The width of the canvas element
 * @param  {Number} y         The height the canvas element
 * @param  {Number} dpi       The required resolution of the canvas element
 * @return {HTMLCanvasElement}
 */
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
