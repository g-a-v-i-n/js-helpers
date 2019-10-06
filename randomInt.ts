/**
 * Generates a random number bewteen mn and mx
 * @param  {Number} mn The minimum random number
 * @param  {Number} mx The maxiumum random number
 * @return {Number}    The output random number
 */
const randomInt = (mn:number, mx:number) => {
  return Math.floor(Math.random() * (mx - mn + 1) + mn)
}
export default randomInt
