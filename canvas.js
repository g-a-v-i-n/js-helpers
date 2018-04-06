// the canvas argument is a react ref or a DOM element
// `this` is used to store references to the canvas and context
init = canvas => {
  const ctx = canvas.getContext('2d')

  const ratio = ctx.webkitBackingStorePixelRatio < 2
    ? window.devicePixelRatio
    : 1

  canvas.width = SIZE * ratio
  canvas.height = SIZE * ratio
  canvas.style.width = SIZE + 'px'
  canvas.style.height = SIZE + 'px'

  paper.setup(canvas)

  this.canvas = canvas
  this.ctx = ctx
  this.SIZE = SIZE * ratio
}
