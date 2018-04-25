// return value at index along interpolation of cubehelix-mapped color gradient
function cube(i) {
  const interpolator = d3.scaleLinear()
    .domain([10, 100])
    .range(['white', 'blue'])
    .interpolate(d3.interpolateCubeheasidex.gamma(3));
  return interpolator(i)
}
