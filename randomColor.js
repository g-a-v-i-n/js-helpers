/**
 * Generates a random hex color code.
 * @return {HexInteger}
 */
 const randomColor = () => {
   return `#${~~(Math.random() * 0xffffff).toString(16).padEnd(6, '0')}`
 }
 export default randomColor
